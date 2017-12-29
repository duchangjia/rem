<template>
	<div class="query_wrapper">
        <current yiji="业务管理" erji="部门预算一览"></current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
                <span class="title-text">部门预算一览</span>
            </div>
            <div class="queryContent_inner clearfix">
                <el-form :inline="true">
                    <el-col :span="9">
                        <el-form-item label="机会号／项目编号／名称" class="large-label">
                            <el-input class="search_large"  placeholder="机会号／项目编号／名称" v-model="searchInfo.oppoNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="项目状态">
                            <el-select class="search_common" v-model="searchInfo.projState">
                                <el-option label="售前" value="01"></el-option>
                                <el-option label="实施中:未确认合同" value="02"></el-option>
                                <el-option label="实施中:合同签署中" value="03"></el-option>
                                <el-option label="结束" value="04"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="项目类型">
                            <el-select class="search_common" v-model="searchInfo.projType">
                                <el-option label="应用系统开发" value="01"></el-option>
                                <el-option label="软件产品开发" value="02"></el-option>
                                <el-option label="应用维护升级" value="03"></el-option>
                                <el-option label="系统集成" value="04"></el-option>
                                <el-option label="信息系统安全" value="05"></el-option>
                                <el-option label="咨询服务" value="06"></el-option>
                                <el-option label="其他" value="07"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <div class="queryButton_wrapper">
                        <el-button class="resetform btn-default" @click="resetForm()">重置</el-button>
                        <el-button class="btn-primary" @click="search()">查询</el-button>
                    </div>   
                </el-form>
                <el-table stripe border :data="tableList" class="table-nopad">
                    <el-table-column align="center" prop="projImpDepno" label="部门编号">
                    </el-table-column>
                    <el-table-column align="center" prop="oppoNo" label="机会号" >
                    </el-table-column>
                    <el-table-column align="center" prop="projNo" label="项目编号">
                    </el-table-column>
                    <el-table-column align="center" prop="projName" label="项目名称" >
                    </el-table-column>
                    <el-table-column align="center" prop="projStatus" label="项目状态" :formatter="projStatusFormatter">
                    </el-table-column>
                    <el-table-column align="center" prop="projIncmConfim" label="收入确认类型" :formatter="projIncmConfimFormatter">
                    </el-table-column>
                    <el-table-column align="center" prop="projSaleName" label="销售" >
                    </el-table-column>
                    <el-table-column align="center" prop="projImpBegdate" label="预计开始日期">
                    </el-table-column>
                    <el-table-column align="center" prop="projImpEndate" label="预计结束日期">
                    </el-table-column>
                    <el-table-column align="center"  label="操作">
                        <template scope="scope">
                            <span class="c-primary cur-pointer" @click="goDetail(scope.row)">
                                详情
                            </span>
                        </template>
                    </el-table-column>
                </el-table> 
                <el-pagination
                    @current-change="handleCurrentChange"
                    :page-size="pagination.pageSize"
                    :total="pagination.total"
                    layout="total,prev, pager, next, jumper"
                    >
                </el-pagination>    
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
    import api from "../../../../common/api/api.js"
	export default {
		data() {
			return{
                searchInfo:{},
                tableList:[
                    {
                        projImpDepno:'1002',
                        oppoNo:'1003223',
                        projNo:'1002020',
                        projName:'赚钱项目',
                        projStatus:'01',
                        projIncmType:'02',
                        projIncmConfim:'02',
                        projSaleName:'周杰伦',
                        projSaleLinemgr:'马经理',
                        projImpBegdate:'2017-12-12',
                        projImpEndate:'2017-12-13'
                    }
                ],
                pagination:{
                    pageNum: 1,
                    pageSize:10,
                    total:1
                },
                dropDownList:[
                    {
                        name:'项目详情',
                        url:'/preCheck_detail'
                    },
                    {
                        name:'项目编辑',
                        url:'/preCheck_edit'
                    },
                    {
                        name:'成员管理',
                        url:'/preCheck_members'
                    },
                    {
                        name:'项目阶段',
                        url:'/preCheck_stage'
                    },
                    {
                        name:'项目分包',
                        url:''
                    },
                    {
                        name:'项目结束',
                        url:'end'
                    }
                ]
            }
        },
        created(){
           let self = this;
           self.searchInfo = {};
           self.queryprojList();
		},
        methods:{
            projStatusFormatter(row, column) {
                return row.projStatus=='01' ? '售前' : row.projStatus=='02' ? '实施' : row.projStatus=='03' ? '结束' : '';
            },
            projIncmConfimFormatter(row, column) {
                return row.projIncmConfim=='01'? '外包' : row.projIncmConfim=='02' ? '固定金额' : '';
            },
            //重置
            resetForm(){
                let self = this;
                self.searchInfo = {};
            },
            //点击查询
            search(){
                let self = this;
                self.queryprojList();
            },
            //分页
            handleCurrentChange(val){
                console.log(val)
            },
            goDetail(row){
                let self = this;
                window.localStorage.setItem('preCheckOppoNo',row.oppoNo);
                self.$router.push('/budgetPreCheck_detail');
            },
            
            //查询项目一览列表
            queryprojList() {
                let self = this;
                let params = self.searchInfo;
                params.pageNum = self.pagination.pageNum;
                params.pageSize = self.pagination.pageSize;
                console.log('params', params);
                self.$axios.get(api.queryProjList, {params: params})
                .then((res) => {
                    console.log('tableList',res);
                    if(res.data.code === "S00000") {
                        self.tableList = res.data.data.models;
                        self.pagination.pageNum = params.pageNum;
                        self.pagination.total = Number(res.data.data.total);
                    }
                    
                }).catch((err) => {
                    console.log(err);
                })
            },
            //查询项目一览列表
            closeProj() {
                let self = this;
                let params = {
                    
                };
                console.log('params', params);
                self.$axios.get( api.closeProj, {params: params})
                .then((res) => {
                    console.log('tableList',res);
                    if(res.data.code === "S00000") {
                         self.$message({  type: 'success', message: '操作成功!' });   
                    }
                    
                }).catch((err) => {
                    console.log(err);
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

<style lang="scss">
    .queryContent_wrapper .queryContent_inner .table-nopad .cell{
        padding-left:0 !important;
        padding-right:0 !important;
    }
</style>