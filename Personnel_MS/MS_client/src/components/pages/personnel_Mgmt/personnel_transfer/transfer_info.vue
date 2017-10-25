<template>
	<div class="transfer_info_wrap">
		<current yiji="人事事务" erji="人事调动" sanji="人事调动明细查询" siji="人事调动详情">
		</current>
		<div class="content">
			<div class="title">
				<span class="title-text">人事调动详情</span>
			</div>
			<div class="content-inner">
				<el-form ref="formdata" :inline="true" :model="formdata" label-width="90px">
					<el-form-item label="公司名称">
					    <el-select v-model="comp" value-key="compOrgNo" @change="changeValue">
							<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item"></el-option>
						</el-select>
				  	</el-form-item>
					<el-form-item label="部门名称">
					    <el-select v-model="depart" value-key="departOrgNo" @change="changeValue">
							<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item"></el-option>
						</el-select>
				  	</el-form-item>
					<el-form-item label="工号">
					    <el-input v-model="formdata.userNo"></el-input>
				  	</el-form-item>
				  	<el-form-item label="姓名">
					    <el-input v-model="formdata.custName"></el-input>
				  	</el-form-item>
				  	<div class="info-title">调动信息</div>
				  	<el-form-item label="调动类型">
					    <el-select v-model="formdata.diaodongType" value-key="diaodongType" @change="changeValue">
							<el-option v-for="item in diaodongTypeList" :key="item" :label="item" :value="item"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="调动生效时间">
					    <el-input v-model="formdata.shengxiaoDate"></el-input>
				  	</el-form-item>
				  	<el-form-item label="原公司名称">
					    <el-select v-model="comp" value-key="compOrgNo" @change="changeValue">
							<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="新公司名称">
					    <el-select v-model="newcomp" value-key="compOrgNo" @change="changeValue">
							<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="原部门名称">
					    <el-select v-model="depart" value-key="departOrgNo" @change="changeValue">
							<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="新部门名称">
					    <el-select v-model="newdepart" value-key="departOrgNo" @change="changeValue">
							<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="原直线经理">
					    <el-input v-model="formdata.oldLineManager"></el-input>
				  	</el-form-item>
				  	<el-form-item label="新直线经理">
					    <el-input v-model="formdata.newLineManager"></el-input>
				  	</el-form-item>
				  	<el-form-item label="原岗位">
					    <el-input v-model="formdata.oldCustPost"></el-input>
				  	</el-form-item>
				  	<el-form-item label="新岗位">
					    <el-input v-model="formdata.newCustPost"></el-input>
				  	</el-form-item>
				  	<el-form-item label="原职级">
					    <el-input v-model="formdata.oldCustClass"></el-input>
				  	</el-form-item>
				  	<el-form-item label="新职级">
					    <el-input v-model="formdata.newCustClass"></el-input>
				  	</el-form-item>
				  	<el-form-item label="调动原因">
					    <el-input
						  type="textarea"
						  :autosize="{ minRows: 5, maxRows: 5}"
						  placeholder="请输入内容"
						  v-model="formdata.diaodongyuanying">
						</el-input>
				  	</el-form-item>
				  	<el-form-item label="附件" style="width:100%;">
					    <el-button class="file_button" @click="download()" style="margin-left: 30px;">下载</el-button>
				  	</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	export default {
		data() {
			return {
				formdata: {
					compOrgNo: "",
					compName: "",
					departName: "",
					departOrgNo: "",
					newcompOrgNo: "",
					newcompName: "",
					newdepartName: "",
					newdepartOrgNo: "",
					custName: "",
					userNo: "",
					diaodongType: "",
					shengxiaoDate: "",
					oldLineManager: "",
					newLineManager: "",
					oldCustPost: "",
					newCustPost: "",
					oldCustClass: "",
					newCustClass: "",
					diaodongyuanying: ""
				},
				
				comp: {
					compName: '',
					compOrgNo: ''
				},
				newcomp: {
					compName: '',
					compOrgNo: ''
				},
				depart: {
					departName: '',
					departOrgNo: ''
				},
				newdepart: {
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
				diaodongTypeList: ['晋升','调动','平调','轮岗','工资调整'],
			};
		},
		components: {
			current
		},
		created() {
			
		},
		methods: {
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
	      	},
	      	download() {
		      	
	      	}
		}
	};
</script>

<style>
.transfer_info_wrap {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.transfer_info_wrap .content {
	width: 100%;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.transfer_info_wrap .content .title {
border-bottom: 1px solid #EEEEEE;
}

.transfer_info_wrap .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
}

.transfer_info_wrap .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.transfer_info_wrap .content-inner {
	padding: 40px 0px;
}	
.transfer_info_wrap .info-title{
	padding: 11px 0px 11px 10px;
    margin-bottom: 30px;
	color: #999999;
	border-bottom: none;
}
.transfer_info_wrap .el-input__inner {
    border: 1px solid #EEEEEE;
    color: #999999;
    width: 300px;
    height: 40px;
    margin-left: 30px;
}
.transfer_info_wrap .el-form-item {
	padding-left: 20px;
}
.transfer_info_wrap .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #999999;
    line-height: 1;
    padding: 11px 0px 11px 0;
    box-sizing: border-box;
}
.transfer_info_wrap .el-textarea__inner {
    margin-left: 30px;
}
.transfer_info_wrap .file_button {
	/*border: none;*/
	color: #FF9900;
	font-size: 14px;
	/*margin-left: -40px;*/
}
.transfer_info_wrap .el-button:active {
    color: #FF9900;
    border-color: #FF9900;
    outline: 0;
}
.transfer_info_wrap .el-button:focus,
.transfer_info_wrap .el-button:hover {
    color: #FF9900;
    border-color: #FF9900;
}
</style>