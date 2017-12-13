<template>
	<div class="query_wrapper">
        <current yiji="项目管理" erji="项目一览" sanji="成员管理"></current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
                <span class="title-text">成员管理</span>
                
            </div>
            <div class="queryContent_inner clearfix">
                <el-form :inline="true">
                    <el-col :span="6">
                        <el-form-item label="工号/姓名">
                            <el-input   placeholder="工号/姓名" v-model="searchInfo.oppoNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="状态">
                            <el-select class="search_common" v-model="searchInfo.projState">
                                <el-option label="执行中：ongoing" value="01"></el-option>
                                <el-option label="退出:out" value="02"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item>
                            <el-button class="resetform btn-default" @click="resetForm()">重置</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="btn-primary" @click="search()">查询</el-button>
                        </el-form-item>
                    </el-col>  
                </el-form>
                <div class="table-button-box">
                    <el-button class="btn-primary">添加人员</el-button>
                    <el-button class="btn-primary">批量退出</el-button>
                    <el-button class="btn-primary">批量重新进入</el-button>
                    <el-button class="btn-primary">进出详情</el-button>
                </div>
                <el-table stripe 
                    :data="tableList" 
                    class="table-nopad"
                    @row-click="saveItem"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column
                        type="selection"
                        width="55">
                    </el-table-column>
                    <el-table-column align="center" prop="projImpDepno" label="部门">
                    </el-table-column>
                    <el-table-column align="center" prop="oppoNo" label="工号" >
                    </el-table-column>
                    <el-table-column align="center" prop="projNo" label="姓名">
                    </el-table-column>
                    <el-table-column align="center" prop="projName" label="计划进入时间" >
                    </el-table-column>
                    <el-table-column align="center" prop="projStatus" label="计划退出时间">
                    </el-table-column>
                    <el-table-column align="center" prop="projIncmType" label="职级" >
                    </el-table-column>
                    <el-table-column align="center" prop="projIncmConfim" label="状态" >
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
    let { queryProjList } = api
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
                        projIncmConfim:'03',
                        projSaleName:'周杰伦',
                        projSaleLinemgr:'马经理',
                        projImpBegdate:'2017-12-12',
                        projImpEndate:'2017-12-13'
                    },
                    {
                        projImpDepno:'1002',
                        oppoNo:'100XXX',
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
                pagination:{
                    pageSize:10,
                    total:20
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
        mounted(){
           let self = this;
		},
        methods:{
            resetForm(){
                let self = this;
                self.searchInfo = {};
            },
            search(){
                let self = this,
                    params = self.searchInfo;
                    console.log(params);
                // self.$axios.get(queryProjList).then(res=>{
                //     console.log(res);
                // }).catch(e=>{

                // })
            },
            handleCurrentChange(val){
                console.log(val)
            },
            saveItem(row, event, column){
                window.localStorage.setItem('preCheckOppoNo',row.oppoNo);
            },
           handleSelectionChange(val) {
               console.log(val)
            }
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