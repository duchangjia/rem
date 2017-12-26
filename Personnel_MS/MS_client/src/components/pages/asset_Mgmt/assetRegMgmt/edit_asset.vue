<template>
    <div class="container-wrap">
        <current yiji="资产管理" erji="资产登记管理" sanji="资产信息查询" siji="资产修改">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">资产修改</span>
                <el-button type="primary" @click="handleSave('editAssetInfoRules')" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="custInfo" :label-position="labelPosition" label-width="110px">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公司名称">
                            <el-input v-model="custInfo.organName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="申请部门名称">
                            <el-input v-model="custInfo.derpName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工号">
                            <el-input v-model="custInfo.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="姓名">
                            <el-input v-model="custInfo.custName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职务">
                            <el-select v-model="custInfo.custPost" :disabled="true">
                              <el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职级">
                            <el-select v-model="custInfo.custClass" :disabled="true">
                              <el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">采购信息</el-col>
                <el-form :inline="true" :model="assetInfoDetail" :rules="assetInfoRules" ref="editAssetInfoRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :sm="24" :md="12">
                        <el-form-item label="采购订单号" prop="buyApplyNo">
                            <el-input v-model="assetInfoDetail.buyApplyNo"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="购买单价" prop="buyUnitPrice">
                            <el-input v-model="assetInfoDetail.buyUnitPrice"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="购买数量" prop="buyNum">
                            <el-input v-model="assetInfoDetail.buyNum" :maxlength="10"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="购买金额" prop="buyAmount">
                            <el-input v-model="assetInfoDetail.buyAmount"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="制造商" prop="mfrs">
                            <el-input v-model="assetInfoDetail.mfrs"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="供应商" prop="supplier">
                            <el-input v-model="assetInfoDetail.supplier"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
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
                    <el-col :sm="24" :md="12">
                        <el-form-item label="资产名称" prop="assetName">
                            <el-input v-model="assetInfoDetail.assetName"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="SN编号" prop="snNo">
                            <el-input v-model="assetInfoDetail.snNo"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="规格型号" prop="specType">
                            <el-input v-model="assetInfoDetail.specType"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="出厂时间" prop="factoryTime">
                            <el-date-picker type="date" placeholder="选择日期" :editable="false" v-model="assetInfoDetail.factoryTime" @change="pickFactoryTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="免维保截止时间" prop="faxfreeTime">
                            <el-date-picker type="date" placeholder="选择日期" :editable="false" v-model="assetInfoDetail.faxfreeTime" @change="pickFaxfreeTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="折旧年限" prop="derpLimit">
                            <el-input v-model="assetInfoDetail.derpLimit" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="附件">
                            <el-upload class="upload-demo" ref="upload" name="file" action="/iem_hrm/file/addFile" multiple
                                :on-remove="handleRemove"
                                :beforeUpload="beforeAvatarUpload" 
                                :on-change="handleFileUpload" 
                                :on-success="successUpload"
                                :limit="3"
                                :on-exceed="handleExceed"
                                :headers="token"
                                :file-list="fileList"
                                :show-file-list="true">
                                <el-button size="small" type="primary">选取文件</el-button>
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
    // let validateBuyNum = (rule, value, callback) => {
    //   if (value.match(/^([1-9]\d*|0)(\.\d{2})?$/) == null) {
    //     callback(new Error("可精确到小数点后2位的正数"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      labelPosition: "right",
      assetNo: "",
      applyUserNo: "",
      custInfo: {},
      custPostList: [],
      custClassList: [],
      assetInfoDetail: {},
      fileList: [],
      token: {
        Authorization: `Bearer ` + localStorage.getItem("access_token")
      },
      triRemoveFlag: true,
      assetInfoRules: {
        buyUnitPrice: [
          {
            required: true,
            message: "购买单价不能为空",
            trigger: "blur"
          },
          { pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        buyNum: [
          {
            required: true,
            message: "购买数量不能为空",
            trigger: "blur"
          },
          { pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        buyAmount: [
          {
            required: true,
            message: "购买金额不能为空",
            trigger: "blur"
          },
          { pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        assetName: [{ required: true, message: "资产名称不能为空", trigger: "blur" }],
        derpLimit: [
          { pattern: /^(0|([1-9][0-9]{0,63}))$/, message: "月数，如：18" }
        ],
        remark: [{ required: true, message: "主要性能说明不能为空", trigger: "blur" }]
      }
    };
  },
  components: {
    current
  },
  created() {
    this.assetNo = sessionStorage.getItem("assetInfo_assetNo");
    this.applyUserNo = sessionStorage.getItem("assetInfo_applyUserNo");
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
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
          console.log("assetInfoDetail", self.assetInfoDetail);
          if (
            self.assetInfoDetail.epFileManageList &&
            self.assetInfoDetail.epFileManageList.length >= 1
          ) {
            self.assetInfoDetail.epFileManageList.forEach(function(ele) {
              self.fileList.push({
                name: ele.fileName + "." + ele.fileSuffix,
                url: ele.fileAddr,
                fileId: ele.fileId
              });
            }, this);
          }
        })
        .catch(() => {
          console.log("error");
        });
    },
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
    },
    pickFactoryTime(val) {
      this.assetInfoDetail.factoryTime = val;
    },
    pickFaxfreeTime(val) {
      this.assetInfoDetail.faxfreeTime = val;
    },
    // 附件上传
    beforeAvatarUpload(file) {
      // const extension = file.name.split('.')[1] === 'xls'
      // const extension2 = file.name.split('.')[1] === 'xlsx'
      // const extension3 = file.name.split('.')[1] === 'doc'
      // const extension4 = file.name.split('.')[1] === 'docx'
      // if (!extension && !extension2 && !extension3 && !extension4) {
      // 		console.log('上传文件只能是 xls、xlsx、doc、docx 格式!')
      // }

      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.$message({ message: "上传文件大小不能超过 10MB!", type: "error" });
        this.triRemoveFlag = false;
      } else {
        this.triRemoveFlag = true;
      }
      return isLt2M; //extension || extension2 || extension3 || extension4 &&
    },
    handleFileUpload(file, fileList) {
      this.fileList = fileList;
      console.log("选中的this.fileList:", this.fileList);
    },
    handleRemove(file, fileList) {
      if (this.triRemoveFlag) {
        console.log("移除的file", file);
        console.log("移除的fileList", fileList);
        let index = this.fileList.indexOf(file);
        fileList.splice(index, 0, file);
        this.$confirm("此操作将永久删除, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$axios
              .delete("/iem_hrm/file/deleteFile/" + file.fileId)
              .then(res => {
                let result = res.data.retMsg;
                if ("操作成功" == result) {
                  this.$message({
                    type: "success",
                    message: result
                  });
                  fileList.splice(index, 1);
                } else {
                  this.$message({
                    type: "error",
                    message: result
                  });
                }
              })
              .catch(e => {
                console.log(e);
                this.$message({
                  type: "error",
                  message: e.retMsg
                });
              });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    handleExceed(files, fileList) {
      // 文件超出数量
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length +
          fileList.length} 个文件`
      );
    },
    successUpload(res, file, fileList) {
      // 文件成功上传
      console.log("upload_res_fileList", fileList);
      if (res.code == "S00000") {
        file.fileId = res.data;
        this.$message({ type: "success", message: "文件上传成功!" });
      } else this.$message.error(res.retMsg);
    },
    handleSave(editAssetInfoRules) {
      this.$refs[editAssetInfoRules].validate(valid => {
        if (valid) {
          let fileIds = [];
          for (let k in this.fileList) {
            fileIds.push(this.fileList[k].fileId);
          }
          console.log("fileIds", fileIds);
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
          editAssetInfo.fileIds = fileIds;
          console.log("editAssetInfo", editAssetInfo);
          this.$axios
            .put("/iem_hrm/EpAssetInf/updateEpAssetInf", editAssetInfo)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "操作成功!" });
                this.$router.push("/query_asset");
              } else this.$message.error(res.data.retMsg);
            })
            .catch(() => {
              this.$message.error("操作失败！");
            });
        } else {
          console.log("error submit!!");
          this.$message({
            type: "error",
            message: "请确保必填信息填写正确!"
          });
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
