
// 深度遍历所有部门  参数1：需要深度遍历的对象的属性，参数2：遍历到el-option中的数组对象
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