<template>
    <div class="container-wrap">
        <current yiji="资产管理" erji="资产使用管理" sanji="资产使用详情"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">资产使用详情</span>
            </div>
            <div class="add-wrapper">
                <el-form label-width="122px" :inline="true">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公司名称">
                            <el-input :disabled="true" v-model="applyCompanyInfo.organName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="申请部门名称">
                            <el-input :disabled="true" v-model="applyCompanyInfo.derpName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="CCC">
                            <el-input :disabled="true" v-model="applyCompanyInfo.costCode"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="申请使用人工号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.applyUserNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="姓名">
                            <el-input :disabled="true" v-model="applyCompanyInfo.custName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="手机号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.mobileNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="岗位">
                            <el-select :disabled="true" v-model="applyCompanyInfo.custPost">
                                <el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职级">
                            <el-select :disabled="true" v-model="applyCompanyInfo.custClass">
                                <el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" class="item-title">资产信息</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="资产编号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.assetNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="购买单价">
                            <el-input :disabled="true" v-model="applyCompanyInfo.buyUnitPrice"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="当前库存数量">
                            <el-input :disabled="true" v-model="applyCompanyInfo.stockNum"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="购买金额">
                            <el-input :disabled="true" v-model="applyCompanyInfo.buyAmount"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="制造商">
                            <el-input :disabled="true" v-model="applyCompanyInfo.mfrs"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="供应商">
                            <el-input :disabled="true" v-model="applyCompanyInfo.supplier"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="资产类别">
                            <el-input :disabled="true" v-model="applyCompanyInfo.assetType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="资产名称">
                            <el-input :disabled="true" v-model="applyCompanyInfo.assetName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="SN编号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.snNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="规格型号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.specType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="出厂时间">
                            <el-input :disabled="true" v-model="applyCompanyInfo.factoryTime"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="免维保截至时间">
                            <el-input :disabled="true" v-model="applyCompanyInfo.faxFreeTime"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form label-width="122px" style="margin-top:0;">
                    <el-col :span="24">
                        <el-form-item label="主要性能说明">
                            <el-input type="textarea" :disabled="true" v-model="applyCompanyInfo.configInstr"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form label-width="122px" :inline="true">
                    <el-col :span="24" class="item-title">使用信息</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="使用类别">
                            <el-input :disabled="true" v-model="applyCompanyInfo.applyType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="使用数量">
                            <el-input :disabled="true" v-model="applyCompanyInfo.applyNum"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="发生时间">
                            <el-input :disabled="true" v-model="applyCompanyInfo.applyTime"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="状态">
                            <el-input placeholder="请选择状态" :disabled="true" v-model="applyCompanyInfo.applyStatus">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form label-width="122px" style="margin-top:0;">
                    <el-col :span="24">
                        <el-form-item label="说明">
                            <el-input type="textarea" :disabled="true" v-model="applyCompanyInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form label-width="122px" :inline="true" style="margin-top:0;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="最新更新人">
                            <el-input :disabled="true" v-model="applyCompanyInfo.updatedBy"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="最新更新时间">
                            <el-input :disabled="true" :value="applyCompanyInfo.updatedDate | formatDate"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from "../../../common/current_position.vue";
    import moment from "moment";
    import api from "../../../../common/api/api.js";
    let {
        queryAssetUseDetails
    } = api;
    export default {
        data() {
            return {
                applyCompanyInfo: {},
                custPostList: [],
                custClassList: []
            };
        },
        created() {
            let self = this;
            let applyNo = this.$route.query.applyNo;
            self.$axios
                .get(queryAssetUseDetails + applyNo)
                .then(res => {
                    self.applyCompanyInfo = res.data;
                    switch (self.applyCompanyInfo.assetType) {
                        case "01":
                            self.applyCompanyInfo.assetType = "办公用品";
                            break;
                        case "02":
                            self.applyCompanyInfo.assetType = "电脑";
                            break;
                        case "03":
                            self.applyCompanyInfo.assetType = "手机";
                            break;
                        case "04":
                            self.applyCompanyInfo.assetType = "后勤用品";
                            break;
                        case "05":
                            self.applyCompanyInfo.assetType = "数码相机";
                            break;
                    }
                    switch (self.applyCompanyInfo.applyType) {
                        case "01":
                            self.applyCompanyInfo.applyType = "发放领用";
                            break;
                        case "02":
                            self.applyCompanyInfo.applyType = "归还";
                            break;
                        case "03":
                            self.applyCompanyInfo.applyType = "出借";
                            break;
                        case "04":
                            self.applyCompanyInfo.applyType = "出售";
                            break;
                        case "05":
                            self.applyCompanyInfo.applyType = "盘余";
                            break;
                        case "06":
                            self.applyCompanyInfo.applyType = "盘亏";
                            break;
                    }
                    switch (self.applyCompanyInfo.applyStatus) {
                        case "01":
                            self.applyCompanyInfo.applyStatus = "未核销/未归还";
                            break;
                        case "02":
                            self.applyCompanyInfo.applyStatus = "已核销/已归还";
                            break;
                        case "03":
                            self.applyCompanyInfo.applyStatus = "不需要核销/不需要归还";
                            break;
                    }
                })
                .catch(e => {
                    console.log(e);
                });

            self.getCustPostList(); //查询岗位列表
            self.getCustClassList(); //查询职级列表
        },
        methods: {
            getCustPostList() {
                let self = this;
                self.$axios
                    .get("/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST")
                    .then(res => {
                        if (res.data.code === "S00000") {
                            self.custPostList = res.data.data;
                        }
                    })
                    .catch(err => {
                        console.log("error");
                    });
            },
            getCustClassList() {
                let self = this;
                self.$axios
                    .get("/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED")
                    .then(res => {
                        if (res.data.code === "S00000") {
                            self.custClassList = res.data.data;
                        }
                    })
                    .catch(err => {
                        console.log("error");
                    });
            }
        },
        filters: {
            formatDate(time) {
                return moment(time).format("YYYY-MM-DD hh:mm:ss");
            }
        },
        components: {
            current
        }
    };
</script>