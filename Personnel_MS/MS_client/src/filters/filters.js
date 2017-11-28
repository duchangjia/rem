
exports.moneyFilter = (value) => {
    if(value == ''||!value){
        return '0.00'
    }else{
        return paresInt(value)+'KKKK'
    }
}