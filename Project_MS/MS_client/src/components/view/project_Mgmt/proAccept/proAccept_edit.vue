<template>
    <div class="container-wrap">
        <current yiji="项目管理" erji="项目验收"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">项目验收</span>
            </div>
            <div class="add-wrapper">
                <el-form :model="proAccept" :rules="rules1" ref="proAccept" label-width="140px" :inline="true">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目名称">
                            <el-input v-model="proAccept.proName" placeholder="请输入项目名称"></el-input>
                        </el-form-item>
                    </el-col>                   
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目编号">
                            <el-input v-model="proAccept.proNumber"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="客户">
                            <el-select v-model="proAccept.visitor">
                                <el-option v-for="item in visitorList" :label="item.visitorMsg" :value="item.visitorID"></el-option>
                            </el-select>    
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="服务管理模式">
                            <el-select v-model="proAccept.serviceManageMode">
								<el-option v-for="item in serviceManageModeList" :label="item.serviceMsg" :value="item.serviceID"></el-option>
							</el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目类型">
                            <el-select v-model="proAccept.proType">
								<el-option v-for="item in proTypeList" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入确认类型">
                            <el-select v-model="proAccept.sureType">
                                <el-option v-for="item in sureTypeList" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计合同金额">
                            <el-input v-model="proAccept.estimatedAmount"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同编号">
                            <el-input v-model="proAccept.pactNumber"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form :model="proAcceptInfor" :rules="rules2" ref="proAcceptInfor" label-width="140px" :inline="true">
                    <el-col :span="24" class="item-title">验收信息</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目经理">
                                <el-input v-model="proAcceptInfor.proManager" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="销售">
                            <el-input v-model="proAcceptInfor.proSell" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col>
                        <el-form-item label="预计验收时间">
                            <div class="block">
                                <el-date-picker
                                  v-model="proAcceptInfor.AcceptTime"
                                  type="datetime"
                                  placeholder="选择日期时间"
                                  align="right"
                                  :picker-options="pickerOptions1">
                                </el-date-picker>
                              </div>
                        </el-form-item>                       
                    </el-col>                   
                    <el-col :span="24">
                        <el-form-item label="项目说明">
                            <el-input type="textarea" class="b-textarea" v-model="proAcceptInfor.remark"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form :model="visitorContact" :rules="rules3" ref="visitorContact" label-width="140px" :inline="true">
                    <el-col :span="24" class="item-title">客户方联系人</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="客户方联系人">
                            <el-input v-model="visitorContact.customerContact" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="联系电话" prop="contactPhone">
                            <el-input v-model="visitorContact.contactPhone"></el-input>
                        </el-form-item>
                    </el-col>                   
                    <el-col :span="24">
                        <el-form-item label="联系邮箱" prop="contactEmall">
                            <el-input v-model="visitorContact.contactEmall"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" class="item-title">验收材料</el-col>  
                    <el-col :span="24">
                        <el-form-item label="验收报告">
                            <el-upload
                          ref="upload"
                          class=""
                          action="https://jsonplaceholder.typicode.com/posts/"                         
                          :on-preview="handlePreview"
                          :on-remove="handleRemove"
                          multiple
                          :limit="10"
                          :show-file-list="true"
                          :on-success="handleSuccess"
                          :on-exceed="handleExceed"
                          :file-list="fileList">
                          <el-button size="small" type="primary">点击上传验收报告</el-button>
                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>   
                        </el-form-item>
                    </el-col>                   
                </el-form>
                 <!-- 验收材料                                        -->
                 <div class="queryButton_wrapper">
                    <el-col :sm="24">
                        <el-button class="btn-primary" @click="saveAccept">保存</el-button>
                        <el-button class="resetform btn-default" @click="abolishAccept">取消</el-button>
                    </el-col> 
                 </div>                        
                 
            </div>
        </div>
    </div>
</template>
<script>
	import current from "../../../common/current_position.vue";
    import api from "../../../../common/api/api.js"
    // let { queryProjAndSalesInfo,queryProjImpleInfo,queryProjFileInfo} = api
	export default {
		data() {
            //判断邮箱
            var validateEmall = (rule, value, callback) => {
                let rexg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if(!value){
                    callback();
                }
                if(!(rexg.test(value))){
                     callback(new Error('输入的邮箱不对'));
                }else{
                     callback();
                }
            };
            //判断手机号
            var validatePhone=(rule, value, callback) => {
                let rexg=/^1[34578]\d{9}$/;
                if(!value){
                    callback();
                }                
                if(!(rexg.test(this.visitorContact.contactPhone))){
                    callback(new Error('输入的手机号码不对'));
                    return false;
                }
            };
			return{
                proAccept:{
                    proName:'',
                    proNumber:'',
                    visitor:'',
		            serviceManageMode:'',
                    proType:'',
                    sureType:'',
                    estimatedAmount:'',
                    pactNumber:'',
                },
                proAcceptInfor:{
                    proManager:'赵武',
                    proSell:'路飞',
                    AcceptTime:':',
                    projImpStep:'',
                    proExplain:'',
                },
                visitorContact:{
                    customerContact:'刘菲',
                    contactPhone:'',
                    contactEmall:'',
                },
                acceptMaterials:{
                    acceptReport:'',
                },
                //客户列表
                visitorList:[
                    {visitorID: '01',visitorMsg: '客户1'},
                    {visitorID: '02',visitorMsg: '客户2'},
                    {visitorID: '03',visitorMsg: '客户3'}
                ],
                //服务管理模式列表
				serviceManageModeList: [
					{serviceID: '01',serviceMsg: '项目外包'},
					{serviceID: '02',serviceMsg: '人力外包'},
					{serviceID: '03',serviceMsg: '解决方案'},
					{serviceID: '04',serviceMsg: '其他'}
                ],
                //项目类型列表
                proTypeList: [
					{paraValue: '01',paraShowMsg: '应用系统开发'},
					{paraValue: '02',paraShowMsg: '软件产品开发'},
					{paraValue: '03',paraShowMsg: '应用维护升级'},
					{paraValue: '04',paraShowMsg: '系统集成'},
					{paraValue: '05',paraShowMsg: '信息系统安全'},
					{paraValue: '06',paraShowMsg: '咨询服务'},
					{paraValue: '07',paraShowMsg: '其他'},
                ],
                //收入确认类型列表
                sureTypeList: [
                    {paraValue: '01',paraShowMsg: '外包'},
					{paraValue: '02',paraShowMsg: '固定金额'},
                ],               
                ProjFileList:[
                    {
                        rid:'文件的编号',
                        attaType:'文件的类型',
                        attaFile:'文件名称',
                        remark:'文件说明'
                    }
                ],
                //时间选择
                pickerOptions1: {
                  shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                      picker.$emit('pick', new Date());
                    }
                  }, {
                    text: '昨天',
                    onClick(picker) {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24);
                      picker.$emit('pick', date);
                    }
                  }, {
                    text: '一周前',
                    onClick(picker) {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                      picker.$emit('pick', date);
                    }
                  }]
                },
                //文件上传
                fileList:[],
                rules1:{
                    
                },
                rules2:{
                    
                },
                //验证字段的规则
                rules3: {
                  contactEmall: [
                    { validator: validateEmall, trigger: 'change' }
                  ],
                  contactPhone:[
                    { validator: validatePhone, trigger: 'change' }
                  ],
                }
            }
        },
        methods:{
              handleRemove(file, fileList) {
                console.log(file, fileList);
              },
              handlePreview(file) {
                console.log(file);
              },
              handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 10个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
              },
              //取消
              abolishAccept(){
                this.proAccept={};
                this.proAcceptInfor={};
                this.visitorContact={};
                this.$refs.upload.clearFiles();
                this.loadPage();
              },
              //保存
              saveAccept() {
                var self=this;
                self.$refs.proAccept.validate((valid) => {
                  if (valid) {
                    self.$refs.proAcceptInfor.validate((valid) => {
                      if (valid) {
                        self.$refs.visitorContact.validate((valid) => {
                          if (valid) {
                            alert('submit!');
                            let param={
                                proName:this.proAccept.proName,
                                proNumber:this.proAccept.proNumber,
                                visitor:this.proAccept.visitor,
                                serviceManageMode:this.proAccept.serviceManageMode,
                                proType:this.proAccept.proType,
                                sureType:this.proAccept.sureType,
                                estimatedAmount:this.proAccept.estimatedAmount,
                                pactNumber:this.proAccept.pactNumber,
                                AcceptTime:this.proAcceptInfor.AcceptTime,
                                projImpStep:this.proAcceptInfor.projImpStep,
                                proExplain:this.proAcceptInfor.proExplain,
                                contactPhone:this.visitorContact.contactPhone,
                                contactEmall:this.visitorContact.contactEmall,
                            }
                            /*self.axios.get(api,{
                                params:param
                            })
                            .then((res)=>{
                                let res=res.data;
                                self.proManager=res.proManager;
                                self.proSell=res.proSell;
                                self.customerContact=res.customerContact;
                                self.visitorList=res.visitorList;
                                self.serviceManageModeList=res.serviceManageModeList;
                                self.proTypeList=res.proTypeList;
                                self.sureTypeList=res.sureTypeList;
                                self.ProjFileList=res.ProjFileList;
                            })
                            .catch((err)=>{
                                console.log(err)
                            })*/
                          } else {
                            console.log('error submit!!');
                            return false;
                          }
                        });
                      } else {
                        console.log('error submit!!');
                        return false;
                      }
                    });
                  } else {
                    console.log('error submit!!');
                    return false;
                  }
                });
              },
              //上传成功
              handleSuccess(response, file, fileList){
                console.log(file)

              },
              //进入页面加载固定数据
              loadPage(){
                var self=this;
                let param={

                }
                 /*self.axios.get(api,{
                    params:{

                    }
                })
                .then((res)=>{
                   let res=res.data;
                    self.proManager=res.proManager;
                    self.proSell=res.proSell;
                    self.customerContact=res.customerContact;

                })
                .catch((err)=>{
                    console.log(err)
                })*/
              }
        },
        created(){
            this.loadPage();
           //查询项目信息详情
            // this.queryProjAndSalesInfo();
            //查询项目实施信息详情
            // this.queryProjImpleInfo();
            //查询项目资料
            // this.queryProjFileInfo()
            //查询收入金额列表
            //this.queryprojIncmTypeList()
			//查询收入确认金额列表
            // this.queryincmConfimList();
            //查询项目类型列表
            // this.queryprojTypeList()
		},
       /* methods:{
            //查询项目信息详情
			queryProjAndSalesInfo() {
                const self = this;
                let oppoNo =  localStorage.getItem('preCheckOppoNo');
				let params = {

				};
				self.$axios.get(api.queryProjAndSalesInfo, params)
				.then((res) => {
					console.log('dtl', res);
					if(res.data.code == 'S00000') {
						self.salesInfo = res.data.data;
					}
					
				})
				.catch((err) => {
					console.log(err)
				})
            },
            //查询项目实施信息详情
            queryProjImpleInfo() {
                const self = this;
                let oppoNo =  localStorage.getItem('preCheckOppoNo');
				let params = {

				};
				self.$axios.get(api.queryProjImpleInfo, params)
				.then((res) => {
					console.log('dtl', res);
					if(res.data.code == 'S00000') {
						self.projImpleInfo = res.data.data;
					}
					
				})
				.catch((err) => {
					console.log(err)
				})
            },
             //项目资料的查询
            queryProjFileInfo() {
                const self = this;
                let oppoNo =  localStorage.getItem('preCheckOppoNo');
				let params = {

				};
				self.$axios.get(api.queryProjFileInfo, params)
				.then((res) => {
					console.log('fileList', res);
					if(res.data.code == 'S00000') {
						self.ProjFileList = res.data.data;
					}
					
				})
				.catch((err) => {
					console.log(err)
				})
            },
             //查询收入金额列表
            queryprojIncmTypeList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PROJ_INCM_TYPE')
                .then((res) => {
                    console.log('projIncmTypeList',res);
                    if(res.data.code === "S00000") {
                        self.projIncmTypeList = res.data.data;
                    }
                    
                }).catch((err) => {
                    console.log('error');
                })
            },
			//查询收入确认金额列表
            queryincmConfimList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=INCM_CONFIM')
                .then((res) => {
                    console.log('incmConfimList',res);
                    if(res.data.code === "S00000") {
                        self.incmConfimList = res.data.data;
                    }
                    
                }).catch((err) => {
                    console.log('error');
                })
            },
            //查询项目类型列表
            queryprojTypeList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PROJ_TYPE')
                .then((res) => {
                    console.log('projTypeList',res);
                    if(res.data.code === "S00000") {
                        self.projTypeList = res.data.data;
                    }
                    
                }).catch((err) => {
                    console.log('error');
                })
            },
        },*/
		components: {
			current
		},
		computed: {
			
		}
	};
</script>
<style scoped>
    form>div{
        min-height:63px;
    }
    .queryButton_wrapper{
        margin: 0px auto 30px;
        width: 260px;
        clear: both;
        font-size: 0px;
        padding-top: 4px;
    }
</style>
