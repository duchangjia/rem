<template>
    <div class="container-wrap">
        <current yiji="资产管理" erji="资产登记管理" sanji="资产信息查询" siji="资产新增">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">资产新增</span>
                <el-button type="primary" @click="handleSave('addAssetInfoRules')" class="toolBtn">保存</el-button>
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
                        <el-form-item label="工号" prop="userNo">
                            <el-input v-model="custInfo.userNo" placeholder="请选择员工编号">
                                <el-button slot="append" icon="search" @click="userNoSelect"></el-button>
                            </el-input>
                            <messageBox 
                                :title="boxTitle"
                                :tableOption.sync="tableOption"  
                                :inputFirstOption.sync="inputFirstOption" 
                                :inputSecOption.sync="inputSecOption"
                                :searchData.sync="searchData" 
                                :searchUrl="searchUrl"
                                :dialogVisible.sync="dialogVisible"
                                :pagination.sync="msgPagination"
                                @dialogConfirm="dialogConfirm"
                                ></messageBox>
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
                <el-form :inline="true" :model="addAssetInfo" :rules="assetInfoRules" ref="addAssetInfoRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :sm="24" :md="12">
                        <el-form-item label="采购订单号" prop="buyApplyNo">
                            <el-input v-model="addAssetInfo.buyApplyNo"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="购买单价" prop="buyUnitPrice">
                            <el-input v-model="addAssetInfo.buyUnitPrice"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="购买数量" prop="buyNum">
                            <el-input v-model="addAssetInfo.buyNum" :maxlength="10"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="购买金额" prop="buyAmount">
                            <el-input v-model="addAssetInfo.buyAmount"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="制造商" prop="mfrs">
                            <el-input v-model="addAssetInfo.mfrs"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="供应商" prop="supplier">
                            <el-input v-model="addAssetInfo.supplier"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
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
                    <el-col :sm="24" :md="12">
                        <el-form-item label="资产名称" prop="assetName">
                            <el-input v-model="addAssetInfo.assetName"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="SN编号" prop="snNo">
                            <el-input v-model="addAssetInfo.snNo"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="规格型号" prop="specType">
                            <el-input v-model="addAssetInfo.specType"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="出厂时间" prop="factoryTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addAssetInfo.factoryTime"  @change="pickFactoryTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="免维保截止时间" prop="faxfreeTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addAssetInfo.faxfreeTime"  @change="pickFaxfreeTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="折旧年限" prop="derpLimit">
                            <el-input v-model="addAssetInfo.derpLimit"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="附件">
                            <el-input v-model="addAssetInfo.attachm"></el-input>
                            <el-upload class="upload-demo" style="height:0;" ref="upload" name="files" action="/iem_hrm/EpAssetInf/addEpAssetInf" 
                                :headers="token"
                                :data="addAssetInfo"
                                :beforeUpload="beforeAvatarUpload" 
                                :on-change="handleFileUpload" 
                                :on-success="successUpload"
                                :auto-upload="false"
                                :show-file-list="false" >
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
import messageBox from "../../../common/messageBox-components.vue";
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
      token: {
        Authorization: `Bearer ` + localStorage.getItem("access_token")
      },

      dialogVisible: false,
      boxTitle: "",
      numType: "",
      tableOption: [],
      inputFirstOption: {},
      inputSecOption: {},
      msgPagination: {},
      searchData: {},
      searchUrl: "",
      saveUrl: "",

      custPostList: [],
      custClassList: [],
      assetInfoRules: {
        buyUnitPrice: [
          { required: true, message: "购买单价不能为空", trigger: "blur" },
          { pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        buyNum: [{ pattern: /^(0|([1-9][0-9]{0,10}))$/, message: "请输入正整数" }],
        buyAmount: [
          { required: true, message: "购买金额不能为空", trigger: "blur" },
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
    current,
    messageBox
  },
  created() {
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
  },
  methods: {
    userNoSelect() {
      //table
      this.tableOption = [
        {
          thName: "工号", //table 表头
          dataKey: "userNo" //table-col所绑定的prop值
        },
        {
          thName: "姓名", //table 表头
          dataKey: "custName" //table-col所绑定的prop值
        }
      ];
      //input 第一个搜索框的配置项
      (this.inputFirstOption = {
        labelName: "姓名", //label头
        placeholder: "请输入姓名" //input placeholder
      }),
        //input 第二个搜索框的配置项
        (this.inputSecOption = {
          labelName: "工号",
          placeholder: "请输入工号"
        }),
        //搜索所需传值
        (this.searchData = {
          custName: "",
          userNo: ""
        });
      //table分页所需传值
      this.msgPagination = {
        pageNum: 1,
        pageSize: 5,
        totalRows: 1
      };
      this.numType = 1; //点击确定后需要修改的对象 numType为changeNo方法所改变的type
      this.dialogVisible = true; //dialog打开
      this.searchUrl = "/iem_hrm/CustInfo/queryCustBasicInfList"; //查询接口
      this.saveUrl = "/iem_hrm/CustInfo/queryCustInfoByUserNo/"; //点击确定后根据号码查询用户信息借口 没有则为空
      this.boxTitle = "员工编号选择"; //dialog标题
    },
    dialogConfirm(ajaxInfo) {
      const self = this;
      let userNo = ajaxInfo.stateNo;
      self.$axios
        .get(self.saveUrl + userNo)
        .then(res => {
          if (res.data.code == "S00000") {
            self.dialogVisible = false;
            self.custInfo = res.data.data;
            console.log("custInfo:", self.custInfo);
            self.addAssetInfo.applyUserNo = self.custInfo.userNo;
            self.addAssetInfo.organNo = self.custInfo.organNo;
            self.addAssetInfo.derpNo = self.custInfo.derpNo;
          }
        })
        .catch(e => {
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
      this.addAssetInfo.factoryTime = val;
    },
    pickFaxfreeTime(val) {
      this.addAssetInfo.faxfreeTime = val;
    },
    // 文件上传
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
      }
      return isLt2M; //extension || extension2 || extension3 || extension4 &&
    },
    handleFileUpload(file, fileList) {
      this.addAssetInfo.attachm = file.name;
    },
    successUpload(res, file, fileList) {
      // 文件成功上传
      console.log("upload_response", res);
      if (res.code == "S00000") {
        this.$message({ type: "success", message: "操作成功!" });
        this.$router.push("/query_asset");
      } else this.$message.error(res.retMsg);
    },

    handleSave(addAssetInfoRules) {
      this.$refs[addAssetInfoRules].validate(valid => {
        if (valid) {
          console.log("newAssetInfo", this.addAssetInfo);
          if (this.addAssetInfo.attachm != "") {
            this.$refs.upload.submit(); // 触发上传文件
          } else {
            this.$axios
              .post("/iem_hrm/EpAssetInf/addEpAssetInf", this.addAssetInfo)
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
          }
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
.add_assetinfo {
  padding: 0 0 20px 20px;
}
</style>
