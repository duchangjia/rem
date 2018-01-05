<template>
    <div class="container-wrap">
        <current yiji="项目管理" erji="项目预算" sanji="项目预算编辑"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">项目预算编辑</span>
                <el-button type="primary" class="toolBtn btn-primary" @click="save">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form ref="salesInfo" :inline="true"  :rules="rules1" :model="salesInfo" label-width="140px">
                    <el-col :span="24" class="item-title">项目信息</el-col>
                   <!--   -->
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目名称" prop="projName">
                                <el-input v-model="salesInfo.projName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目编号" prop="projNo">
                                <el-input v-model="salesInfo.projNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门"  prop="coocustNo">
                            <el-select v-model="salesInfo.coocustNo">
                                <el-option v-for="item in coocustNoList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                       <el-form-item label="项目经理" prop="oppoNo">
                               <el-input :disabled="true" v-model="salesInfo.oppoNo"></el-input>
                       </el-form-item>
                   </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="服务管理模式" prop="projSrvMngmode">
                            <el-select v-model="salesInfo.projSrvMngmode">
								<el-option v-for="item in projSrvMngmodeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :sm="24" :md="12">
                        <el-form-item label="项目类型" prop="projType">
                            <el-select v-model="salesInfo.projType">
                                                    <el-option v-for="item in projTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                                                </el-select>
                        </el-form-item>
                    </el-col> -->
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入确认类型" prop="projIncmConfim">
                            <el-select v-model="salesInfo.projIncmConfim">
                                <el-option v-for="item in incmConfimList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划开始时间" prop="projPreconDate">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="salesInfo.projPreconDate"
                                 :editable="false"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划结束时间" prop="projPreconDate">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="salesInfo.projPreconDate"
                                 :editable="false"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入类型" prop="projIncmType">
                            <el-select v-model="salesInfo.projIncmType">
                                <el-option v-for="item in projIncmTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目状态" prop="projState">
                            <el-select v-model="salesInfo.projState">
                                <el-option v-for="item in projStateList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    
                    <el-col :span="24" class="item-title">预算信息  V4.0</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入" prop="projSaleName">
                                <el-input v-model="salesInfo.projSaleName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="净收入" prop="projSaleLinemgr">
                                <el-input v-model="salesInfo.projSaleLinemgr"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="税金" prop="remark">
                            <el-input v-model="salesInfo.remark"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="24">
                        <el-form-item label="人力成本" prop="remark">
                            <el-input v-model="salesInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="费用成本" prop="remark">
                            <el-input v-model="salesInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="总成本" prop="remark">
                            <el-input v-model="salesInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="毛利率" prop="remark">
                            <el-input v-model="salesInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="预算状态" prop="remark">
                            <el-input v-model="salesInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="提交日期" prop="projPreconDate">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="salesInfo.projPreconDate"
                                 :editable="false"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="版本" prop="remark">
                            <el-input v-model="salesInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-col :span="24" class="item-title">预算明细</el-col>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                  <el-menu-item index="1">总表</el-menu-item>
                  <el-menu-item index="2">人力</el-menu-item>
                  <el-menu-item index="3">分包</el-menu-item>
                  <el-menu-item index="3">费用</el-menu-item>
                  <el-menu-item index="3">收入</el-menu-item>
                </el-menu>
                <template>
                    <div class="tableBudget" id="tableBudget" v-if="activeIndex=='1'">
                        <div class="tableBudgetBox" id="tableBudgetBox">
                            <ul>
                                <li>&nbsp</li>
                                <li>人力成本</li>
                                <li>费用成本</li>
                                <li>收入</li>
                                <li>净收入</li>
                                <li>税金</li>
                                <li>总成本</li>
                            </ul>
                            <ul v-for="item in timePro">
                                <li>{{item.time}}</li>
                                <li>{{item.manpower}}</li>
                                <li>{{item.cost}}</li>
                                <li>{{item.income}}</li>
                                <li>{{item.netIncome}}</li>
                                <li>{{item.taxes}}</li>
                                <li>{{item.allCost}}</li>
                            </ul>
                        </div>
                    </div>
                    <div v-if="activeIndex=='2'">
                        <div class="tableBtn">
                            <el-button class="btn-default" type="primary">添加人员</el-button>
                            <el-button class="btn-default" type="primary">TBD</el-button>
                            <el-button class="btn-default" type="primary">重新计算</el-button>
                            <el-button class="btn-default" type="primary">导入</el-button>
                            <el-button class="btn-default" type="primary">导出</el-button>
                        </div>
                        <div class="tableBudgetBoxTwo sp-grid-import" id="tableBudgetBoxTwo">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <th>部门</th>
                                        <th>员工号</th>
                                        <th>姓名</th>
                                        <th>职级</th>
                                        <th>总成本</th>
                                        <th>总工时</th>
                                        <th v-for="item in tableData[0].history">{{item.time}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in tableData">
                                        <td>{{item.section}}</td>
                                        <td>{{item.employeeNu}}</td>
                                        <td>{{item.name}}</td>
                                        <td>{{item.rank}}</td>
                                        <td>{{item.allAount}}</td>
                                        <td>{{item.allTime}}</td>
                                        <td v-for="itemHis in item.history">{{itemHis.result}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
	import current from "../../../common/current_position.vue";
    import api from "../../../../common/api/api.js"
    // let { queryProjAndSalesInfo,queryProjImpleInfo} = api
	export default {
		data() {
			return{
                //表格
                activeIndex: '1',
                timePro:[
                    {
                        time:"2017",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    },
                    {
                        time:"2018",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    },
                    {
                        time:"2018",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    },
                    {
                        time:"2018",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    },
                    {
                        time:"2017",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    },
                    {
                        time:"2018",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    },
                    {
                        time:"2018",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    },
                    {
                        time:"2018",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    },
                    {
                        time:"2017",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    },
                    {
                        time:"2018",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    },
                    {
                        time:"2018",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    },
                    {
                        time:"2018",
                        manpower:100,
                        cost:200,
                        income:100,
                        netIncome:100,
                        taxes:100,
                        allCost:100,
                    }
                ],
                tableData:[
                    {
                      section:"技术部",
                      employeeNu:"001",
                      name:"aduker",
                      rank:"B级",
                      allAount:30000,
                      allTime:"40小时",
                      history:[
                        {
                            time:2017,
                            result:2035,
                        },
                        {
                            time:2017,
                            result:2035,
                        },
                        {
                            time:2017,
                            result:2035,
                        },
                      ]
                    }
                ],
                searchInfo:{},
                tableList:[
                    {
                        projImpDepno:'1002',
                        oppoNo:'1003223',
                        projNo:'1002020',
                        projName:'赚钱项目',
                        projStatus:'01',
                        projIncmType:'02',
                        projIncmConfim:'03',
                        projSaleName:'周杰伦',
                        projSaleLinemgr:'马经理',
                        projImpBegdate:'2017-12-12',
                        projImpEndate:'2017-12-13'
                    }
                ],
                salesInfo:{
                    oppoNo:'',
                    projName:'',
                    projNo:'',
		            coocustNo:'',
                    projSrvMngmode:'',
                    projType:'',
                    projIncmConfim:'',
                    projPreconAmt:'',
                    projOrdType:'',
                    projImplePla:'',
                    projPreconDate:'',
                    projPreincmDate:'',
                    projIncmType:'',
                    projConno:'',
                    projState:'',
                    projSaleName:'',
                    projSaleLinemgr:'',
                    remark:''
                },
                projImpleInfo:{
                    projImpDepname:'',
                    projImpDepno:'',
                    projImpCcc:'',
                    projImpStep:'',
                    projImpPm:'',
                    projImpMgr:'',
		            projImpBegdate:'',
                    projImpEndate:'',
                    projImpDesc:''
		
                },
                //服务管理模式列表
				projSrvMngmodeList: [
					{paraValue: '01',paraShowMsg: '项目外包'},
					{paraValue: '02',paraShowMsg: '人力外包'},
					{paraValue: '03',paraShowMsg: '解决方案'},
					{paraValue: '04',paraShowMsg: '其他'}
                ],
                //项目类型列表
                projTypeList: [
					{paraValue: '01',paraShowMsg: '应用系统开发'},
					{paraValue: '02',paraShowMsg: '软件产品开发'},
					{paraValue: '03',paraShowMsg: '应用维护升级'},
					{paraValue: '04',paraShowMsg: '系统集成'},
					{paraValue: '05',paraShowMsg: '信息系统安全'},
					{paraValue: '06',paraShowMsg: '咨询服务'},
					{paraValue: '07',paraShowMsg: '其他'},
                ],
                //收入确认类型列表
                incmConfimList: [
                    {paraValue: '01',paraShowMsg: '外包'},
					{paraValue: '02',paraShowMsg: '固定金额'},
                ],
                //收入类型列表
				projIncmTypeList: [
					{paraValue: '01',paraShowMsg: 'Pipeline'},
					{paraValue: '02',paraShowMsg: 'EATP'},
					{paraValue: '03',paraShowMsg: 'Frotlog'},
					{paraValue: '04',paraShowMsg: 'Backlog'}
                ],
                //实施进度列表
                projImpStepList: [
                    {paraValue: '01',paraShowMsg: 'NEW'},
					{paraValue: '02',paraShowMsg: '需求分析'},
					{paraValue: '03',paraShowMsg: '设计阶段'},
					{paraValue: '04',paraShowMsg: '开发阶段'},
					{paraValue: '05',paraShowMsg: '测试阶段'},
					{paraValue: '06',paraShowMsg: '完成上线'},
					{paraValue: '07',paraShowMsg: '验收阶段'},
					{paraValue: '08',paraShowMsg: 'END'},
                ],
                //订单类型列表
                projOrdTypeList: [
                    {paraValue: '01',paraShowMsg: 'new sell'},
					{paraValue: '02',paraShowMsg: 'Up sell'},
					{paraValue: '03',paraShowMsg: 'Renew'}
                ],
                //项目状态列表
                projStateList: [
                    {paraValue: '01',paraShowMsg: '售前'},
					{paraValue: '02',paraShowMsg: '实施'},
					{paraValue: '03',paraShowMsg: '结束'}
                ],
                //客户列表
                coocustNoList: [
                    {paraValue: '01',paraShowMsg: '客户1'},
					{paraValue: '02',paraShowMsg: '客户2'},
					{paraValue: '03',paraShowMsg: '客户3'}
                ],
                rules1: {
                    oppoNo: [

                    ],
                    projName:[
                        { required: true, message: '项目名称不能为空', trigger: 'blur' }
                    ],
                    projNo:[
                        { required: true, message: '项目编号不能为空', trigger: 'blur' }
                    ],
		            coocustNo:[
                        { required: true, message: '客户不能为空', trigger: 'blur' }
                    ],
                    projSrvMngmode:[
                        { required: true, message: '服务管理模式不能为空', trigger: 'blur' }
                    ],
                    projType:[
                        { required: true, message: '项目类型不能为空', trigger: 'blur' }
                    ],
                    projIncmConfim:[
                        { required: true, message: '收入确认类型不能为空', trigger: 'blur' }
                    ],
                    projPreconAmt:[
                        { required: true, message: '预计合同金额不能为空', trigger: 'blur' }
                    ],
                    projOrdType:[
                        { required: true, message: '订单类型不能为空', trigger: 'blur' }
                    ],
                    projImplePla:[
                        { required: true, message: '项目交付地不能为空', trigger: 'blur' }
                    ],
                    projPreconDate:[
                        { required: true, message: '预计合同签订时间不能为空', trigger: 'change' }
                    ],
                    projPreincmDate:[
                        { required: true, message: '预计收入时间不能为空', trigger: 'change' }
                    ],
                    projIncmType:[
                        { required: true, message: '收入类型不能为空', trigger: 'blur' }
                    ],
                    projConno:[
                        // { required: true, message: '合同编号不能为空', trigger: 'blur' }
                    ],
                    projState:[
                        { required: true, message: '项目状态不能为空', trigger: 'blur' }
                    ],
                    projSaleName:[
                        { required: true, message: '销售不能为空', trigger: 'blur' }
                    ],
                    projSaleLinemgr:[
                        { required: true, message: '销售主管不能为空', trigger: 'blur' }
                    ],
                    remark:[
                        { min: 0, max: 512, message: '长度在 0 到 512 个字符之间', trigger: 'blur' }
                    ]
                },
                rules2: {
                    projImpDepname:[
                         { required: true, message: '部门中心不能为空', trigger: 'blur' }
                    ],
                    projImpDepno:[
                         { required: true, message: '部门编号不能为空', trigger: 'blur' }
                    ],
                    projImpCcc:[
                         { required: true, message: '成本中心不能为空', trigger: 'blur' }
                    ],
                    projImpStep:[
                         { required: true, message: '实施进度不能为空', trigger: 'blur' }
                    ],
                    projImpPm:[
                        //  { required: true, message: '项目经理不能为空', trigger: 'blur' }
                    ],
                    projImpMgr:[
                        //  { required: true, message: '项目主管不能为空', trigger: 'blur' }
                    ],
		            projImpBegdate:[
                        //  { required: true, message: '计划开始时间不能为空', trigger: 'blur' }
                    ],
                    projImpEndate:[
                        //  { required: true, message: '计划结束时间不能为空', trigger: 'blur' }
                    ],
                    projImpDesc:[
                        //  { required: true, message: '项目说明不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        created(){
            //查询项目信息详情
            // this.queryProjAndSalesInfo();
            //查询项目实施信息详情
            // this.queryProjImpleInfo();
            //查询收入金额列表
            //this.queryprojIncmTypeList()
			//查询收入确认金额列表
            // this.queryincmConfimList();
            //查询项目类型列表
            // this.queryprojTypeList()
		},
        mounted(){
           this.ulWidth("tableBudget");
           //this.ulWidth("tableBudgetTwo");
        },
        methods:{
            //表格方法
            handleSelect(key, keyPath) {
                this.activeIndex=key;
                console.log(key, keyPath);
            },
            //计算ul的宽度
            ulWidth(tableBudgetBoxId){
                 //alert(111)
                let tableBudget=document.getElementById(tableBudgetBoxId);
                let tableBudgetBox=document.getElementById("tableBudgetBox");
                let ul=tableBudgetBox.getElementsByTagName("ul");
                console.log(tableBudget.offsetWidth);
                let allWidth=this.timePro.length;
                if(tableBudgetBox.offsetWidth<tableBudget.offsetWidth){
                    let widthUl=tableBudget.offsetWidth/(this.timePro.length+1);
                    for (var i = 0; i < ul.length; i++) {
                        ul[i].style.width=widthUl+"px";
                    }
                    tableBudgetBox.style.width=widthUl*(this.timePro.length+1)+"px";
                }
            },
            save() {
                let self = this;
				self.$refs.salesInfo.validate(valid => {
			        if (valid) {
			          	self.$refs.projImpleInfo.validate(valid => {
                              console.log('valid')
                            let params = {

                            }
                            //更新
                            self.updatedProjInfo(params);
						})
					}
				})
            },
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
            updatedProjInfo(params) {
				const self = this;
				self.$axios.put( api.updateProjInfo,params)
				.then((res) => {
					console.log('updated', res);
					if(res.data.code=="S00000"){
			        	self.$message({ message: '操作成功', type: 'success' });
			        	self.$router.push('/preCheck_query');
					} else {
						console.log('error');
					}
				})
				.catch((err) => {
					console.log('error');
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
        },
		components: {
			current
		},
		computed: {
			
		}
	};
</script>
<style scoped>
.tableBudget {
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
    height: 260px;
}
.tableBudgetBox{
    width: 900px;
}
.tableBudget ul{
    float:left;
    width: 85px;
}
.tableBudget ul li{
    line-height:20px;
    padding:8px 12px;
    font-size: 14px;
    border-bottom:1px solid #E1E6EB; border-left:1px solid #E1E6EB; white-space: nowrap; text-align:center; font-weight:normal !important;letter-spacing:1px;
}
.tableBudget ul:last-child{
    border-right:1px solid #E1E6EB;
}

.tableBtn{
    padding: 15px 0px;
}
.sp-grid-import{border-collapse: collapse;width:100%; border:1px solid #E1E6EB; border-left:none; width: 100%; overflow-x: scroll;}
.sp-grid-import thead th{line-height:20px;padding:8px 12px; border-bottom:1px solid #E1E6EB; border-left:1px solid #E1E6EB; white-space: nowrap; text-align:center; font-weight:normal !important;letter-spacing:1px;font-size:14px;}
.sp-grid-import tbody td{text-align: center;line-height:20px;padding:8px 10px;font-size:14px;border-bottom:1px solid #E1E6EB; border-left:1px solid #E1E6EB;}
</style>