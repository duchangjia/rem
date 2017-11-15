<template>
    <div class="edit_assetUser">
        <current yiji="资产管理" erji="资产使用管理" sanji="资产使用修改"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">资产使用修改</span><button class="add" @click="save">保存</button></div>
                <div class="content">
                    <el-form label-width="200px"  :rules="rules" ref="applyCompanyInfo" :model="applyCompanyInfo">
                        <el-form-item label="公司名称">
                            <el-select placeholder="请选择公司名称" :disabled="true" v-model="applyCompanyInfo.organName">
                                <el-option :label="applyCompanyInfo.organName" :value="applyCompanyInfo.organName"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="申请部门名称">
                            <el-select placeholder="请选择申请部门名称" :disabled="true" v-model="applyCompanyInfo.derpName">
                            </el-select>
                        </el-form-item>
                        <el-form-item label="CCC">
                            <el-select placeholder="请选择CCC" :disabled="true" v-model="applyCompanyInfo.ccc">
                            </el-select>
                        </el-form-item>
                        <el-form-item label="申请使用人工号" prop="applyUserNo">
                            <el-input v-model="applyCompanyInfo.applyUserNo" :disabled="true">
                            </el-input>
                           
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input :disabled="true" v-model="applyCompanyInfo.custName"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.mobileNo"></el-input>
                        </el-form-item>
                        <el-form-item label="岗位">
                            <el-input :disabled="true" v-model="applyCompanyInfo.custPost"></el-input>
                        </el-form-item>
                        <el-form-item label="职级">
                            <el-input :disabled="true" v-model="applyCompanyInfo.custClass"></el-input>
                        </el-form-item>
                    <!-- </el-form> -->
                    <div class="form_info">资产信息</div>
                    <!-- <el-form label-width="200px"> -->
                        <el-form-item label="资产编号" prop="assetNo">
                            <el-input v-model="applyCompanyInfo.assetNo" :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="购买单价">
                            <el-input :disabled="true" v-model="applyCompanyInfo.buyUnitPrice"></el-input>
                        </el-form-item>
                        <el-form-item label="当前库存数量">
                            <el-input :disabled="true" v-model="applyCompanyInfo.stockNum"></el-input>
                        </el-form-item>
                        <el-form-item label="购买金额">
                            <el-input :disabled="true" v-model="applyCompanyInfo.buyAmount"></el-input>
                        </el-form-item>
                        <el-form-item label="制造商">
                            <el-input :disabled="true" v-model="applyCompanyInfo.mfrs"></el-input>
                        </el-form-item>
                        <el-form-item label="供应商">
                            <el-input :disabled="true" v-model="applyCompanyInfo.supplier"></el-input>
                        </el-form-item>
                        <el-form-item label="资产类别">
                            <el-input placeholder="请选择资产类别" :disabled="true" v-model="applyCompanyInfo.assetType">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="资产名称">
                            <el-input :disabled="true" v-model="applyCompanyInfo.assetName"></el-input>
                        </el-form-item>
                        <el-form-item label="SN编号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.snNo"></el-input>
                        </el-form-item>
                        <el-form-item label="规格型号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.specType"></el-input>
                        </el-form-item>
                        <el-form-item label="出厂时间">
                            <el-input :disabled="true" v-model="applyCompanyInfo.factoryTime"></el-input>
                        </el-form-item>
                        <el-form-item label="免维保截至时间">
                            <el-input :disabled="true" v-model="applyCompanyInfo.faxFreeTime"></el-input>
                        </el-form-item>
                        <el-form-item label="主要性能说明">
                            <el-input type="textarea" :disabled="true" v-model="applyCompanyInfo.configInstr"></el-input>
                        </el-form-item>
                    <!-- </el-form> -->
                    <div class="form_info">使用信息</div>
                    <!-- <el-form label-width="200px"> -->
                        <el-form-item label="使用类别"  prop="applyType">
                            <el-select placeholder="请选择使用类别" v-model="applyCompanyInfo.applyType" >
                                <el-option label="发放领用" value="01"></el-option>
                                <el-option label="归还" value="02"></el-option>
                                <el-option label="出借" value="03"></el-option>
                                <el-option label="出售" value="04"></el-option>
                                <el-option label="盘余" value="05"></el-option>
                                <el-option label="盘亏" value="06"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="使用数量" prop="applyNum">
                            <el-input v-model="applyCompanyInfo.applyNum"></el-input>
                        </el-form-item>
                        <el-form-item label="发生时间" prop="applyTime">
                            <el-date-picker
                                v-model="applyCompanyInfo.applyTime"
                                type="date"
                                placeholder="选择日期"
                                @change="changeDate()"
                                >
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="状态" prop="applyStatus">
                            <el-select placeholder="请选择状态" v-model="applyCompanyInfo.applyStatus">
                                <el-option label="未核销/未归还" value="01"></el-option>
                                <el-option label="已核销/已归还" value="02"></el-option>
                                <el-option label="不需要核销/不需要归还" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="说明" prop="remark">
                            <el-input type="textarea" v-model="applyCompanyInfo.remark"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from "../../../common/current_position.vue";
    import moment from "moment";
    export default {
        data() {
            return {
                rules: {
                    applyUserNo: [
                        { required: true, message: '请输入申请使用人工号', trigger: 'blur' }
                    ],
                    assetNo: [
                        { required: true, message: '请输入资产编号', trigger: 'blur' }
                    ],
                    applyType: [
                        { required: true, message: '请选择使用类别', trigger: 'blur' }
                    ],
                    applyNum: [
                        { required: true, message: '请输入使用数量', trigger: 'blur' }
                        ,{ type: 'number', message: '请输入数字',trigger: "blur" }
                    ],
                    applyTime: [
                        { required: true, message: '请输入发生时间', trigger: 'blur' }
                    ],
                    remark: [
                        { required: true, message: '请输入说明', trigger: 'blur' }
                    ],
                    applyStatus: [
                        { required: true, message: '请选择状态', trigger: 'blur' }
                    ],
                },
                // applyCompanyInfo: {
                //     applyUserNo: '',
                //     assetNo: '',
                // },
                applyCompanyInfo:{
                    applyUserNo: "",
                    assetNo: "",
                    remark: "",
                    applyStatus: "",
                    applyTime: "",
                    applyNum: "",
                    applyType: ""
                },
                applyUserInfo:{

                },
                assetInfo:{

                },
            }
        },
        filters:{
          
        },
        created() {
            let self = this
            let applyNo = this.$route.query.applyNo
            self.$axios.get('/iem_hrm/assetUse/queryAssetUseDetails/'+applyNo)
                .then(res => {
                    self.applyCompanyInfo = res.data
                    switch (this.applyCompanyInfo.assetType) {
                        case "01":
                            this.applyCompanyInfo.assetType = "办公用品";
                        break;
                        case "02":
                            this.applyCompanyInfo.assetType = "电脑";
                        break;
                        case "03":
                            this.applyCompanyInfo.assetType = "手机";
                        break;
                        case "04":
                            this.applyCompanyInfo.assetType = "后勤用品";
                        break;
                        case "05":
                            this.applyCompanyInfo.assetType = "数码相机";
                        break;
                    }
                })
                .catch(e=>{
                    console.log(e)
                })
            
        },
        methods: {
            // getUserInfo() {
            //     let self = this,
            //         applyUserNo = this.applyCompanyInfo.applyUserNo;
            //         console.log(applyUserNo)
            //     this.$axios.get('/iem_hrm/assetUse/queryAssetUserByApplyUserNo/'+applyUserNo)
            //         .then(res=>{
            //             let resData = res.data.data;
            //             console.log(resData);
            //             if(resData == null){
            //                 self.$message({
            //                     message:res.data.retMsg,
            //                     type: 'error'
            //                 });
            //                 this.applyCompanyInfo.organName = ''
            //                 this.applyCompanyInfo.derpName = ''
            //                 this.applyCompanyInfo.ccc = ''
            //                 this.applyCompanyInfo.custName = ''
            //                 this.applyCompanyInfo.mobileNo = ''
            //                 this.applyCompanyInfo.custPost = ''
            //                 this.applyCompanyInfo.custClass = ''
            //                 this.applyCompanyInfo.applyUserNo  = applyUserNo
            //                 return
            //             }
            //             this.applyCompanyInfo.organName = resData.organName
            //             this.applyCompanyInfo.derpName = resData.derpName
            //             this.applyCompanyInfo.ccc = resData.ccc
            //             this.applyCompanyInfo.custName = resData.custName
            //             this.applyCompanyInfo.mobileNo = resData.mobileNo
            //             this.applyCompanyInfo.custPost = resData.custPost
            //             this.applyCompanyInfo.custClass = resData.custClass
            //             this.applyCompanyInfo.applyUserNo  = applyUserNo
                        
            //         })
            //         .catch(e=>{
            //             // this.applyUserInfo = {}
            //             self.$message({
            //                 message:e.retMsg,
            //                 type: 'error'
            //             });
            //             console.log(e)
            //         })
            // },
            // getAssetInfo() { 
            //     let self = this,
            //        assetNo = this.applyCompanyInfo.assetNo;
            //     console.log(assetNo)
            //     this.$axios.get('/iem_hrm/assetUse/queryAssetUserByAssetNo/'+assetNo)
            //         .then(res=>{ 
            //             let resData = res.data.data
            //              if(resData == null){
            //                 self.$message({
            //                     message: res.data.retMsg,
            //                     type: 'error'
            //                 });
            //                 this.applyCompanyInfo.buyUnitPrice = ''
            //                 this.applyCompanyInfo.stockNum = ''
            //                 this.applyCompanyInfo.buyAmount = ''
            //                 this.applyCompanyInfo.mfrs = ''
            //                 this.applyCompanyInfo.supplier = ''
            //                 this.applyCompanyInfo.assetType = ''
            //                 this.applyCompanyInfo.assetName = ''
            //                 this.applyCompanyInfo.snNo = ''
            //                 this.applyCompanyInfo.specType = ''
            //                 this.applyCompanyInfo.factoryTime = ''
            //                 this.applyCompanyInfo.faxFreeTime = ''
            //                 this.applyCompanyInfo.remark = ''
            //                 this.applyCompanyInfo.assetNo = assetNo
            //                 return;
            //             }
                        
            //             this.applyCompanyInfo.buyUnitPrice = resData.buyUnitPrice
            //             this.applyCompanyInfo.stockNum = resData.stockNum
            //             this.applyCompanyInfo.buyAmount = resData.buyAmount
            //             this.applyCompanyInfo.mfrs = resData.mfrs
            //             this.applyCompanyInfo.supplier = resData.supplier
            //             this.applyCompanyInfo.assetType = resData.assetType
            //             this.applyCompanyInfo.assetName = resData.assetName
            //             this.applyCompanyInfo.snNo = resData.snNo
            //             this.applyCompanyInfo.specType = resData.specType
            //             this.applyCompanyInfo.factoryTime = resData.factoryTime
            //             this.applyCompanyInfo.faxFreeTime = resData.faxFreeTime
            //             this.applyCompanyInfo.remark = resData.remark
            //             this.applyCompanyInfo.assetNo = assetNo
            //             console.log(this.applyCompanyInfo, this.assetInfo)
            //         })
            //         .catch(e=>{
            //             this.assetInfo = {}
            //             self.$message({
            //                 message:e.retMsg,
            //                 type: 'error'
            //             });
            //             console.log(e)
            //         })
            // },
            changeDate(){
                let applyTime =  moment(this.applyCompanyInfo.applyTime).format("YYYY-MM-DD");
                this.applyCompanyInfo.applyTime = applyTime.toString();
                console.log(applyTime);
            },
            save() {
                let self = this
                let obj = {}
                obj.applyType = this.applyCompanyInfo.applyType
                obj.applyNum = this.applyCompanyInfo.applyNum
                obj.applyTime = this.applyCompanyInfo.applyTime
                obj.applyStatus = this.applyCompanyInfo.applyStatus
                obj.remark = this.applyCompanyInfo.remark
                let obj2 = {}
                obj2.applyUserNo = this.applyCompanyInfo.applyUserNo
                obj2.assetNo = this.applyCompanyInfo.assetNo
                obj2.applyNo = this.$route.query.applyNo
                let data = Object.assign(obj, obj2)
                console.log(data)
                self.$refs.applyCompanyInfo.validate(valid => {
                    if(valid){
                        self.$axios.put('/iem_hrm/assetUse/modAssUse', data)
                        .then(res=>{
                            let resData = res.data.data;
                            console.log(resData)
                            if(resData === null){
                                self.$message({
                                    message: res.data.retMsg,
                                    type: 'error'
                                });
                            }else{
                                self.$message({
                                    message: res.data.retMsg,
                                    type: 'success'
                                });
                            }
                        })
                        .catch(e=>{
                            self.$message({
                                message: e.retMsg,
                                type: 'error'
                            });
                        })
                    }

                })
            }
        },
        components: {
            current,
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .edit_assetUser
        padding: 0 0 20px 20px;
        overflow: hidden;
        position: relative;
        .content-wrapper
            background: #fff;
            padding-left: 20px;
            padding-right 20px
            min-height: 746px;
            .title
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
                height: 80px;
                line-height: 80px;
                border-bottom: 1px solid #f4f4f4;
                position relative
                .text
                    border-bottom:2px solid black;
                    display: inline-block;
                    height: 80px;
                .add
                    width: 120px
                    height 40px
                    background: #FF9900;
                    border: 1px solid #FF9900;
                    outline none
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height 40px
                    text-align center
                    position absolute
                    right 0px
                    bottom 20px
            .content
                padding-top: 42px;
                overflow hidden
                .form_info
                    margin 10px 0
                    font-size 16px
                    padding-left 20px
                    font-weight bold
                .el-form-item
                    display inline-block
                    .el-form-item__label
                        color #999
                    .el-input, .el-select
                        width 300px
                        .el-input__inner
                            width 100%
                            &:hover
                                border-color #f90
                    .el-textarea__inner
                        min-width 800px
                        min-height 100px
                        &:hover, &:focus
                            border-color #f90




</style>
