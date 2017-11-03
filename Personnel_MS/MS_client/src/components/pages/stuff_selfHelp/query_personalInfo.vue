<template>
    <div class="paybaseinfo_mgmt">
        <current yiji="员工自助" erji="个人信息查询">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">个人信息查询</span>
            </el-col>
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
                    <div style="width:1121px;">
                        <el-row :gutter="0">
                            <el-col :span="10">
                                <el-form-item label="工号：">
                                    <el-input v-model="userInfo.userNo" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14">
                                <el-form-item label="姓名：">
                                    <el-input v-model="userInfo.custName" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="0">
                            <el-col :span="10">
                                <el-form-item label="直线经理：">
                                    <el-input v-model="userInfo.lineManager" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14">
                                <el-form-item label="部门名称：">
                                    <el-input v-model="userInfo.derpName" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="0">
                            <el-col :span="10">
                                <el-form-item label="职位：">
                                    <el-input v-model="userInfo.custPost" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14">
                                <el-form-item label="职级：">
                                    <el-input v-model="userInfo.custClass" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="0">
                            <el-col :span="10">
                                <el-form-item label="公司名称：">
                                    <el-input v-model="userInfo.organName" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14">
                                <el-form-item label="入职日期：">
                                    <el-input v-model="userInfo.entryTime" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="0">
                            <el-col :span="10">
                                <el-form-item label="电话：">
                                    <el-input v-model="userInfo.mobileNo" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14">
                                <el-form-item label="个人资产：">
                                    <el-input v-model="userInfo.type" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-form>
            </el-col>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
export default {
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            },
            userInfo:{
              userNo: '',
              custName: '',
              custPost: '',
              custClass: '',
              entryTime: '',
              lineManager: '',
              mobileNo: '',
              derpName: '',
              organName: ''

            }
        };
    },
    components: {
        current
    },
    created() {
      this.custInfoList();
    },
    methods: {
        custInfoList() {
            const self = this;
            console.log("开始运行custInfoList方法");
            self.$axios
                .get("/iem_hrm/CustInfo/queryCustInfoByUserNo/P0000002")
                .then(res => {
                    console.log(res);
                    this.userInfo = res.data.data;
                })
                .catch(() => {
                    console.log("error");
                });
        }
    }
};
</script>
<style>
.paybaseinfo_mgmt {
    padding: 0 0 20px 20px;
}
</style>