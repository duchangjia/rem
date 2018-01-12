<template>
    <div class="container-wrap">
        <current yiji="项目管理" erji="项目预算" sanji="项目预算编辑"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">项目预算编辑</span>
                <el-button type="primary" class="toolBtn btn-primary" @click="save">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form ref="proInfo" :inline="true"  :rules="rules1" :model="proInfo" label-width="140px">
                    <el-col :span="24" class="item-title">项目信息</el-col>
                   <!--   -->
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目名称" prop="projName">
                            <el-input v-model="proInfo.projName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目编号" prop="projNo">
                                <el-input v-model="proInfo.projNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门"  prop="section">
                            <el-select v-model="proInfo.section">
                                <el-option v-for="item in sectionList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                       <el-form-item label="项目经理" prop="proManage">
                            <el-input v-model="proInfo.proManage"></el-input>
                       </el-form-item>
                   </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="服务管理模式" prop="projSrvMngmode">
                            <el-select v-model="proInfo.projSrvMngmode">
								<el-option v-for="item in projSrvMngmodeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入确认类型" prop="projIncmConfim">
                            <el-select v-model="proInfo.projIncmConfim">
                                <el-option v-for="item in incmConfimList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划开始时间" prop="proStartDate">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="proInfo.proStartDate"
                                 :editable="false"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划结束时间" prop="proEndDate">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="proInfo.proEndDate"
                                 :editable="false"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入类型" prop="projIncmType">
                            <el-select v-model="proInfo.projIncmType">
                                <el-option v-for="item in projIncmTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目状态" prop="projState">
                            <el-select v-model="proInfo.projState">
                                <el-option v-for="item in projStateList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="24" class="item-title">预算信息  V4.0</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入" prop="income">
                                <el-input v-model="budgetInfo.income"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="净收入" prop="netIncome">
                                <el-input v-model="budgetInfo.netIncome"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="税金" prop="taxes">
                            <el-input v-model="budgetInfo.taxes"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="人力成本" prop="humanCost">
                            <el-input v-model="budgetInfo.humanCost"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="费用成本" prop="expenseGost">
                            <el-input v-model="budgetInfo.expenseGost"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="总成本" prop="totalCost">
                            <el-input v-model="budgetInfo.totalCost"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="毛利率" prop="grossProfitRate">
                            <el-input v-model="budgetInfo.grossProfitRate"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预算状态" prop="budgetState">
                            <el-input v-model="budgetInfo.budgetState"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="提交日期" prop="submitDate">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="budgetInfo.submitDate"
                                 :editable="false"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="版本" prop="release">
                            <el-input v-model="budgetInfo.release"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <div style="overflow:hidden;">
                    <el-col :span="24" class="item-title">预算明细</el-col>
                </div>
                <el-menu active-text-color="#FF9900" :default-active="activeIndex" class="el-menu-demo nowhite" mode="horizontal" @select="handleSelect">
                  <el-menu-item index="1">总表</el-menu-item>
                  <el-menu-item index="2">人力</el-menu-item>
                  <el-menu-item index="3">分包</el-menu-item>
                  <el-menu-item index="4">费用</el-menu-item>
                  <el-menu-item index="5">收入</el-menu-item>
                </el-menu>
                <template>
                    <div class="tableBudget" id="tableBudget" v-show="activeIndex=='1'">
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
                    <div v-if="activeIndex=='3'">
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
                    <div v-if="activeIndex=='4'">
                        <div class="tableBudgetBoxTwo sp-grid-import" id="tableBudgetBoxTwo">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <th>公司</th>
                                        <th>类型</th>
                                        <th>合计</th>
                                        <th v-for="item in tableDataAount[0].history">{{item.time}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in tableDataAount">
                                        <td>{{item.section}}</td>
                                        <td>{{item.employeeNu}}</td>
                                        <td>{{item.name}}</td>
                                        <td v-for="itemHis in item.history">{{itemHis.result}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div v-if="activeIndex=='5'">
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
                                        <th>总收入</th>
                                        <th>预计收入</th>
                                        <th>单价</th>
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
                                        <td>{{item.price}}</td>
                                        <td v-for="itemHis in item.history">{{itemHis.result}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </template>
                <div style="overflow:hidden;">
                    <el-col :span="24" class="item-title">说明</el-col>
                    <el-col :span="6" class="item-title">收入=税前收入（预算收入）</el-col>
                    <el-col :span="6" class="item-title">净收入=收入*0.94</el-col>
                    <el-col :span="6" class="item-title">税金=收入*0.06</el-col>
                    <el-col :span="6" class="item-title">人力成本=职级成本*工时</el-col>
                    <el-col :span="6" class="item-title">费用成本=预算费用</el-col>
                    <el-col :span="6" class="item-title">总成本=人力成本+费用成本</el-col>
                    <el-col :span="6" class="item-title">毛利率（PGM）=（净收入- 总成本）/净收入*100%</el-col>
                </div>
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
                //总表
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
                //人力
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
                //费用
                tableDataAount:[
                    {
                      section:"技术部",
                      employeeNu:"001",
                      name:"aduker",
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
                //收入
                tableData:[
                    {
                      section:"技术部",
                      employeeNu:"001",
                      name:"aduker",
                      rank:"B级",
                      allAount:30000,
                      allTime:"40",
                      price:"35",
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
                proInfo:{
                    projName:'',
                    oppoNo:'',
                    section:'',
                    proManage:'',
                    projSrvMngmode:'',
                    projNo:'',
                    projIncmConfim:'',
                    proStartDate:'',
                    proEndDate:'',
                    projIncmType:'',
                    projState:'',
                },
                budgetInfo:{
                    income:'',
                    netIncome:'',
                    taxes:'',
                    humanCost:'',
                    expenseGost:'',
                    totalCost:'',
                    grossProfitRate:'',
                    release:'',
                    budgetState:'',
                    submitDate:'',
                },
                //部门列表
                sectionList: [
                    {paraValue: '01',paraShowMsg: '部门1'},
                    {paraValue: '02',paraShowMsg: '部门2'},
                    {paraValue: '03',paraShowMsg: '部门3'}
                ],
                //服务管理模式列表
				projSrvMngmodeList: [
					{paraValue: '01',paraShowMsg: '项目外包'},
					{paraValue: '02',paraShowMsg: '人力外包'},
					{paraValue: '03',paraShowMsg: '解决方案'},
					{paraValue: '04',paraShowMsg: '其他'}
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
                 //项目状态列表
                projStateList: [
                    {paraValue: '01',paraShowMsg: '售前'},
                    {paraValue: '02',paraShowMsg: '实施'},
                    {paraValue: '03',paraShowMsg: '结束'}
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
				self.$refs.proInfo.validate(valid => {
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
			/*queryProjAndSalesInfo() {
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
            },*/
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