<template>
    <div class="edit-wrapper">
        <current yiji="系统管理" erji="组织架构" sanji="编辑部门"></current>
        <div class="edit-content">
            <div class="title">
                <span class="text">编辑部门</span>
                <el-button type="primary" @click="save" class="save">保存</el-button>
            </div>
            <div class="department-info">
                <!--<div class="text">部门信息</div>-->
                <div class="item-common">
                    <div><span class="label-common">部门编号</span><input type="text" v-model="content.organNo" class="input-common input-dark" disabled></div>
                    <div><span class="label-common">部门名称</span><input type="text" v-model="content.organName" class="input-common input-light"></div>
                </div>
                <div class="item-common">
                    <div><span class="label-common">上级部门</span><input type="text" v-model="content.organParentName" class="input-common input-dark" disabled></div>
                    <div><span class="label-common">部门主管</span><input type="text" v-model="content.organMgeName" class="input-common input-light"></div>
                </div>
                <div class="item-common">
                    <div><span class="label-common">部门类型</span><select  class="input-common input-select">
                        <option value="01" :selected="content.organType=='01'">总公司</option>
                        <option value="02" :selected="content.organType=='02'">分公司</option>
                        <option value="03" :selected="content.organType=='03'">办事处</option>
                        <option value="04" :selected="content.organType=='04'">部门</option>
                    </select></div>
                    <div v-show="content.status"><span class="label-common">部门状态</span><select class="input-common input-select">
                        <option value="1" :selected="content.status=='1'">启用</option>
                        <option  value="0" :selected="content.status=='0'">停用</option>
                    </select></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    export default {
        data() {
          return {
              content: {}
          }
        },
        components: {
            current,
        },
        created() {
            let index = window.sessionStorage.getItem('frame_queryNo')
            this.$axios.get(`/iem_hrm/organ/queryCurrentAndParentOrganDetail/${index}`)
                .then(res => {
                    this.content = res.data.data
                    console.log(res)
                })
                .catch( res=> {
                    console.log('请求超时')
                })
        },
        methods: {
            save() {
                this.$axios.put('/iem_hrm/organ/modifyOrganInfo', this.content)
                    .then(() => {
                        this.$message({
                            type: 'success',
                            message: '编辑成功'
                        });
                    })
                    .catch( ()=> {
                        this.$message({
                            type: 'error',
                            message: '编辑失败,请稍后重试!'
                        });
                    })
            }
        },
    }
</script>

<style scoped>
.edit-wrapper{
    padding:29px 0 16px 20px ;
}
.edit-wrapper .test{
    padding-left: 10px;
}
.content-right .title{
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
}
.edit-content{
    margin-top: 29px;
    background: #fff;
    padding-left: 20px;
    padding-right: 20px;
}
.edit-content .title{
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    justify-content: space-between;
}
.edit-content .title .text{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    border-bottom: 2px solid #363D47;
    height: 80px;
    line-height: 80px;
    width: 80px;
}
.edit-content .title .save {
    border-radius: 0;
    height: 40px;
    width: 120px;
    background: #F4F4F4;
    border: none;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
}
.edit-content .title .save:hover {
    color: white;
    background: orange;
}
.department-info{
    margin-top: 40px;
    padding-left: 8px;
    padding-bottom: 307px;
}
.department-info .text{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    line-height: 14px;
    width: 56px;
    height: 14px;
    margin-bottom: 30px;
}
.department-info .item-common{
    margin-bottom: 30px;
    display: flex;
    flex: 1;
}
.department-info .item-common>div{
    flex: 1;
}
.department-info .item-common .label-common{
    margin-right: 30px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    vertical-align: middle;
 }
.department-info .item-common .input-common{
    border-radius: 4px;
    width: 300px;
    height: 40px;
    border: none;
    text-indent: 1em;
    outline: none;
}
.department-info .item-common .input-select{
    border: 1px solid #EEEEEE;
    outline: none;
}
.department-info .item-common .input-dark{
    background: #F4F4F4;

}
.department-info .item-common .input-light{
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
}
</style>
