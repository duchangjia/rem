<template>
    <div class="edit-wrapper">
        <current yiji="系统管理" erji="组织架构" sanji="编辑部门"></current>
        <div class="edit-content">
            <div class="title">
                <span class="text">编辑部门</span>
                <el-button type="primary" @click="save" class="save">保存</el-button>
            </div>
            <div class="department-info">
                <div class="text">部门信息</div>
                <!--<div class="item-common">-->
                    <!--<div><span class="label-common">部门编号</span><input type="text" v-model="content.organNo" class="input-common input-dark" disabled></div>-->
                    <!--<div><span class="label-common">部门名称</span><input type="text" v-model="content.organName" class="input-common input-light"></div>-->
                <!--</div>-->
                <!--<div class="item-common">-->
                    <!--<div><span class="label-common">上级部门</span><input type="text" v-model="content.organParentName" class="input-common input-dark" disabled></div>-->
                    <!--<div><span class="label-common">部门主管</span><input type="text" v-model="content.organMgeName" class="input-common input-light"></div>-->
                <!--</div>-->
                <!--<div class="item-common">-->
                    <!--<div><span class="label-common">部门类型</span><select  class="input-common input-select">-->
                        <!--<option value="01" :selected="content.organType=='01'">总公司</option>-->
                        <!--<option value="02" :selected="content.organType=='02'">分公司</option>-->
                        <!--<option value="03" :selected="content.organType=='03'">办事处</option>-->
                        <!--<option value="04" :selected="content.organType=='04'">部门</option>-->
                    <!--</select></div>-->
                    <!--<div v-show="content.status"><span class="label-common">部门状态</span><select class="input-common input-select">-->
                        <!--<option value="1" :selected="content.status=='1'">启用</option>-->
                        <!--<option  value="0" :selected="content.status=='0'">停用</option>-->
                    <!--</select></div>-->
                <!--</div>-->
                <el-form ref="formdata" :rules="rules" :model="formdata" label-width="80px">
                    <el-col :span="12">
                        <el-form-item label="部门编号" prop="organNo">
                            <el-input v-model="formdata.organNo" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门名称" prop="organName">
                            <el-input v-model="formdata.organName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="上级部门" prop="organParentName">
                            <el-input v-model="formdata.organParentName" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门主管" prop="organMgeName">
                            <el-input v-model="formdata.organMgeName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门类型" prop="organType">
                            <el-select placeholder="请选择部门类型" v-model="formdata.organType">
                                <el-option label="总公司" value="01"></el-option>
                                <el-option label="分公司" value="02"></el-option>
                                <el-option label="办事处" value="03"></el-option>
                                <el-option label="部门" value="04"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门状态" prop="status">
                            <el-select placeholder="请选择部门状态" v-model="formdata.status">
                                <el-option label="启用" value="1"></el-option>
                                <el-option label="停用" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    export default {
        data() {
          return {
              formdata: {
                  organNo: '',
                  organName: '',
                  organParentName: '',
                  organMgeName: '',
                  organType: '',
                  status: '',
              },
              rules: {
                  organNo: [
                      { required: true, message: '部门编号不能为空', trigger: 'blur' }
                  ],
                  organName: [
                      {  required: true, message: '部门名称不能为空', trigger: 'blur' }
                  ],
                  organParentName: [
                      {  required: true, message: '上级部门不能为空', trigger: 'blur' }
                  ],
                  organMgeName: [
                      {  required: true, message: '部门主管不能为空', trigger: 'blur' }
                  ],
                  organType: [
                      {  required: true, message: '请选择部门类型', trigger: 'change' }
                  ],
                  status: [
                      {  required: true, message: '请选择部门状态', trigger: 'change' }
                  ],
              },
          }
        },
        components: {
            current,
        },
        created() {
            let index = window.sessionStorage.getItem('frame_queryNo')
            this.$axios.get(`/iem_hrm/organ/queryCurrentAndParentOrganDetail/${index}`)
                .then(res => {
                    this.formdata = res.data.data
                })
                .catch( res=> {
                    console.log('请求超时')
                })
        },
        methods: {
            save() {
                let self = this
                self.$refs.formdata.validate((valid) => {
                    if (valid) {
                        delete this.formdata.createdDate
                        delete this.formdata.updatedDate
                        this.$axios.put('/iem_hrm/organ/modifyOrganInfo', this.formdata)
                            .then((res) => {
                                self.$message({
                                    type: 'success',
                                    message: '编辑成功'
                                });
                            })
                            .catch( (e)=> {
                                self.$message({
                                    type: 'error',
                                    message: '编辑失败,请稍后重试!'
                                });
                            })
                    }else {
                        self.$message({
                            type: 'error',
                            message: '请填写完整信息'
                        });
                    }
                })

            }
        },
    }
</script>

<style>
.edit-wrapper{
    padding:0px 0 20px 20px ;
}
.edit-wrapper .test{
    padding-left: 10px;
}
.edit-wrapper .content-right .title{
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
}
.edit-wrapper .edit-content{
    /*margin-top: 29px;*/
    background: #fff;
    padding-left: 20px;
    padding-right: 20px;
}
.edit-wrapper .edit-content .title{
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    justify-content: space-between;
}
.edit-wrapper .edit-content .title .text{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    border-bottom: 2px solid #363D47;
    height: 80px;
    line-height: 80px;
    width: 80px;
}
.edit-wrapper .edit-content .title .save {
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
.edit-wrapper .edit-content .title .save:hover {
    color: white;
    background: orange;
}
.edit-wrapper .department-info{
    margin-top: 40px;
    padding-left: 8px;
    padding-bottom: 20px;
    overflow: hidden;
}
.edit-wrapper .department-info .text{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    line-height: 14px;
    width: 56px;
    height: 14px;
    margin-bottom: 30px;
}
.edit-wrapper .department-info .el-form-item{
    display: inline-block;
    margin-right: 150px;
}
.edit-wrapper .department-info .el-form-item__content .el-input, .edit-wrapper .department-info .el-form-item__content .el-select{
    width: 300px;
    height: 40px;
}
.edit-wrapper .department-info .el-form-item__content .el-select .el-input__inner,.edit-wrapper .department-info .el-form-item__content .el-input .el-input__inner{
    width: 300px;
    height: 40px;
}
.edit-wrapper .department-info .el-form-item__content .el-input__inner:hover, .edit-wrapper .department-info .el-form-item__content .el-input__inner:focus{
    border-color: #f90;
}
/*.department-info .item-common{*/
    /*margin-bottom: 30px;*/
    /*display: flex;*/
    /*flex: 1;*/
/*}*/
/*.department-info .item-common>div{*/
    /*flex: 1;*/
/*}*/
/*.department-info .item-common .label-common{*/
    /*margin-right: 30px;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: 14px;*/
    /*color: #999999;*/
    /*letter-spacing: 0;*/
    /*vertical-align: middle;*/
 /*}*/
/*.department-info .item-common .input-common{*/
    /*border-radius: 4px;*/
    /*width: 300px;*/
    /*height: 40px;*/
    /*border: none;*/
    /*text-indent: 1em;*/
    /*outline: none;*/
/*}*/
/*.department-info .item-common .input-select{*/
    /*border: 1px solid #EEEEEE;*/
    /*outline: none;*/
/*}*/
/*.department-info .item-common .input-dark{*/
    /*background: #F4F4F4;*/

/*}*/
/*.department-info .item-common .input-light{*/
    /*background: #FFFFFF;*/
    /*border: 1px solid #EEEEEE;*/
/*}*/
</style>
