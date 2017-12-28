
// 深度遍历所有部门
export default function getDeepDerp(depList,derpsItem) {
    depList.forEach(item=>{
        derpsItem.push({
            derpName: item.derpName,
            derpNo: item.derpNo,
        })
        if(item.depList.length!=0){
            getDeepDerp(item.depList,derpsItem)
        }
    })
}