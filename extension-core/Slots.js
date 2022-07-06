const getSlots = ()=>{
    const slots=['A1','A2','B1','B2','C1','C2','D1','D2','E1','E2','F1','F2','G1','G2','TA1','TA2','TB1','TB2','TC1','TC2','TD1','TD2','TE1','TE2','TF1','TF2','TG1','TG2','TAA1','TAA2','TBB1','TBB2','TCC1','TCC2','TDD1','TDD2','V1','V2','V3','V4','V5','V6','V7']
    for(let i=1;i<=60;i++)
    slots.push(`L${i}`)
    return slots;
}

const Slots = ()=>{
    const arr=[
        [
            [['A1','L1'],'8:00 am to 8:50 am','8:00 am to 8:50 am'],
            [['F1','L2'],'9:00 am to 9:50 am','8:51 am to 9:40 am'],
            [['D1','L3'],'10:00 am to 10:50 am','9:51 am to 10:40 am'],
            [['TB1','L4'],'11:00 am to 11:50 am','10:41 am to 11:30 am'],
            [['TG1','L5'],'12:00 pm to 12:50 pm','11:41 am to 12:30 pm'],
            [['','L6'],'','12:31 pm to 1:20 pm'],
            [['A2','L31'],'2:00 pm to 2:50 pm','2:00 pm to 2:50 pm'],
            [['F2','L32'],'3:00 pm to 3:50 pm','2:51 pm to 3:40 pm'],
            [['D2','L33'],'4:00 pm to 4:50 pm','3:51 pm to 4:40 pm'],
            [['TB2','L34'],'5:00 pm to 5:50 pm','4:41 pm to 5:30 pm'],
            [['TG2','L35'],'6:00 pm to 6:50 pm','5:40 pm to 6:30 pm'],
            [['','L36'],'6:51 pm to 7:00 pm','6:31 pm to 7:20 pm'],
            [['','V3'],'7:00 pm to 7:50 pm',''],
        ],
        [
            [['B1','L7'],'8:00 am to 8:50 am','8:00 am to 8:50 am'],
            [['G1','L8'],'9:00 am to 9:50 am','8:51 am to 9:40 am'],
            [['E1','L9'],'10:00 am to 10:50 am','9:51 am to 10:40 am'],
            [['TC1','L10'],'11:00 am to 11:50 am','10:41 am to 11:30 am'],
            [['TAA1','L11'],'12:00 pm to 12:50 pm','11:41 am to 12:30 pm'],
            [['','L12'],'','12:31 pm to 1:20 pm'],
            [['B2','L37'],'2:00 pm to 2:50 pm','2:00 pm to 2:50 pm'],
            [['G2','L38'],'3:00 pm to 3:50 pm','2:51 pm to 3:40 pm'],
            [['E2','L39'],'4:00 pm to 4:50 pm','3:51 pm to 4:40 pm'],
            [['TC2','L40'],'5:00 pm to 5:50 pm','4:41 pm to 5:30 pm'],
            [['TAA2','L41'],'6:00 pm to 6:50 pm','5:40 pm to 6:30 pm'],
            [['','L42'],'6:51 pm to 7:00 pm','6:31 pm to 7:20 pm'],
            [['','V4'],'7:00 pm to 7:50 pm',''],
        ],
        [
            [['C1','L13'],'8:00 am to 8:50 am','8:00 am to 8:50 am'],
            [['A1','L14'],'9:00 am to 9:50 am','8:51 am to 9:40 am'],
            [['F1','L15'],'10:00 am to 10:50 am','9:51 am to 10:40 am'],
            [['V1','L16'],'11:00 am to 11:50 am','10:41 am to 11:30 am'],
            [['V2','L17'],'12:00 pm to 12:50 pm','11:41 am to 12:30 pm'],
            [['','L18'],'','12:31 pm to 1:20 pm'],
            [['C2','L43'],'2:00 pm to 2:50 pm','2:00 pm to 2:50 pm'],
            [['A2','L44'],'3:00 pm to 3:50 pm','2:51 pm to 3:40 pm'],
            [['F2','L45'],'4:00 pm to 4:50 pm','3:51 pm to 4:40 pm'],
            [['TD2','L46'],'5:00 pm to 5:50 pm','4:41 pm to 5:30 pm'],
            [['TBB2','L47'],'6:00 pm to 6:50 pm','5:40 pm to 6:30 pm'],
            [['','L48'],'6:51 pm to 7:00 pm','6:31 pm to 7:20 pm'],
            [['','V5'],'7:00 pm to 7:50 pm',''],
        ],
        [
            [['D1','L19'],'8:00 am to 8:50 am','8:00 am to 8:50 am'],
            [['B1','L20'],'9:00 am to 9:50 am','8:51 am to 9:40 am'],
            [['G1','L21'],'10:00 am to 10:50 am','9:51 am to 10:40 am'],
            [['TE1','L22'],'11:00 am to 11:50 am','10:41 am to 11:30 am'],
            [['TCC1','L23'],'12:00 pm to 12:50 pm','11:41 am to 12:30 pm'],
            [['','L24'],'','12:31 pm to 1:20 pm'],
            [['D2','L49'],'2:00 pm to 2:50 pm','2:00 pm to 2:50 pm'],
            [['B2','L50'],'3:00 pm to 3:50 pm','2:51 pm to 3:40 pm'],
            [['G2','L51'],'4:00 pm to 4:50 pm','3:51 pm to 4:40 pm'],
            [['TE2','L52'],'5:00 pm to 5:50 pm','4:41 pm to 5:30 pm'],
            [['TCC2','L53'],'6:00 pm to 6:50 pm','5:40 pm to 6:30 pm'],
            [['','L54'],'6:51 pm to 7:00 pm','6:31 pm to 7:20 pm'],
            [['','V6'],'7:00 pm to 7:50 pm',''],
        ],
        [
            [['E1','L25'],'8:00 am to 8:50 am','8:00 am to 8:50 am'],
            [['C1','L26'],'9:00 am to 9:50 am','8:51 am to 9:40 am'],
            [['TA1','L27'],'10:00 am to 10:50 am','9:51 am to 10:40 am'],
            [['TF1','L28'],'11:00 am to 11:50 am','10:41 am to 11:30 am'],
            [['TD1','L29'],'12:00 pm to 12:50 pm','11:41 am to 12:30 pm'],
            [['','L30'],'','12:31 pm to 1:20 pm'],
            [['E2','L55'],'2:00 pm to 2:50 pm','2:00 pm to 2:50 pm'],
            [['C2','L56'],'3:00 pm to 3:50 pm','2:51 pm to 3:40 pm'],
            [['TA2','L57'],'4:00 pm to 4:50 pm','3:51 pm to 4:40 pm'],
            [['TF2','L58'],'5:00 pm to 5:50 pm','4:41 pm to 5:30 pm'],
            [['TDD2','L59'],'6:00 pm to 6:50 pm','5:40 pm to 6:30 pm'],
            [['','L60'],'6:51 pm to 7:00 pm','6:31 pm to 7:20 pm'],
            [['','V7'],'7:00 pm to 7:50 pm',''],
        ],
    ]
    return arr;
}

const BaseArray = ()=>{
    let arr= new Array(5)
    for(let i=0;i<5;i++)
    {
        arr[i]=new Array(13)
        for(let j=0;j<13;j++)
        arr[i][j]=0
    }
    return arr;
}

const getDataMap = ()=>{
    const Data= new Map()
    for(let i=0;i<5;i++)
    {
        for(let j=0;j<13;j++)
        {
            if(getSlots().indexOf(Slots()[i][j][0][0])!=-1 && Data.get(Slots()[i][j][0][0])!=undefined) {
                Data.set(Slots()[i][j][0][0],[[...Data.get(Slots()[i][j][0][0])],[i,j]])
            }
            else
            Data.set(Slots()[i][j][0][0],[i,j])

            if(getSlots().indexOf(Slots()[i][j][0][1])!=-1 && Data.get(Slots()[i][j][0][1])!=undefined)
            Data.set(Slots()[i][j][0][1],[[...Data.get(Slots()[i][j][0][1])],[i,j]])
            else
            Data.set(Slots()[i][j][0][1],[i,j])
        }
    }
    return Data;
}

console.log(getDataMap());