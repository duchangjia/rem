<template>
    <div class="detail_assetinfo">
        <current yiji="资产管理" erji="资产登记管理" sanji="资产信息查询" siji="资产详情">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">资产详情</span>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="custInfo" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="公司名称">
                            <el-input v-model="custInfo.organName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="申请部门名称">
                            <el-input v-model="custInfo.derpName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="工号">
                            <el-input v-model="custInfo.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="姓名">
                            <el-input v-model="custInfo.custName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职务">
                            <el-input v-model="custInfo.custPost" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职级">
                            <el-input v-model="custInfo.custClass" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">采购信息</el-col>
                <el-form :inline="true" :model="assetInfoDetail" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="12">
                        <el-form-item label="采购订单号" prop="buyApplyNo">
                            <el-input v-model="assetInfoDetail.buyApplyNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="购买单价" prop="buyUnitPrice">
                            <el-input v-model="assetInfoDetail.buyUnitPrice" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="购买数量" prop="buyNum">
                            <el-input v-model="assetInfoDetail.buyNum" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="购买金额" prop="buyAmount">
                            <el-input v-model="assetInfoDetail.buyAmount" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="制造商" prop="mfrs">
                            <el-input v-model="assetInfoDetail.mfrs" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="供应商" prop="supplier">
                            <el-input v-model="assetInfoDetail.supplier" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="资产类别">
                          <el-input v-model="_assetType" :disabled="true"></el-input>
                      </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="资产名称" prop="assetName">
                            <el-input v-model="assetInfoDetail.assetName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="SN编号" prop="snNo">
                            <el-input v-model="assetInfoDetail.snNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="规格型号" prop="specType">
                            <el-input v-model="assetInfoDetail.specType" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="出厂时间" prop="factoryTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="assetInfoDetail.factoryTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="免维保截止时间" prop="faxfreeTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="assetInfoDetail.faxfreeTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="折旧年限" prop="derpLimit">
                            <el-input v-model="assetInfoDetail.derpLimit" placeholder="月数，如：18" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="附件" prop="attachm" style="width:100%;">
					                  <el-button class="downloadBtn" @click="downloadFile">下载</el-button>
				  	            </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="主要性能说明" prop="remark">
                            <el-input type="textarea" v-model="assetInfoDetail.remark" placeholder="配置说明" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>

        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
export default {
  data() {
    return {
      labelPosition: "right",
      assetNo: "",
      applyUserNo: "",
      custInfo: {},
      assetInfoDetail: {}
    };
  },
  components: {
    current
  },
  created() {
    this.assetNo = this.$route.params.assetNo;
    this.applyUserNo = this.$route.params.applyUserNo;
    this.getAssetInfoDetail(); //查询调薪基数信息
    this.getCustInfo(); //初始查询用户信息
  },
  computed: {
    _assetType: {
      set: function(val) {
        this.assetInfoDetail.assetType = val;
      },
      get: function() {
        if (this.assetInfoDetail.assetType == "01") {
          return "办公用品";
        } else if (this.assetInfoDetail.assetType == "02") {
          return "电脑";
        } else if (this.assetInfoDetail.assetType == "03") {
          return "手机";
        } else if (this.assetInfoDetail.assetType == "04") {
          return "后勤用品";
        } else if (this.assetInfoDetail.assetType == "05") {
          return "数码相机";
        } else {
          return "";
        }
      }
    }
  },
  methods: {
    getCustInfo() {
      const self = this;
      let userNo = self.applyUserNo;
      self.$axios
        .get("/iem_hrm/CustInfo/queryCustInfoByUserNo/" + userNo)
        .then(res => {
          self.custInfo = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    getAssetInfoDetail() {
      const self = this;
      let assetNo = self.assetNo;
      self.$axios
        .get("/iem_hrm/EpAssetInf/queryEpAssetInf/" + assetNo)
        .then(res => {
          self.assetInfoDetail = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    downloadFile() {}
  }
};
</script>

<style>
.detail_assetinfo {
  padding: 0 0 20px 20px;
}
</style>
