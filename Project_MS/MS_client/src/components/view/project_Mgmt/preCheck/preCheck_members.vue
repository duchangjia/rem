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
                    <el-button class="btn-default">添加人员</el-button>
                    <el-button class="btn-default" :disabled="checkFlag" @click="batchOut()">批量退出</el-button>
                        
                    <el-button class="btn-default" :disabled="checkFlag" @click="batchIn()">批量重新进入</el-button>
                        <el-dialog title="请选择计划进出时间" :visible.sync="dialogFormVisible" width="25%" class="sm-dialog">
                            <el-form label-width="110px">
                                <el-form-item label="计划进入时间" v-show="isIn">
                                    <el-date-picker
                                        type="date"
                                        placeholder="选择日期"
                                    >
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="计划退出时间" >
                                    <el-date-picker
                                        type="date"
                                        placeholder="选择日期"
                                    >
                                    </el-date-picker>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false" class="btn-default">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false" class="btn-primary">确 定</el-button>
                            </div>
                        </el-dialog>
                    <el-button class="btn-default" @click="dialogTableVisible=true">进出详情</el-button>
                        <el-dialog title="进出详情" :visible.sync="dialogTableVisible">
                            <el-table :data="tableList" stripe>
                                <el-table-column property="projImpDepno" label="员工" width="150"></el-table-column>
                                <el-table-column property="projImpDepno" label="时间" width="200"></el-table-column>
                                <el-table-column property="projImpDepno" label="进出说明"></el-table-column>
                            </el-table>
                        </el-dialog>
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
                ],
                dialogTableVisible:false,
                dialogFormVisible:false,
                checkFlag:false,
                isIn:false
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
            batchOut(){
                let self = this;
                    self.dialogFormVisible = true
                    self.isIn =false
            },
            batchIn(){
                let self = this;
                    self.dialogFormVisible = true
                    self.isIn = true
            },
            handleCurrentChange(val){
                console.log(val)
            },
            saveItem(row, event, column){
                window.localStorage.setItem('preCheckOppoNo',row.oppoNo);
            },
           handleSelectionChange(val) {
               console.log(val)
               let self = this;
            //    self.checkFlag = false;
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
    .sm-dialog{
        .el-dialog__body{
            padding-bottom:0;
            padding-top:20px;
            .el-form-item{
                margin-bottom:20px !important;
            }
        }

        .dialog-footer{
            text-align:center;
            padding-bottom:10px;
        }
    }
</style>