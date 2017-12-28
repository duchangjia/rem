<template>
    <div class="archives_detail">
        <current yiji="人事事务" erji="人事档案" sanji="员工详情"></current>
        <el-col :md="24" :sm="24">
            <div class="content-wrapper-xx">
                <div class="content">
                    <template>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="员工基本信息" name="first">
                                <div class="personal_information">
                                    <div class="first_title">
                                        <el-upload :disabled="edit"
                                                   ref="uploadAvatar"
                                                   class="avatar-uploader"
                                                   action="/iem_hrm/CustInfo/uploadAvatar"
                                                   :show-file-list="false"
                                                   :data="uploadUserNo"
                                                   :auto-upload="false"
                                                   :on-success="handleAvatarSuccess"
                                                   :on-change="handleAvatarChange"
                                                   :headers="token"
                                                   >
                                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                            <div><div>添加照片</div></div>
                                        </el-upload>
                                        <div class="text-desc">员工照片</div>
                                    </div>
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="姓名" prop="custName">
                                                <el-input v-model="ruleForm.custName" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="身份证" prop="certNo">
                                                <el-input v-model="ruleForm.certNo" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="性别" prop="sex" class="gender_special">
                                                <el-radio-group v-model="ruleForm.sex" :disabled="edit">
                                                    <el-radio-button label="01">男</el-radio-button>
                                                    <el-radio-button label="02" class="special">女</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="出生年月" prop="birthday">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday" :disabled="edit" @change="holdBirthday" :editable="false"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="民族" prop="nation">
                                                <el-select v-model="ruleForm.nation" placeholder="请选择民族" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.nation"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="婚姻状况" prop="marital" class="marriage_special">
                                                <el-radio-group v-model="ruleForm.marital" :disabled="edit">
                                                    <el-radio-button label="01">未婚</el-radio-button>
                                                    <el-radio-button label="02" class="special">已婚</el-radio-button>
                                                    <el-radio-button label="03">离异</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="学历" prop="education">
                                                <el-select v-model="ruleForm.education" placeholder="请选择学历" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.education"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="学位" prop="degree">
                                                <el-select v-model="ruleForm.degree" placeholder="请选择学位" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.degree"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="政治面貌" prop="politial" class="marriage_special">
                                                <el-radio-group v-model="ruleForm.politial" :disabled="edit">
                                                    <el-radio-button label="01">党员</el-radio-button>
                                                    <el-radio-button label="02" class="special">团员</el-radio-button>
                                                    <el-radio-button label="03">群众</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="毕业学校" prop="gradSchool">
                                                <el-input v-model="ruleForm.gradSchool" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="毕业时间" prop="gradTime">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.gradTime" :disabled="edit" @change="holdGradTime" :editable="false"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="专业" prop="major">
                                                <el-input v-model="ruleForm.major" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="移动电话" prop="mobileNo">
                                                <el-input v-model="ruleForm.mobileNo" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="家庭电话" prop="homeTeleph">
                                                <el-input v-model="ruleForm.homeTeleph" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="个人邮箱">
                                                <el-input v-model="ruleForm.perEmail" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="公司邮箱">
                                                <el-input v-model="ruleForm.comEmail" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="紧急联系人">
                                                <el-input v-model="ruleForm.atten" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="紧急电话" prop="attenTeleph">
                                                <el-input v-model="ruleForm.attenTeleph" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="籍贯">
                                                <el-input v-model="ruleForm.origo" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="户籍地址">
                                                <el-input v-model="ruleForm.permAddr" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="现居住地">
                                                <el-input v-model="ruleForm.liveAddr" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <hr style="width: 100%;margin-bottom: 30px;clear: both">
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="员工编号" prop="userNo">
                                                <el-input v-model="ruleForm.userNo" :disabled="true"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="公司名称" prop="organNo">
                                                <el-select v-model="ruleForm.organNo" placeholder="请选择公司名称" :disabled="edit" @change="selectDep(ruleForm.organNo)">
                                                    <el-option :label="item.organName" :value="item.organNo" v-for="item in basicInfo.company"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="部门名称" prop="derpNo">
                                                <el-select v-model="ruleForm.derpNo" placeholder="请选择部门名称" :disabled="edit" @change="selectCCC(ruleForm.organNo)">
                                                    <el-option :label="item.derpName" :value="item.derpNo" v-for="item in basicInfo.department"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="CCC" prop="ownerCCC">
                                                <el-select v-model="ruleForm.ownerCCC" placeholder="请选择CCC" :disabled="edit">
                                                    <el-option :label="item.costType=='01'?`管理CCC_${item.costCode}`:item.costType=='02'?`售前CCC_${item.costCode}`:`项目CCC_${item.costCode}`" :value="item.costType+'_'+item.costCode" v-for="item in basicInfo.CCC"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="直线经理" class="line-manager">
                                                <el-input v-model="ruleForm.lineManager" :disabled="edit" :readonly="true">
                                                    <el-button slot="append" icon="search" @click="userNoSelect()" :disabled="edit"></el-button>
                                                </el-input>
                                                <messageBox
                                                        :title="boxTitle"
                                                        :tableOption.sync="tableOption"
                                                        :inputFirstOption.sync="inputFirstOption"
                                                        :inputSecOption.sync="inputSecOption"
                                                        :searchData.sync="searchData"
                                                        :searchUrl="searchUrl"
                                                        :dialogVisible.sync="dialogVisible"
                                                        :pagination.sync="msgPagination"
                                                        @dialogConfirm="dialogConfirm"
                                                        @changeDialogVisible="changeDialogVisible"
                                                ></messageBox>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="合同主体" prop="contractSubject">
                                                <el-select v-model="ruleForm.contractSubject" placeholder="请选择合同主体" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.contractSubject"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="员工类别" prop="custType">
                                                <el-select v-model="ruleForm.custType" placeholder="请选择员工类别" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.custType"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="岗位" prop="custPost">
                                                <el-select v-model="ruleForm.custPost" placeholder="请选择岗位" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.custPost"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="职级" prop="custClass">
                                                <el-select v-model="ruleForm.custClass" placeholder="请选择职级" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.custClass"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="员工状态" prop="custStatus">
                                                <el-select v-model="ruleForm.custStatus" placeholder="请选择员工状态" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.custStatus"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="入职日期" prop="entryTime">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.entryTime" :disabled="edit" @change="changeEntryTime" :editable="false"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="上岗日期">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.leftJobTime" :disabled="edit" @change="changeLeftJobTime" :editable="false"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="工作日期">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.workTime" :disabled="edit" @change="changeWorkTime" :editable="false"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="职称日期">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.profTitleTime" :disabled="edit" @change="changeProfTitleTime" :editable="false"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="合同开始">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.compactStartTime" :disabled="edit" @change="changeCompactStartTime" :editable="false"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="合同终止">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.compactEndTime" :disabled="edit" @change="changeCompactEndTime" :picker-options="pickerOptions" :editable="false"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="试用开始" prop="probStartTime">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.probStartTime" :disabled="edit" @change="changeProbStartTime" :editable="false"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="试用结束" prop="probEndTime">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.probEndTime" :disabled="edit" @change="changeProbEndTime" :picker-options="pickerOptions1" :editable="false"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="招聘来源">
                                                <el-select v-model="ruleForm.recruitQuarry" placeholder="招聘来源" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.recruitQuarry"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="开户银行">
                                                <el-input v-model="ruleForm.openBank" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="银行卡号">
                                                <el-input v-model="ruleForm.bankCardNo" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="养老账号">
                                                <el-input v-model="ruleForm.endmAcct" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="医保账号">
                                                <el-input v-model="ruleForm.mediAcct" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="生育账号">
                                                <el-input v-model="ruleForm.mateAcct" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="公积金">
                                                <el-input v-model="ruleForm.housAcct" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <hr style="width: 100%;margin-bottom: 30px;clear: both">
                                        <el-col :md="23" :sm="24">
                                            <el-form-item label="备注">
                                                <el-input type="textarea" v-model="ruleForm.remark" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="9" :sm="24">
                                            <el-form-item label="附件">
                                                <el-input v-model="ruleForm.attachm2" style="position:absolute" :disabled="edit" :readonly="true"></el-input>
                                                <el-upload class="upload-demo" ref="upload" name="file"
                                                           action="/iem_hrm/CustInfo/modCustFile"
                                                           :show-file-list="false"
                                                           :data="uploadUserNo"
                                                           :auto-upload="false"
                                                           :on-change="handleFileUpload"
                                                           :on-success="successUpload"
                                                           :headers="token"
                                                           >
                                                    <el-button slot="trigger" type="primary" class="uploadBtn" :disabled="edit">{{this.file==''?'上传':'更换'}}附件</el-button>
                                                    <el-button type="primary" class="uploadBtn uploadBtn-special" @click="downLoad">下载附件</el-button>
                                                    <!--<el-button type="primary" class="uploadBtn uploadBtn-special" @click="downLoad">下载附件</el-button>-->
                                                </el-upload>
                                            </el-form-item>
                                        </el-col>
                                    </el-form>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="社会关系" name="second">
                                <div class="second-wrapper">
                                    <div class="second_title">
                                        <span>成员信息</span><span class="text" @click="addItem">继续添加</span>
                                    </div>
                                    <div class="second_content_wrapper">
                                        <socialItem v-for="(item, index) in social_item"
                                                            :ruleFrom="item" :relationNum="index"
                                                            @del_item="delRelationItem" @pass_validate="passValidate"
                                                            :ref="`ruleFrom${index}`">
                                        </socialItem>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="工作经历" name="third" class="third_special">
                                <div class="third-wrapper">
                                    <div class="title"><span>工作经历</span><span  class="text" @click="addItem">继续添加</span></div>
                                    <div class="from-wrapper">
                                        <workItem v-for="(item, index) in work_item"
                                                    :ruleForm="item" :index="index"
                                                    @del_item="delRelationItem" @pass_validate="passValidate"
                                                    :ref="`workItem${index}`">
                                        </workItem>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="教育背景" name="fourth">
                                <div class="fourth-wrapper">
                                    <div class="title"><span>教育背景</span><span class="text" @click="addItem">继续添加</span></div>
                                    <div class="from-wrapper">
                                        <educationItem v-for="(item, index) in education_item"
                                                  :ruleForm="item" :index="index"
                                                  @del_item="delRelationItem" @pass_validate="passValidate"
                                                  :ref="`educationItem${index}`">
                                        </educationItem>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="项目经历" name="fifth">
                                <div class="fifth-wrapper">
                                    <div class="title"><span>项目经历</span><span class="text" @click="addItem">继续添加</span></div>
                                    <div class="from-wrapper">
                                        <projectItem v-for="(item, index) in project_item"
                                                       :ruleForm="item" :index="index"
                                                       @del_item="delRelationItem" @pass_validate="passValidate"
                                                       :ref="`projectItem${index}`">
                                        </projectItem>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="证件管理" name="sixth">
                                <div class="sixth_wrapper">
                                    <el-upload name="file"
                                            action="/iem_hrm/CustFile/batch/upload"
                                            list-type="picture-card"
                                           :file-list="fileList2"
                                           :data="uploadUserNo"
                                            :on-preview="handlePictureCardPreview"
                                            :on-remove="handleRemove"
                                           :on-success="successUpload"
                                            multiple
                                           :headers="token">
                                        <i class="el-icon-plus"></i>
                                        <div class="upload_text_text">添加照片/文件<br>按住Ctrl可多选</div>
                                        <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
                                    </el-upload>
                                    <el-dialog v-model="dialogVisible2" size="tiny">
                                        <img width="100%" :src="dialogImageUrl" alt="pic">
                                    </el-dialog>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </template>
                </div>
                <div class="button-wrapper">
                    <button @click="bianji(tabName)" v-show="tabName=='first'?true:false">编辑</button>
                    <button class="special_1" @click="save(tabName)">{{this.tabName=='sixth'?'全部下载':'保存'}}</button>
                    <button @click="del" v-show="tabName=='first'?true:false">删除</button>
                </div>
            </div>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from "../../../common/current_position.vue"
    import socialItem from './social_relation_item.vue'
    import workItem from './work_experience_item.vue'
    import educationItem from './education_experience_item.vue'
    import projectItem from './project_experience_item.vue'
    import messageBox from "../../../common/messageBox-components.vue"
    import moment from 'moment'
    export default {
        data() {
            let that = this
            let validateEndTime = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请选择试用结束日期'));
                } else if (new Date(value)  < new Date(that.ruleForm.probStartTime)) {
                    callback(new Error('试用结日期不能小于试用开始日期'));
                } else {
                    callback();
                }
            }
            return {
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < new Date(that.ruleForm.compactStartTime) - 3600*1000*24
                    },
                },
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() < new Date(that.ruleForm.probStartTime) - 3600*1000*24
                    },
                },
                basicInfo:{
                    nation:'',
                    education:'',
                    degree:'',
                    company:'',
                    department:[],
                    CCC:'',
                    contractSubject:'',
                    custType:'',
                    custPost:'',
                    custClass:'',
                    custStatus:'',
                    recruitQuarry:'',
                },
                // 标记
                flag: false,
                selectFlag: false,
                //头像数据
                imageUrl: '',
                //证件数据
                fileList2: [],
                dialogImageUrl: '',
                dialogVisible2: false,
                // 公共数据
                userNo: '',
                uploadUserNo:{
                    userNo:'',
                },
                successAlert:'',
                count: 0,
                token: {
                    Authorization:`Bearer `+localStorage.getItem('access_token'),
                },
                //弹窗数据
                dialogVisible: false,
                tableOption:[],
                inputFirstOption:{},
                inputSecOption:{},
                msgPagination:{},
                searchData:{},
                searchUrl:'',
                saveUrl:'',
                boxTitle:'',
                numType:'',
                // 基础信息是否可修改
                edit: true,
                //项目数据
                social_item:[],
                education_item:[],
                work_item:[],
                project_item:[],
                //默认激活的tab数据
                activeName: 'first',
                tabName:'first',
                //tab锁
                lock: {
                    proLock: '',
                    eduLock: '',
                    workLock: '',
                    socialLock: '',
                    certificatesLock: '',
                },
                //基础信息
                ruleForm: {
                    custName: '',
                    certNo: '',
                    sex: '',
                    birthday: '',
                    nation: '',
                    marital: '',
                    education: '',
                    degree: '',
                    politial: '',
                    gradSchool: '',
                    gradTime: '',
                    major: '',
                    mobileNo: '',
                    homeTeleph: '',
                    perEmail: '',
                    qqAcct: '',
                    comEmail: '',
                    atten: '',
                    attenTeleph: '',
                    origo: '',
                    permAddr: '',
                    liveAddr: '',
                    userNo: '',
                    organNo: '',
                    derpNo: '',
                    ownerCCC: '',
                    lineManager: '',
                    contractSubject: '',
                    custType: '',
                    custPost: '',
                    custClass: '',
                    custStatus: '',
                    entryTime: '',
                    leftJobTime: '',
                    workTime: '',
                    profTitleTime: '',
                    compactStartTime: '',
                    compactEndTime: '',
                    probStartTime: '',
                    probEndTime: '',
                    recruitQuarry: '',
                    openBank: '',
                    bankCardNo: '',
                    endmAcct: '',
                    mediAcct: '',
                    mateAcct: '',
                    housAcct: '',
                    remark: '',
                    attachm: '',
                },
                //基础信息校验
                rules: {
                    custName: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        { pattern: /(([\u4E00-\u9FA5]{2,7})|([a-zA-Z]{3,20}))/, message: "只能输入的姓名为全部中文或英文" }
                    ],
                    certNo: [
                        {required: true, message: '请输入身份证', trigger: 'blur'},
                        {min: 10, max: 18, message: '长度在 10 到 18 个字符', trigger: 'blur'},
                        { pattern: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, message: "请输入正确的身份证号码" }
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    birthday: [
                        {required: true, message: '请输入出生年月', trigger: 'change'}
                    ],
                    nation: [
                        {required: true, message: '请选择民族', trigger: 'change'}
                    ],
                    marital: [
                        {required: true, message: '请选择婚姻状况', trigger: 'change'}
                    ],
                    education: [
                        {required: true, message: '请选择学历', trigger: 'change'}
                    ],
                    degree: [
                        {required: true, message: '请选择学位', trigger: 'change'}
                    ],
                    politial: [
                        {required: true, message: '请选择政治面貌', trigger: 'change'}
                    ],
                    gradSchool: [
                        {required: true, message: '请输入毕业学校', trigger: 'blur'}
                    ],
                    gradTime: [
                        {required: true, message: '请输入毕业时间', trigger: 'change'}
                    ],
                    major: [
                        {required: true, message: '请输入专业', trigger: 'blur'}
                    ],
                    mobileNo: [
                        {required: true, message: '请输入移动电话', trigger: 'blur'},
                        { pattern: /^[1][3578]\d{9}$/, message: "请输入合法的手机号码:例13几到18几的11位数字" }
                    ],
                    homeTeleph: [
                        { pattern: /^\d+(-)?\d+((-)?\d+)?$/, message: "请输入合法的家庭号码:例如纯数字", trigger: 'blur'}
                    ],
                    attenTeleph: [
                        { pattern: /^\d+(-)?\d+((-)?\d+)?$/, message: "请输入合法的紧急号码:例如纯数字", trigger: 'blur'}
                    ],
                    perEmail: [
                        { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: "请输入合法的邮箱" }
                    ],
                    comEmail: [
                        { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: "请输入合法的邮箱" }
                    ],
                    organNo: [
                        {required: true, message: '请选择公司名称', trigger: 'change'}
                    ],
                    derpNo: [
                        {required: true, message: '请选择部门名称', trigger: 'change'}
                    ],
                    ownerCCC: [
                        {required: true, message: '请选择CCC', trigger: 'change'}
                    ],
                    contractSubject: [
                        {required: true, message: '请选择合同主体', trigger: 'change'}
                    ],
                    custType: [
                        {required: true, message: '请选择员工类别', trigger: 'change'}
                    ],
                    custPost: [
                        {required: true, message: '请选择岗位', trigger: 'change'}
                    ],
                    custClass: [
                        {required: true, message: '请选择职级', trigger: 'change'}
                    ],
                    custStatus: [
                        {required: true, message: '请选择员工状态', trigger: 'change'}
                    ],
                    entryTime: [
                        {required: true, message: '请选择入职时间', trigger: 'change'}
                    ],
                    probStartTime: [
                        {required: true, message: '请选择试用开始时间', trigger: 'change'}
                    ],
                    probEndTime: [
                        {type:'date',required: true, validator: validateEndTime, trigger: 'change'}
                    ],
                },
                // 附件下载
                file:''
            }
        },
        components: {
            current,socialItem,workItem,educationItem,projectItem,messageBox
        },
        created() {
            let self = this
            function getNation() {
                return self.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=NATION')
            }
            function getEducation() {
                return self.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=EDUCATION')
            }
            function getDegree() {
                return self.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=DEGREE')
            }
            function getCompany() {
                return self.$axios.get('/iem_hrm/organ/selectCompanyByUserNo')
            }
            function getContractSubject() {
                return self.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=PACT_SUBJECT')
            }
            function getCustType() {
                return self.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=EMP_CUST_TYPE')
            }
            function getCustPost() {
                return self.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
            }
            function getCustClass() {
                return self.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
            }
            function getCustStatus() {
                return self.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=CUST_STATUS')
            }
            function getRecruitQuarry() {
                return self.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=RECRUIT_QUARRY')
            }
            self.$axios.all([getNation(),getEducation(),getDegree(),getCompany(),getContractSubject(),getCustType(),getCustPost(),
                getCustClass(),getCustStatus(),getRecruitQuarry()])
                .then(self.$axios.spread(function(res1,res2,res3,res4,res5,res6,res7,res8,res9,res10){
                    self.basicInfo.nation = res1.data.data
                    self.basicInfo.education = res2.data.data
                    self.basicInfo.degree = res3.data.data
                    self.basicInfo.company = res4.data.data
                    self.basicInfo.contractSubject = res5.data.data
                    self.basicInfo.custType = res6.data.data
                    self.basicInfo.custPost = res7.data.data
                    self.basicInfo.custClass = res8.data.data
                    self.basicInfo.custStatus = res9.data.data
                    self.basicInfo.recruitQuarry = res10.data.data
                }))
                .catch(e=>{
                    console.log(e)
                });
            this.userNo = this.$route.query.userNo
            this.uploadUserNo.userNo = this.$route.query.userNo
            // tab锁全部变成真
            for(var tt in this.lock){
                this.lock[tt] = true
            }
            if(this.tabName=='first'){
                this.$axios.get('/iem_hrm/CustInfo/queryCustInfoByUserNo/'+this.userNo)
                    .then(res=>{
                        console.log(res,'基础数据查询')
                        this.ruleForm = res.data.data
                    })
                    .catch(e=>{
                        console.log(e)
                    })
                this.$axios.get('/iem_hrm/CustInfo/queryCustAvatar/'+this.userNo)
                    .then(res=>{
                        console.log(res,'头像查询')
                        if(res.data.data) {
                            let url = 'data:image/jpg;base64,'+res.data.data
                            this.imageUrl = url
                        }
                    })
                    .catch(e=>{
                        console.log(e)
                    })
                this.$axios.get('/iem_hrm/CustInfo/queryCustFile/'+this.userNo)
                    .then(res=>{
                        console.log(res,'附件查询')
                        this.$set(this.ruleForm,'attachm2','')
                        if(res.data[0]) {
                            this.file = res.data[0]
                            this.ruleForm.attachm2 = this.file.fileName+'.'+this.file.fileSuffix
                        }
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            }
        },
        methods: {
            modCustInf(aa) {
                this.$axios.put('/iem_hrm/CustInfo/modCustInf',aa.data)
                    .then(res=>{
                        console.log(aa,aa.data,res,'111222',this.userNo)
                        let result = res.data.retMsg
                        if("操作成功"==result) {
                            this.$message({ message: result, type: 'success' });
                        }else {
                            this.$message({ message: result, type: 'error' });
                        }
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            },
            // 下载附件
            downLoad() {
                let data = this.file.fileId
                if(data) {
                    this.$axios.get('/iem_hrm/file/downloadFile/'+data,{
                        responseType: 'blob'
                    }).then(res=>{
                        const blob = res.data;
                        console.log(res,data)
                        let elink = document.createElement('a'); // 创建a标签
                        elink.download = this.file.fileName+'.'+this.file.fileSuffix;
                        elink.style.display = 'none';
                        elink.href = URL.createObjectURL(blob);
                        document.body.appendChild(elink);
                        elink.click(); // 触发点击a标签事件
                        document.body.removeChild(elink);
                    }).catch(e=>{
                        console.log(e)
                        this.$message({ message: '下载附件失败', type: 'error' });
                    })
                }
            },
            // 附件方法
            handleFileUpload(file, fileList) {
                if(this.ruleForm.attachm2 == file.name) return
                this.ruleForm.fujianFlag = true
                this.ruleForm.attachm2 = file.name
                console.log(file.name,this.ruleForm.attachm2,'1111')
            },
            // 证件方法
            handleRemove(file, fileList) {
                console.log(file,fileList,this.fileList2)
                let index = this.fileList2.indexOf(file)
                fileList.splice(index,0,file)
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let data = {}
                    if(file.response&&file.response.data[0]){
                        data = {
                            userNo:file.response.data[0].userNo,
                            imageId:file.response.data[0].imageId,
                        }
                    }else {
                        data = {
                            userNo:file.userNo,
                            imageId:file.imageId,
                        }
                    }
                    console.log(data)
                    this.$axios.delete('/iem_hrm/CustFile/delCustFile',{params:data})
                        .then(res=>{
                            let result = res.data.retMsg
                            if("操作成功"==result){
                                this.$message({
                                    type: 'success',
                                    message: result
                                });
                                fileList.splice(index,1)
                            }else {
                                this.$message({
                                    type: 'error',
                                    message: result
                                });
                            }
                        })
                        .catch(e=>{
                            console.log(e)
                            this.$message({
                                type: 'error',
                                message: e.retMsg
                            });
                        })
                }).catch(()=>{
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                })
            },
            successUpload(response, file, fileList) {
                if(this.tabName == 'first') {
                    console.log(response,'上传附件成功')
                    let result = response.retMsg
                    if('操作成功'==result) {
                        if(--this.count <= 0){
                            this.refreshInfo()
                        }
                        if(this.successAlert) return
                        this.$message({
                            type: 'success',
                            message: result
                        });
                        this.successAlert = true
                    } else {
                        this.$message({
                            type: 'error',
                            message: result
                        });
                    }
                }
                if(this.tabName == 'sixth') {
                    console.log(response,'sixth',fileList)
                    if(response.code === "S00000") {
                        this.$message({ message: '操作成功', type: 'success' });
                        this.fileList2 = fileList
                    }else if(response.code === 'hrm_h0093') {
                        this.$message({
                            message: response.retMsg,
                            type: 'error'
                        })
                        fileList.forEach((item,index)=>{
                            if(item.uid==file.uid){
                                fileList.splice(index,1)
                            }
                        })
                    }else {
                        this.$message({
                            message: response.retMsg,
                            type: 'error'
                        })
                    }
                }
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible2 = true;
            },
            // 头像上传方法
            handleAvatarChange(file, fileList) {
                const isJPG = file.raw.type === 'image/jpeg';
                const isLt2M = file.raw.size / 1024 / 1024 < 2;
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                    return isJPG
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                    return isLt2M
                }
                if(this.ruleForm.avatarName == file.name) return
                this.ruleForm.avatarFlag = true
                this.ruleForm.avatarName = file.name
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            handleAvatarSuccess(res, file) {
                console.log(res,'修改头像上传成功',this.uploadUserNo.userNo)
                let result = res.retMsg
                if('操作成功'===result) {
                    if(--this.count <= 0){
                        this.refreshInfo()
                    }
                    if(this.successAlert) return
                    this.$message({
                        type: 'success',
                        message: result
                    });
                    this.successAlert = true
                } else {
                    this.$message({
                        type: 'error',
                        message: result
                    });
                }
            },
            // 选择经理方法
            userNoSelect(){
                //table
                this.tableOption = [
                    {
                        thName:'工号',//table 表头
                        dataKey:'userNo'//table-col所绑定的prop值
                    },
                    {
                        thName:'姓名',//table 表头
                        dataKey:'custName'//table-col所绑定的prop值
                    }
                ];
                //input 第一个搜索框的配置项
                this.inputFirstOption  = {
                    labelName:'姓名',//label头
                    placeholder:'请输入姓名'//input placeholder
                },
                    //input 第二个搜索框的配置项
                    this.inputSecOption  = {
                        labelName:'工号',
                        placeholder:'请输入工号'
                    },
                    //搜索所需传值
                    this.searchData = {
                        custName:'',
                        userNo:''
                    }
                //table分页所需传值
                this.msgPagination =  {
                    pageNum:1,
                    pageSize:5,
                    totalRows:0
                }
                //点击确定后需要修改的对象 numType为changeNo方法所改变的type
                this.numType = 1
                //dialog打开
                this.dialogVisible=true
                //查询接口
                this.searchUrl = "/iem_hrm/CustInfo/queryCustBasicInfList"
                //点击确定后根据号码查询用户信息借口 没有则为空
                this.saveUrl = ''
                //dialog标题
                this.boxTitle = '人工编号选择'
            },
            changeDialogVisible(val) {
                this.dialogVisible=val
            },
            dialogConfirm(custInfo){
                let self = this;
                self.ruleForm.lineManager = custInfo.stateName+'_'+custInfo.stateNo
                self.dialogVisible = false;
            },
            // 选择机构方法
            selectDep(organNo) {
                let data = {organNo}
                this.$axios.get('/iem_hrm/organ/selectChildDeparment',{params:data})
                    .then(res=>{
                        this.basicInfo.department = res.data.data
                        if(this.selectFlag) {
                            this.ruleForm.derpNo = ''
                            this.ruleForm.ownerCCC = ''
                            this.basicInfo.CCC = []
                        }
                        this.selectFlag = true
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            },
            selectCCC(organNo) {
                this.$axios.get('/iem_hrm/organ/queryOrganCCCManagementByOrganNo/'+organNo)
                    .then(res=>{
                        this.basicInfo.CCC = res.data.data
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            },
            handleClick(tab, event) {
                let self = this
                this.tabName = tab.name
                if(tab.name==='fifth'&&this.lock.proLock){
                    this.$axios.get('/iem_hrm/employeeProjectExperience/queryEmployeeProjectExperienceList/'+this.userNo)
                        .then(res=>{
                            console.log(res)
                            this.project_item = res.data.data
                            this.project_item.forEach(item=>{
                                self.$set(item,'isShowEdit', true)
                                item.startTime = new Date(item.startTime)
                                item.endTime = new Date(item.endTime)
                            })
                            this.lock.proLock = false
                        })
                        .catch(e=>{
                            console.log(e)
                        })
                }
                if(tab.name==='fourth'&&this.lock.eduLock){
                    this.$axios.get('/iem_hrm/epCustEduHis/queryEpCustEduHis',{params:{userNo:this.userNo}})
                        .then(res=>{
                            this.education_item = res.data.data
                            this.education_item.forEach(item=>{
                                self.$set(item,'isShowEdit', true)
                                item.startTime = new Date(item.startTime)
                                item.endTime = new Date(item.endTime)
                            })
                            this.lock.eduLock = false
                        })
                        .catch(e=>{
                            console.log(e)
                        })
                }
                if(tab.name==='third'&&this.lock.workLock){
                    this.$axios.get('/iem_hrm/epCustWorkHis/queryEpCustWorkHis',{params:{userNo:this.userNo}})
                        .then(res=>{
                            this.lock.workLock = false
                            this.work_item = res.data.data.map(item=>{
                                return {
                                    startTime: new Date(item.startTime),
                                    endTime: new Date(item.endTime),
                                    company: item.company,
                                    post1: item.post1,
                                    duty: item.duty,
                                    desc: item.desc,
                                    isShowEdit: true
                                }
                            })
                        })
                        .catch(e=>{
                            console.log(e)
                        })
                }
                if(tab.name==='second'&&this.lock.socialLock){
                    this.$axios.get('/iem_hrm/CustContact/queryCustContacts',{params:{userNo:this.userNo}})
                        .then(res=>{
                            this.lock.socialLock = false
                            this.social_item = res.data.data.map(item => {
                                return {
                                    contactName: item.contactName,
                                    relationship: item.relationship,
                                    telphone: item.telphone,
                                    profession: item.profession,
                                    post: item.post,
                                    addr: item.addr,
                                    isShowEdit: true
                                }
                            })
                        })
                        .catch(e=>{
                            console.log(e)
                        })
                }
                if(tab.name==='sixth'&&this.lock.certificatesLock){
                    this.$axios.get('/iem_hrm/CustFile/queryCustImgs',{params:{userNo:this.userNo}})
                        .then(res=>{
                            console.log(res,'服务器返回的证件数据反显')
                            this.fileList2 = res.data.data.map(item=>{
                                let obj = {
                                    name: item.fileName+item.imageSuffix,
                                    url: 'data:image/'+item.imageSuffix.substr(1)+';base64,'+item.base64ImgStr
                                }
                                return Object.assign(item,obj)
                            })
                            console.log(this.fileList2,'处理后证件数据反显')
                            this.lock.certificatesLock = false
                        })
                        .catch(e=>{
                            console.log(e)
                        })
                }
            },
            // 删除档案
            del() {
                let self = this
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.put('/iem_hrm/CustInfo/delCustInf/'+this.userNo)
                        .then(res=>{
                            let result = res.data.retMsg
                            if ("操作成功"===result){
                                self.$message({
                                    type: 'success',
                                    message: result
                                });
                                self.$router.push('personnel_archives')
                            }else{
                                self.$message({
                                    type: 'error',
                                    message: result
                                });
                            }
                        })
                        .catch(e=>{
                            console.log(e)
                            self.$message({
                                type: 'error',
                                message: '删除失败,请稍后再试！'
                            });
                        })
                }).catch(()=>{
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                })
            },
            bianji(tabName){
                if('first' === tabName) {
                    this.edit = false
                }
            },
            save(tabName) {
                let self = this
                if('first' === tabName){
                    if(this.edit) {
                        self.$message({
                            type: 'error',
                            message: '请先点击编辑'
                        });
                        return
                    }
                    self.$refs.ruleForm.validate((valid) => {
                        if (valid) {
                            for(var key in this.ruleForm){
                                if(!this.ruleForm[key]){
                                    delete this.ruleForm[key]
                                }
                            }
                            this.count++
                            console.log(this.ruleForm,'正常修改提交')
                            this.$axios.put('/iem_hrm/CustInfo/modCustInf', this.ruleForm)
                                .then(res=>{
                                    let result = res.data.retMsg
                                    this.edit = true
                                    if ("操作成功"===result){
                                        if(this.ruleForm.fujianFlag) {
                                            console.log('提交附件去了')
                                            this.ruleForm.fujianFlag = ''
                                            self.$refs.upload.submit()
                                        }
                                        if(--this.count <= 0){
                                            this.refreshInfo()
                                        }
                                        if(this.successAlert) return
                                        self.$message({
                                            type: 'success',
                                            message: result
                                        });
                                        this.successAlert = true
                                    }else{
                                        self.$message({
                                            type: 'error',
                                            message: result
                                        });
                                    }
                                })
                                .catch(e=>{
                                    self.$message({
                                        type: 'error',
                                        message: '添加失败,请稍后重试！'
                                    });
                                    console.log(e)
                                })
                        }else {
                            self.$message({
                                type: 'error',
                                message: '请确保必填信息填写正确!'
                            });
                        }
                    })
                    if(this.ruleForm.avatarFlag) {
                        console.log('提交头像去了')
                        this.count++
                        this.ruleForm.avatarFlag = ''
                        self.$refs.uploadAvatar.submit()
                    }
                    if(this.ruleForm.fujianFlag) {
//                        console.log('提交附件去了')
                        this.count++
//                        this.ruleForm.fujianFlag = ''
//                        self.$refs.upload.submit()
                    }
                }
                if('second'===tabName) {
                    let socialItemLength = this.social_item.length
                    let count = 0
                    for (let i=0;i<socialItemLength;i++){
                        this.flag = false
                        let name = 'ruleFrom'+i
                        self.$refs[name][0].checkValue()
                        this.social_item.splice(i,1,this.$refs[name][0].ruleFrom)
                        if(this.flag) {
                            count++
                            self.$refs[name][0].ruleFrom.isShowEdit = true
                        }
                    }
                    if(count==socialItemLength){
                        let data = {
                            userNo: this.userNo,
                            lists: this.social_item
                        }
                        console.log(data,'详情页社会关系提交数据')
                        this.$axios.post('/iem_hrm/CustContact/saveCustContacts', data)
                            .then(res=>{
                                let result = res.data.retMsg
                                if('操作成功'==result){
                                    self.$message({
                                        type: 'success',
                                        message: result
                                    });
                                    this.flag = false
                                }else {
                                    self.$message({
                                        type: 'error',
                                        message: result
                                    });
                                }
                            })
                            .catch(e=>{
                                console.log(e)
                                self.$message({
                                    type: 'error',
                                    message: '添加失败,请稍后重试！'
                                });
                            })
                    }else {
                        self.$message({
                            type: 'error',
                            message: '请确保必填信息填写正确！'
                        });
                    }
                }
                if('third'===tabName) {
                    let workItemLength = this.work_item.length
                    let count = 0
                    for (let i=0;i<workItemLength;i++){
                        this.flag = false
                        let name = 'workItem'+i
                        self.$refs[name][0].checkValue()
                        this.work_item.splice(i,1,this.$refs[name][0].ruleForm)
                        if(this.flag) {
                            count++
                            self.$refs[name][0].ruleForm.isShowEdit = true
                        }
                    }
                    if(count==workItemLength){
                        let data = {
                            userNo : this.userNo,
                            lists : this.work_item.map(item=>{
                                return {
                                    startTime: moment(item.startTime).format('YYYY-MM-DD'),
                                    endTime: moment(item.endTime).format('YYYY-MM-DD'),
                                    company: item.company,
                                    post1: item.post1,
                                    duty: item.duty,
                                    desc: item.desc,
                                }
                            }),
                        }
                        console.log(data,'详情页工作经历提交的数据')
                        this.$axios.post('/iem_hrm/epCustWorkHis/saveEpCustWorkHiss', data)
                            .then(res=>{
                                let result = res.data.retMsg
                                if(result==='操作成功'){
                                    self.$message({
                                        type: 'success',
                                        message: result
                                    });
                                }else {
                                    self.$message({
                                        type: 'error',
                                        message: result
                                    });
                                }
                            })
                            .catch(e=>{
                                console.log(e)
                                self.$message({
                                    type: 'error',
                                    message: '添加失败,请稍后重试！'
                                });
                            })
                    }else {
                        self.$message({
                            type: 'error',
                            message: '请确保必填信息填写正确！'
                        });
                    }
                }
                if('fourth'===tabName) {
                    let educationItemLength = this.education_item.length
                    let count = 0
                    for (let i=0;i<educationItemLength;i++){
                        let name = 'educationItem'+i
                        this.flag = false
                        self.$refs[name][0].checkValue()
                        this.education_item.splice(i,1,this.$refs[name][0].ruleForm)
                        if(this.flag) {
                            count++
                            self.$refs[name][0].ruleForm.isShowEdit = true
                        }
                    }
                    if(count==educationItemLength){
                        let data = {
                            userNo : this.userNo,
                            lists : this.education_item.map(item=>{
                                return {
                                    startTime: moment(item.startTime).format('YYYY-MM-DD'),
                                    endTime: moment(item.endTime).format('YYYY-MM-DD'),
                                    schoolName: item.schoolName,
                                    major: item.major,
                                    education: item.education,
                                    desc: item.desc,
                                }
                            }),
                        }
                        console.log(data,'详情页教育经历提交的数据')
                        this.$axios.post('/iem_hrm/epCustEduHis/saveEpCustEduHiss', data)
                            .then(res=>{
                                let result = res.data.retMsg
                                if(result==='操作成功'){
                                    self.$message({
                                        type: 'success',
                                        message: result
                                    });
                                }else {
                                    self.$message({
                                        type: 'error',
                                        message: result
                                    });
                                }
                            })
                            .catch(e=>{
                                console.log(e)
                                self.$message({
                                    type: 'error',
                                    message: '添加失败,请稍后重试！'
                                });
                            })
                    }else {
                        self.$message({
                            type: 'error',
                            message: '请确保必填信息填写正确！'
                        });
                    }
                }
                if('fifth'===tabName) {
                    let projectItemLength = this.project_item.length
                    let count = 0
                    for (let i=0;i<projectItemLength;i++){
                        let name = 'projectItem'+i
                        this.flag = false
                        self.$refs[name][0].checkValue()
                        this.project_item.splice(i,1,this.$refs[name][0].ruleForm)
                        if(this.flag) {
                            count++
                            self.$refs[name][0].ruleForm.isShowEdit = true
                        }
                    }
                    if(count==projectItemLength){
                        let data = {
                            userNo : this.userNo,
                            lists : this.project_item.map(item=>{
                                return {
                                    startTime: moment(item.startTime).format('YYYY-MM-DD'),
                                    endTime: moment(item.endTime).format('YYYY-MM-DD'),
                                    projectName: item.projectName,
                                    mainSkill: item.mainSkill,
                                    projectRole: item.projectRole,
                                    softEnv: item.softEnv,
                                    custom: item.custom,
                                    projectDuty: item.projectDuty,
                                    desc: item.desc,
                                }
                            }),
                        }
                        console.log(data,'详情页项目经历提交的数据')
                        this.$axios.post('/iem_hrm/employeeProjectExperience/addEmployeeProjectExperienceInfo', data)
                            .then(res=>{
                                let result = res.data.retMsg
                                if(result==='操作成功'){
                                    self.$message({
                                        type: 'success',
                                        message: result
                                    });
                                }else {
                                    self.$message({
                                        type: 'error',
                                        message: result
                                    });
                                }
                            })
                            .catch(e=>{
                                console.log(e)
                                self.$message({
                                    type: 'error',
                                    message: '添加失败,请稍后重试！'
                                });
                            })
                    }else {
                        self.$message({
                            type: 'error',
                            message: '请确保必填信息填写正确！'
                        });
                    }
                }
                if('sixth'===tabName) {
                    console.log(this.userNo,this.fileList2)
                    let data = {
                        userNo: this.userNo,
                    }
                    this.$axios.get('/iem_hrm/CustFile/batchDownLoad',{
                        params:data,
                        responseType: 'blob'
                    }).then(res=>{
                            const blob = res.data;
                            console.log(res)
                            let elink = document.createElement('a'); // 创建a标签
                            elink.download = this.userNo+'.zip';
                            elink.style.display = 'none';
                            elink.href = URL.createObjectURL(blob);
                            document.body.appendChild(elink);
                            elink.click(); // 触发点击a标签事件
                            document.body.removeChild(elink);
                        })
                        .catch(e=>{
                            console.log(e)
                            this.$message({ message: '下载附件失败', type: 'error' });
                        })
                }
            },
            refreshInfo() {
                this.$axios.get('/iem_hrm/CustInfo/queryCustInfoByUserNo/'+this.userNo)
                    .then(res=>{
                        console.log(res,'重新加载基本信息')
                        this.ruleForm = res.data.data
                        this.$set(this.ruleForm,'attachm2','')
                        if(this.file) {
                            this.ruleForm.attachm2 = this.file.fileName+'.'+this.file.fileSuffix
                        }
                        this.count = 0
                        this.successAlert = false
                    })
                    .catch(e=>{
                        console.log(e)
                    })
                if(this.ruleForm.fujianFlag === '') {
                    this.$axios.get('/iem_hrm/CustInfo/queryCustFile/'+this.userNo)
                        .then(res=>{
                            console.log(res,'附件查询重新加载')
                            if(res.data[0]) {
                                this.file = res.data[0]
                                this.ruleForm.attachm2 = this.file.fileName+'.'+this.file.fileSuffix
                            }
                        })
                        .catch(e=>{
                            console.log(e)
                        })
                }
            },
            passValidate(boolean) {
                if(boolean) {
                    this.flag = true
                }
            },
            delRelationItem(index) {
                if(this.tabName == 'second') this.social_item.splice(index,1)
                if(this.tabName == 'third') this.work_item.splice(index,1)
                if(this.tabName == 'fourth') this.education_item.splice(index,1)
                if(this.tabName == 'fifth') this.project_item.splice(index,1)
            },
            addItem() {
                if('second'==this.tabName) {
                    let item = {
                        contactName: '',
                        relationship: '',
                        telphone: '',
                        profession: '',
                        post: '',
                        addr: '',
                        isShowEdit: false
                    }
                    this.social_item.push(item)
                }
                if('fifth'==this.tabName){
                    let item = {
                        startTime: '',
                        endTime: '',
                        projectName: '',
                        mainSkill: '',
                        projectRole: '',
                        softEnv: '',
                        custom: '',
                        projectDuty: '',
                        desc: '',
                        isShowEdit: false
                    }
                    this.project_item.push(item)
                }
                if('fourth'==this.tabName){
                    let item = {
                            startTime: '',
                            endTime: '',
                            schoolName: '',
                            major: '',
                            education: '',
                            desc: '',
                            isShowEdit: false
                        }
                    this.education_item.push(item)
                }
                if('third'==this.tabName){
                    let item = {
                        startTime: '',
                        endTime: '',
                        company: '',
                        post1: '',
                        duty: '',
                        desc: '',
                        isShowEdit: false
                    }
                    this.work_item.push(item)
                }
            },
            holdBirthday(val){
                this.ruleForm.birthday = val
            },
            holdGradTime(val){
                this.ruleForm.gradTime = val
            },
            changeEntryTime(val) {
                this.ruleForm.entryTime = val
            },
            changeLeftJobTime(val) {
                this.ruleForm.leftJobTime = val
            },
            changeWorkTime(val) {
                this.ruleForm.workTime = val
            },
            changeProfTitleTime(val) {
                this.ruleForm.profTitleTime = val
            },
            changeCompactStartTime(val) {
                this.ruleForm.compactStartTime = val
            },
            changeCompactEndTime(val) {
                this.ruleForm.compactEndTime = val
            },
            changeProbStartTime(val) {
                this.ruleForm.probStartTime = val
            },
            changeProbEndTime(val) {
                this.ruleForm.probEndTime = val
            },
        },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .archives_detail
        padding: 0 0 20px 20px;
        /*overflow: hidden;*/
        position: relative;
        .test
            padding-left: 10px;
        .content-wrapper-xx
            background: #fff;
            position relative
            .button-wrapper
                position absolute
                right 10px
                top 10px
                button
                    width: 120px
                    height 30px
                    background: #fff;
                    border: 1px solid #FF9900;
                    outline none
                    border-radius 4px
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #f90;
                    line-height 30px
                    text-align center
                    &:hover
                        background: #f90;
                        color #fff
                .special_1
                    margin 0 20px
            .content
                font-family: PingFangSC-Regular;
                letter-spacing: 0;
                padding-left 20px
                padding-right 20px
                .el-tabs__content
                    overflow visible
                .el-tabs__header
                    margin 0
                    height 50px
                    .el-tabs__nav-wrap
                        height 100%
                        .el-tabs__nav
                            height 50px
                            line-height 50px
                .el-tabs__item
                    font-size 16px
                    height 50px
                    line-height 50px
                    padding 0 20px
                .el-tabs__nav
                    .el-tabs__active-bar
                        background-color: #000
                    .el-tabs__item.is-active
                        color #000
                .first_title
                    .avatar-uploader
                        width: 112px;
                        height: 112px;
                        line-height 112px
                        border-radius 50%
                        background: #ccc;
                        cursor: pointer;
                        color: #FFFFFF;
                        overflow: hidden;
                        text-align center
                        margin 0 auto 10px auto
                        .el-upload__input
                            display none
                        .avatar
                            width: 112px;
                            height: 112px;
                            display: block;
                    .text-desc
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #999999;
                        letter-spacing: 0;
                        text-align center
                        width 300px
                        margin 0 auto 20px auto
                .personal_information
                    padding-top 40px
                    overflow hidden
                    .el-input
                        width 200px
                        height 40px
                        .el-input__inner
                            width 100%
                            height 40px
                            &:hover
                                border-color #ff9900
                            &:focus
                                border-color #ff9900
                    .el-select
                        width 200px
                        height 40px
                        .el-input
                            height 100%
                            .el-input__inner
                                width 100%
                                height 100%
                                &:hover
                                    border-color #ff9900
                                &:focus
                                    border-color #ff9900
                    .el-radio-button
                        width 90px
                        height 40px
                        margin-bottom 0
                        .el-radio-button__orig-radio:checked+.el-radio-button__inner
                            background: #f90;
                            border-color #ff9900
                            color #fff
                            box-shadow none
                        .el-radio-button__inner
                            width 100%
                            height 100%
                            border-radius 4px
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #97A8BE;
                            letter-spacing: 0;
                            border 1px solid #bfcbd9;
                            padding 12px 15px
                    .gender_special
                        .special
                            .el-radio-button__inner
                                margin-left 20px
                    .marriage_special, politics_special
                        .el-radio-button
                            width 54px
                            height 40px
                            margin-bottom 0
                        .el-radio-button__orig-radio:checked+.el-radio-button__inner
                            background: #f90;
                            border-color #ff9900
                            color #fff
                            box-shadow: none;
                        .el-radio-button__inner
                            width 100%
                            height 100%
                            border-radius 4px
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #97A8BE;
                            letter-spacing: 0;
                            border 1px solid #bfcbd9;
                            padding 12px 10px
                        .special
                            margin 0 19px
                    .text
                        padding-left 8px
                        margin 40px 0
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #333333;
                        letter-spacing: 0;
                        clear both
                    .el-form-item
                        margin-bottom 30px
                        .el-form-item__label
                            padding 11px 30px 11px 0
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #999;
                            letter-spacing: 0;
                            height 40px
                            margin-bottom  0
                    .line-manager
                        .el-form
                            margin-top 20px
                        .el-form-item
                            margin-bottom 0px
                    .upload-demo
                        position absolute
                        width 200px
                    .el-upload__input
                        display none
                    .uploadBtn
                        position: absolute;
                        height: 40px;
                        top: 0;
                        right: -80px;
                        margin: 0;
                        border: 1px solid #ff9900;
                        border-bottom-left-radius: 0;
                        border-top-left-radius: 0;
                        background: #ff9900;
                        font-family: "PingFang SC";
                    .uploadBtn-special
                        right -170px
                .second_title
                    padding 30px 8px 0 8px
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #333333;
                    letter-spacing: 0;
                    .text
                        color #f90
                        float right
                        &:hover
                            text-decoration underline
                            cursor pointer
                .second_content_wrapper
                    padding-top 30px
                .third-wrapper, .fourth-wrapper, .fifth-wrapper
                    padding-bottom 30px
                    .title
                        padding 30px 8px 0 8px
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #333333;
                        letter-spacing: 0;
                        .text
                            color #f90
                            float right
                            cursor pointer
                            &:hover
                                text-decoration underline
                    .from-wrapper
                        .el-form
                            padding 40px 20px 18px 20px
                            background: #F4F4F4;
                            overflow hidden
                            .el-input
                                width 425px
                                height 40px
                            .el-input__inner
                                width 100%
                                height 100%
                                &:hover
                                    border-color #ff9900
                                &:focus
                                    border-color #ff9900
                            .position_special
                                .el-input
                                    width 210px
                            .workTime_common
                                display inline-block
                                .el-input
                                    width 210px
                            .workTime_special
                                .el-form-item__label
                                    margin-left -74px
                                .el-input
                                    margin-left -80px
                                .el-form-item__error
                                    margin-left -80px
                            .el-textarea .el-textarea__inner
                                width: 445px
                                height: 120px
                            /*resize none*/
                            .fifthIcon
                                position absolute
                                top 14px
                                right 20px
                                color #f90
                                cursor pointer
                                &:hover
                                    text-decoration underline
                            .fifth_common
                                .el-date-editor
                                    width 200px
                                .el-textarea
                                        width: 98.5%;
                                        max-width: 1024px;
                                .el-textarea__inner
                                    width: 100%
                                    height: 120px
                                @-moz-document url-prefix()
                                    .el-textarea
                                        width: 99%;
                                        max-width: 1020px;
                            .fifth_special
                                .el-form-item__label
                                    margin-left -30px
                                .el-date-editor
                                    margin-left -35px
                                .el-form-item__error
                                    margin-left -35px
                        .bg_color
                            background: #F4F4F4;
                        .bg_color2
                            background: #FFF;
                        .button-wrapper
                            margin-top 40px
                            padding-left 100px
                            color #333
                            button
                                width: 120px
                                height 40px
                                background: #FF9900;
                                border: 1px solid #FF9900;
                                outline none
                                font-family: PingFangSC-Regular;
                                font-size: 14px;
                                color: #FFFFFF;
                                line-height 40px
                                text-align center
                            span
                                cursor pointer
                                &:hover
                                    color #f90
                                    text-decoration underline
                    .work_list
                        padding-top 40px
                        border-left 2px solid #EEE
                        position relative
                        .mask
                            width: 2px
                            height: 40px
                            position absolute
                            left -2px
                            top 0
                            background: #fff;
                        .line1_title
                            font-size: 14px;
                            color: #333333;
                            letter-spacing: 0;
                            transform translateX(-5px)
                            .circle
                                display inline-block
                                width: 8px
                                height: 8px
                                border-radius 50%
                                background: #f90;
                                margin-right 7px
                                vertical-align middle
                            .line1_time
                                float right
                                color: #999
                                .el-icon-edit
                                    color #f90
                                    width: 16px
                                    height: 14px
                                    margin-left 20px
                                    cursor pointer
                                    &:hover
                                        text-decoration underline
                        .zhiwei
                            margin 10px 0 20px 0
                            padding-left 13px
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #999999;
                            letter-spacing: 0;
                        .description
                            padding-left 13px
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #999999;
                            letter-spacing: 0;

                .sixth_wrapper
                    min-height 570px
                    padding 20px 0
                    .el-upload-list--picture-card .el-upload-list__item
                        width: 200px
                        height: 274px
                        padding-bottom 26px
                        box-sizing border-box
                    .el-upload-list--picture-card .el-upload-list__item-name
                        display block
                        position absolute
                        bottom 0
                    .el-upload--picture-card
                        width: 200px
                        height: 274px
                        padding-top 90px
                        line-height 0
                        .el-icon-plus
                            font-size 40px
                        .upload_text_text
                            padding-top 5px
                            font-family: PingFangSC-Regular;
                            font-size: 18px;
                            color: #999999;
                            letter-spacing: 0;
                            line-height: 20px;
                        .el-upload__input
                            display none

            .add
                width: 120px
                height 40px
                background: #FF9900;
                border: 1px solid #FF9900;
                outline none
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #FFFFFF;
                line-height 40px
                text-align center
                position absolute
                right 20px
                top 20px
        .el-textarea
            width 97%
            max-width 1024px
            .el-textarea__inner
                height 80px
                &:hover
                    border 1px solid #f90
                &:focus
                    border-color #f90
</style>
