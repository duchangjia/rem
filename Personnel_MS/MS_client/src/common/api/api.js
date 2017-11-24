const baseUrl = '/iem_hrm/'
export default{
    //查询个人信息接口
    custSelfInfo:baseUrl+'CustInfo/queryCustSelfInfo',
    //查询个人资产信息借口
    queryCustAsset:baseUrl+'CustInfo/queryCustAsset',
    //修改密码接口
    changePassword:baseUrl+'user/changePassword',
    //查询个人假期接口
    querySalaryHoliday:baseUrl+'/CustInfo/querySalaryHoliday'
}