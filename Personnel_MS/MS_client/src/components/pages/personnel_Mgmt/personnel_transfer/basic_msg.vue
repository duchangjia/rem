<template>
	<div>
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
						</el-col <el-col :span="8">
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
						<el-col :span="8">
							<el-form-item label="附件">
								<el-input v-model="formInline1.attachm"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList">
								<el-button size="small" class="file_button">选择文件</el-button>
								<!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
							</el-upload>
						</el-col>
					</el-form>

				</div>
			</div>
	</div>
</template>

<script>
</script>

<style>

</style>