const data = require('./Data.json');
const input=['BCT3001','CSE1006','ESP1001','BCI3001'];
const prefs={
    slotType:'1',
    venue:['SJT','TT','PRP'],
    project: true,
    lab: true
}
let filteredData = new Map();

const checkLabTime = (y)=>{
    const l=y.slot_detail.length
    const num = parseInt(y.slot_detail.substring(l-2,l))
    if(prefs.slotType=='1') {
        return num<=30 ? true : false
    }
    else {
        return num>30 ? true : false
    }
}

const applyFilterLogic = (x)=>{
    if(input.includes(x.course_id))
        {
            let temp=[]
            x.slots.forEach((y)=>{
                if(y.course_type.includes('EPJ') && prefs.project) {
                    if(y.slot_detail.includes(prefs.slotType))
                    temp.push(y)
                    x.slots.forEach((z)=>{
                        if(z.course_type.includes('ETH') && prefs.project) {
                            if(z.slot_detail.includes(prefs.slotType))
                            temp.push(z)
                        }
                    })
                }
                else if(y.course_type.includes('ELA') && prefs.lab && prefs.venue.map((m)=>y.venue.includes(m)).indexOf(true)!=-1) {
                    if(checkLabTime(y))
                    temp.push(y)
                    x.slots.forEach((z)=>{
                        if(z.course_type.includes('ETH') && prefs.lab) {
                            if(checkLabTime(y) && z.slot_detail.includes(prefs.slotType))
                            temp.push(z)
                        }
                    })
                }
                else if(y.course_type=='TH' && prefs.venue.map((m)=>y.venue.includes(m)).indexOf(true)!=-1){
                    if(y.slot_detail.includes(prefs.slotType))
                    temp.push(y)
                }
            })
            filteredData.set(x.course_id,temp)
            temp=[]
        }
}

const getFilteredData = ()=>{
    data.PC.forEach((x)=>{
        applyFilterLogic(x)
    })
    data.PE.forEach((x)=>{
        applyFilterLogic(x)
    })
    data.UC.forEach((x)=>{
        applyFilterLogic(x)
    })
    data.UE.forEach((x)=>{
        applyFilterLogic(x)
    })
    data.SPE.forEach((x)=>{
        applyFilterLogic(x)
    })
    data.NC.forEach((x)=>{
        applyFilterLogic(x)
    })
}
getFilteredData()
console.log(filteredData);