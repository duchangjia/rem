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
                        <el-form-item label="部门主管" prop="organMgeName" class="organMgeName">
                            <!--<el-input v-model="formdata.organMgeName"></el-input>-->
                            <el-input v-model="formdata.organMgeName" v-show="false"></el-input>
                            <el-input v-model="formdata.organMgeId" v-show="false"></el-input>
                            <el-input v-model="formdata.organMgeNameAndId" placeholder="请选择员工">
                                <el-button slot="append" icon="search" @click="userNoSelect()"></el-button>
                            </el-input>
                            <messageBox
                                    :title="boxTitle"
                                    :tableOption.sync="tableOption"
                                    :inputFirstOption.sync="inputFirstOption"
                                    :inputSecOption.sync="inputSecOption"
                                    :searchData.sync="searchData"
                                    :searchUrl="searchUrl"
                                    :dialogVisible="dialogVisible"
                                    :pagination.sync="msgPagination"
                                    @dialogConfirm="dialogConfirm"
                                    @changeDialogVisible="changeDialogVisible"
                            ></messageBox>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门类型" prop="organType">
                            <el-select placeholder="请选择部门类型" v-model="formdata.organType" disabled>
                                <el-option label="总公司" value="01" v-show="show<1&&show==0"></el-option>
                                <el-option label="分公司" value="02" v-show="show<2&&show==1"></el-option>
                                <el-option label="办事处" value="03" v-show="show<2&&show==1"></el-option>
                                <el-option label="部门" value="04" v-show="show<=4&&(show==1||show==2||show==3||show==4)"></el-option>
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
    import messageBox from "../../common/messageBox-components.vue";
    export default {
        data() {
          return {
              formdata: {
                  parentName: '',
                  parentNo: '',
                  organName: '',
//                    organNo: '',
                  organMgeName: '',
                  organType: '',
                  status: '1',
                  choose: '',
                  organMgeId: '',
                  organMgeNameAndId: '',
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
              dialogVisible: false,
              tableOption:[],
              inputFirstOption:{},
              inputSecOption:{},
              msgPagination:{},
              searchData:{},
              searchUrl:'',
              saveUrl:'',
              boxTitle:'',
              numType:''
          }
        },
        components: {
            current,messageBox
        },
        created() {
            let index = window.sessionStorage.getItem('frame_queryNo')
            this.formdata.parentNo = index
            this.$axios.get(`/iem_hrm/organ/queryCurrentAndParentOrganDetail/${index}`)
                .then(res => {
                    this.formdata = res.data.data
                    this.formdata.organMgeNameAndId = res.data.data.organMgeName+'_'+res.data.data.organMgeId
                })
                .catch( e=> {
                    console.log(e)
                })
        },
        computed: {
            show() {
                if(this.formdata.choose=='01'){
                    return 1
                }
                if(this.formdata.choose=='02'){
                    return 2
                }
                if(this.formdata.choose=='03'){
                    return 3
                }
                if(!this.formdata.choose){
                    return 0
                }
                return 4
            }
        },
        methods: {
            dialogConfirm(custInfo){
                let self = this;
                self.formdata.organMgeNameAndId = custInfo.stateName+'_'+custInfo.stateNo
                self.formdata.organMgeName = custInfo.stateName
                self.formdata.organMgeId = custInfo.stateNo
                self.dialogVisible = false;
            },
            userNoSelect(){
                //table
                this.tableOption = [
                    {
                        thName:'工号',//table 表头
                        dataKey:'userNo'//table-col所绑定的prop值
                    },
                    {
                        thName:'姓名',//table 表头
                        dataKey:'custName'//table-col所绑定的prop值
                    }
                ];
                //input 第一个搜索框的配置项
                this.inputFirstOption  = {
                    labelName:'姓名',//label头
                    placeholder:'请输入姓名'//input placeholder
                },
                    //input 第二个搜索框的配置项
                    this.inputSecOption  = {
                        labelName:'工号',
                        placeholder:'请输入工号'
                    },
                    //搜索所需传值
                    this.searchData = {
                        custName:'',
                        userNo:''
                    }
                //table分页所需传值
                this.msgPagination =  {
                    pageNum:1,
                    pageSize:5,
                    totalRows:0
                }
                //点击确定后需要修改的对象 numType为changeNo方法所改变的type
                this.numType = 1
                //dialog打开
                this.dialogVisible=true
                //查询接口
                this.searchUrl = "/iem_hrm/CustInfo/queryCustBasicInfList"
                //点击确定后根据号码查询用户信息借口 没有则为空
                this.saveUrl = ''
                //dialog标题
                this.boxTitle = '人工编号选择'
            },
            changeDialogVisible(val) {
                this.dialogVisible=val
            },
            save() {
                let self = this
                self.$refs.formdata.validate((valid) => {
                    if (valid) {
                        if(this.formdata.parentNo=='undefined'){
                            return
                        }
                        delete this.formdata.createdDate
                        delete this.formdata.updatedDate
                        this.$axios.put('/iem_hrm/organ/modifyOrganInfo', this.formdata)
                            .then((res) => {
                                let result = res.data.retMsg
                                if(result=="操作成功"){
                                    self.$message({
                                        type: 'success',
                                        message: result
                                    });
                                }else {
                                    self.$message({
                                        type: 'error',
                                        message: result
                                    });
                                }

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
    height: 50px;
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
    height: 50px;
    width: 100%;
    justify-content: space-between;
}
.edit-wrapper .edit-content .title .text{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    border-bottom: 2px solid #363D47;
    height: 50px;
    line-height: 50px;
    width: 80px;
}
.edit-wrapper .edit-content .title .save {
    border-radius: 4px;
    height: 30px;
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
    margin-top: 30px;
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
.edit-wrapper .department-info .organMgeName .el-input, .edit-wrapper .department-info .organMgeName .el-select{
    width: 253px;
    height: 40px;
}
.edit-wrapper .department-info .organMgeName .el-select .el-input__inner,.edit-wrapper .department-info .organMgeName .el-input .el-input__inner{
    width: 253px;
    height: 40px;
}
.edit-wrapper .department-info .el-form-item__content .el-input__inner:hover, .edit-wrapper .department-info .el-form-item__content .el-input__inner:focus{
    border-color: #f90;
}
.edit-wrapper .department-info .item-box .el-form .el-form-item{
    margin-right: 0;
}
.edit-wrapper .department-info .item-box .el-form .el-form-item .el-input{
    width: 164px;
    height: 30px;
}
.edit-wrapper .department-info .item-box .el-form .el-form-item .el-input .el-input__inner{
     width: 164px;
     height: 30px;
}
</style>
