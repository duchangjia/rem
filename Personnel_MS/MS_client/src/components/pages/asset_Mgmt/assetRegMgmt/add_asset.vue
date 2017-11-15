<template>
    <div class="add_assetinfo">
        <current yiji="资产管理" erji="资产登记管理" sanji="资产信息查询" siji="资产新增">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">资产新增</span>
                <el-button type="primary" @click="handleSave('addAssetInfoRules')" class="toolBtn">保存</el-button>
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
                        <el-form-item label="工号" prop="userNo">
                            <el-input v-model="custInfo.userNo" @change="userNoChange">
                                <el-button slot="append" icon="search" @click="searchUserNo"></el-button>
                            </el-input>
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
                <el-form :inline="true" :model="addAssetInfo" :rules="rules" ref="addAssetInfoRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="12">
                        <el-form-item label="采购订单号" prop="buyApplyNo">
                            <el-input v-model="addAssetInfo.buyApplyNo"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="购买单价" prop="buyUnitPrice">
                            <el-input v-model="addAssetInfo.buyUnitPrice"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="购买数量" prop="buyNum">
                            <el-input v-model="addAssetInfo.buyNum"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="购买金额" prop="buyAmount">
                            <el-input v-model="addAssetInfo.buyAmount"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="制造商" prop="mfrs">
                            <el-input v-model="addAssetInfo.mfrs"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="供应商" prop="supplier">
                            <el-input v-model="addAssetInfo.supplier"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="资产类别">
                          <el-select v-model="addAssetInfo.assetType">
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
                            <el-input v-model="addAssetInfo.assetName"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="SN编号" prop="snNo">
                            <el-input v-model="addAssetInfo.snNo"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="规格型号" prop="specType">
                            <el-input v-model="addAssetInfo.specType"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="出厂时间" prop="factoryTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addAssetInfo.factoryTime"  @change="pickFactoryTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="免维保截止时间" prop="faxfreeTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addAssetInfo.faxfreeTime"  @change="pickFaxfreeTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="折旧年限" prop="derpLimit">
                            <el-input v-model="addAssetInfo.derpLimit" placeholder="月数，如：18"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="附件">
                            <el-input v-model="addAssetInfo.attachm"></el-input>
                            <el-upload class="upload-demo" :on-change="handleFileUpload" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
                                <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="主要性能说明" prop="remark">
                            <el-input type="textarea" v-model="addAssetInfo.remark" placeholder="配置说明"></el-input>
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
      custInfo: {},
      addAssetInfo: {
        buyApplyNo: "",
        assetName: "",
        assetType: "",
        buyUnitPrice: "",
        buyNum: "",
        buyAmount: "",
        mfrs: "",
        supplier: "",
        snNo: "",
        specType: "",
        organNo: "",
        derpNo: "",
        applyUserNo: "",
        factoryTime: "",
        faxfreeTime: "",
        derpLimit: "",
        attachm: "",
        remark: ""
      },
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
  created() {},
  methods: {
    getCustInfo() {
      const self = this;
      let userNo = self.custInfo.applyUserNo;
    //   self.$axios
    //     .get("/iem_hrm/CustInfo/queryCustInfoByUserNo/" + userNo)
    //     .then(res => {
    //       console.log(res);
    //       self.custInfo = res.data.data;
    //     })
    //     .catch(() => {
    //       console.log("error");
    //     });
      self.custInfo = {
        userNo: "P0000117",
        custName: "zhaoqi",
        organNo: "1001",
        organName: "魔方南山分公司",
        derpNo: "100101",
        derpName: "魔方南山分公司技术部门",
        custPost: "软件工程师",
        custClass: "B2"
      };
    },
    searchUserNo() {
      const self = this;
      self.custInfo.userNo = "P0000117"; // 查询工号，应从接口查出
      self.getCustInfo(); //查询用户信息
      self.addAssetInfo.applyUserNo = self.custInfo.userNo;
      self.addAssetInfo.organNo = self.custInfo.organNo;
      self.addAssetInfo.derpNo = self.custInfo.derpNo;
    },
    userNoChange(val) {
      this.getCustInfo(); //查询用户信息
    },
    pickFactoryTime(val) {
      this.addAssetInfo.factoryTime = val;
    },
    pickFaxfreeTime(val) {
      this.addAssetInfo.faxfreeTime = val;
    },
    handleFileUpload(file, fileList) {
      console.log(file);
      this.addAssetInfo.attachm = file.name;
    },
    handleSave(addAssetInfoRules) {
      this.$refs[addAssetInfoRules].validate(valid => {
        if (valid) {
          let newAssetInfo = this.addAssetInfo;
          console.log(newAssetInfo);
          this.$axios
            .post("/iem_hrm/EpAssetInf/addEpAssetInf", newAssetInfo)
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
.add_assetinfo {
  padding: 0 0 20px 20px;
}
</style>
