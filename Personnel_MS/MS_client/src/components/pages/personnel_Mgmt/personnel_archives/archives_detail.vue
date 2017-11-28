<template>
    <div class="archives_detail">
        <current yiji="人事事务" erji="人事档案" sanji="员工详情"></current>
        <el-col :span="24">
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
                                                   action="/iem_hrm/CustFile/batch/upload"
                                                   :show-file-list="false"
                                                   :on-success="handleAvatarSuccess"
                                                   :headers="token"
                                                   :before-upload="beforeAvatarUpload">
                                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                            <div><div>添加照片</div></div>
                                        </el-upload>
                                        <div class="text-desc">员工照片</div>
                                    </div>
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                                        <el-col :span="8">
                                            <el-form-item label="姓名" prop="custName">
                                                <el-input v-model="ruleForm.custName" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="身份证" prop="certNo">
                                                <el-input v-model="ruleForm.certNo" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="性别" prop="sex" class="gender_special">
                                                <el-radio-group v-model="ruleForm.sex" :disabled="edit">
                                                    <el-radio-button label="01">男</el-radio-button>
                                                    <el-radio-button label="02" class="special">女</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="出生年月" prop="birthday">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday" :disabled="edit" @change="holdBirthday"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="民族" prop="nation">
                                                <el-select v-model="ruleForm.nation" placeholder="请选择民族" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.nation"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="婚姻状况" prop="marital" class="marriage_special">
                                                <el-radio-group v-model="ruleForm.marital" :disabled="edit">
                                                    <el-radio-button label="01">未婚</el-radio-button>
                                                    <el-radio-button label="02" class="special">已婚</el-radio-button>
                                                    <el-radio-button label="03">离异</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="学历" prop="education">
                                                <el-select v-model="ruleForm.education" placeholder="请选择学历" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.education"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="学位" prop="degree">
                                                <el-select v-model="ruleForm.degree" placeholder="请选择学位" :disabled="edit">
                                                    <el-option :label="item.paraShowMsg" :value="item.paraValue" v-for="item in basicInfo.degree"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="政治面貌" prop="politial" class="marriage_special">
                                                <el-radio-group v-model="ruleForm.politial" :disabled="edit">
                                                    <el-radio-button label="01">党员</el-radio-button>
                                                    <el-radio-button label="02" class="special">团员</el-radio-button>
                                                    <el-radio-button label="03">群众</el-radio-button>
                                                </el-radio-group>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="毕业学校" prop="gradSchool">
                                                <el-input v-model="ruleForm.gradSchool" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="毕业时间" prop="gradTime">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.gradTime" :disabled="edit" @change="holdGradTime"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="专业" prop="major">
                                                <el-input v-model="ruleForm.major" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="移动电话" prop="mobileNo">
                                                <el-input v-model="ruleForm.mobileNo" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="家庭电话" prop="homeTeleph">
                                                <el-input v-model="ruleForm.homeTeleph" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="个人邮箱">
                                                <el-input v-model="ruleForm.perEmail" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="公司邮箱">
                                                <el-input v-model="ruleForm.comEmail" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="紧急联系人">
                                                <el-input v-model="ruleForm.atten" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="紧急电话" prop="attenTeleph">
                                                <el-input v-model="ruleForm.attenTeleph" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="籍贯">
                                                <el-input v-model="ruleForm.origo" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="户籍地址">
                                                <el-input v-model="ruleForm.permAddr" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="现居住地">
                                                <el-input v-model="ruleForm.liveAddr" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <hr style="width: 100%">
                                        <el-col :span="8">
                                            <el-form-item label="员工编号" prop="userNo">
                                                <el-input v-model="ruleForm.userNo" :disabled="true"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="公司名称" prop="organName">
                                                <!--<el-input v-model="ruleForm.userName"></el-input>-->
                                                <el-select v-model="ruleForm.organNo" placeholder="请选择公司名称" :disabled="edit" @change="selectDep(ruleForm.organNo)">
                                                    <el-option :label="item.organName" :value="item.organNo" v-for="item in basicInfo.company"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="部门名称" prop="derpName">
                                                <el-select v-model="ruleForm.derpName" placeholder="请选择部门名称" :disabled="edit" @change="selectCCC(ruleForm.organNo)">
                                                    <el-option :label="item.derpName" :value="item.derpNo" v-for="item in basicInfo.department"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="CCC" prop="ownerCCC">
                                                <el-select v-model="ruleForm.ownerCCC" placeholder="请选择CCC" :disabled="edit">
                                                    <el-option :label="item=='01'?'管理CCC':item=='02'?'售前CCC':'项目CCC'" :value="item" v-for="item in basicInfo.CCC"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <!--<el-form-item label="直线经理">-->
                                                <!--<el-input v-model="ruleForm.lineManager" :disabled="edit"></el-input>-->
                                            <!--</el-form-item>-->
                                            <el-form-item label="直线经理">
                                                <el-input v-model="ruleForm.lineManager" :disabled="edit">
                                                    <el-button slot="append" icon="search" @click="userNoSelect()" :disabled="edit"></el-button>
                                                </el-input>
                                                <messageBox
                                                        :title="boxTitle"
                                                        :tableOption.sync="tableOption"
                                                        :inputFirstOption.sync="inputFirstOption"
                                                        :inputSecOption.sync="inputSecOption"
                                                        :searchData.sync="searchData"
                                                        :searchUrl="searchUrl"
                                                        :dialogVisible="dialogVisible"
                                                        :pagination.sync="msgPagination"
                                                        @dialogConfirm="dialogConfirm"
                                                        @changeDialogVisible="changeDialogVisible"
                                                ></messageBox>
                                            </el-form-item>
                                        </el-col>

                                        <el-col :span="8">
                                            <el-form-item label="员工类别" prop="custType">
                                                <el-select v-model="ruleForm.custType" placeholder="请选择员工类别" :disabled="edit">
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
                                                <el-select v-model="ruleForm.custPost" placeholder="请选择岗位" :disabled="edit">
                                                    <el-option label="架构师" value="01"></el-option>
                                                    <el-option label="前端开发工程师" value="02"></el-option>
                                                    <el-option label="测试工程师" value="03"></el-option>
                                                    <el-option label="后端开发" value="04"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="职级" prop="custClass">
                                                <el-select v-model="ruleForm.custClass" placeholder="请选择职级" :disabled="edit">
                                                    <el-option label="B10-初级软件工程师" value="B10"></el-option>
                                                    <el-option label="B11-中级软件工程师" value="B11"></el-option>
                                                    <el-option label="B12-高级软件工程师" value="B12"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="员工状态" prop="custStatus">
                                                <el-select v-model="ruleForm.custStatus" placeholder="请选择员工状态" :disabled="edit">
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
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.entryTime" :disabled="edit" @change="changeEntryTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm.entryTime" :disabled="edit"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="上岗日期">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.leftJobTime" :disabled="edit" @change="changeLeftJobTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm.leftJobTime" :disabled="edit"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="工作日期">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.workTime" :disabled="edit" @change="changeWorkTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm.workTime" :disabled="edit"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="职称日期">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.profTitleTime" :disabled="edit" @change="changeProfTitleTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm.profTitleTime" :disabled="edit"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="合同开始">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.compactStartTime" :disabled="edit" @change="changeCompactStartTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm.compactStartTime" :disabled="edit"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="合同终止">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.compactEndTime" :disabled="edit" @change="changeCompactEndTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm.compactEndTime" :disabled="edit"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="试用开始">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.probStartTime" :disabled="edit" @change="changeProbStartTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm.probStartTime" :disabled="edit"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="试用结束">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.probEndTime" :disabled="edit" @change="changeProbEndTime"></el-date-picker>
                                                <!--<el-input v-model="ruleForm.probEndTime" :disabled="edit"></el-input>-->
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="招聘来源">
                                                <el-select v-model="ruleForm.recruitQuarry" placeholder="招聘来源" :disabled="edit">
                                                    <el-option label="网上招聘" value="01"></el-option>
                                                    <el-option label="内部推荐" value="02"></el-option>
                                                    <el-option label="现场招聘" value="03"></el-option>
                                                    <el-option label="其他" value="99"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="开户银行">
                                                <el-input v-model="ruleForm.openBank" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="银行卡号">
                                                <el-input v-model="ruleForm.bankCardNo" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="养老账号">
                                                <el-input v-model="ruleForm.endmAcct" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="医保账号">
                                                <el-input v-model="ruleForm.mediAcct" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="生育账号">
                                                <el-input v-model="ruleForm.mateAcct" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="公积金">
                                                <el-input v-model="ruleForm.housAcct" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <hr style="width: 100%">
                                        <el-col :span="23">
                                            <el-form-item label="备注">
                                                <el-input type="textarea" v-model="ruleForm.remark" :disabled="edit"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="9">
                                            <el-form-item label="附件">
                                                <el-input v-model="ruleForm.attachm" style="position:absolute"></el-input>
                                                <el-upload class="upload-demo" ref="upload" name="file"
                                                           action="/iem_hrm/CustInfo/insertCustInfo"
                                                           :show-file-list="false"
                                                           :auto-upload="false"
                                                           :on-change="handleFileUpload"
                                                           :on-success="successUpload"
                                                           :headers="token"
                                                           :before-upload="checkUserNo">
                                                    <el-button slot="trigger" type="primary" class="uploadBtn" :disabled="edit">更换附件</el-button>
                                                    <el-button type="primary" class="uploadBtn uploadBtn-special" @click="test">下载附件</el-button>
                                                </el-upload>
                                                <!--<el-button class="uploadBtn-special uploadBtn" type="primary">下载附件</el-button>-->
                                            </el-form-item>
                                            <!--<el-form-item label="附件">-->
                                                <!--&lt;!&ndash;<el-input v-model="ruleForm.attachm" style="position:absolute" :disabled="edit"></el-input>&ndash;&gt;-->
                                                <!--&lt;!&ndash;<el-upload class="upload-demo" ref="upload" name="file"&ndash;&gt;-->
                                                           <!--&lt;!&ndash;:on-change="handleFileUpload"&ndash;&gt;-->
                                                           <!--&lt;!&ndash;:on-success="successUpload"&ndash;&gt;-->
                                                           <!--&lt;!&ndash;action="/iem_hrm/CustFile/upload"&ndash;&gt;-->
                                                           <!--&lt;!&ndash;:show-file-list="false"&ndash;&gt;-->
                                                           <!--&lt;!&ndash;:auto-upload="false"&ndash;&gt;-->
                                                           <!--&lt;!&ndash;:headers="token">&ndash;&gt;-->
                                                    <!--&lt;!&ndash;<el-button slot="trigger" type="primary" class="uploadBtn">上传附件</el-button>&ndash;&gt;-->
                                                <!--&lt;!&ndash;</el-upload>&ndash;&gt;-->
                                                <!--&lt;!&ndash;<el-button class="downloadBtn" @click="handleDownload">下载附件</el-button>&ndash;&gt;-->
                                                <!--<el-input v-model="ruleForm.attachm" :disabled="edit"></el-input><span class="attachment">选择文件</span>-->
                                            <!--</el-form-item>-->
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
                                    <div class="title"><span>工作经历</span><span  class="text" @click="add_pro_experience">添加</span></div>
                                    <div class="from-wrapper">
                                        <div v-for="(item, index) in work_item.lists" style="margin-top: 20px; position: relative">
                                            <el-form :model="item" :rules="rules5" label-width="100px" :ref="`third${index}`" :class="{'bg_color':!item.isShowEdit,'bg_color2':item.isShowEdit}">
                                                <i :class="{'el-icon-close':!item.isShowEdit,'el-icon-edit':item.isShowEdit}" @click="proDel(item.isShowEdit,index)" class="fifthIcon"></i>
                                                <el-col :span="12">
                                                    <div style="display: flex">
                                                        <el-form-item label="时间" prop="startTime" class="fifth_common" style="margin-right: -40px">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="item.startTime" :disabled="item.isShowEdit"></el-date-picker>
                                                        </el-form-item>
                                                        <el-form-item label="至" prop="endTime" class="fifth_common fifth_special">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="item.endTime" :disabled="item.isShowEdit"></el-date-picker>
                                                        </el-form-item>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="公司" prop="company">
                                                        <el-input v-model="item.company" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="职务" prop="post1">
                                                        <el-input v-model="item.post1" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="职责" prop="duty">
                                                        <el-input v-model="item.duty" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="24">
                                                    <el-form-item label="描述" prop="desc" class="fifth_common">
                                                        <el-input type="textarea" v-model="item.desc" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-form>
                                        </div>
                                    </div>
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
                                            <!--&lt;!&ndash;<div class="button-wrapper">&ndash;&gt;-->
                                                <!--&lt;!&ndash;<button>保存</button>&ndash;&gt;-->
                                                <!--&lt;!&ndash;<button class="button_special">取消</button>&ndash;&gt;-->
                                                <!--&lt;!&ndash;<span @click="delWorkItem">删除本条</span>&ndash;&gt;-->
                                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
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
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="教育背景" name="fourth">
                                <div class="fourth-wrapper">
                                    <div class="title"><span>教育背景</span><span class="text" @click="add_pro_experience">添加</span></div>
                                    <div class="from-wrapper">
                                        <div v-for="(item, index) in education_item.lists" style="margin-top: 20px; position: relative">
                                            <el-form :model="item" :rules="rules5" label-width="100px" :ref="`fourth${index}`" :class="{'bg_color':!item.isShowEdit,'bg_color2':item.isShowEdit}">
                                                <i :class="{'el-icon-close':!item.isShowEdit,'el-icon-edit':item.isShowEdit}" @click="proDel(item.isShowEdit,index)" class="fifthIcon"></i>
                                                <el-col :span="12">
                                                    <div style="display: flex">
                                                        <el-form-item label="时间" prop="startTime" class="fifth_common" style="margin-right: -40px">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="item.startTime" :disabled="item.isShowEdit"></el-date-picker>
                                                        </el-form-item>
                                                        <el-form-item label="至" prop="endTime" class="fifth_common fifth_special">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="item.endTime" :disabled="item.isShowEdit"></el-date-picker>
                                                        </el-form-item>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="学校名称" prop="schoolName">
                                                        <el-input v-model="item.schoolName" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="专业" prop="major">
                                                        <el-input v-model="item.major" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="学历" prop="education">
                                                        <el-select v-model="item.education" :disabled="item.isShowEdit">
                                                            <el-option value="01" label="高中以下"></el-option>
                                                            <el-option value="02" label="高中"></el-option>
                                                            <el-option value="03" label="大专"></el-option>
                                                            <el-option value="04" label="本科"></el-option>
                                                            <el-option value="05" label="硕士"></el-option>
                                                            <el-option value="06" label="博士"></el-option>
                                                            <el-option value="07" label="博士以上"></el-option>
                                                            <el-option value="99" label="其他"></el-option>
                                                        </el-select>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="描述" prop="desc">
                                                        <el-input type="textarea" v-model="item.desc" :disabled="item.isShowEdit"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-form>
                                        </div>
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
                                                    <div style="display: flex">
                                                        <el-form-item label="时间" prop="startTime" class="fifth_common" style="margin-right: -40px">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="item.startTime" :disabled="item.isShowEdit"></el-date-picker>
                                                        </el-form-item>
                                                        <el-form-item label="至" prop="endTime" class="fifth_common fifth_special">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="item.endTime" :disabled="item.isShowEdit"></el-date-picker>
                                                        </el-form-item>
                                                    </div>
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
                                    <el-upload :disabled="certificates_list.certificates"
                                               name="file"
                                               ref="upload2"
                                            action="/iem_hrm/CustFile/batch/upload"
                                            list-type="picture-card"
                                           :file-list="fileList2"
                                           :data="certificates_list"
                                            :on-preview="handlePictureCardPreview"
                                            :on-remove="handleRemove"
                                           :on-change="handleFileUpload"
                                           :on-success="successUpload"
                                           :before-upload="checkUserNo"
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
                    <button @click="bianji(tabName)">编辑</button>
                    <button class="special_1" @click="save(tabName)">{{this.tabName=='sixth'?'全部下载':'保存'}}</button>
                    <button @click="del" v-show="tabName=='first'?true:false">删除</button>
                </div>
            </div>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from "../../../common/current_position.vue"
    import socialRelationItem from './social_relation_item.vue'
    import messageBox from "../../../common/messageBox-components.vue"
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
                    CCC:'',
                },
                fileList: [],
                fileList2: [],
                imageUrl: '',
                dialogImageUrl: '',
                dialogVisible2: false,
                token: {
                    Authorization:`Bearer `+localStorage.getItem('access_token'),
                },
                certificates_list: {
                    certificates: true,
                },
                user_avatar:{

                },
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

                userNo: '',
                edit: true,
                social_item:{
                    userNo:'',
                    lists:[
                        {
                            contactName: '',
                            relationship: '',
                            telphone: '',
                            profession: '',
                            post: '',
                            addr: '',
                            isShowEdit: false
                        },
                    ]
                },
                education_item:{
                    userNo:'',
                    lists:[
                        {
                            startTime: '',
                            endTime: '',
                            schoolName: '',
                            major: '',
                            education: '',
                            desc: '',
                            isShowEdit: false
                        },
                    ]
                },
                work_item:{
                    userNo:'',
                    lists:[
                        {
                            startTime: '',
                            endTime: '',
                            company: '',
                            post1: '',
                            duty: '',
                            desc: '',
                            isShowEdit: false
                        },
                    ]
                },
                project_item:{
                    userNo:'',
                    lists:[
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
                    ]
                },
                activeName: 'first',
                tabName:'first',
                lock: {
                    proLock: '',
                    eduLock: '',
                    workLock: '',
                    socialLock: '',
                    certificatesLock: '',
                },
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
                rules: {
                    custName: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
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
                        { pattern: /^[1][3578]\d{9}$/, message: "请输入合法的移动号码:例13几到18几的11位数字" }
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
                    schoolName: [
                        {required: true, message: '请输入学校名称', trigger: 'blur'}
                    ],
                    major: [
                        {required: true, message: '请输入专业', trigger: 'blur'}
                    ],
                    education: [
                        {required: true, message: '请选择学历', trigger: 'change'}
                    ],
                    company: [
                        {required: true, message: '请输入公司', trigger: 'blur'}
                    ],
                    post1: [
                        {required: true, message: '请输入职务', trigger: 'blur'}
                    ],
                    duty: [
                        {required: true, message: '请输入职责', trigger: 'blur'}
                    ],
                },
            }
        },
        components: {
            current,socialRelationItem,messageBox
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
            this.userNo = this.$route.query.userNo
            for(var tt in this.lock){
                this.lock[tt] = true
            }
            if(this.tabName=='first'){
                this.$axios.get('/iem_hrm/CustInfo/queryCustInfoByUserNo/'+this.userNo)
                    .then(res=>{
                        console.log(res)
                        this.ruleForm = res.data.data
                    })
                    .catch(e=>{
                        console.log(e)
                    })
//                this.$axios.get('/iem_hrm/CustFile/queryCustImgs',{params:{userNo:this.userNo}})
//                    .then(res=>{
//                        console.log(res)
////                        for(var name in res.data.data){
////                            let item = {
////                                name:name,
////                                url:'data:image/'+name.substr(name.lastIndexOf('.')+1)+';base64,'+res.data.data[name]
////                            }
////                            this.fileList2.push(item)
////                        }
//                    })
//                    .catch(e=>{
//                        console.log(e)
//                    })
            }
        },
        methods: {
            test(event) {
              console.log('test',event)
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
            handleRemove(file, fileList) {
                console.log(file, fileList,11111);
            },
            handleFileUpload(file, fileList) {
//                console.log(file,'****handleFileUpload****',fileList)
            },
            successUpload(response, file, fileList) {
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
            },
            checkUserNo(file) {
//                console.log(file,'------checkUserNo')
                this.certificates_list.userNo = this.userNo
                this.certificates_list.file = {
                    file
                }
                if(!this.certificates_list.userNo){
                    this.$message({
                        type: 'error',
                        message: '请先填写基本信息并点击右上角保存'
                    });
                    return false
                }
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible2 = true;
            },
            dialogConfirm(custInfo){
                let self = this;
                self.ruleForm.lineManager = custInfo.stateName+'_'+custInfo.stateNo
                self.dialogVisible = false;
            },
            handleAvatarSuccess(res, file) {
                console.log(res)
//                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
//                console.log(file)
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                this.imageUrl = URL.createObjectURL(file);
                this.user_avatar.userNo = this.userNo
                this.user_avatar.file = {
                    file
                }
                if(!this.user_avatar.userNo){
                    return false
                }
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
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
            selectDep(organNo) {
                let data = {organNo}
                this.$axios.get('/iem_hrm/organ/selectChildDeparment',{params:data})
                    .then(res=>{
                        this.basicInfo.department = res.data.data
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
                            this.project_item.userNo = this.userNo
                            this.project_item.lists = res.data.data
                            this.project_item.lists.forEach(item=>{
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
                            this.education_item.userNo = this.userNo
                            this.education_item.lists = res.data.data
                            this.education_item.lists.forEach(item=>{
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
                            this.work_item.userNo = this.userNo
                            this.work_item.lists = res.data.data
                            this.work_item.lists.forEach(item=>{
                                self.$set(item,'isShowEdit', true)
                                item.startTime = new Date(item.startTime)
                                item.endTime = new Date(item.endTime)
                            })
                            this.lock.workLock = false
                        })
                        .catch(e=>{
                            console.log(e)
                        })
                }
                if(tab.name==='second'&&this.lock.socialLock){
                    this.$axios.get('/iem_hrm/CustContact/queryCustContacts',{params:{userNo:this.userNo}})
                        .then(res=>{
                            this.social_item.userNo = this.userNo
                            this.social_item.lists = res.data.data
                            this.social_item.lists.forEach(item=>{
                                self.$set(item,'isShowEdit', true)
                            })
                            this.lock.socialLock = false
                        })
                        .catch(e=>{
                            console.log(e)
                        })
                }
                if(tab.name==='sixth'&&this.lock.certificatesLock){
                    this.$axios.get('/iem_hrm/CustFile/queryCustImgs',{params:{userNo:this.userNo}})
                        .then(res=>{
                            for(var name in res.data.data){
                                let item = {
                                        name:name,
                                        url:'data:image/'+name.substr(name.lastIndexOf('.')+1)+';base64,'+res.data.data[name]
                                }
                                this.fileList2.push(item)
                            }
                        })
                        .catch(e=>{
                            console.log(e)
                        })
                }
            },
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
                if('fifth' === tabName) {
                    this.project_item.lists.forEach(item=>{
                        item.isShowEdit = false
                    })
                }
                if('fourth' === tabName) {
                    this.education_item.lists.forEach(item=>{
                        item.isShowEdit = false
                    })
                }
                if('third' === tabName) {
                    this.work_item.lists.forEach(item=>{
                        item.isShowEdit = false
                    })
                }
                if('second' === tabName) {
                    this.social_item.lists.forEach(item=>{
                        item.isShowEdit = false
                    })
                }
                if('sixth' === tabName) {
                    this.certificates_list.certificates = false
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
                            this.$axios.put('/iem_hrm/CustInfo/modCustInf', this.ruleForm)
                                .then(res=>{
                                    let result = res.data.retMsg
                                    if ("操作成功"===result){
                                        self.$message({
                                            type: 'success',
                                            message: result
                                        });
                                        this.edit = true
                                        this.$axios.get('/iem_hrm/CustInfo/queryCustInfoByUserNo/'+this.userNo)
                                            .then(res=>{
                                                this.ruleForm = res.data.data
                                            })
                                            .catch(e=>{
                                                console.log(e)
                                            })
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
                }
                if('second'===tabName) {
                    let socialItemLength = this.social_item.lists.length
                    this.social_item.lists = []
                    for (let i=0;i<socialItemLength;i++){
                        let name = 'ruleFrom'+i
                        self.$refs[name][0].ruleFrom.isShowEdit = true
                        this.social_item.lists.push(this.$refs['ruleFrom'+i][0].ruleFrom)
                    }
                    let data = this.social_item.lists.map(item=>{
                        return {
                            contactName: item.contactName,
                            relationship: item.relationship,
                            telphone: item.telphone,
                            profession: item.profession,
                            addr: item.addr,
                            isShowEdit: item.isShowEdit
                        }
                    })
                    this.social_item.lists = data
                    this.$axios.post('/iem_hrm/CustContact/saveCustContacts', this.social_item)
                        .then(res=>{
                            console.log(res)
                            let result = res.data.retMsg
                            if(result=="操作成功"){
                                self.$message({
                                    type: 'success',
                                    message: result
                                });
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
                }
                if('third'===tabName) {
                    let workItemLength = this.work_item.lists.length
                    let data = {
                        userNo : this.work_item.userNo,
                        lists : this.work_item.lists.map(item=>{
                            return {
                                startTime: item.startTime,
                                endTime: item.endTime,
                                company: item.company,
                                post1: item.post1,
                                duty: item.duty,
                                desc: item.desc,
                            }
                        }),
                    }
                    let count = 0
                    for (let i=0;i<workItemLength;i++){
                        let name = 'third'+i
                        self.$refs[name][0].validate((valid) => {
                            if (valid) {
                                count++
                                this.work_item.lists[i].isShowEdit = true
                                data.lists[i].startTime = moment(data.lists[i].startTime).format('YYYY-MM-DD')
                                data.lists[i].endTime = moment(data.lists[i].endTime).format('YYYY-MM-DD')
                                if(count==workItemLength){
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
                if('fourth'===tabName) {
                    let educationItemLength = this.education_item.lists.length
                    let data = {
                        userNo : this.education_item.userNo,
                        lists : this.education_item.lists.map(item=>{
                            return {
                                startTime: item.startTime,
                                endTime: item.endTime,
                                schoolName: item.schoolName,
                                major: item.major,
                                education: item.education,
                                desc: item.desc,
                            }
                        }),
                    }
                    let count = 0
                    for (let i=0;i<educationItemLength;i++){
                        let name = 'fourth'+i
                        self.$refs[name][0].validate((valid) => {
                            if (valid) {
                                count++
                                this.education_item.lists[i].isShowEdit = true
                                data.lists[i].startTime = moment(data.lists[i].startTime).format('YYYY-MM-DD')
                                data.lists[i].endTime = moment(data.lists[i].endTime).format('YYYY-MM-DD')
                                if(count==educationItemLength){
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
                if('fifth'===tabName) {
                    let projectItemLength = this.project_item.lists.length
                    let data = {
                        userNo : this.project_item.userNo,
                        lists : this.project_item.lists.map(item=>{
                            return {
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
                    let count = 0
                    for (let i=0;i<projectItemLength;i++){
                        let name = 'fifth'+i
                        self.$refs[name][0].validate((valid) => {
                            if (valid) {
                                count++
                                this.project_item.lists[i].isShowEdit = true
                                data.lists[i].startTime = moment(data.lists[i].startTime).format('YYYY-MM-DD')
                                data.lists[i].endTime = moment(data.lists[i].endTime).format('YYYY-MM-DD')
                                if(count==projectItemLength){
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
                if('sixth'===tabName) {
                    console.log(this.userNo)
                    this.$axios.get('/iem_hrm/CustFile/downLoadZipFile',{params:{userNo:this.userNo}})
                        .then(res=>{
                            console.log(res)
//                            let reader = new FileReader()
//                            reader.onload = (e => {
//                                let aa = e.target.result
//                                console.log(aa,111)
//                            })
//                            reader.readAsDataURL(res.data)
//                            console.log(res)
//                            const blob = res.data;
//                            let elink = document.createElement('a'); // 创建a标签
////                            elink.download = fileName;
//                            elink.style.display = 'none';
//                            elink.href = URL.createObjectURL(blob);
//                            document.body.appendChild(elink);
//                            elink.click(); // 触发点击a标签事件
//                            document.body.removeChild(elink);
                        })
                        .catch(e=>{
                            console.log(e)
                            this.$message({ message: '下载附件失败', type: 'error' });
                        })
                }
            },
            add_item() {
                let item = {
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
            add_pro_experience() {
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
                    this.project_item.lists.push(item)
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
                    this.education_item.lists.push(item)
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
                    this.work_item.lists.push(item)
                }
            },
            proDel(isShow,index) {
                if('fifth'==this.tabName){
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
                }
                if('fourth'==this.tabName){
                    if(!isShow)  {
                        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.education_item.lists.splice(index,1)
                        }).catch(()=>{
                            this.$message({
                                type: 'info',
                                message: '已取消删除'
                            });
                        })
                    }
                    if(isShow) {
                        this.education_item.lists[index].isShowEdit = !isShow
                    }
                }
                if('third'==this.tabName){
                    if(!isShow)  {
                        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.work_item.lists.splice(index,1)
                        }).catch(()=>{
                            this.$message({
                                type: 'info',
                                message: '已取消删除'
                            });
                        })
                    }
                    if(isShow) {
                        this.work_item.lists[index].isShowEdit = !isShow
                    }
                }
            },
        },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .archives_detail
        padding: 0 0 20px 20px;
        overflow: hidden;
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
                    /*padding-left 8px*/
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
                        margin-top 30px
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
