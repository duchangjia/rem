const baseUrl = '/iem_hrm/'
export default{
    //查询个人信息接口
    custSelfInfo:baseUrl+'CustInfo/queryCustSelfInfo',
    //查询个人资产信息接口
    queryCustAsset:baseUrl+'CustInfo/queryCustAsset',
    //修改密码接口
    changePassword:baseUrl+'user/changePassword',
    //查询个人假期接口
    querySalaryHoliday:baseUrl+'/CustInfo/querySalaryHoliday',
    //资产使用管理=>查询列表数据接口
    assetUseQueryAssUseList:baseUrl+'assetUse/queryAssUseList',
    //资产使用管理=>删除列表单行数据接口
    delAssUse:baseUrl+'assetUse/delAssUse/',
    //资产使用管理=>修改=>获取修改页面数据接口
    getAssetUseByApplyNo:baseUrl+'assetUse/getAssetUseByApplyNo/',
    //资产使用管理=>修改=>保存修改接口
    modAssUse:baseUrl+'assetUse/modAssUse'
}