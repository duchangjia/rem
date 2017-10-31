<template>
	<div class="content_wrap">
		<current yiji="考勤管理" erji="考勤记录管理"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">考勤记录管理</span>
				<!--<el-button type="primary" class="title_button" @click="handleImport()">导入</el-button>-->
				<div class="imExport-btn">
					<!--<span class="icon-import" @click="handleImport"></span>-->
					<el-upload class="upload-demo imExport-btn-item" :on-change="handleChange" :before-upload="beforeAvatarUpload" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
                        <span class="icon-import" slot="trigger" @click="handleImport"></span>
                   	</el-upload>
					<span class="icon-export imExport-btn-item" @click="handleExport"></span>
					<span class="icon-download imExport-btn-item" @click="handleDownloadTemplate"></span>
				</div>
				
			</div>
			<div class="content-inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
					<div class="input-wrap">
						<el-form-item label="公司" prop="compName">
							<el-select v-model="comp" value-key="compOrgNo" placeholder="所属公司" @change="changeValue">
								<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="部门" prop="departName">
							<el-select v-model="depart" value-key="departOrgNo" placeholder="所属部门" @change="changeValue">
								<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="工号" prop="userNo">
							<el-input type="text" v-model="ruleForm2.userNo" placeholder="工号"></el-input>
						</el-form-item>
						<el-form-item label="考勤开始时间" prop="startDate" label-width="100px">
							<el-date-picker
						      v-model="ruleForm2.startDate"
						      type="date"
						      placeholder="选择日期"
						      :picker-options="pickerOptions0" @change="changeStartTime">
						   </el-date-picker>
						</el-form-item>
						<el-form-item label="考勤结束时间" prop="endDate" label-width="100px">
							<el-date-picker
						      v-model="ruleForm2.endDate"
						      type="date"
						      placeholder="选择日期"
						      :picker-options="pickerOptions0" @change="changeEndTime">
						   </el-date-picker>
						</el-form-item>
					</div>
					<div class="button-wrap">
						<el-button class="resetform" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button type="primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<div class="info">
					<el-table :data="transferDataList" border stripe style="width: 100%">
						<el-table-column prop="userNo" label="工号"></el-table-column>
						<el-table-column prop="userName" label="姓名"></el-table-column>
						<el-table-column prop="attenceTime" label="考勤日期"></el-table-column>
						<el-table-column prop="attenceType" label="类型" :formatter="attenceTypeFormatter"></el-table-column>
						<el-table-column prop="projNo" label="项目ID"></el-table-column>
						<el-table-column prop="taskTime" label="工时"></el-table-column>
						<el-table-column prop="luruBy" label="录入人"></el-table-column>
						<el-table-column prop="luruDate" label="录入时间" width="150"></el-table-column>
					</el-table>
				</div>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageRows" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageRows">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../../common/current_position.vue'
export default {
	data() {
		return {
			pickerOptions0: {
	          disabledDate(time) {
	            return time.getTime() < Date.now() - 8.64e7;
	          }
	       	},
			pageIndex: 1,
			pageRows: 5,
			totalRows: 2,
			ruleForm2: {
				compOrgNo: '',
				departOrgNo: '',
				userNo: "",
				startDate: "",
				endDate: ''
			},
			comp: {
				compName: '',
				compOrgNo: ''
			},
			depart: {
				departName: '',
				departOrgNo: ''
			},
			//部门列表
			departList: [
				{departName: "上海魔方分公司",departOrgNo: '01'},
				{departName: "魔方分公司深圳分公司",departOrgNo: 'p1'},
				{departName: "深圳前海橙色魔方信息技术有限公司",departOrgNo: '0'}
			],
			//公司列表
			compList: [
				{compName: "上海魔方分公司",compOrgNo: '01'},
				{compName: "魔方分公司深圳分公司",compOrgNo: 'p1'},
				{compName: "深圳前海橙色魔方信息技术有限公司",compOrgNo: '0'}
			],
			transferDataList: [
				{
					attenceNo: "001001",//考勤编号
					userNo: "p011111",//用户编号 
					userName: "sdsd",
					attenceTime: "2017-09-09",//考勤日期 
					attenceType: "01",//考勤类型	
					projNo: "3221",//项目ID
					taskTime: "8",//工时
					attenceStatus: "xx",//状态
					remark: "xx",//备注	
					luruBy: "xxx",
					luruDate: "xxxxx"
				},
				{
					attenceNo: "001001",//考勤编号
					userNo: "p011111",//用户编号 
					userName: "sdsd",
					attenceTime: "",//考勤日期 
					attenceType: "02",//考勤类型	
					projNo: "",//项目ID
					taskTime: "",//工时
					attenceStatus: "",//状态
					remark: ""//备注	
				}
			],
			rules: {
				compName: [],
				departName: []
			}
		}
	},
	components: {
		current
	},
	methods: {
		attenceTypeFormatter(row, column) {
//	      return row.attenceType == '01' ? "迟到早退" : row.attenceType == 0 ? "停用" : "锁定";
	    	let attence = '';
	    	switch(row.attenceType){
				case '01':
				  attence = '迟到早退'
				  break;
				case '02':
				  attence = '旷工'
				  break;
				case '03':
				  attence = '事假'
				  break;
				case '04':
				  attence = '病假'
				  break;
				case '05':
				  attence = '产假'
				  break;
				default:
				  
			}
	    	return attence;
		},
		handleChange(file, fileList) {
//		    this.fileList3 = fileList.slice(-3);
			console.log(file);
      	},
		changeStartTime(val) {
			this.ruleForm2.startDate = val;
		},
		changeEndTime(val) {
			this.ruleForm2.endDate = val;
		},
		handleImport() {
			this.$router.push('/attendance_import');
		},
		changeValue(value) {
		 		const self = this;
	            console.log('value',value);
	   	},
		beforeAvatarUpload(file) {
			console.log("before",file)
		},
		//查询
		queryForm(formName) {
			const self = this;
			console.log(this.ruleForm2.startDate)
			self.$refs[formName].validate((valid) => {
				if (valid) {
					console.log('submit')
					
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		//重置
		resetForm() {
			this.comp = {};
			this.depart = {};
			this.ruleForm2.startDate = '';
			this.ruleForm2.endDate = '';
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			const self = this;
			let pageNum = val;
			let pageSize = self.pageRows;
			let params = {
				"pageNum": pageNum,
				"pageSize": pageSize
			}
			
		},
		//导入
		handleImport() {
			
		},
		//导出
		handleExport() {
			
		},
		//下载模版
		handleDownloadTemplate() {
			
		},
		queryUserList(pageNum,pageSize,params) {
			let self = this;
			self.$axios.get(baseURL+'/user/queryUserList', {params: params})
			.then(function(res) {
				console.log('UserList',res);
				self.transferDataList = res.data.data.models;
				self.pageIndex = pageNum;
				self.totalRows = Number(res.data.data.total);
			}).catch(function(err) {
				console.log(err);
			})
		}
	}
}
</script>

<style>
.imExport-btn {
	float: right;
	margin-top: 32px;
}
.imExport-btn .imExport-btn-item{
	display: inline-block;
	margin-left: 40px;
	cursor: pointer;
}
.icon-import {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/batch-import0.png);
}
.icon-export {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/batch-export0.png);
}
.icon-download {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/template-download0.png);
}
</style>