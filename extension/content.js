window.onload = () => {
  console.log("hello from content.js");
};

const change_event = new Event("change");
let now = new Date();

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const convertToJSON = (html_content) => {
  const options = [];

  const rows = Array.from(html_content.getElementsByTagName("tr"));

  rows.slice(1).forEach((row) => {
    slot_detail = row.children[0].innerText.replace(/(\t|\n)+/g, "");
    venue = row.children[1].innerText.replace(/(\t|\n)+/g, "");
    faculty = row.children[2].innerText.replace(/(\t|\n)+/g, "");
    course_type = row.children[3].innerText.replace(/(\t|\n)+/g, "");

    options.push({ slot_detail, venue, faculty, course_type });
  });

  return options;
};

const convertToHtml = (html_content) => {
  const parser = new DOMParser();
  return parser.parseFromString(html_content, "text/html");
};

const makeRequest = (path, custom_params) => {
  let url = new URL(`https://vtop.vit.ac.in/${path}`);

  let params = {
    authorizedID: document.getElementById("authorizedIDX").value,
    _csrf: document.getElementsByName("_csrf")[0].value,
    x: now.toUTCString(),
    ...custom_params,
  };

  url.search = new URLSearchParams(params).toString();

  return new Promise(async (resolve, reject) => {
    fetch(url, { method: "POST" })
      .then((response) => {
        return response.text();
      })
      .then((html_content) => {
        html_content = convertToHtml(html_content);
        resolve(html_content);
      })
      .catch((e) => {
        console.log("could not make a successful request");
        console.log(url);
        console.log(e);
        reject(e);
      });
  });
};

const findOptions = (course_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const html_content = await makeRequest(
        "vtop/academics/common/getCoursesDetailForRegistration",
        {
          courseCode: course_id,
        }
      );
      const slots = convertToJSON(html_content);
      resolve({ course_id, slots });
    } catch (e) {
      reject(e);
    }
  });
};

const findInfo = async () => {
  const curriculum_category = document.getElementById("curriculumCategory");

  const cats = {};

  for (let count = 1; count < curriculum_category.length; count++) {
    const responses = [];
    const response = await makeRequest(
      `vtop/academics/common/getCoursesListForCurriculmCategory`,
      { cccategory: curriculum_category[count].value }
    );

    const course_id = response.getElementById("courseId");

    for (let index = 1; index < course_id.length; index++) {
      responses.push(findOptions(course_id[index].value));
      await sleep(135);
    }

    const data = await Promise.all(responses);
    cats[curriculum_category[count].value] = data;
    await sleep(135);
  }

  console.log(cats);

  const hidden_element = document.createElement("a");
  hidden_element.href =
    "data:attachment/json," + encodeURI(JSON.stringify(cats));
  hidden_element.download = "data.json";
  hidden_element.click();
};

const findPage = () => {
  const element = document.querySelector(".box-title");
  if (element.innerText.includes("Course Offered")) {
    findInfo();
  } else {
    requestIdleCallback(findPage);
  }
};

requestIdleCallback(findPage);
