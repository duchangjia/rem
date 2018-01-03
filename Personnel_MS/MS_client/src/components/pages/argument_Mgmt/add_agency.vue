<template>
    <div class="add_agency clearfix">
        <current yiji="参数管理" erji="业务参数" sanji="机构CCC管理" siji="CCC新增"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">CCC新增</span>
                <el-button type="primary" class="toolBtn btn-primary" @click="save">保存</el-button>
            </div>
            <div class="add-wrapper clearfix">
                <el-form label-width="110px" :inline="true" :model="obj" ref="form" :rules="rules">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公司名称" prop="organNo">
                            <el-select v-model="obj.organNo" placeholder="请选择公司" @change="selectDep(obj.organNo)">
                                <el-option v-for="item in organItem"
                                           :label="item.organName"
                                           :value="item.organNo">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门名称" prop="derpNo">
                            <el-select v-model="obj.derpNo" placeholder="请选择部门">
                                <el-option v-for="item in depItem"
                                           :label="item.derpName"
                                           :value="item.derpNo">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="CCC类型" prop="costType">
                            <el-select placeholder="请选择CCC类型" v-model="obj.costType">
                                <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in cccItem"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12" >
                        <el-form-item label="CCC值" prop="costCode">
                            <el-input v-model="obj.costCode" placeholder="请输入CCC值(数字或英文)" :maxlength="10"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12" >
                        <el-form-item label="备注">
                            <el-input v-model="obj.descr" :maxlength="256"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    import getDeepDerp from '../../../common/GetDeepDerp'
    export default {
        data() {
            return {
                obj: {
                    organNo: '',
                    derpNo: '',
                    costType: '',
                    costCode: '',
                    descr: '',
                },
                rules:{
                    organNo: [
                        { required: true, message: '公司不能为空', trigger: 'change' }
                    ],
                    derpNo: [
                        { required: true, message: '部门不能为空', trigger: 'change' }
                    ],
                    costType: [
                        { required: true, message: 'CCC类型不能为空', trigger: 'change'}
                    ],
                    costCode: [
                        { required: true, message: 'CCC值不能为空', trigger: 'blur'},
                        { pattern: /^[a-zA-Z0-9]*$/, message: "CCC值只能为数字或英文" }
                    ],
                },
                organItem:{},
                depItem:[],
                list:[],
                cccItem:{},
            }
        },
        created() {
            let self = this
            function COST_TYPE() {
                return self.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=COST_TYPE')
            }
//            function getOrganName() {
//                return self.$axios.get('/iem_hrm/organ/getOrganName')
//            }
            function getCompany() {
                return self.$axios.get('/iem_hrm/organ/selectCompanyByUserNo')
            }
            self.$axios.all([COST_TYPE(),getCompany()])
                .then(this.$axios.spread(function(res1,res2){
                    self.cccItem = res1.data.data
                    self.organItem = res2.data.data
                }))
                .catch(e=>{
                    console.log(e)
                });
        },
        methods: {
            selectDep(organNo) {
                let self = this
                self.depItem = []
                let data = {organNo}
                this.$axios.get('/iem_hrm/organ/selectChildDeparment',{params:data})
                    .then(res=>{
                        this.obj.derpNo = ''
                        self.list = res.data.data.map(item=>{
                            return {
                                derpName: item.derpName,
                                derpNo: item.derpNo,
                                depList: item.depList,
                            }
                        })
                        self.list.forEach(item=>{
                            self.depItem.push({
                                derpName: item.derpName,
                                derpNo: item.derpNo,
                            })
                            if(item.depList.length!=0){
                                getDeepDerp(item.depList,self.depItem)
                            }
                        })
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            },
            save(){
              let self = this
                this.$refs.form.validate((valid) => {
                        if (valid) {
                            this.$axios.post('/iem_hrm/organ/addOrgCCC', this.obj)
                                .then(res => {
                                    let result = res.data.retMsg
                                    if(result==='操作成功'){
                                        self.$message({
                                            message: result,
                                            type: 'success'
                                        });
                                    } else {
                                        self.$message({
                                            message: result,
                                            type: 'error'
                                        });
                                    }
                                })
                                .catch(e=>{
                                    self.$message({
                                        message: '新增失败,请稍后再试',
                                        type: 'error'
                                    });
                                    console.log('新增CCC失败', e)
                                })
                        }else {
                            self.$message({
                                message: '请填写完整信息',
                                type: 'error'
                            });
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
    .add_agency
        padding: 0 0 20px 20px;
        /*overflow: hidden;*/
        position: relative;

</style>
