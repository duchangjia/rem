<template>
    <div class="add_archives">
        <current yiji="人事事务" erji="人事档案" sanji="员工新增" class="test"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="content">
                    <template>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="基本信息" name="first">
                                <div class="first_title">
                                    <div class="avatar"><div>添加照片</div></div>
                                    <div class="text">员工照片</div>
                                </div>
                                <div class="personal_information">
                                    <div class="text">个人信息</div>
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                                        <el-col :span="8">
                                            <el-form-item label="姓名" prop="username">
                                                <el-input v-model="ruleForm.username"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="身份证" prop="userId">
                                                <el-input v-model="ruleForm.userId"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="性别" prop="gender" class="gender_special">
                                                <el-radio-group v-model="ruleForm.gender">
                                                    <el-radio-button label="男"></el-radio-button>
                                                    <el-radio-button label="女" class="special"></el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="出生年月" prop="born">
                                                <el-input v-model="ruleForm.born"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="民族" prop="nation">
                                                <el-select v-model="ruleForm.nation" placeholder="请选择民族">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="婚姻状况" prop="marriage" class="marriage_special">
                                                <el-radio-group v-model="ruleForm.marriage">
                                                    <el-radio-button label="未婚"></el-radio-button>
                                                    <el-radio-button label="已婚" class="special"></el-radio-button>
                                                    <el-radio-button label="离异"></el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="学历" prop="education">
                                                <el-select v-model="ruleForm.education" placeholder="请选择学历">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="学位" prop="degree">
                                                <el-select v-model="ruleForm.degree" placeholder="请选择学位">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="政治面貌" prop="politics" class="marriage_special">
                                                <el-radio-group v-model="ruleForm.politics">
                                                    <el-radio-button label="党员"></el-radio-button>
                                                    <el-radio-button label="团员" class="special"></el-radio-button>
                                                    <el-radio-button label="群众"></el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="毕业学校" prop="school">
                                                <el-input v-model="ruleForm.school"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="毕业时间" prop="graduation">
                                                <el-input v-model="ruleForm.graduation"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="专业" prop="major">
                                                <el-input v-model="ruleForm.major"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="移动电话" prop="phone">
                                                <el-input v-model="ruleForm.phone"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="家庭电话">
                                                <el-input v-model="ruleForm.home_phone"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="个人邮箱" prop="email">
                                                <el-input v-model="ruleForm.email"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="QQ">
                                                <el-input v-model="ruleForm.QQ"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="紧急联系人">
                                                <el-input v-model="ruleForm.emergency_contact"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="紧急电话">
                                                <el-input v-model="ruleForm.emergency_phone"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="籍贯">
                                                <el-input v-model="ruleForm.native"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="户籍地址">
                                                <el-input v-model="ruleForm.native_address"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="现居住地">
                                                <el-input v-model="ruleForm.address"></el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-form>
                                    <div class="text">职务信息</div>
                                    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px">
                                        <el-col :span="8">
                                            <el-form-item label="员工编号" prop="userNum">
                                                <el-input v-model="ruleForm2.userNum"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="公司名称" prop="companyName">
                                                    <el-select v-model="ruleForm2.companyName" placeholder="请选择公司名称">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="部门名称" prop="departmentName">
                                                <el-select v-model="ruleForm2.departmentName" placeholder="请选择部门名称">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="CCC" prop="CCC">
                                                <el-select v-model="ruleForm2.CCC" placeholder="请选择CCC">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="直线经理">
                                                <el-input v-model="ruleForm2.manager"></el-input>
                                            </el-form-item>
                                        </el-col>

                                        <el-col :span="8">
                                            <el-form-item label="员工类别" prop="employeeType">
                                                <el-select v-model="ruleForm2.employeeType" placeholder="请选择员工类别">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="岗位" prop="station">
                                                <el-select v-model="ruleForm2.station" placeholder="请选择岗位">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="职级" prop="position">
                                                <el-select v-model="ruleForm2.position" placeholder="请选择职级">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="员工状态" prop="employees_state">
                                                <el-select v-model="ruleForm2.employees_state" placeholder="请选择员工状态">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="入职日期">
                                                <el-input v-model="ruleForm2.in_time"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="上岗日期">
                                                <el-input v-model="ruleForm2.guard_time"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="工作日期">
                                                <el-input v-model="ruleForm2.work_time"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="职称日期">
                                                <el-input v-model="ruleForm2.technical_time"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="合同开始">
                                                <el-input v-model="ruleForm2.contract_start"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="合同终止">
                                                <el-input v-model="ruleForm2.contract_end"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="试用开始">
                                                <el-input v-model="ruleForm2.probation_start"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="试用结束">
                                                <el-input v-model="ruleForm2.probation_end"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="招聘来源">
                                                <el-input v-model="ruleForm2.recruit_source"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="开户银行">
                                                <el-input v-model="ruleForm2.deposit_bank"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="银行卡号">
                                                <el-input v-model="ruleForm2.credit_card"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="养老账号">
                                                <el-input v-model="ruleForm2.pension_account"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="医保账号">
                                                <el-input v-model="ruleForm2.insurance_account"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="生育账号">
                                                <el-input v-model="ruleForm2.family_account"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="公积金">
                                                <el-input v-model="ruleForm2.accumulation_fund"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="23">
                                            <el-form-item label="备注">
                                                <el-input type="textarea"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="9">
                                            <el-form-item label="附件">
                                                <el-input v-model="ruleForm2.attachment"></el-input><span class="attachment">选择文件</span>
                                            </el-form-item>
                                        </el-col>
                                    </el-form>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="社会关系" name="second">
                                <div class="second-wrapper">
                                    <div class="second_title">
                                        <span>成员信息</span><span class="text" @click="add_item">添加</span>
                                    </div>
                                    <div class="second_content_wrapper" id="secondContentWrapper">
                                        <socialRelationItem v-for="(item, index) in social_item.lists" :ruleFrom="item" :relationNum="index" @del_item="delRelationItem"
                                        :ref="`ruleFrom${index}`"></socialRelationItem>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="工作经历" name="third" class="third_special">
                                <div class="third-wrapper">
                                    <div class="title"><span>工作经历</span><span  class="text" @click="add_experience">添加</span></div>
                                    <div class="from-wrapper">
                                        <el-form :model="ruleForm4" :rules="rules4" ref="ruleForm4" label-width="100px">
                                            <el-form-item label="公司名称" prop="companyName">
                                                <el-input v-model="ruleForm4.companyName"></el-input>
                                            </el-form-item>
                                            <el-form-item label="职位" prop="position" class="position_special">
                                                <el-input v-model="ruleForm4.position"></el-input>
                                            </el-form-item>
                                            <el-form-item label="工作时间" prop="workTime1" class="workTime_common">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm4.workTime1"></el-date-picker>
                                            </el-form-item>
                                                <el-form-item label="至" prop="workTime2" class="workTime_common workTime_special">
                                                    <el-date-picker type="date" v-model="ruleForm4.workTime2" placeholder="选择日期"></el-date-picker>
                                                </el-form-item>
                                            <el-form-item label="工作描述" prop="workDes">
                                                <el-input v-model="ruleForm4.workDes" type="textarea" class="workDes_special"></el-input>
                                            </el-form-item>
                                            <div class="button-wrapper">
                                                <button>保存</button>
                                                <button class="button_special">取消</button>
                                                <span @click="delWorkItem">删除本条</span>
                                            </div>
                                        </el-form>
                                    </div>
                                    <div class="work_list">
                                        <div class="mask"></div>
                                        <div class="line1">
                                            <div class="line1_title">
                                                <span class="circle"></span>
                                                <span>深圳前海橙色魔方技术有限公司</span>
                                                <span class="line1_time">2015/09 - 2017/10<i class="el-icon-edit"></i></span>
                                            </div>
                                        </div>
                                        <div class="zhiwei">UI设计师</div>
                                        <div class="description">
                                            这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里
                                        </div>
                                    </div>
                                    <div class="work_list">
                                        <div class="line1">
                                            <div class="line1_title">
                                                <span class="circle"></span>
                                                <span>深圳前海橙色魔方技术有限公司</span>
                                                <span class="line1_time">2015/09 - 2017/10<i class="el-icon-edit"></i></span>
                                            </div>
                                        </div>
                                        <div class="zhiwei">UI设计师</div>
                                        <div class="description">
                                            这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里是描述的内容这里
                                        </div>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="教育背景" name="fourth">教育背景</el-tab-pane>
                            <el-tab-pane label="项目经历" name="fifth">项目经历</el-tab-pane>
                            <el-tab-pane label="证件管理" name="sixth">
                                <div class="sixth_wrapper">
                                    <el-upload
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            list-type="picture-card"
                                            :on-preview="handlePictureCardPreview"
                                            :on-remove="handleRemove"
                                            multiple>
                                        <i class="el-icon-plus"></i>
                                        <div class="upload_text_text">添加照片/文件<br>按住Ctrl可多选</div>
                                        <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
                                    </el-upload>
                                    <el-dialog v-model="dialogVisible" size="tiny">
                                        <img width="100%" :src="dialogImageUrl" alt="">
                                    </el-dialog>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </template>
                    
                </div>
                <button class="add" @click="save(tabName)" v-show="tabName=='first'||tabName=='second'||tabName=='sixth'">{{tabName=='sixth'?'全部下载':'保存'}}</button>
            </div>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from "../../../common/current_position.vue";
    import socialRelationItem from './social_relation_item.vue'
    export default {
        data() {
          return {
              dialogImageUrl: '',
              dialogVisible: false,
              social_item:{
                  userNo:'P0000003',
                  lists:[
                      {
                          contactId: '',
                          contactName: '',
                          relationship: '',
                          telphone: '',
                          profession: '',
                          post: '',
                          addr: '',
                      },
                  ]
              },
              activeName: 'second',
              tabName:'',
              ruleForm: {
                  username: '',
                  userId: '',
                  gender: '',
                  born: '',
                  nation: '',
                  marriage: '',
                  education: '',
                  degree: '',
                  politics: '',
                  school: '',
                  graduation: '',
                  major: '',
                  phone: '',
                  home_phone: '',
                  email: '',
                  QQ: '',
                  emergency_contact: '',
                  emergency_phone: '',
                  native: '',
                  native_address: '',
                  address: '',
              },
              rules: {
                  username: [
                      {required: true, message: '请输入姓名', trigger: 'blur'},
                      {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                  ],
                  userId: [
                      {required: true, message: '请输入身份证', trigger: 'blur'}
                  ],
                  gender: [
                      {required: true, message: '请选择性别', trigger: 'change'}
                  ],
                  born: [
                      {required: true, message: '请输入出生年月', trigger: 'blur'}
                  ],
                  nation: [
                      {required: true, message: '请选择民族', trigger: 'change'}
                  ],
                  marriage: [
                      {required: true, message: '请选择婚姻状况', trigger: 'change'}
                  ],
                  education: [
                      {required: true, message: '请选择学历', trigger: 'change'}
                  ],
                  degree: [
                      {required: true, message: '请选择学位', trigger: 'change'}
                  ],
                  politics: [
                      {required: true, message: '请选择政治面貌', trigger: 'change'}
                  ],
                  school: [
                      {required: true, message: '请输入毕业学校', trigger: 'blur'}
                  ],
                  graduation: [
                      {required: true, message: '请输入毕业时间', trigger: 'blur'}
                  ],
                  major: [
                      {required: true, message: '请输入专业', trigger: 'blur'}
                  ],
                  phone: [
                      {required: true, message: '请输入移动电话', trigger: 'blur'}
                  ],
                  email: [
                      {required: true, message: '请输入个人邮箱', trigger: 'blur'}
                  ],
              },
              ruleForm2: {
                  userNum: '',
                  companyName: '',
                  departmentName: '',
                  CCC: '',
                  manager: '',
                  employeeType: '',
                  station: '',
                  position: '',
                  employees_state: '',
                  in_time: '',
                  guard_time: '',
                  work_time: '',
                  technical_time: '',
                  contract_start: '',
                  contract_end: '',
                  probation_start: '',
                  probation_end: '',
                  recruit_source: '',
                  deposit_bank: '',
                  credit_card: '',
                  pension_account: '',
                  insurance_account: '',
                  family_account: '',
                  accumulation_fund: '',
                  remark: '',
                  attachment: '',
              },
              rules2: {
                  userNum: [
                      {required: true, message: '请输入员工编号', trigger: 'blur'},
                      {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                  ],
                  companyName: [
                      {required: true, message: '请选择公司名称', trigger: 'change'}
                  ],
                  departmentName: [
                      {required: true, message: '请选择部门名称', trigger: 'change'}
                  ],
                  CCC: [
                      {required: true, message: '请选择CCC', trigger: 'change'}
                  ],
                  employeeType: [
                      {required: true, message: '请选择员工类别', trigger: 'change'}
                  ],
                  station: [
                      {required: true, message: '请选择岗位', trigger: 'change'}
                  ],
                  position: [
                      {required: true, message: '请选择职级', trigger: 'change'}
                  ],
                  employees_state: [
                      {required: true, message: '请选择员工状态', trigger: 'change'}
                  ],
                  politics: [
                      {required: true, message: '请选择政治面貌', trigger: 'change'}
                  ],
                  school: [
                      {required: true, message: '请输入毕业学校', trigger: 'blur'}
                  ],
                  graduation: [
                      {required: true, message: '请输入毕业时间', trigger: 'blur'}
                  ],
                  major: [
                      {required: true, message: '请输入专业', trigger: 'blur'}
                  ],
                  phone: [
                      {required: true, message: '请输入移动电话', trigger: 'blur'}
                  ],
                  email: [
                      {required: true, message: '请输入个人邮箱', trigger: 'blur'}
                  ],
              },
              ruleForm4: {
                  companyName: '',
                  position: '',
                  workDes: '',
                  workTime1: '',
                  workTime2: '',
              },
              rules4: {
                  userNum: [
                      {required: true, message: '请输入员工编号', trigger: 'blur'},
                      {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                  ],
                  companyName: [
                      {required: true, message: '请输入公司名称', trigger: 'blur'}
                  ],
                  position: [
                      {required: true, message: '请输入职位', trigger: 'blur'}
                  ],
                  workDes: [
                      {required: true, message: '请输入工作描述', trigger: 'blur'}
                  ],
                  workTime1: [
                      {required: true, message: '请选择日期', trigger: 'blur'}
                  ],
                  workTime2: [
                      {required: true, message: '请选择日期', trigger: 'blur'}
                  ],
              },
          }
        },
        components: {
            current,socialRelationItem
        },
        created() {
            let self = this
            this.$axios.get('/queryCustContancts')
                .then(res=>{
                    console.log(res)
                })
                .catch(e=>{
                    console.log('調用queryCustContancts失敗')
                })
//            this.$axios.get('/iem_hrm/CustContact/queryCustContacts', {params:{
//                userNo:'P0000001'
//            }})
//                .then(res=>{
////                    self.social_item =
//                    console.log(res)
//                })
//                .catch(e=>{
//                    console.log(e)
//                })
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleClick(tab, event) {
                console.log(tab, event);
                this.tabName = tab.name
            },
            save(tabName) {
//                this.social_item.forEach((item)=>{
//                    item.isShow = false
//                })
//                if('first' === tabName){
//
//                }
                console.log('second')
                let socialItemLength = this.social_item.lists.length
                this.social_item.lists = []
                for (let i=0;i<socialItemLength;i++){
                    console.log(this.$refs['ruleFrom'+i][0].ruleFrom)
                    this.social_item.lists.push(this.$refs['ruleFrom'+i][0].ruleFrom)
                }
//                var params = new URLSearchParams();
//                params.append('userNo', this.social_item.userNo);
//                params.append('list', this.social_item.lists);
//                params.append('contactName', item.contactName);
//                params.append('relationship', item.relationship);
//                params.append('telphone', item.telphone);
//                params.append('profession', item.profession);
//                params.append('post', item.post);
//                params.append('addr', item.addr);
//                params.append('isShow', item.isShow);
//                let item2 = {
//                    userNo:'P0000003',
//                    list:[{
//                        contactId: '1',
//                        contactName: '小芳',
//                        relationship: '兄妹',
//                        telphone: '13711111111',
//                        profession: '医生',
//                        post: '医生',
//                        addr: '深圳',
//                        isShow: true
//                    },
//                        {
//                            contactId: '2',
//                            contactName: '小芳',
//                            relationship: '兄妹',
//                            telphone: '13711111111',
//                            profession: '医生',
//                            post: '医生',
//                            addr: '深圳',
//                            isShow: true
//                        }
//                    ]
//                }
//                var params = new URLSearchParams();
//                params.append('userNo', 'P0000003');
//                params.append('lists', this.social_item.lists);
                let data = {
                    userNo:'P0000003',
                    lists:[
                        {
                            contactId: '1',
                            contactName: '小妹妹',
                            relationship: '朋友',
                            telphone: '13444444444',
                            profession: '医生',
                            post: '医生',
                            addr: '深圳',
                        },
                        {
                            contactId: '2',
                            contactName: '小哥哥',
                            relationship: '同学',
                            telphone: '13444444444',
                            profession: '老板',
                            post: '老板',
                            addr: '美国',
                        }
                    ]
                }
                var params = new URLSearchParams();
                params.append('userNo', 'P0000003');
                params.append('lists', data.lists);
                let item = {
                    userNo:'P0000003',
                    'lists[0].contactId':'1',
                    'lists[0].contactName':'小芳方',
                    'lists[0].relationship':'兄弟',
                    'lists[0].telphone':'13766666666',
                    'lists[0].profession':'医生',
                    'lists[0].post':'医生',
                    'lists[0].addr':'深圳',
//                    [
//                        {
//                            contactId: '1',
//                            contactName: 'ww',
//                            relationship: 'ww',
//                            telphone: 'ww',
//                            profession: 'ww',
//                            post: 'ww',
//                            addr: 'ww',
//                            isShow: true
//                        },
//                        {
//                            contactId: '2',
//                            contactName: 'tt',
//                            relationship: 'tt',
//                            telphone: 'tt',
//                            profession: 'wttw',
//                            post: 'wttw',
//                            addr: 'wttw',
//                            isShow: true
//                        }
//                    ]
                }
                    console.log(this.social_item.lists)
                    console.log(this.social_item)
                    this.$axios.post('/iem_hrm/CustContact/saveCustContacts', data)
                        .then(res=>{
                            console.log(res)
                            console.log('关系成功')
                        })
                        .catch(e=>{
                            console.log('失败')
                            console.log(e)
                        })
            },
            add_item() {
                console.log('add_item')

                let item = {
                        contactId: '',
                        contactName: '',
                        relationship: '',
                        telphone: '',
                        profession: '',
                        post: '',
                        addr: '',
                        isShow: true
                    }
//                new socialRelationItem().$mount().$appendTo('#secondContentWrapper')
                this.social_item.lists.push(item)

            },
            delRelationItem(relationNum) {
                this.social_item.lists.splice(relationNum,1)
            },
//            editRelationItem(relationNum) {
//                this.social_item[relationNum].isShow = true
//            },
            add_experience() {

            },
            delWorkItem() {

            }
        },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .add_archives
        padding: 0 0 20px 20px;
        overflow: hidden;
        position: relative;
        .test
            padding-left: 10px;
        .content-wrapper
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
                    height 80px
                    .el-tabs__nav-wrap
                        height 100%
                        .el-tabs__nav
                            height 80px
                .el-tabs__item
                    font-size 16px
                    height 80px
                    line-height 80px
                    padding 0 20px
                .el-tabs__nav
                    .el-tabs__active-bar
                        background-color: #000
                    .el-tabs__item.is-active
                        color #000
                .first_title
                    padding-top 42px
                    .avatar
                        width: 112px
                        height: 112px
                        border-radius 50%
                        line-height 112px
                        text-align center
                        background: #ccc;
                        margin 0 auto 16px auto
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #FFFFFF;
                        letter-spacing: 0;
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
                            height 100%
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
                            color: #333333;
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
                            color: #333333;
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
                    .el-form-item
                        margin-bottom 30px
                        .el-form-item__label
                            padding 11px 30px 11px 0
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #3F3F3F;
                            letter-spacing: 0;
                            height 40px
                            margin-bottom  0
                    .attachment
                        color #f90
                        margin-left 20px
                        font-size 14px
                        &:hover
                            text-decoration underline
                .second_title
                    padding-top 42px
                    padding-left 8px
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
                    padding-left 8px
                    min-height 570px
                    padding-bottom 20px
                .third-wrapper
                    min-height 570px
                    padding-bottom 20px
                    .title
                        padding 42px 8px 0 8px
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
                        margin-top 40px
                        .el-form
                            padding 40px 20px
                            background: #F4F4F4;
                            .el-input
                                width 445px
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
                height 40px
                &:hover
                    border 1px solid #f90
                &:focus
                    border-color #f90

    
</style>
