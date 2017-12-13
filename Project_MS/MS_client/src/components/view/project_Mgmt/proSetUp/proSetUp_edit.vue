<template>
	<div class="edit_preSetUp">
		<current yiji="项目管理" erji="项目立项" sanji="项目立项编辑">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">项目立项编辑</span>
			</div>
			<div class="add-wrapper">
				<el-form ref="ruleForm" :inline="true" :rules="rules" :model="ruleForm" label-width="130px">
					<el-col :sm="24" :md="12">
						<el-form-item label="机会号">
							<el-input v-model="ruleForm.jihuihao" placeholder="请输入机会号，系统自动匹配对应售前项目"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="收入类型">
							<el-select v-model="ruleForm.shouru">
								<el-option value="01">xx</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="项目名称">
							<el-input v-model="ruleForm.projName"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="项目编号">
							<el-input v-model="ruleForm.projNo" :disabled='true'></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="客户方">
							<el-select v-model="ruleForm.client">
								<el-option value="01">xxx</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="服务管理模式">
							<el-select v-model="ruleForm.guanlimoshi">
								<el-option value="01">xxx</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="项目类型">
							<el-select v-model="ruleForm.proType">
								<el-option value="01">xxxx</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="收入确认类型">
							<el-select v-model="ruleForm.shouruType">
								<el-option value="01">xxx</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="预计合同金额">
							<el-input v-model.number="ruleForm.yujiHTMony"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="订单类型">
							<el-select v-model="ruleForm.dingdanType">
								<el-option value="01">xxx</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item class="xiangmuDidian" label="项目交付地">
							<el-input v-model="ruleForm.xiangmuDidian"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="预计合同签订时间">
							<el-date-picker type="datetime" v-model="ruleForm.yujiHTTime" @change="changeYujiHTTime" style="width:100%;"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="预计收入确认时间">
							<el-date-picker type="datetime" v-model="ruleForm.yujiStartTime" @change="changeStartTime" style="width:100%;"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="合同编号">
							<el-input v-model="ruleForm.hetongbianhao"></el-input>
						</el-form-item>
					</el-col>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="项目状态">
							<el-select v-model="ruleForm.xiangmuType">
								<el-option value="01">xxx</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-form>
				<el-col :span="24" class="item-title">销售信息</el-col>
				<el-form ref="ruleForm2" :inline="true" :rules="rules" :model="ruleForm" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="销售">
							<el-input type="text" v-model="ruleForm.xiaoshou"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="销售主管">
							<el-input type="text" v-model="ruleForm.xiaoshouManger"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='24'>
						<el-form-item label="项目说明">
							<el-input type="textarea" :autosize="{ minRows: 5, maxRows: 5}" placeholder="请输入内容" v-model="ruleForm.xiangmuRemark">
							</el-input>
						</el-form-item>
					</el-col>
				</el-form>
				<el-col :span="4" class="item-title">立项信息
				</el-col>
				<el-col :span="8" class="item-title" style='color:#999;'>本信息可手工填写，也可根据上传立项申请文件中获取</el-col>
				<el-col :span="12" class="item-title">
					<el-button class="setUp-info-button">查看立项申请文件</el-button>
				</el-col>
				<el-form ref="ruleForm3" :inline="true" :rules="rules" :model="ruleForm" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称">
							<el-input type="text" v-model="ruleForm.deparName"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门编号">
							<el-input type="text" v-model="ruleForm.deparNo"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="成本中心(CCC)">
							<el-input type="text" v-model="ruleForm.ccc"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="项目经理">
							<el-input type="text" v-model="ruleForm.manager"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="项目主管">
							<el-input type="text" v-model="ruleForm.chief"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="计划开始时间">
							<el-input type="text" v-model="ruleForm.jihuaStartTime"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="计划结束时间">
							<el-input type="text" v-model="ruleForm.jihuaEndTime"></el-input>
						</el-form-item>
					</el-col>
				</el-form>
				<el-col :span="24" class="item-title">立项预算</el-col>
				<el-form ref="ruleForm4" :inline="true" :rules="rules" :model="ruleForm" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="总工作量">
							<el-input type="text" v-model="ruleForm.totalWork"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="人力成本">
							<el-input type="text" v-model="ruleForm.renlichengben"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="费用成本">
							<el-input type="text" v-model="ruleForm.feiyongchengben"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="分包成本">
							<el-input type="text" v-model="ruleForm.fenbaochengben"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="税金">
							<el-input type="text" v-model="ruleForm.tax"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="总收入">
							<el-input type="text" v-model="ruleForm.totalshouru"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="毛利润(GM)%">
							<el-input type="text" v-model="ruleForm.maolilv"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="净利润(GM)%">
							<el-input type="text" v-model="ruleForm.jingliruan"></el-input>
						</el-form-item>
					</el-col>
				</el-form>
				<div class="addPreSaleButton_wrapper">
					<el-button class="btn-primary" @click="saveAndSubmit">保存提交审批</el-button>
					<el-button class="btn-primary" @click="saveNotSbumit">保存暂不提交审批</el-button>
					<el-button class="btn-primary" @click="notSave">取消</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import current from "../../../common/current_position.vue";
	const baseURL = "iem_hrm";
	export default {
		data() {
			return {
				ruleForm: {
					jihuihao: "",
					shouru: "",
					projName: "",
					projNo: "",
					client: "",
					guanlimoshi: "",
					proType: "",
					shouruType: "",
					yujiHTMony: "",
					dingdanType: "",
					xiangmuDidian: "",
					yujiHTTime: "",
					yujiStartTime: "",
					hetongbianhao: "",
					xiangmuType: "",
					xiaoshou: "",
					xiaoshouManger: "",
					xiangmuRemark: "",
					deparName: "",
					deparNo: "",
					ccc: "",
					manager: "",
					chief: "",
					jihuaStartTime: "",
					jihuaEndTime: "",
					totalWork: "",
					renlichengben: "",
					feiyongchengben: "",
					fenbaochengben: "",
					tax: "",
					totalshouru: "",
					maolilv: "",
					jingliruan: ""
				},
				rules: {}
			};
		},
		components: {
			current
		},
		created() {},
		methods: {
			saveAndSubmit() {},
			saveNotSbumit() {},
			notSave() {}
		}
	};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
	.edit_preSetUp {
		.setUp-info-button {
			background: #f90;
			color: #FFF;
			outline: none;
			border: none;
		}

		.addPreSaleButton_wrapper {
			width: 400px;
			margin: 0 auto;
		}
	}
</style>