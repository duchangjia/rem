//金额过滤器
exports.moneyFilter = (value) => {
    if(value == ''||!value){
        return '0.00'
    }else{
        return parseInt(value).toFixed(2)
    }
}
