<template>
	<div class="detail_transfer">
		<current yiji="人事事务" erji="人事调动" sanji="员工详情">
		</current>
		<div class="content-wrapper">
			<!-- <el-button type="primary" class="toolBtn">保存</el-button> -->
			<el-tabs v-model="activeName" @tab-click="handleTabClick">
				<el-tab-pane label="基本信息" name="basicMsg">
					<div class="content_wrapper">
						<div class="upload_image">
							<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
							<div>员工照片</div>
						</div>
						<div class="content">
							<el-form :inline="true" :model="formInline1" class="demo-form-inline" label-width="110px">
								<div class="title">个人信息</div>
								<el-col :span="8">
									<el-form-item label="姓名">
										<el-input v-model="formInline1.custName" placeholder="姓名"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="身份证">
										<el-input v-model="formInline1.certNo" placeholder="身份证"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="性别">
										<el-radio-group v-model="formInline1.sex">
										    <el-radio-button label="男"></el-radio-button>
										    <el-radio-button label="女"></el-radio-button>
									  	</el-radio-group>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="出身年月">
										<el-input v-model="formInline1.birthday" placeholder="出生年月"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="民族">
										<el-select v-model="formInline1.nation">
											<el-option v-for="item in nationList" :label="item" :value="item"></el-option>
										</el-select>
									</el-form-item>
								</el-col
								<el-col :span="8">
									<el-form-item label="婚姻状况">
										<el-radio-group v-model="formInline1.marital">
										    <el-radio-button label="未婚"></el-radio-button>
										    <el-radio-button label="已婚"></el-radio-button>
										    <el-radio-button label="离异"></el-radio-button>
									  	</el-radio-group>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="学历">
										<el-select v-model="formInline1.education">
											<el-option label="区域一" value="shanghai"></el-option>
											<el-option label="区域二" value="beijing"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="学位">
										<el-select v-model="formInline1.degree">
											<el-option label="学士" value="shanghai"></el-option>
											<el-option label="硕士" value="beijing"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="政治面貌">
										<el-radio-group v-model="formInline1.politial">
										    <el-radio-button label="党员"></el-radio-button>
										    <el-radio-button label="团员"></el-radio-button>
										    <el-radio-button label="群众"></el-radio-button>
									  	</el-radio-group>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="毕业学校">
										<el-input v-model="formInline1.gradSchool"></el-input>
									</el-form-item>
								</el-col>
								
								<el-col :span="8">
									<el-form-item label="毕业时间">
										<el-input v-model="formInline1.gradTime"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="专业">
										<el-input v-model="formInline1.major"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="移动电话">
										<el-input v-model="formInline1.mobileNo"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="家庭电话">
										<el-input v-model="formInline1.homeTeleph"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="个人邮箱">
										<el-input v-model="formInline1.perEmail"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="QQ">
										<el-input v-model="formInline1.qqAcct"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="紧急联系人">
										<el-input v-model="formInline1.atten"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="紧急电话">
										<el-input v-model="formInline1.attenTeleph"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="籍贯">
										<el-input v-model="formInline1.origo"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="户籍地址">
										<el-input v-model="formInline1.permAddr"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="现居住地">
										<el-input v-model="formInline1.liveAddr"></el-input>
									</el-form-item>
								</el-col>
								<div class="title">职务信息</div>
								<el-col :span="8">
									<el-form-item label="员工编号">
										<el-input v-model="formInline1.userNo"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="公司名称">
										<el-select v-model="formInline1.organNo">
											<el-option v-for="item in organList" :label="item.organName" :value="item.organNo"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="部门名称">
										<el-select v-model="formInline1.derpNo">
											<el-option v-for="item in derpList" :label="item.derpName" :value="item.derpNo"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="CCC">
										<el-select v-model="formInline1.ownerCCC">
											<el-option v-for="item in CCCList" :label="item" :value="item"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="直线经理">
										<el-select v-model="formInline1.lineManager">
											<el-option v-for="item in lineManagerList" :label="item" :value="item"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="员工类别">
										<el-select v-model="formInline1.custType">
											<el-option v-for="item in custTypeList" :label="item.custTypeName" value="item.custType"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="岗位">
										<el-select v-model="formInline1.custPost">
											<el-option v-for="item in custPostList" :label="item" :value="item"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="职级">
										<el-select v-model="formInline1.custClass">
											<el-option v-for="item in custClassList" :label="item" :value="item"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="员工状态">
										<el-select v-model="formInline1.custStatus">
											<el-option v-for="item in custStatusList" :label="item" :value="item"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="入职日期">
										<el-input v-model="formInline1.entryTime"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="上岗日期">
										<el-input v-model="formInline1.leftJobTime"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="工作日期">
										<el-input v-model="formInline1.workTime"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="职称日期">
										<el-input v-model="formInline1.profTitleTime"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="合同开始">
										<el-input v-model="formInline1.compactStartTime"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="合同终止">
										<el-input v-model="formInline1.compactEndTime"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="试用开始">
										<el-input v-model="formInline1.probStartTime"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="试用结束">
										<el-input v-model="formInline1.probEndTime"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="招聘来源">
										<el-input v-model="formInline1.recruitQuarry"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="开户银行">
										<el-input v-model="formInline1.openBank"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="银行卡号">
										<el-input v-model="formInline1.bankCardNo"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="养老账号">
										<el-input v-model="formInline1.endmAcct"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="医保账号">
										<el-input v-model="formInline1.mediAcct"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="生育账号">
										<el-input v-model="formInline1.mateAcct"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="公积金">
										<el-input v-model="formInline1.housAcct"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="24">
									<el-form-item label="备注">
										<el-input v-model="formInline1.remark"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="24">
									<el-form-item label="附件" style="width: 100%;">
								  		<el-input v-model="formInline1.attachm"></el-input>
								  		<el-upload class="upload-demo" :on-change="handleChange" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
				                            <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
				                      	</el-upload>	
								  	</el-form-item>
								</el-col>
							</el-form>

						</div>
					</div>
				</el-tab-pane>

				<el-tab-pane label="社会关系" name="socialRelations">
					<div class="subtitlebar">
						<span class="title-text">成员信息</span>
					</div>
					<div class="add-wrapper" v-for="(listItem, key) in guanxiFormDataList">
						<div class="add-title">
							<span class="title-text">关系人{{key+1}}</span>
							<!--<span class="icon-close"></span>-->
						</div>
						<el-form :inline="true"  class="demo-form-inline" label-width="110px">
							<el-col :span="8">
								<el-form-item label="姓名">
									<el-input v-model="listItem.guanxiName" placeholder="姓名"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="与本人关系">
									<el-select v-model="listItem.guanxi">
										<el-option v-for="item in guanxiList" :label="item" :value="item"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="联系电话">
									<el-input v-model="listItem.guanxiMobile" placeholder="身份证"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="职业">
									<el-input v-model="listItem.guanxiZhiye" placeholder="身份证"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="16">
								<el-form-item label="地址" style="width: 100%;">
									<el-input v-model="listItem.guanxiDizhi" placeholder="身份证"></el-input>
								</el-form-item>
							</el-col>
						</el-form>
					</div>
				</el-tab-pane>

				<el-tab-pane label="工作经历" name="workExperience">
					<div class="subtitlebar">
						<span class="title-text">工作经历</span>
						<el-button type="text" @click="handleAddPRenew" class="addBtn">新增</el-button>
					</div>
					<div class="add-wrapper">
						
					</div>
				</el-tab-pane>
				<el-tab-pane label="教育经历" name="educationExperience">
					<div class="subtitlebar">
						<span class="title-text">教育经历</span>
						<el-button type="text" @click="handleAddPRenew" class="addBtn">新增</el-button>
					</div>
					<div class="add-wrapper">
						
						
					</div>
				</el-tab-pane>
				<el-tab-pane label="项目经历" name="projectExperience">
					<div class="subtitlebar">
						<span class="title-text">项目经历</span>
						<el-button type="text" @click="handleAddPRenew" class="addBtn">新增</el-button>
					</div>
					<div class="add-wrapper">
						
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	export default {
		data() {
			return {
				imageUrl: "",
				formInline1: {
					userNo: "",
				    custName:  "", //用户姓名
				    organNo: "",
				    derpNo: "", //部门ID
				    ownerCCC: "",//所属CCC
				    certType: "",
				    certNo: "",
				    sex: "",
				    birthday: "",
				    nation: "",
				    marital: "",//婚姻状况
				    politial: "",//政治面貌
				    education: "", //学历
				    degree: "", //学位
				    gradSchool: "", //毕业学校
				    gradTime: "", //毕业时间
				    major: "",//专业
				    lineManager: "",//直线经理
				    origo:"",//籍贯
				    homeAddr: "",//家庭地址
				    liveAddr: "",//居住地址
				    permAddr: "",//户口地址
				    mobileNo: "",//手机号
				    teleph: "",//电话
				    homeTeleph: "",
				    perEmail: "",
				    comEmail: "",
				    atten: "",//紧急联系人
				    attenTeleph: "",
				    qqAcct: "",
				    oneInch: "",//免冠照片
				    custType: "",//员工类型
				    custPost: "",//岗位
				    custClass: "",//职级
				    custStatus: "", //
				    entryTime: "",//入职时间
				    leftJobTime: "",//上岗时间
				    workTime: "",//工作日期
				    profTitleTime: "",//职称日期
				    compactStartTime: "",//合同开始
				    compactEndTime: "",//合同终止
				    probStartTime: "",//试用开始
				    probEndTime: "",//试用结束
				    recruitQuarry: "",//招聘来源
				    lateLeaveTime: "",//最近离职时间
				    openBank: "",//开户银行
				    bankCardNo: "",//银行卡号
				    endmAcct: "",//养老账号
				    mediAcct: "",//医保账号
				    mateAcct: "",//生育账号
				    housAcct: "",//公积金账号
				    attachm: "",//附件
				    remark: ""
				},
				nationList: ['汉族','苗族','维吾尔族','黎族'],
				organList: [
					{organNo: '01',organName: '上海分公司'},
					{organNo: '02',organName: '深圳分公司'},
					{organNo: '03',organName: '广州分公司'}
				],
				derpList: [
					{derpNo: "01",derpName: "上海分公司"},
					{derpNo: "02",derpName: "深圳分公司"},
					{derpNo: "03",derpName: "广州分公司"}
				],
				CCCList: ['CCC1','CCC2','CCC3'],
				lineManagerList: ['直线经理1','直线经理2','直线经理3'],
				custTypeList: [
					{custTypeNo: "1",custTypeName: "在编"},
					{custTypeNo: "2",custTypeName: "借用"},
					{custTypeNo: "3",custTypeName: "合同制"},
					{custTypeNo: "4",custTypeName: "兼职"},
					{custTypeNo: "5",custTypeName: "实习"},
				],
				custPostList: ['开发工程师','出纳','司机'],
				custClassList: ['B5','B6','B7'],
				custStatusList: ['试用期','合同期','已退休','已离职','停薪留职'],
				radio1: "",
				radio2: "",
				radio3: "",
				fileList: [
//					{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
				],
				activeName: "",
				
				//社会关系
				guanxiList: ['父母','配偶','子女','亲戚','朋友','其他'],
				guanxiFormDataList: [
					{
						guanxiName: "ssssf",
						guanxi: "父母",
						guanxiDizhi: "sfsa",
						guanxiZhiye: "sasd",
						guanxiMobile: "123123123"
					},
					{
						guanxiName: "zaada",
						guanxi: "配偶",
						guanxiDizhi: "sfsa",
						guanxiZhiye: "sasd",
						guanxiMobile: "134135135"
					}
				],
				
				labelPosition: "right",
				pactNo: "",
				basicMsg: {},
				PChangeListInfo: [],
				PRenewListInfo: [],
				pChangePage: {
					pageNum: 1,
					pageSize: 7,
					totalRows: 20
				},
				pRenewPage: {
					pageNum: 1,
					pageSize: 7,
					totalRows: 20
				},
				checked: ""
			};
		},
		components: {
			current
		},
		created() {
			this.pactNo = this.$route.params.pactNo;
			console.log(this.$route.params.activeTab)
			if(this.$route.params.activeTab) {
				this.activeName = this.$route.params.activeTab;
				if(this.activeName == "socialRelations") this.getPChangeList();
				if(this.activeName == "workExperience") this.getPRenewList();
			} else {
				this.activeName = "basicMsg";
				this.getPactDtl(this.pactNo); // 初始查合同基本详情
			}
		},
		methods: {
			handleRemove(file, fileList) {
		        console.log(file, fileList);
	      	},
	      	handlePreview(file) {
		        console.log(file);
	      	},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			handleTabClick(tab, event) {
				console.log(tab.name);
				this.activeName = tab.name;
				if(tab.name == "socialRelations") this.getPChangeList();
				if(tab.name == "workExperience") this.getPRenewList();
				if(tab.name == "basicMsg") this.getPactDtl(this.pactNo);
			},
			handleChange(file, fileList) {
//		        this.fileList3 = fileList.slice(-3);
				console.log(file);
				console.log(fileList.slice(-3));
	      	},
			getPactDtl(pactNo) {
				const self = this;
				
				
			},
			getPChangeList() {
				const self = this;
				
				
			},
			getPRenewList() {
				const self = this;
				let params = {
					pageNum: self.pRenewPage.pageNum,
					pageSize: self.pRenewPage.pageSize,
					// pactNo: self.pactNo,
					pactNo: "0001",
					renewId: ""
				};

			},
			changeTypeFormatter(row, column) {
				return row.changeType == 1 ? "条款变更" : row.changeType == 0 ? "啥啥变更" : "异常";
			},
			renewTypeFormatter(row, column) {
				return row.renewType == 1 ? "合同延期" : row.renewType == 0 ? "啥啥续签" : "异常";
			},
			handleEdit(index, row) {

			},
			handleDelete(index, row) {

			},
			handleAddPChange() {
				this.$router.push({
					name: "add_pactChange",
					params: {
						pactNo: this.pactNo
					}
				});
			},
			handleAddPRenew() {
				this.$router.push({
					name: "add_pactRenew",
					params: {
						pactNo: this.pactNo
					}
				});
			},
			handlePChangeDetail(index, row) {
				this.$router.push({
					name: "detail_pactChange",
					params: {
						pactNo: row.pactNo,
						changeId: row.changeId
					}
				});
			},
			handlePRenewDetail(index, row) {
				this.$router.push({
					name: "detail_pactRenew",
					params: {
						pactNo: row.pactNo,
						renewId: row.renewId
					}
				});
			},
			handlePChangePage(val) {
				this.pChangePage.pageNum = val;
				this.getPChangeList(); //分页查询合同变更列表
			},
			handlePRenewPage(val) {
				this.pRenewPage.pageNum = val;
				this.getPRenewList(); //分页查询合同变更列表
			}
		}
	};
</script>

<style>
	.detail_transfer {
		padding: 0 0 20px 20px;
	}
	
	.detail_transfer .upload_image {
		width: 112px;
		text-align: center;
		color: #999999;
		margin: 0 auto 40px;
	}
	
	.detail_transfer .avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 50%;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.detail_transfer .avatar-uploader .el-upload:hover {
		border-color: #20a0ff;
	}
	
	.detail_transfer .avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 112px;
		height: 112px;
		line-height: 112px;
		text-align: center;
	}
	
	.detail_transfer .avatar {
		width: 112px;
		height: 112px;
		display: block;
	}
	
	.detail_transfer .el-upload__input {
		border: 1px solid #bfcbd9;
		display: none;
	}
	
	.detail_transfer .content .title {
		color: #333333;
		margin-bottom: 40px;
	}
	.detail_transfer .el-input__inner {
	    border-radius: 4px;
	    width: 200px;
	}
	.detail_transfer .el-radio-button {
	    margin-right: 20px;
	}
	.detail_transfer .el-radio-button__inner {
		border: 1px solid #EEEEEE;
		border-radius: 4px!important;
		padding: 12px 12px;
	}
	.detail_transfer .el-form--inline .el-form-item {
	    margin-right: 0px;
	}
	.detail_transfer .el-form-item {
	    margin-bottom: 30px;
	}
	.detail_transfer .file_button {
		border: none;
		color: #FF9900;
		font-size: 14px;
		margin-left: -40px;
	}
	.detail_transfer .content-wrapper .subtitlebar {
	    height: 24px;
	    line-height: 24px;
	    font-size: 14px;
	    font-family: "PingFangSC Regular";
	    padding-left: 10px;
	    margin: 20px 0 40px 0;
	}
	.detail_transfer .add-wrapper {
		padding: 10px 20px;
	}
	.detail_transfer .icon-close {
		float: right;
		margin-top: 3px;
		display: inline-block;
		width: 14px;
		height: 14px;
		background: url(../../../../../static/img/common/close.png);
	}
	.detail_transfer .upload-demo {
		height: 0px;
	}
	.detail_transfer .uploadBtn {
	  position: absolute;
	  height: 38px;
	  top: 0;
	  right: 0;
	  margin: 0;
	  border: 1px solid #ff9900;
	  border-radius: 0;
	  background: #ff9900;
	  font-family: "PingFang SC";
	}
	.detail_transfer .el-upload__input {
	    margin-left: 30px;
	    border: 1px solid #eeeeee;
	    display: none;
	}
</style>