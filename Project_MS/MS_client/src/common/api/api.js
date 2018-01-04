const baseUrl = '/iem_pmg/'
export default{
    //项目管理=>项目一览---查询
    queryProjList:baseUrl+'projectBuild/queryProjList',
    //项目管理=>项目一览---关闭项目
    closeProj:baseUrl+'projectBuild/',
    //项目管理=>项目一览=>项目详情---项目信息和销售信息
    queryProjAndSalesInfo:baseUrl+'projectBuild/queryProjAndSalesInfo',
     //项目管理=>项目一览=>项目详情---实施详情的查询	
    queryProjImpleInfo:baseUrl+'projectBuild/queryProjImpleInfo',
    //项目管理=>项目一览=>项目详情---项目资料的查询 
    queryProjFileInfo:baseUrl+'projectBuild/queryProjFileInfo',
    //项目管理=>项目一览=>项目修改---项目信息更新
    updateProjInfo:baseUrl+'projectBuild/',
    //业务管理=>部门项目一览=>查询
    queryDeptProjLists:baseUrl+'deptProjList/queryDeptProjLists'
}