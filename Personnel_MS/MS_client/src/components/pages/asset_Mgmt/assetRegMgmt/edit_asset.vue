<template>
    <div class="edit_assetinfo">
        <current yiji="资产管理" erji="资产登记管理" sanji="资产信息查询" siji="资产修改">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">资产修改</span>
                <el-button type="primary" @click="handleSave('editAssetInfoRules')" class="toolBtn">保存</el-button>
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
                <el-form :inline="true" :model="assetInfoDetail" :rules="rules" ref="editAssetInfoRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="12">
                        <el-form-item label="采购订单号" prop="buyApplyNo">
                            <el-input v-model="assetInfoDetail.buyApplyNo"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="购买单价" prop="buyUnitPrice">
                            <el-input v-model="assetInfoDetail.buyUnitPrice"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="购买数量" prop="buyNum">
                            <el-input v-model="assetInfoDetail.buyNum"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="购买金额" prop="buyAmount">
                            <el-input v-model="assetInfoDetail.buyAmount"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="制造商" prop="mfrs">
                            <el-input v-model="assetInfoDetail.mfrs"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="供应商" prop="supplier">
                            <el-input v-model="assetInfoDetail.supplier"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="资产类别">
                          <el-select v-model="assetInfoDetail.assetType">
                            <el-option label="办公用品" value="01"></el-option>
                            <el-option label="电脑" value="02"></el-option>
                            <el-option label="手机" value="03"></el-option>
                            <el-option label="后勤用品" value="04"></el-option>
                            <el-option label="数码相机" value="05"></el-option>
                          </el-select>
                      </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="资产名称" prop="assetName">
                            <el-input v-model="assetInfoDetail.assetName"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="SN编号" prop="snNo">
                            <el-input v-model="assetInfoDetail.snNo"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="规格型号" prop="specType">
                            <el-input v-model="assetInfoDetail.specType"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="出厂时间" prop="factoryTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="assetInfoDetail.factoryTime" @change="pickFactoryTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="免维保截止时间" prop="faxfreeTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="assetInfoDetail.faxfreeTime" @change="pickFaxfreeTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="折旧年限" prop="derpLimit">
                            <el-input v-model="assetInfoDetail.derpLimit" placeholder="月数，如：18"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="附件">
                            <el-input v-model="assetInfoDetail.attachm"></el-input>
                            <el-upload class="upload-demo" :on-change="handleFileUpload" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
                                <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="主要性能说明" prop="remark">
                            <el-input type="textarea" v-model="assetInfoDetail.remark" placeholder="配置说明"></el-input>
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
      assetInfoDetail: {},
      rules: {
        buyUnitPrice: [
          { required: true, message: "购买单价不能为空", trigger: "blur" }
        ],
        buyAmount: [{ required: true, message: "购买金额不能为空", trigger: "blur" }],
        assetName: [{ required: true, message: "资产名称不能为空", trigger: "blur" }],
        remark: [{ required: true, message: "主要性能说明不能为空", trigger: "blur" }]
      }
    };
  },
  components: {
    current
  },
  created() {
    this.assetNo = this.$route.params.assetNo;
    this.applyUserNo = this.$route.params.applyUserNo;
    this.getCustInfo(); //初始查询用户信息
    this.getAssetInfoDetail(); //查询资产信息详情
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
    pickFactoryTime(val) {
        this.assetInfoDetail.factoryTime = val;
    },
    pickFaxfreeTime(val) {
        this.assetInfoDetail.faxfreeTime = val;
    },
    handleFileUpload(file, fileList) {
      console.log(file);
      this.assetInfoDetail.attachm = file.name;
    },
    handleSave(editAssetInfoRules) {
      this.$refs[editAssetInfoRules].validate(valid => {
        if (valid) {
          let editAssetInfo = {};
          editAssetInfo.applyUserNo = this.custInfo.userNo;
          editAssetInfo.organNo = this.custInfo.organNo;
          editAssetInfo.derpNo = this.custInfo.derpNo;
          editAssetInfo.assetNo = this.assetInfoDetail.assetNo;
          editAssetInfo.buyApplyNo = this.assetInfoDetail.buyApplyNo;
          editAssetInfo.buyUnitPrice = this.assetInfoDetail.buyUnitPrice;
          editAssetInfo.buyNum = this.assetInfoDetail.buyNum;
          editAssetInfo.stockNum = this.assetInfoDetail.stockNum;
          editAssetInfo.buyAmount = this.assetInfoDetail.buyAmount;
          editAssetInfo.mfrs = this.assetInfoDetail.mfrs;
          editAssetInfo.supplier = this.assetInfoDetail.supplier;
          editAssetInfo.assetType = this.assetInfoDetail.assetType;
          editAssetInfo.assetName = this.assetInfoDetail.assetName;
          editAssetInfo.faxfreeTime = this.assetInfoDetail.faxfreeTime;
          editAssetInfo.snNo = this.assetInfoDetail.snNo;
          editAssetInfo.status = this.assetInfoDetail.status;
          editAssetInfo.derpLimit = this.assetInfoDetail.derpLimit;
          editAssetInfo.specType = this.assetInfoDetail.specType;
          editAssetInfo.factoryTime = this.assetInfoDetail.factoryTime;
          editAssetInfo.remark = this.assetInfoDetail.remark;
          console.log("editAssetInfo", editAssetInfo);
          this.$axios
            .put("/iem_hrm/EpAssetInf/updateEpAssetInf", editAssetInfo)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "操作成功!" });
                this.$router.push("/query_asset");
              } else this.$message.error("操作失败！");
            })
            .catch(() => {
              this.$message.error("操作失败！");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
.edit_assetinfo {
  padding: 0 0 20px 20px;
}
</style>
