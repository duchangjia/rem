import Vue from 'vue'
Vue.filter('moneyFilter', function (value) {
    // var count = value.toFixed(2);
    if (!value) return '0.00'
    var count = value+'kkk';
    return count;
});
// var m  = Vue.filter('money-filter')