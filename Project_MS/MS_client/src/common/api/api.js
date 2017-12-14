const baseUrl = '/iem_pmg/'
export default{
    //项目管理=>项目一览---查询
    queryProjList:baseUrl+'projectBuild/queryProjList',
    //项目管理=>项目一览=>项目详情---项目信息和销售信息
    queryProjAndSalesInfo:baseUrl+'projectBuild/queryProjAndSalesInfo',
     //项目管理=>项目一览=>项目详情---实施详情的查询	
    queryProjImpleInfo:baseUrl+'projectBuild/queryProjImpleInfo',
    //项目管理=>项目一览=>项目详情---项目资料的查询 
    queryProjFileInfo:baseUrl+'projectBuild/queryProjFileInfo',
}