<template>
    <div class="edit-wrapper">
        <current yiji="系统管理" erji="组织架构" sanji="新增机构"></current>
        <div class="edit-content">
            <div class="title">
                <span class="text">新增机构</span>
                <el-button type="primary" @click="save" class="save">保存</el-button>
            </div>
            <div class="department-info" v-show="content">
                <!--<div class="text">部门信息</div>-->
                <div class="item-common">
                    <div><span class="label-common">上级部门</span><input type="text" v-model="content.organName" class="input-common input-dark" disabled></div>
                    <div v-show="content.organNo"><span class="label-common">机构类型</span><select v-model="content2.organType" class="input-common input-select" :class="{'input-test1':isActive, 'input-test2':!isActive}" @change="check" ref="inputSelect">
                            <option value="" disabled selected>请选择机构类型</option>
                            <option value="01" v-if="content.organNo.length < 1">总公司</option>
                            <option value="02" v-if="content.organNo.length < 2">分公司</option>
                            <option value="03" v-if="content.organNo.length < 2">办事处</option>
                            <option value="04">部门</option>
                    </select></div>
                </div>
                <div class="item-common">
                    <div><span class="label-common">部门编号</span><input type="text"  v-model="content2.organNo" class="input-common input-dark"></div>
                    <div><span class="label-common">部门名称</span><input type="text" placeholder="请入部门名称" class="input-common input-light" v-model="content2.organName"></div>
                </div>
                <div class="item-common">
                    <div><span class="label-common">部门状态</span><select v-model="content2.status" class="input-common input-select">
                        <option value="1">启用</option>
                        <option value="0">停用</option>
                    </select></div>
                    <div><span class="label-common">部门主管</span><input type="text" placeholder="请输入部门主管姓名" class="input-common input-light" v-model="content2.organMgeName"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    import $ from '../../../../static/bower_components/jquery/dist/jquery.min'
    export default {
        data() {
            return {
                isActive: true,
                content: {},
                content2: {
                    parentNo: '',
                    organName: '',
                    organNo: '',
                    organMgeName: '',
                    organType: '',
                    status: '1',
                    organLevel: ''
                }
            }
        },
        created() {
            let index = window.sessionStorage.getItem('frame_queryNo')
            this.content2.parentNo = index
            this.$axios.get(`/iem_hrm/organ/queryCurrentAndParentOrganDetail/${index}`)
                .then(res => {
                    this.content = res.data.data
                })
                .catch( res=> {
                    console.log('请求超时')
                })
        },
        components: {
            current,
        },
        methods: {
            save() {
                this.content2.organLevel = this.content.organLevel
//                $.ajax({
//                    type:"POST",
//                    url:"/iem_hrm/organ/addOrgan",
//                    dataType:"json",
//                    contentType:"application/json",
//                    data:JSON.stringify(this.content2),
//                    success:function(data){
//                        console.log('add_junior')
//                        console.log(data)
//                    },
//                    error: function () {
//                        console.log('false')
//                    }
//                });
                this.$axios.post('/iem_hrm/organ/addOrgan', this.content2)
                    .then(res => {
                        console.log('post')
                        console.log(res)
                        this.$message({
                            type: 'success',
                            message: '新增成功'
                        })
                    })
                    .catch( res=> {
                        this.$message({
                            type: 'error',
                            message: '新增失败,请稍后重试！'
                        })
                    })
            },
            check() {
                let value = this.$refs.inputSelect.value
                console.log(value);
                if (value !== '') {
                    this.isActive = false
                }
            }
        }
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
    .input-test1{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #CCCCCC;
        letter-spacing: 0;
        line-height: 14px;
    }
    .input-test2{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        line-height: 14px;
    }
    ::-webkit-input-placeholder { /* WebKit browsers */
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #CCCCCC;
        letter-spacing: 0;
        line-height: 14px;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #CCCCCC;
        letter-spacing: 0;
        line-height: 14px;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #CCCCCC;
        letter-spacing: 0;
        line-height: 14px;
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #CCCCCC;
        letter-spacing: 0;
        line-height: 14px;
    }
</style>
