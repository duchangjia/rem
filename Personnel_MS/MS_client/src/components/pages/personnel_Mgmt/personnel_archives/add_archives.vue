<template>
    <div class="add_archives">
        <current yiji="人事事务" erji="人事档案" sanji="员工新增"></current>
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
                                            <el-form-item label="姓名" prop="custName">
                                                <el-input v-model="ruleForm.custName"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="身份证" prop="certNo">
                                                <el-input v-model="ruleForm.certNo"></el-input>
                                                <!--<el-input v-model="ruleForm.certType"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="性别" prop="sex" class="gender_special">
                                                <el-radio-group v-model="ruleForm.sex">
                                                    <el-radio-button label="01">男</el-radio-button>
                                                    <el-radio-button label="02" class="special">女</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="出生年月" prop="birthday">
                                                <el-date-picker v-model="ruleForm.birthday" type="date" placeholder="选择日期" @change="changeBirthday"></el-date-picker>
                                                <!--<el-input v-model="ruleForm.birthday"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="民族" prop="nation">
                                                <el-select v-model="ruleForm.nation" placeholder="请选择民族">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.nation"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="婚姻状况" prop="marital" class="marriage_special">
                                                <el-radio-group v-model="ruleForm.marital">
                                                    <el-radio-button label="01">未婚</el-radio-button>
                                                    <el-radio-button label="02" class="special">已婚</el-radio-button>
                                                    <el-radio-button label="03">离异</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="学历" prop="education">
                                                <el-select v-model="ruleForm.education" placeholder="请选择学历">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.education"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="学位" prop="degree">
                                                <el-select v-model="ruleForm.degree" placeholder="请选择学位">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.degree"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="政治面貌" prop="politial" class="marriage_special">
                                                <el-radio-group v-model="ruleForm.politial">
                                                    <el-radio-button label="01">党员</el-radio-button>
                                                    <el-radio-button label="02" class="special">团员</el-radio-button>
                                                    <el-radio-button label="03">群众</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="毕业学校" prop="gradSchool">
                                                <el-input v-model="ruleForm.gradSchool"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="毕业时间" prop="gradTime">
                                                <el-date-picker v-model="ruleForm.gradTime" type="date" placeholder="选择日期" @change="changeGradtime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm.gradTime"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="专业" prop="major">
                                                <el-input v-model="ruleForm.major"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="移动电话" prop="mobileNo">
                                                <el-input v-model="ruleForm.mobileNo"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="家庭电话">
                                                <el-input v-model="ruleForm.homeTeleph"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="个人邮箱" prop="perEmail">
                                                <el-input v-model="ruleForm.perEmail"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="QQ">
                                                <el-input v-model="ruleForm.qqAcct"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="紧急联系人">
                                                <el-input v-model="ruleForm.atten"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="紧急电话">
                                                <el-input v-model="ruleForm.attenTeleph"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="籍贯">
                                                <el-input v-model="ruleForm.origo"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="户籍地址">
                                                <el-input v-model="ruleForm.permAddr"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="现居住地">
                                                <el-input v-model="ruleForm.liveAddr"></el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-form>
                                    <div class="text">职务信息</div>
                                    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px">
                                        <el-col :span="8">
                                            <!--<el-form-item label="员工编号" prop="userNo">-->
                                                <!--<el-input v-model="ruleForm2.userNo"></el-input>-->
                                            <!--</el-form-item>-->
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="公司名称" prop="organNo">
                                                    <el-select v-model="ruleForm2.organNo" placeholder="请选择公司名称" @change="selectDep(ruleForm2.organNo)">
                                                        <el-option :label="item.organName" :value="item.organNo" v-for="item in basicInfo.company"></el-option>
                                                    </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="部门名称" prop="derpNo">
                                                <el-select v-model="ruleForm2.derpNo" placeholder="请选择部门名称">
                                                    <el-option :label="item.derpName" :value="item.derpNo" v-for="item in basicInfo.department"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="CCC" prop="ownerCCC">
                                                <el-select v-model="ruleForm2.ownerCCC" placeholder="请选择CCC">
                                                    <el-option label="管理CCC" value="01"></el-option>
                                                    <el-option label="售前CCC" value="02"></el-option>
                                                    <el-option label="项目CCC" value="03"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="直线经理">
                                                <el-input v-model="ruleForm2.lineManager"></el-input>
                                            </el-form-item>
                                        </el-col>

                                        <el-col :span="8">
                                            <el-form-item label="员工类别" prop="custType">
                                                <el-select v-model="ruleForm2.custType" placeholder="请选择员工类别">
                                                    <el-option label="在编" value="01"></el-option>
                                                    <el-option label="借用" value="02"></el-option>
                                                    <el-option label="合同制" value="03"></el-option>
                                                    <el-option label="兼职" value="04"></el-option>
                                                    <el-option label="实习" value="05"></el-option>
                                                    <el-option label="其他" value="99"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="岗位" prop="custPost">
                                                <el-select v-model="ruleForm2.custPost" placeholder="请选择岗位">
                                                    <el-option label="前端" value="前端"></el-option>
                                                    <el-option label="后台" value="后台"></el-option>
                                                    <el-option label="测试" value="测试"></el-option>
                                                    <el-option label="运营" value="运营"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="职级" prop="custClass">
                                                <el-select v-model="ruleForm2.custClass" placeholder="请选择职级">
                                                    <el-option label="B10-初级软件工程师" value="B10"></el-option>
                                                    <el-option label="B11-中级软件工程师" value="B11"></el-option>
                                                    <el-option label="B12-高级软件工程师" value="B12"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="员工状态" prop="custStatus">
                                                <el-select v-model="ruleForm2.custStatus" placeholder="请选择员工状态">
                                                    <el-option label="试用期" value="01"></el-option>
                                                    <el-option label="合同期" value="02"></el-option>
                                                    <el-option label="已退休" value="03"></el-option>
                                                    <el-option label="已离职" value="04"></el-option>
                                                    <el-option label="停薪留职" value="05"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="入职日期">
                                                <!--<el-date-picker v-model="ruleForm.gradTime" type="date" placeholder="选择日期" @change="changeGradtime"></el-date-picker>-->
                                                <el-date-picker v-model="ruleForm2.entryTime" type="date" placeholder="选择日期" @change="changeEntryTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm2.entryTime"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="上岗日期">
                                                <el-date-picker v-model="ruleForm2.leftJobTime" type="date" placeholder="选择日期" @change="changeleftJobTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm2.leftJobTime"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="工作日期">
                                                <el-date-picker v-model="ruleForm2.workTime" type="date" placeholder="选择日期" @change="changeworkTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm2.workTime"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="职称日期">
                                                <el-date-picker v-model="ruleForm2.profTitleTime" type="date" placeholder="选择日期" @change="changeprofTitleTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm2.profTitleTime"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="合同开始">
                                                <el-date-picker v-model="ruleForm2.compactStartTime" type="date" placeholder="选择日期" @change="changeprofcompactStartTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm2.compactStartTime"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="合同终止">
                                                <el-date-picker v-model="ruleForm2.compactEndTime" type="date" placeholder="选择日期" @change="changeprofcompactEndTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm2.compactEndTime"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="试用开始">
                                                <el-date-picker v-model="ruleForm2.probStartTime" type="date" placeholder="选择日期" @change="changeprofprobStartTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm2.probStartTime"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="试用结束">
                                                <el-date-picker v-model="ruleForm2.probEndTime" type="date" placeholder="选择日期" @change="changeprofprobEndTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm2.probEndTime"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="招聘来源">
                                                <!--<el-input v-model="ruleForm.recruitQuarry"></el-input>-->
                                                <el-select v-model="ruleForm2.recruitQuarry" placeholder="招聘来源">
                                                    <el-option label="网上招聘" value="01"></el-option>
                                                    <el-option label="内部推荐" value="02"></el-option>
                                                    <el-option label="现场招聘" value="03"></el-option>
                                                    <el-option label="其他" value="99"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="开户银行">
                                                <el-input v-model="ruleForm2.openBank"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="银行卡号">
                                                <el-input v-model="ruleForm2.bankCardNo"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="养老账号">
                                                <el-input v-model="ruleForm2.endmAcct"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="医保账号">
                                                <el-input v-model="ruleForm2.mediAcct"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="生育账号">
                                                <el-input v-model="ruleForm2.mateAcct"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="公积金">
                                                <el-input v-model="ruleForm2.housAcct"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="23">
                                            <el-form-item label="备注">
                                                <el-input type="textarea" v-model="ruleForm2.remark"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="9">
                                            <el-form-item label="附件">
                                                <el-input v-model="ruleForm2.attachm"></el-input><span class="attachment">选择文件</span>
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
                            <el-tab-pane label="教育背景" name="fourth">
                                <div class="fourth-wrapper">
                                    <div class="title"><span>教育背景</span><span  class="text" @click="add_edu_experience">添加</span></div>
                                    <div class="from-wrapper">
                                        <el-form :model="ruleForm5" :rules="rules5" ref="ruleForm5" label-width="100px">
                                            <el-form-item label="时间" prop="date1">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm5.date1"></el-date-picker>
                                            </el-form-item>
                                            <el-form-item label="至" prop="date2">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm5.date2"></el-date-picker>
                                            </el-form-item>
                                            <el-form-item label="学校名称" prop="school">
                                                <el-input v-model="ruleForm5.school"></el-input>
                                            </el-form-item>
                                            <el-form-item label="专业" prop="major">
                                                <el-input v-model="ruleForm5.major"></el-input>
                                            </el-form-item>
                                            <el-form-item label="学历" prop="degree">
                                                <el-input v-model="ruleForm5.degree"></el-input>
                                            </el-form-item>
                                            <el-form-item label="描述" prop="dec">
                                                <el-input v-model="ruleForm5.dec"></el-input>
                                            </el-form-item>
                                            <div class="button-wrapper">
                                                <button>保存</button>
                                                <button class="button_special">取消</button>
                                                <span @click="delWorkItem">删除本条</span>
                                            </div>
                                        </el-form>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="项目经历" name="fifth">
                                <div class="fifth-wrapper">
                                    <div class="title"><span>项目经历</span><span class="text" @click="add_pro_experience">添加</span></div>
                                    <div class="from-wrapper">
                                        <div v-for="(item, index) in project_item.lists" style="margin-top: 20px; position: relative">
                                            <el-form :model="item" :rules="rules5" label-width="100px" :ref="`fifth${index}`" :class="{'bg_color':!item.isShowEdit,'bg_color2':item.isShowEdit}">
                                                <i :class="{'el-icon-close':!item.isShowEdit,'el-icon-edit':item.isShowEdit}" @click="proDel(item.isShowEdit,index)" class="fifthIcon"></i>
                                               <el-col :span="12">
                                                   <el-col :span="12">
                                                       <!--<input v-show="false" v-model="item.projectId=index">-->
                                                       <el-form-item label="时间" prop="startTime" class="fifth_common">
                                                           <el-date-picker type="date" placeholder="选择日期" v-model="item.startTime" :disabled="item.isShowEdit"></el-date-picker>
                                                       </el-form-item>
                                                   </el-col>
                                                   <el-col :span="12">
                                                       <el-form-item label="至" prop="endTime" class="fifth_common fifth_special">
                                                           <el-date-picker type="date" placeholder="选择日期" v-model="item.endTime" :disabled="item.isShowEdit"></el-date-picker>
                                                       </el-form-item>
                                                   </el-col>
                                               </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="项目名称" prop="projectName">
                                                        <el-input v-model="item.projectName" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="主要技能" prop="mainSkill">
                                                        <el-input v-model="item.mainSkill" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="项目角色" prop="projectRole">
                                                        <el-input v-model="item.projectRole" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="软件环境" prop="softEnv">
                                                        <el-input v-model="item.softEnv" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="客户" prop="custom">
                                                        <el-input v-model="item.custom" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="24">
                                                    <el-form-item label="项目职责" prop="projectDuty" class="fifth_common">
                                                        <el-input type="textarea" v-model="item.projectDuty" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="24">
                                                    <el-form-item label="项目描述" prop="desc" class="fifth_common">
                                                        <el-input type="textarea" v-model="item.desc" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <!--<div class="button-wrapper">-->
                                                    <!--<button @click="proSave" v-show="false">保存</button>-->
                                                    <!--<button class="button_special" @click="proDel(index)">删除</button>-->
                                                    <!--<span @click="delWorkItem">删除本条</span>-->
                                                <!--</div>-->
                                            </el-form>
                                        </div>
                                    </div>
                                </div>
                            </el-tab-pane>
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
                <!--v-show="tabName=='first'||tabName=='second'||tabName=='sixth'"-->
                <button class="add" @click="save(tabName)">{{tabName=='sixth'?'全部下载':'保存'}}</button>
            </div>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from "../../../common/current_position.vue";
    import socialRelationItem from './social_relation_item.vue'
    import moment from 'moment'
    export default {
        data() {
          return {
              basicInfo:{
                nation:'',
                education:'',
                degree:'',
                company:'',
                department:'',
              },
              dialogImageUrl: '',
              dialogVisible: false,
              social_item:{
                  userNo:'',
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
              project_item:{
                  userNo:'',
                  lists:[
                      {
//                          projectId: '',
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
                  ]
              },
              activeName: 'first',
              tabName:'first',
              ruleForm: {
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
                  qqAcct: '',
                  atten: '',
                  attenTeleph: '',
                  origo: '',
                  permAddr: '',
                  liveAddr: '',
              },
              rules: {
                  custName: [
                      {required: true, message: '请输入姓名', trigger: 'blur'},
                  ],
                  certNo: [
                      {required: true, message: '请输入身份证', trigger: 'blur'},
                      {min: 10, max: 18, message: '长度在 10 到 18 个字符', trigger: 'blur'}
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
                      {required: true, message: '请输入移动电话', trigger: 'blur'}
                  ],
                  perEmail: [
                      {required: true, message: '请输入个人邮箱', trigger: 'blur'}
                  ],
              },
              ruleForm2: {
//                  userNo: '',
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
              },
              rules2: {
                  userNo: [
                      {required: true, message: '请输入员工编号', trigger: 'blur'},
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
              ruleForm5: {
                  startTime: '',
                  endTime: '',
                  projectName: '',
                  mainSkill: '',
                  projectRole: '',
                  softEnv: '',
                  custom: '',
                  projectDuty: '',
                  desc: '',
              },
              rules5: {
                  startTime: [
                      {type:'date', required: true, message: '请选择时间', trigger: 'change'}
                  ],
                  endTime: [
                      {type:'date', required: true, message: '请选择时间', trigger: 'change'}
                  ],
                  projectName: [
                      {required: true, message: '请输入项目名称', trigger: 'blur'}
                  ],
                  mainSkill: [
                      {required: true, message: '请输入主要技能', trigger: 'blur'}
                  ],
                  projectRole: [
                      {required: true, message: '请输入项目角色', trigger: 'blur'}
                  ],
                  softEnv: [
                      {required: true, message: '请输入软件环境', trigger: 'blur'}
                  ],
                  custom: [
                      {required: true, message: '请输入客户', trigger: 'blur'}
                  ],
                  projectDuty: [
                      {required: true, message: '请输入项目职责', trigger: 'blur'}
                  ],
                  desc: [
                      {required: true, message: '请输入项目描述', trigger: 'blur'}
                  ],
              },
          }
        },
        components: {
            current,socialRelationItem
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
//            this.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=NATION')
//                .then(res=>{
//                    this.basicInfo.nation = res.data.data
//                })
//                .catch(e=>{
//                    console.log(e)
//                })
//            this.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=EDUCATION')
//                .then(res=>{
//                    this.basicInfo.education = res.data.data
//                })
//                .catch(e=>{
//                    console.log(e)
//                })
//            this.$axios.get('/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=DEGREE')
//                .then(res=>{
//                    console.log(res)
//                    this.basicInfo.degree = res.data.data
//                })
//                .catch(e=>{
//                    console.log(e)
//                })
        },
        methods: {
            changeBirthday(val) {
                this.ruleForm.birthday = val
            },
            changeGradtime(val) {
                this.ruleForm.gradTime = val
            },
            changeEntryTime(val) {
                this.ruleForm2.entryTime = val
            },
            changeleftJobTime(val) {
                this.ruleForm2.leftJobTime = val
            },
            changeworkTime(val) {
                this.ruleForm2.changeworkTime = val
            },
            changeprofTitleTime(val) {
                this.ruleForm2.profTitleTime = val
            },
            changeprofcompactStartTime(val) {
                this.ruleForm2.profcompactStartTime = val
            },
            changeprofcompactEndTime(val) {
                this.ruleForm2.profcompactEndTime = val
            },
            changeprofprobStartTime(val) {
                this.ruleForm2.profprobStartTime = val
            },
            changeprofprobEndTime(val) {
                this.ruleForm2.profprobEndTime = val
            },
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
            selectDep(organNo) {
                let data = {organNo}
                this.$axios.get('/iem_hrm/organ/selectChildDeparment',{params:data})
                    .then(res=>{
                        console.log(res)
                        this.basicInfo.department = res.data.data
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            },
            save(tabName) {
                let self = this
//                this.social_item.forEach((item)=>{
//                    item.isShow = false
//                })
                if('first' === tabName){
                    console.log('first',this.ruleForm.sex)
                    self.$refs.ruleForm.validate((valid) => {
                        if (valid) {
                            self.$refs.ruleForm2.validate((valid) => {
                                if (valid) {
                                    let data = Object.assign(this.ruleForm,this.ruleForm2)
                                    console.log(data)
                                    this.$axios.post('/iem_hrm/CustInfo/insertCustInfo', data)
                                        .then(res=>{
                                            console.log(res,111)
//                                            console.log(res.data.split(','))
                                            let result = res.data.retMsg
                                            if(result=="操作成功"){
                                                self.$message({
                                                    type: 'success',
                                                    message: result
                                                });
//                                                "P0000129"
                                                self.social_item.userNo = res.data.data
                                                self.project_item.userNo = res.data.data
                                            }else{
                                                self.$message({
                                                    type: 'error',
                                                    message: result
                                                });
                                            }

                                        })
                                        .catch(e=>{
                                            console.log(e)
                                        })
                                }else {
                                    self.$message({
                                        type: 'error',
                                        message: '请填写必须信息!'
                                    });
                                }
                            })
                        }else {
                            self.$message({
                                type: 'error',
                                message: '请填写必须信息!'
                            });
                        }
                    })
                }
                if('second'===tabName) {
                    console.log('second')
                    this.social_item.userNo = 'P0000129'
                    if(!this.social_item.userNo){
                        self.$message({
                            type: 'error',
                            message: '请先填写基本信息并点击右上角保存'
                        });
                        return
                    }
                    let socialItemLength = this.social_item.lists.length
                    this.social_item.lists = []
                    for (let i=0;i<socialItemLength;i++){
                        console.log(this.$refs['ruleFrom'+i][0].ruleFrom)
                        this.social_item.lists.push(this.$refs['ruleFrom'+i][0].ruleFrom)
                        this.$refs['ruleFrom'+i][0].isShowEdit = true
                    }
//                    this.social_item.userNo = 'P0000129'
//                    let data = {
//                        userNo:'P0000003',
//                        lists:[
//                            {
//                                contactId: '1',
//                                contactName: '小妹妹',
//                                relationship: '朋友',
//                                telphone: '13444444444',
//                                profession: '医生',
//                                post: '医生',
//                                addr: '深圳',
//                            },
//                            {
//                                contactId: '2',
//                                contactName: '小哥哥',
//                                relationship: '同学',
//                                telphone: '13444444444',
//                                profession: '老板',
//                                post: '老板',
//                                addr: '美国',
//                            }
//                        ]
//                    }
//                    var params = new URLSearchParams();
//                    params.append('userNo', 'P0000003');
//                    params.append('lists', data.lists);
//                    let item = {
//                        userNo:'P0000003',
//                        'lists[0].contactId':'1',
//                        'lists[0].contactName':'小芳方',
//                        'lists[0].relationship':'兄弟',
//                        'lists[0].telphone':'13766666666',
//                        'lists[0].profession':'医生',
//                        'lists[0].post':'医生',
//                        'lists[0].addr':'深圳',
//                    }
                    console.log(this.social_item)
                    this.$axios.post('/iem_hrm/CustContact/saveCustContacts', this.social_item)
                        .then(res=>{
                            console.log(res)
                            console.log('关系成功')
                        })
                        .catch(e=>{
                            console.log('失败')
                            console.log(e)
                        })
                }
                if('fifth'===tabName) {
//                    this.project_item.userNo = 'P0000120'
                    if(!this.project_item.userNo){
                        self.$message({
                            type: 'error',
                            message: '请先填写基本信息并点击右上角保存'
                        });
                        return
                    }
                    let projectItemLength = this.project_item.lists.length
                    let data = {
                        userNo : this.project_item.userNo,
                        lists : this.project_item.lists.map(item=>{
                            return {
//                                projectId: item.projectId,
                                startTime: item.startTime,
                                endTime: item.endTime,
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
                    var count = 0
                    for (let i=0;i<projectItemLength;i++){
                        let name = 'fifth'+i
                        self.$refs[name][0].validate((valid) => {
                            if (valid) {
                                count++
                                this.project_item.lists[i].isShowEdit = true
                                data.lists[i].startTime = moment(data.lists[i].startTime).format('YYYY-MM-DD')
                                data.lists[i].endTime = moment(data.lists[i].endTime).format('YYYY-MM-DD')
                                if(count==projectItemLength){
                                    console.log(data,111)
                                    this.$axios.post('/iem_hrm/employeeProjectExperience/addEmployeeProjectExperienceInfo', data)
                                        .then(res=>{
                                            console.log(res)
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
                                }
                            } else {
                                self.$message({
                                    type: 'error',
                                    message: '请填写完整信息！'
                                });
                            }
                        });
                    }
                }
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
            add_edu_experience() {

            },
            add_experience(){

            },
            add_pro_experience() {
                let item = {
//                        projectId: '',
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
//                new socialRelationItem().$mount().$appendTo('#secondContentWrapper')
                this.project_item.lists.push(item)
            },
            delWorkItem() {

            },
            proSave() {
                if('fifth'===tabName) {
//                    this.project_item.userNo = 'P0000129'
                    if(!this.project_item.userNo){
                        self.$message({
                            type: 'error',
                            message: '请先填写基本信息并点击右上角保存'
                        });
                        return
                    }
                    let projectItemLength = this.project_item.lists.length
                    this.project_item.lists = []
                    for (let i=0;i<projectItemLength;i++){
                        console.log(this.$refs['ruleFrom'+i][0].ruleFrom)
                        this.social_item.lists.push(this.$refs['ruleFrom'+i][0].ruleFrom)
                        this.$refs['ruleFrom'+i][0].isShowEdit = true
                    }
                    console.log(this.social_item)
                    this.$axios.post('/iem_hrm/CustContact/saveCustContacts', this.social_item)
                        .then(res=>{
                            console.log(res)
                            console.log('关系成功')
                        })
                        .catch(e=>{
                            console.log('失败')
                            console.log(e)
                        })
                }
            },
            proDel(isShow,index) {
                if(!isShow)  {
                    this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.project_item.lists.splice(index,1)
                    }).catch(()=>{
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    })
                }
                if(isShow) {
                    this.project_item.lists[index].isShowEdit = !isShow
                }
            },

        },
        computed: {

        }
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
                    height 50px
                    .el-tabs__nav-wrap
                        height 100%
                        .el-tabs__nav
                            height 50px
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
                    padding-top 30px
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
                .third-wrapper, .fourth-wrapper, .fifth-wrapper
                    min-height 570px
                    padding-bottom 20px
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
                        margin-top 40px

                        .el-form
                            padding 40px 20px 18px 20px
                            background: #F4F4F4;
                            overflow hidden
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
                                    width 210px
                                .el-textarea
                                    width 100%
                                .el-textarea__inner
                                    width: 100%
                                    height: 120px
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
                outline none
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #FFFFFF;
                line-height 30px
                text-align center
                position absolute
                right 20px
                top 10px
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
