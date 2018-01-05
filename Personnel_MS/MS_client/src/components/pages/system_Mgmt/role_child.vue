<template>
        <el-checkbox v-model="checkFuncsAll" :indeterminate="isFuncsIndeterminate"
                     @change="handleFuncsAllChange(checkFuncsAll,funcs)" class="func-checkall">{{ funcs.menuName || '' }}
        </el-checkbox>
</template>

<script type='text/ecmascript-6'>
    export default {
        props:{
            checkFuncsAll:{
                type: Boolean,
                default: false
            },
            isFuncsIndeterminate:{
                type: Boolean,
                default: true
            },
            funcs:{
                type: Object,
                default: {}
            },
        },
        methods:{
            handleFuncsAllChange(val,funcs) {
                this.checkFuncsAll = val
                this.isFuncsIndeterminate = !val
                this.$emit('handleFuncsAllChange',[val,funcs])
            }
        }
    }
</script>

<!--handleFuncsAllChange(event,flag,index) {-->
<!--this.$set(this.checkFuncsAll,flag+index,event.target.checked)-->
<!--//      this.checkFuncsAll[flag+index] = event.target.checked;-->
<!--let targetFucsList = [];-->
<!--this.funcsList[index].bsns.forEach(function(ele) {-->
<!--targetFucsList.push(ele.bsnNo);-->
<!--}, this);-->
<!--if (this.checkFuncsAll[flag+index] == true) {-->
<!--this.$set(this.isFuncsIndeterminate, flag+index, true);-->
<!--targetFucsList.forEach(function(ele) {-->
<!--if (-->
<!--JSON.stringify(this.addRoleMsg.roleFuncSet).indexOf(-->
<!--JSON.stringify({ bsnNo: ele })-->
<!--) == -1-->
<!--) {-->
<!--this.addRoleMsg.roleFuncSet.push({ bsnNo: ele });-->
<!--}-->
<!--if (!this.isInArray(this.checkFuncs, ele)) {-->
<!--this.checkFuncs.push(ele);-->
<!--}-->
<!--}, this);-->
<!--} else {-->
<!--this.$set(this.isFuncsIndeterminate, flag+index, false);-->
<!--targetFucsList.forEach(function(ele, index) {-->
<!--if (-->
<!--JSON.stringify(this.addRoleMsg.roleFuncSet).indexOf(-->
<!--JSON.stringify({ bsnNo: ele })-->
<!--) != -1-->
<!--) {-->
<!--this.addRoleMsg.roleFuncSet.splice(-->
<!--JSON.stringify(this.addRoleMsg.roleFuncSet).indexOf(-->
<!--JSON.stringify({ bsnNo: ele })-->
<!--) - 1,-->
<!--1-->
<!--);-->
<!--}-->
<!--if (this.isInArray(this.checkFuncs, ele)) {-->
<!--this.checkFuncs.splice(this.checkFuncs.indexOf(ele), 1);-->
<!--}-->
<!--}, this);-->
<!--}-->
<!--console.log("这是全选的checkFuncs", this.checkFuncs);-->
<!--console.log("roleFuncSet", this.addRoleMsg.roleFuncSet);-->
<!--},-->