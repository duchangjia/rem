import Vue from 'vue'
Vue.filter('money-filter', function (value) {
    // var count = value.toFixed(2);
    var count = value+'kkk';
    return count;
});
var m  = Vue.filter('money-filter')