<template>
	<div class="transfer_wrap">
		<current yiji="人事事务" erji="人事调动" sanji="人事调动明细查询"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">人事调动明细查询</span>
				<el-button type="primary" class="title_button" @click="handleAddTransfer()">新增</el-button>
			</div>
			<div class="content-inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" label-width="70px" class="demo-ruleForm">
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
						<el-form-item label="开始时间" prop="startTime">
							<el-date-picker
						      v-model="ruleForm2.startTime"
						      type="date"
						      placeholder="选择日期"
						      :picker-options="pickerOptions0" @change="changeStartTime">
						   </el-date-picker>
						</el-form-item>
						<el-form-item label="结束时间" prop="endTime">
							<el-date-picker
						      v-model="ruleForm2.endTime"
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
						<el-table-column prop="workhisId" label="调动编号">
							<template scope="scope">
						        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.workhisId }}</span>
					      	</template>
						</el-table-column>
						<el-table-column prop="userNo" label="工号"></el-table-column>
						<el-table-column prop="userName" label="姓名"></el-table-column>
						<el-table-column prop="oldCompName" label="原公司名称"></el-table-column>
						<el-table-column prop="oldDepartName" label="原部门名称"></el-table-column>
						<el-table-column prop="shiftType" label="调动类型"></el-table-column>
						<el-table-column prop="diaodongDate" label="调动日期"></el-table-column>
						<el-table-column prop="shiftCameTime" label="调动生效日期" :formatter="travelTimeFormatter"></el-table-column>
						<el-table-column align="center" label="操作" width="150">
							<template scope="scope">
								<span class="icon_edit" @click="handleEdit(scope.$index, scope.row)"></span>
							</template>
						</el-table-column>
					</el-table>
				</div>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../../common/current_position.vue';
const baseURL = 'iem_hrm';
export default {
	data() {
		return {
			pickerOptions0: {
	          disabledDate(time) {
//	            return time.getTime() < Date.now() - 8.64e7;
	          }
	       	},
			pageNum: 1,
			pageSize: 5,
			totalRows: 2,
			ruleForm2: {
				compOrgNo: '',
				departOrgNo: '',
				startTime: "",
				endTime: ''
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
					workhisId: "001001",
					userNo: "p011111",
					userName: "sdsd",
					oldCompName: "",
					oldDepartName: "",
					shiftType: "",
					diaodongDate: "",
					shiftCameTime: ""
				},
				{
					workhisId: "001001",
					userNo: "p011111",
					userName: "sdsd",
					oldCompName: "xx",
					oldDepartName: "xxx",
					shiftType: "xx",
					diaodongDate: "xx",
					shiftCameTime: "xxx"
				}
			],
			rules: {
				compName: [],
				departName: []
			}
		};
	},
	components: {
		current
	},
	created() {
		const self = this;
		let pageNum = self.pageNum;
		let pageSize = self.pageSize;
		let userNo = self.$route.params.userNo;
		let params = {
			"pageNum": pageNum,
			"pageSize": pageSize,
			userNo: userNo
		}
		//查询调动列表
		self.queryCustShifthisList(pageNum,pageSize,params);
	},
	methods: {
		add0(m){return m<10?'0'+m:m },
		getLocalTime(shijianchuo) {     
	       	var time = new Date(shijianchuo);
			var y = time.getFullYear();
			var m = time.getMonth()+1;
			var d = time.getDate();
			var h = time.getHours();
			var mm = time.getMinutes();
			var s = time.getSeconds();
			return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);      
	    },  
		travelTimeFormatter(row, column) {
			let time = row.shiftCameTime;
			return time?this.getLocalTime(time):null;
		},
		changeStartTime(val) {
			this.ruleForm2.startTime = val;
		},
		changeEndTime(val) {
			this.ruleForm2.endTime = val;
		},
		handleAddTransfer() {
			this.$router.push('/add_transfer');
		},
		changeValue(value) {
		 		const self = this;
	            console.log('value',value);
	    },
		handleEdit(index, row) {
			console.log('row:',row);
            this.$router.push({
            	name: "edit_transfer",
            	params: {
					userNo: row.userNo,
            		workhisId: row.workhisId
            	}
            });
		},
		handleInfo(index, row) {
			console.log('row:',row);
			this.$router.push({
				name: "transfer_info",
				params: {
					userNo: row.userNo,
					workhisId: row.workhisId
				}
			})
			
		},
		//查询
		queryForm(formName) {
			const self = this;
			console.log(this.ruleForm2.startTime)
			self.$refs[formName].validate((valid) => {
				if (valid) {
					console.log('submit')
					const self = this;
					let pageNum = self.pageNum;
					let pageSize = self.pageSize;
					let userNo = self.$route.params.userNo;
					let params = {
						"pageNum": pageNum,
						"pageSize": pageSize,
						userNo: userNo,
						workhisId: '',
						startTime: this.ruleForm2.startTime,
						endTime: this.ruleForm2.endTime
					}
					//条件查询调动列表
					self.queryCustShifthisList(pageNum,pageSize,params);
					
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
			this.ruleForm2.startTime = '';
			this.ruleForm2.endTime = '';
		},
		handleCurrentChange(val) {
			const self = this;
			let pageNum = val;
			let pageSize = self.pageSize;
			let userNo = self.$route.params.userNo;
			let params = {
				"pageNum": pageNum,
				"pageSize": pageSize,
				userNo: userNo
			}
			//查询调动列表
			self.queryCustShifthisList(pageNum,pageSize,params);
		},
		//人事调动列表查询
		queryCustShifthisList(pageNum,pageSize,params) {
			let self = this;
			self.$axios.get(baseURL+'/custShifthis/queryCustShifthisList', {params: params})
			.then(function(res) {
				console.log('CustShifthisList',res);
				self.transferDataList = res.data.data.list;
				self.pageNum = pageNum;
				self.totalRows = Number(res.data.data.total);
			}).catch(function(err) {
				console.log('error');
			})
		}
	}

}
</script>

<style>
	
.transfer_wrap {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.transfer_wrap .content {
	width: 100%;
	/*min-height: 530px;*/
	/*height: calc(100% - 90px);*/
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}

.transfer_wrap .content .title {
	border-bottom: 1px solid #EEEEEE;
}

.transfer_wrap .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
}

.transfer_wrap .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}
.transfer_wrap .title_button {
	float: right;
	margin-top: 20px;
}
.transfer_wrap .content-inner {
	padding: 40px 0px;
}

.transfer_wrap .el-form-item__label {
	text-align: left;
	vertical-align: middle;
	float: left;
	font-size: 14px;
	color: #999999;
	line-height: 1;
	padding: 11px 12px 11px 0;
	box-sizing: border-box;
}

.transfer_wrap .input-wrap .el-form-item {
	margin-right: 80px;
	float: left;
}

.transfer_wrap .el-form-item {
	margin-bottom: 40px;
}

.transfer_wrap .el-input,
.transfer_wrap .el-input__inner {
	width: 200px;
	display: inline-block;
}

.transfer_wrap .el-form-item__content {
	line-height: 36px;
	position: relative;
	font-size: 14px;
}

.transfer_wrap .button-wrap {
	margin: 0px auto 40px;
	width: 260px;
	clear: both;
	font-size: 0px;
}

.transfer_wrap .el-input__inner {
	border-radius: 4px;
	border: 1px solid #EEEEEE;
	color: #333333;
	padding: 19px 10px;
	transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
}

.transfer_wrap .el-input__inner:hover {
	border-color: #FF9900;
}

.transfer_wrap .el-button {
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	border: 1px solid #FF9900;
	color: #FF9900;
	/*margin: 0;*/
	padding: 12px 45px;
	border-radius: 0px;
}

.transfer_wrap .el-button.resetform {
	margin-right: 20px;
}

.transfer_wrap .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
/*.transfer_wrap .el-table {
	background-color: #fff;
	border-left: 1px solid #EEEEEE;
	color: #666666;
}

.transfer_wrap .el-table__footer-wrapper thead div,
.transfer_wrap .el-table__header-wrapper thead div {
	background-color: #f4f4f4;
	color: #666666;
}*/

.transfer_wrap .el-table td,
.transfer_wrap .el-table th {
	text-align: center;
}
.transfer_wrap .el-table td:first-child{
	cursor: pointer;
}
.transfer_wrap .link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.transfer_wrap .el-table td:first-child:hover{
	color: #FF9900;
}
/*.transfer_wrap .el-table--enable-row-hover .el-table__body tr:hover>td {
	background-color: #f8f8f8;
	background-clip: padding-box;
}

.transfer_wrap .el-table--striped .el-table__body tr.el-table__row--striped td {
	background: #F8F8F8;
	background-clip: padding-box;
}*/

.transfer_wrap .el-table th {
	white-space: nowrap;
	overflow: hidden;
	background-color: #f4f4f4;
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}
.icon_edit {
	width: 14px;
	height: 14px;
	cursor: pointer;
	display: inline-block;
	background: url(../../../../../static/img/common/edit.png);
}
/*.transfer_wrap .el-table--border td,
.transfer_wrap .el-table--border th {
	border-right: 1px solid #EEEEEE;
}

.transfer_wrap .el-table td,
.transfer_wrap .el-table th.is-leaf {
	border-bottom: 1px solid #EEEEEE;
}


.transfer_wrap .el-table::after,
.transfer_wrap .el-table::before {
	content: '';
	position: absolute;
	background-color: transparent;
}*/

.transfer_wrap .el-pagination {
	text-align: right;
	margin-top: 40px;
	margin-right: 40px;
	color: #282828;
}

.transfer_wrap .el-pager li.active {
	border-color: #FF9900;
	background-color: #FF9900;
	color: #fff;
	cursor: default;
}

.transfer_wrap .el-pager li {
	padding: 0 4px;
	border-right: 0;
	background: #fff;
	font-size: 12px;
	letter-spacing: -0.39px;
	min-width: 24px;
	height: 24px;
	line-height: 24px;
	text-align: center;
}

.transfer_wrap .el-pager li:last-child {
	border-right: 1px solid #EEEEEE;
}

.transfer_wrap .el-pagination button,
.transfer_wrap .el-pagination span {
	display: inline-block;
	font-size: 12px;
	letter-spacing: -0.39px;
	min-width: 24px;
	height: 24px;
	color: #282828;
	line-height: 24px;
	vertical-align: top;
	box-sizing: border-box;
}

.transfer_wrap .el-pager li:hover {
	color: #FF9900;
}
.transfer_wrap .el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}
.transfer_wrap .el-pager li.active:hover {
	cursor: pointer;
	color: #ffffff;
}

.transfer_wrap .el-pagination button:hover {
	color: #FF9900;
}
.transfer_wrap .el-pagination button.disabled:hover {
	color: #e4e4e4;
}

.transfer_wrap .el-pagination__editor {
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	padding: 2px 0px;
	width: 24px;
	min-width: 24px;
}

.transfer_wrap .el-pagination__editor:focus {
	outline: 0;
	border-color: #FF9900;
}

.transfer_wrap .el-pagination .btn-next,
.transfer_wrap .el-pagination .btn-prev {
	border: 1px solid #EEEEEE;
	color: #282828;
}

.transfer_wrap .el-autocomplete-suggestion__wrap,
.transfer_wrap .el-pager li {
	border: 1px solid #EEEEEE;
}

.transfer_wrap .el-pager li.btn-quicknext,
.transfer_wrap .el-pager li.btn-quickprev {
	line-height: 28px;
	color: #282828;
}
</style>