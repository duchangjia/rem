<template>
    <div class="add_archives">
        <current yiji="人事事务" erji="人事档案" sanji="员工新增"></current>
        <el-col :md="24" :sm="24">
            <div class="content-wrapper-xx">
                <div class="content">
                    <template>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="基本信息" name="first">
                                <div class="first_title">
                                    <el-upload ref="uploadAvatar"
                                            class="avatar-uploader"
                                            action="/iem_hrm/CustInfo/uploadAvatar"
                                            :show-file-list="false"
                                            :data="uploadUserNo"
                                            :auto-upload="false"
                                            :on-change="handleAvatarChange"
                                            :on-success="handleAvatarSuccess"
                                            :headers="token"
                                            >
                                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                        <div><div>添加照片</div></div>
                                    </el-upload>
                                    <div class="text">员工照片</div>
                                </div>
                                <div class="personal_information">
                                    <div class="text">个人信息</div>
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="姓名" prop="custName">
                                                <el-input v-model="ruleForm.custName"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="身份证" prop="certNo">
                                                <el-input v-model="ruleForm.certNo"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="性别" prop="sex" class="gender_special">
                                                <el-radio-group v-model="ruleForm.sex">
                                                    <el-radio-button label="01">男</el-radio-button>
                                                    <el-radio-button label="02" class="special">女</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="出生年月" prop="birthday">
                                                <el-date-picker v-model="ruleForm.birthday" type="date" placeholder="选择日期" @change="changeBirthday"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="民族" prop="nation">
                                                <el-select v-model="ruleForm.nation" placeholder="请选择民族">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.nation"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="婚姻状况" prop="marital" class="marriage_special">
                                                <el-radio-group v-model="ruleForm.marital">
                                                    <el-radio-button label="01">未婚</el-radio-button>
                                                    <el-radio-button label="02" class="special">已婚</el-radio-button>
                                                    <el-radio-button label="03">离异</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="学历" prop="education">
                                                <el-select v-model="ruleForm.education" placeholder="请选择学历">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.education"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="学位" prop="degree">
                                                <el-select v-model="ruleForm.degree" placeholder="请选择学位">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.degree"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="政治面貌" prop="politial" class="marriage_special">
                                                <el-radio-group v-model="ruleForm.politial">
                                                    <el-radio-button label="01">党员</el-radio-button>
                                                    <el-radio-button label="02" class="special">团员</el-radio-button>
                                                    <el-radio-button label="03">群众</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="毕业学校" prop="gradSchool">
                                                <el-input v-model="ruleForm.gradSchool"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="毕业时间" prop="gradTime">
                                                <el-date-picker v-model="ruleForm.gradTime" type="date" placeholder="选择日期" @change="changeGradtime"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="专业" prop="major">
                                                <el-input v-model="ruleForm.major"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="移动电话" prop="mobileNo">
                                                <el-input v-model="ruleForm.mobileNo"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="家庭电话" prop="homeTeleph">
                                                <el-input v-model="ruleForm.homeTeleph"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="个人邮箱">
                                                <el-input v-model="ruleForm.perEmail"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="公司邮箱">
                                                <el-input v-model="ruleForm.comEmail"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="紧急联系人">
                                                <el-input v-model="ruleForm.atten"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="紧急电话" prop="attenTeleph">
                                                <el-input v-model="ruleForm.attenTeleph"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="籍贯">
                                                <el-input v-model="ruleForm.origo"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="户籍地址">
                                                <el-input v-model="ruleForm.permAddr"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="现居住地">
                                                <el-input v-model="ruleForm.liveAddr"></el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-form>
                                    <div class="text">职务信息</div>
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm2" label-width="100px">
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="公司名称" prop="organNo">
                                                    <el-select v-model="ruleForm.organNo" placeholder="请选择公司名称" @change="selectDep(ruleForm.organNo)">
                                                        <el-option :label="item.organName" :value="item.organNo" v-for="item in basicInfo.company"></el-option>
                                                    </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="部门名称" prop="derpNo">
                                                <el-select v-model="ruleForm.derpNo" placeholder="请选择部门名称" @change="selectCCC(ruleForm.organNo)">
                                                    <el-option :label="item.derpName" :value="item.derpNo" v-for="item in basicInfo.department"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="CCC" prop="ownerCCC">
                                                <el-select v-model="ruleForm.ownerCCC" placeholder="请选择CCC">
                                                    <el-option :label="item=='01'?'管理CCC':item=='02'?'售前CCC':'项目CCC'" :value="item" v-for="item in basicInfo.CCC"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="直线经理" class="line-manager">
                                                <el-input v-model="ruleForm.lineManager" placeholder="请选择员工编号" :readonly="true">
                                                    <el-button slot="append" icon="search" @click="userNoSelect()"></el-button>
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
                                            <el-form-item label="员工类别" prop="custType">
                                                <el-select v-model="ruleForm.custType" placeholder="请选择员工类别">
                                                    <el-option label="在编" value="01"></el-option>
                                                    <el-option label="借用" value="02"></el-option>
                                                    <el-option label="合同制" value="03"></el-option>
                                                    <el-option label="兼职" value="04"></el-option>
                                                    <el-option label="实习" value="05"></el-option>
                                                    <el-option label="其他" value="99"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="岗位" prop="custPost">
                                                <el-select v-model="ruleForm.custPost" placeholder="请选择岗位">
                                                    <el-option label="架构师" value="01"></el-option>
                                                    <el-option label="前端开发工程师" value="02"></el-option>
                                                    <el-option label="测试工程师" value="03"></el-option>
                                                    <el-option label="后端开发" value="04"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="职级" prop="custClass">
                                                <el-select v-model="ruleForm.custClass" placeholder="请选择职级">
                                                    <el-option label="B10-初级软件工程师" value="B10"></el-option>
                                                    <el-option label="B11-中级软件工程师" value="B11"></el-option>
                                                    <el-option label="B12-高级软件工程师" value="B12"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="员工状态" prop="custStatus">
                                                <el-select v-model="ruleForm.custStatus" placeholder="请选择员工状态">
                                                    <el-option label="试用期" value="01"></el-option>
                                                    <el-option label="合同期" value="02"></el-option>
                                                    <el-option label="已退休" value="03"></el-option>
                                                    <el-option label="已离职" value="04"></el-option>
                                                    <el-option label="停薪留职" value="05"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="入职日期" prop="entryTime">
                                                <el-date-picker v-model="ruleForm.entryTime" type="date" placeholder="选择日期" @change="changeEntryTime"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="上岗日期">
                                                <el-date-picker v-model="ruleForm.leftJobTime" type="date" placeholder="选择日期" @change="changeleftJobTime"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="工作日期">
                                                <el-date-picker v-model="ruleForm.workTime" type="date" placeholder="选择日期" @change="changeworkTime"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="职称日期">
                                                <el-date-picker v-model="ruleForm.profTitleTime" type="date" placeholder="选择日期" @change="changeprofTitleTime"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="合同开始">
                                                <el-date-picker v-model="ruleForm.compactStartTime" type="date" placeholder="选择日期" @change="changeCompactStartTime"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="合同终止">
                                                <el-date-picker v-model="ruleForm.compactEndTime" type="date" placeholder="选择日期" @change="changeCompactEndTime" :picker-options="pickerOptions"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="试用开始" prop="probStartTime">
                                                <el-date-picker v-model="ruleForm.probStartTime" type="date" placeholder="选择日期" @change="changeProbStartTime"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="试用结束" prop="probEndTime">
                                                <el-date-picker v-model="ruleForm.probEndTime" type="date" placeholder="选择日期" @change="changeProbEndTime" :picker-options="pickerOptions1"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="招聘来源">
                                                <el-select v-model="ruleForm.recruitQuarry" placeholder="招聘来源">
                                                    <el-option label="网上招聘" value="01"></el-option>
                                                    <el-option label="内部推荐" value="02"></el-option>
                                                    <el-option label="现场招聘" value="03"></el-option>
                                                    <el-option label="其他" value="99"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="开户银行">
                                                <el-input v-model="ruleForm.openBank"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="银行卡号">
                                                <el-input v-model="ruleForm.bankCardNo"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="养老账号">
                                                <el-input v-model="ruleForm.endmAcct"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="医保账号">
                                                <el-input v-model="ruleForm.mediAcct"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="生育账号">
                                                <el-input v-model="ruleForm.mateAcct"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="8" :sm="12">
                                            <el-form-item label="公积金">
                                                <el-input v-model="ruleForm.housAcct"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="23" :sm="24">
                                            <el-form-item label="备注">
                                                <el-input type="textarea" v-model="ruleForm.remark"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :md="9" :sm="24">
                                                <el-form-item label="附件">
                                                    <el-input v-model="ruleForm.attachm" style="position:absolute" :readonly="true"></el-input>
                                                    <el-upload class="upload-demo" ref="upload" name="file"
                                                               action="/iem_hrm/CustInfo/insertCustInfo"
                                                               :show-file-list="false"
                                                               :data="ruleForm"
                                                               :auto-upload="false"
                                                               :on-change="handleFileUpload"
                                                               :on-success="successUpload"
                                                               :headers="token"
                                                               >
                                                        <el-button slot="trigger" type="primary" class="uploadBtn">{{this.ruleForm.attachm2==''?'上传':'更换'}}附件</el-button>
                                                    </el-upload>
                                                </el-form-item>
                                        </el-col>
                                    </el-form>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="社会关系" name="second">
                                <div class="second-wrapper">
                                    <div class="second_title">
                                        <span>社会关系</span><span class="text" @click="add_item">继续添加</span>
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
                            <el-tab-pane label="工作经历" name="third">
                                <div class="third-wrapper">
                                    <div class="title"><span>工作经历</span><span class="text" @click="add_item">继续添加</span></div>
                                    <div class="from-wrapper">
                                        <workItem v-for="(item, index) in work_item" :index="index" :ruleForm="item"
                                                  @del_item="delRelationItem" @pass_validate="passValidate"
                                                  :ref="`workItem${index}`">
                                        </workItem>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="教育背景" name="fourth">
                                <div class="fourth-wrapper">
                                    <div class="title"><span>教育背景</span><span  class="text" @click="add_item">继续添加</span></div>
                                    <div class="from-wrapper">
                                        <educationItem v-for="(item, index) in education_item" :index="index" :ruleForm="item"
                                                  @del_item="delRelationItem" @pass_validate="passValidate"
                                                  :ref="`educationItem${index}`">
                                        </educationItem>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="项目经历" name="fifth">
                                <div class="fifth-wrapper">
                                    <div class="title"><span>项目经历</span><span class="text" @click="add_item">继续添加</span></div>
                                    <div class="from-wrapper">
                                        <projectItem v-for="(item, index) in project_item" :index="index" :ruleForm="item"
                                                       @del_item="delRelationItem" @pass_validate="passValidate"
                                                       :ref="`projectItem${index}`">
                                        </projectItem>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="证件管理" name="sixth">
                                <div class="sixth_wrapper">
                                    <el-upload name="file"
                                            list-type="picture-card"
                                           :file-list="fileList2"
                                            :on-preview="handlePictureCardPreview"
                                            :on-remove="handleRemove"
                                            :data="uploadUserNo"
                                            multiple
                                            :on-success="successUpload"
                                            :before-upload="checkUserNo"
                                            action="/iem_hrm/CustFile/batch/upload"
                                            :headers="token">
                                        <i class="el-icon-plus"></i>
                                        <div class="upload_text_text">添加照片/文件<br>按住Ctrl可多选</div>
                                        <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
                                    </el-upload>
                                    <el-dialog v-model="dialogVisible2" size="tiny">
                                        <img width="100%" :src="dialogImageUrl" alt="">
                                    </el-dialog>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </template>
                </div>
                <el-button class="add" @click="save(tabName)" v-show="tabName=='sixth'?false:true">保存</el-button>
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
                } else if (value  < that.ruleForm.probStartTime) {
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
              // 基础信息
              basicInfo:{
                nation:'',
                education:'',
                degree:'',
                company:'',
                department:'',
                  CCC:'',
              },
              //判断校验是否通过
              flag: false,
              //公共数据
              userNo: '',
              uploadUserNo:{
                  userNo: '',
              },
              token: {
                  Authorization:`Bearer `+localStorage.getItem('access_token'),
              },
              activeName: 'first',
              tabName:'first',
              //头像数据
              imageUrl: '',
              //证件管理数据
              fileList2:[],
              dialogImageUrl: '',
              dialogVisible2: false,
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
              //选项卡数据
              social_item:[
                      {
                          contactName: '',
                          relationship: '',
                          telphone: '',
                          profession: '',
                          post: '',
                          addr: '',
                          isShowEdit: false
                      },
              ],
              project_item:[
                  {
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
                  },
              ],
              education_item:[
                  {
                      startTime: '',
                      endTime: '',
                      schoolName: '',
                      major: '',
                      education: '',
                      desc: '',
                      isShowEdit: false
                  },
              ],
              work_item:[
                  {
                      startTime: '',
                      endTime: '',
                      company: '',
                      post1: '',
                      duty: '',
                      desc: '',
                      isShowEdit: false
                  },
              ],
                //员工基础信息数据
              ruleForm: {
                  avatarFlag:'',
                  custName: '',
                  certNo: '',
                  certType: '',
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
                  comEmail: '',
                  atten: '',
                  attenTeleph: '',
                  origo: '',
                  permAddr: '',
                  liveAddr: '',
                  organNo: '',
                  derpNo: '',
                  ownerCCC: '',
                  lineManager: '',
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
                  attachmFlag: '',
              },
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
          }
        },
        watch:{
            //　监视userNo是否发生改变，如改变，清空选项卡数据，如没有改变则不清空
            userNo:{
                handler: function (val, oldVal) {
                    console.log('新:'+val,'旧:'+oldVal,'监视userNo')
                    if(oldVal!=='') {
                        this.social_item = [
                            {
                                contactName: '',
                                relationship: '',
                                telphone: '',
                                profession: '',
                                post: '',
                                addr: '',
                                isShowEdit: false
                            },
                        ],
                        this.project_item = [
                            {
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
                            },
                        ],
                        this.education_item = [
                            {
                                startTime: '',
                                endTime: '',
                                schoolName: '',
                                major: '',
                                education: '',
                                desc: '',
                                isShowEdit: false
                            },
                        ],
                        this.work_item = [
                            {
                                startTime: '',
                                endTime: '',
                                company: '',
                                post1: '',
                                duty: '',
                                desc: '',
                                isShowEdit: false
                            },
                        ],
                        this.fileList2 = []
//                        this.$refs.workItem0[0].ruleForm.isShowEdit = false
//                        this.$refs.educationItem0[0].ruleForm.isShowEdit = false
//                        this.$refs.projectItem0[0].ruleForm.isShowEdit = false
//                        this.$refs.workItem0[0].resetForm()
//                        this.$refs.educationItem0[0].resetForm()
//                        this.$refs.projectItem0[0].resetForm()
                    }
                },
            },
//            'ruleForm.certNo': {
//                handler: function (val, oldVal) {
//                    if(val!=oldVal) {
//                        this.imageUrl = false
//                    }
//                }
//            }
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
            self.$axios.all([getNation(),getEducation(),getDegree(),getCompany()])
                .then(self.$axios.spread(function(res1,res2,res3,res4){
                    self.basicInfo.nation = res1.data.data
                    self.basicInfo.education = res2.data.data
                    self.basicInfo.degree = res3.data.data
                    self.basicInfo.company = res4.data.data
                }))
                .catch(e=>{
                    console.log(e)
                });
        },
        methods: {
//            avatarHidden() {
//                this.$watch('ruleForm.certNo', function (newVal, oldVal) {
//                    if(newVal!==oldVal){
//                        this.imageUrl = false
//                    }
//                })
//            },
            //头像上传
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
                // 标记头像上传是否需要触发
                if(this.ruleForm.avatarName == file.name) return
                this.ruleForm.avatarFlag = true
                this.ruleForm.avatarName = file.name
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            handleAvatarSuccess(res, file) {
                console.log(res,'头像上传')
                let result = res.retMsg
                if('操作成功'===result) {
                    this.$message({
                        type: 'success',
                        message: result
                    });
                } else {
                    this.$message({
                        type: 'error',
                        message: result
                    });
                }
            },
            //证件方法
            handleRemove(file, fileList) {
                if(this.flag) {
                    console.log(fileList,this.fileList2,file)
                    let index = this.fileList2.indexOf(file)
                    fileList.splice(index,0,file)
                    this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        if(file.response&&file.response.data[0]){
                            let data = {
                                userNo:file.response.data[0].userNo,
                                imageId:file.response.data[0].imageId,
                            }
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
//                                    fileList.splice(index,0,file)
                                    }
                                })
                                .catch(e=>{
                                    this.$message({
                                        type: 'error',
                                        message: e.retMsg
                                    });
                                    console.log(e)
//                                fileList.splice(index,0,file)
                                })
                        }
                    }).catch(()=>{
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    })
                }
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible2 = true;
            },
            handleFileUpload(file, fileList) {
                if(this.tabName == 'first') {
                    if(this.ruleForm.attachm == file.name ) return
                    this.ruleForm.attachm = file.name
                    this.ruleForm.attachmFlag = true
                }
            },
            successUpload(response, file, fileList) {
                if(this.tabName == 'first') {
                    let self = this
                    let result = response.retMsg
                    console.log(response,'successUpload',response.data)
                    if('操作成功'==result){
                        self.uploadUserNo.userNo = this.userNo = response.data
                        if(self.ruleForm.avatarFlag){
                            self.ruleForm.avatarFlag = ''
                            console.log(self.uploadUserNo.userNo,'提交头像上传去了')
                            self.$refs.uploadAvatar.submit()
                        }else {
                            this.$message({ message: '操作成功', type: 'success' });
                            console.log('只带附件提交成功')
                        }
                    }else {
                        this.$message({ message: result, type: 'error' });
                    }
                }
                if(this.tabName == 'sixth') {
                    console.log(response,'????????successUpload????????',file,'????????successUpload????????',fileList)
                    if(response.code === "S00000") {
                        this.$message({ message: '操作成功', type: 'success' });
                        this.flag = true
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
            checkUserNo(file) {
                if(this.tabName == 'sixth') {
                    if(!this.userNo){
                        this.$message({
                            type: 'error',
                            message: '请先填写基本信息并点击右上角保存'
                        });
                        this.flag = false
                        return false
                    }
                }
            },
            //弹出窗公共方法(3个)
            dialogConfirm(custInfo){
                let self = this;
                self.ruleForm.lineManager = custInfo.stateName+'_'+custInfo.stateNo
                self.dialogVisible = false;
            },
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
            //选择部门和CCC的方法(2个)
            selectDep(organNo) {
                let data = {organNo}
                this.$axios.get('/iem_hrm/organ/selectChildDeparment',{params:data})
                    .then(res=>{
                        this.ruleForm.derpNo = ''
                        this.basicInfo.department = res.data.data
                        this.ruleForm.ownerCCC = ''
                        this.basicInfo.CCC = ''
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
            // 核心,保存数据的方法
            save(tabName) {
                let self = this
                if('first' === tabName){
                    let rule1 = false
                    let rule2 = false
                    self.$refs.ruleForm.validate((valid) => {
                        if (valid) {
                            rule1 = true
                        }else {
                            self.$message({
                                type: 'error',
                                message: '请确保必填信息填写正确!'
                            });
                        }
                    })
                    self.$refs.ruleForm2.validate((valid) => {
                        if (valid) {
                            rule2 = true
                        }else {
                            if(rule1) {
                                self.$message({
                                    type: 'error',
                                    message: '请确保必填信息填写正确!'
                                });
                            }
                        }
                    })
                    if(rule1 && rule2) {
                        if(this.ruleForm.attachm && this.ruleForm.attachmFlag) {
                            this.ruleForm.attachmFlag = ''
                            console.log(this.ruleForm,'upload')
                            self.$refs.upload.submit()
                        }else {
                            console.log(this.ruleForm,'正常提交')
                            this.$axios.post('/iem_hrm/CustInfo/insertCustInfo', this.ruleForm)
                                .then(res=>{
                                    let result = res.data.retMsg
                                    console.log(res,res.data.data,'正常提交响应')
                                    if(result=="操作成功"){
                                        self.$message({
                                            type: 'success',
                                            message: result
                                        });
                                        this.userNo = res.data.data
                                        self.uploadUserNo.userNo = this.userNo
                                        if(self.ruleForm.avatarFlag){
                                            self.ruleForm.avatarFlag = ''
                                            console.log('avatar',self.ruleForm.avatarFlag,self.uploadUserNo)
                                            self.$refs.uploadAvatar.submit()
                                        }else {
                                            self.$message({
                                                type: 'success',
                                                message: result
                                            });
                                        }
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
                                        message: '添加失败,请稍后重试！'
                                    });
                                })
                        }
                    }
                }
                if('second'===tabName) {
                    if(!this.userNo){
                        self.$message({
                            type: 'error',
                            message: '请先填写基本信息并点击右上角保存'
                        });
                        return
                    }
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
                        console.log(data,'社会关系提交数据')
                        this.$axios.post('/iem_hrm/CustContact/saveCustContacts', data)
                            .then(res=>{
                                let result = res.data.retMsg
                                if('操作成功'==result){
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
                if('third'===tabName) {
                    // 没有用户ID直接返回
                    if(!this.userNo){
                        self.$message({
                            type: 'error',
                            message: '请先填写基本信息并点击右上角保存'
                        });
                        return
                    }
                    //　校验表单，并重新赋值
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
                        console.log(data,'工作经历提交的数据')
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
                    if(!this.userNo){
                        self.$message({
                            type: 'error',
                            message: '请先填写基本信息并点击右上角保存'
                        });
                        return
                    }
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
                        console.log(data,'教育经历提交的数据')
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
                    if(!this.userNo){
                        self.$message({
                            type: 'error',
                            message: '请先填写基本信息并点击右上角保存'
                        });
                        return
                    }
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
                        console.log(data,'项目经历提交的数据')
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
            },
            // 新增选项卡信息的方法
            add_item() {
//                new socialRelationItem().$mount().$appendTo('#secondContentWrapper')
                if(this.tabName == 'second') {
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
                if(this.tabName == 'third') {
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
                if(this.tabName == 'fourth') {
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
                if(this.tabName == 'fifth') {
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
            },
            // 选项卡组件是否通过校验方法
            passValidate(boolean) {
                if(boolean) {
                    this.flag = true
                }
            },
            // 删除选项卡信息的方法
            delRelationItem(index) {
                if(this.tabName == 'second') this.social_item.splice(index,1)
                if(this.tabName == 'third') this.work_item.splice(index,1)
                if(this.tabName == 'fourth') this.education_item.splice(index,1)
                if(this.tabName == 'fifth') this.project_item.splice(index,1)
            },
            changeBirthday(val) {
                this.ruleForm.birthday = val
            },
            changeGradtime(val) {
                this.ruleForm.gradTime = val
            },
            changeEntryTime(val) {
                this.ruleForm.entryTime = val
            },
            changeleftJobTime(val) {
                this.ruleForm.leftJobTime = val
            },
            changeworkTime(val) {
                this.ruleForm.workTime = val
            },
            changeprofTitleTime(val) {
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
            handleClick(tab, event) {
                this.tabName = tab.name
            },
        },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .add_archives
        padding: 0 0 20px 20px;
        /*overflow: hidden;*/
        position: relative;
        .test
            padding-left: 10px;
        .content-wrapper-xx
            background: #fff;
            position relative
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
                    padding-top 30px
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
                    .text
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #999999;
                        letter-spacing: 0;
                        text-align center
                        width 300px
                        margin 0 auto
                .personal_information
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
                        margin 20px 0
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #333333;
                        font-weight bold
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
                    .attachment
                        color #f90
                        margin-left 20px
                        font-size 14px
                        &:hover
                            text-decoration underline
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
                                    width: 99.5%;
                                    max-width: 1013px;
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
                            .button_special
                                background: #FFFFFF;
                                color #333
                                margin-right 20px
                                margin 0 30px 0 20px
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
                height 30px
                background: #FF9900;
                border: 1px solid #FF9900;
                border-radius 4px
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #FFFFFF;
                text-align center
                position absolute
                right 20px
                top 10px
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
<!--<div class="from-wrapper">-->
<!--<el-form :model="ruleForm4" :rules="rules4" ref="ruleForm4" label-width="100px">-->
<!--<el-form-item label="公司名称" prop="companyName">-->
<!--<el-input v-model="ruleForm4.companyName"></el-input>-->
<!--</el-form-item>-->
<!--<el-form-item label="职位" prop="position" class="position_special">-->
<!--<el-input v-model="ruleForm4.position"></el-input>-->
<!--</el-form-item>-->
<!--<el-form-item label="工作时间" prop="workTime1" class="workTime_common">-->
<!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm4.workTime1"></el-date-picker>-->
<!--</el-form-item>-->
<!--<el-form-item label="至" prop="workTime2" class="workTime_common workTime_special">-->
<!--<el-date-picker type="date" v-model="ruleForm4.workTime2" placeholder="选择日期"></el-date-picker>-->
<!--</el-form-item>-->
<!--<el-form-item label="工作描述" prop="workDes">-->
<!--<el-input v-model="ruleForm4.workDes" type="textarea" class="workDes_special"></el-input>-->
<!--</el-form-item>-->
<!--<div class="button-wrapper">-->
<!--<button>保存</button>-->
<!--<button class="button_special">取消</button>-->
<!--<span @click="delWorkItem">删除本条</span>-->
<!--</div>-->
<!--</el-form>-->
<!--</div>-->
<!--<div class="work_list">-->
<!--<div class="mask"></div>-->
<!--<div class="line1">-->
<!--<div class="line1_title">-->
<!--<span class="circle"></span>-->
<!--<span>深圳前海橙色魔方技术有限公司</span>-->
<!--<span class="line1_time">2015/09 - 2017/10<i class="el-icon-edit"></i></span>-->
<!--</div>-->
<!--</div>-->
<!--<div class="zhiwei">UI设计师</div>-->
<!--<div class="description">-->
<!--这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里-->
<!--</div>-->
<!--</div>-->
<!--<div class="work_list">-->
<!--<div class="line1">-->
<!--<div class="line1_title">-->
<!--<span class="circle"></span>-->
<!--<span>深圳前海橙色魔方技术有限公司</span>-->
<!--<span class="line1_time">2015/09 - 2017/10<i class="el-icon-edit"></i></span>-->
<!--</div>-->
<!--</div>-->
<!--<div class="zhiwei">UI设计师</div>-->
<!--<div class="description">-->
<!--这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里-->
<!--</div>-->
<!--</div>-->