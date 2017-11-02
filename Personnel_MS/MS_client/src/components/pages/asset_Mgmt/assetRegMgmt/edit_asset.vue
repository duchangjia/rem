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
                <el-form :inline="true" :model="assetInfoDetail" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="公司名称" prop="organNo">
                            <el-select v-model="assetInfoDetail.organNo">
                                <el-option label="总公司" value="001"></el-option>
                                <el-option label="深圳分公司" value="002"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="申请部门名称" prop="derpNo">
                            <el-select v-model="assetInfoDetail.derpNo">
                                <el-option label="技术部" value="001"></el-option>
                                <el-option label="财务部" value="002"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="工号" prop="applyUserNo">
                            <el-input v-model="assetInfoDetail.applyUserNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="姓名" prop="custName">
                            <el-input v-model="assetInfoDetail.custName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职务" prop="custPost">
                            <el-input v-model="assetInfoDetail.custPost"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职级" prop="custClass">
                            <el-input v-model="assetInfoDetail.custClass"></el-input>
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
                              <el-option label="全部" value="01"></el-option>
                              <el-option label="办公用品" value="02"></el-option>
                              <el-option label="电脑" value="03"></el-option>
                              <el-option label="手机" value="04"></el-option>
                              <el-option label="后勤用品" value="05"></el-option>
                              <el-option label="数码相机" value="06"></el-option>
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
                            <el-date-picker type="date" placeholder="选择日期" v-model="assetInfoDetail.factoryTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="免维保截止时间" prop="faxfreeTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="assetInfoDetail.faxfreeTime" style="width: 100%;"></el-date-picker>
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
      assetInfoDetail: {},
      rules: {
        buyUnitPrice: [{ required: true, message: "购买单价不能为空", trigger: "blur" }],
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
    this.getAssetInfoDetail(); //查询调薪基数信息
  },
  methods: {
    getAssetInfoDetail() {
      const self = this;
      let assetNo = self.assetNo;
      self.$axios
        .get("/iem_hrm/EpAssetInf/queryEpAssetInf/" + assetNo)
        // .get("/iem_hrm/queryEpAssetInf/")
        .then(res => {
          self.assetInfoDetail = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    handleFileUpload(file, fileList) {
      console.log(file);
      this.assetInfoDetail.attachm = file.name;
    },
    handleSave(editAssetInfoRules) {
      this.$refs[editAssetInfoRules].validate(valid => {
        if (valid) {
          let editAssetInfo = {};
          editAssetInfo.assetNo = this.assetInfoDetail.assetNo;
          editAssetInfo.organNo = this.assetInfoDetail.organNo;
          editAssetInfo.derpNo = this.assetInfoDetail.derpNo;
          editAssetInfo.applyUserNo = this.assetInfoDetail.applyUserNo;
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
          editAssetInfo.derpLimit = this.assetInfoDetail.derpLimit;  
          editAssetInfo.specType = this.assetInfoDetail.specType;
          editAssetInfo.factoryTime = this.assetInfoDetail.factoryTime; 
          editAssetInfo.remark = this.assetInfoDetail.remark;              
          console.log(editAssetInfo);
          this.$axios
            .put("/iem_hrm/EpAssetInf/updateEpAssetInf", editAssetInfo)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "资产修改成功!" });
                this.$router.push("/query_asset");
              }
              else this.$message.error("资产修改失败！");
            })
            .catch(() => {
              this.$message.error("资产修改失败！");
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
