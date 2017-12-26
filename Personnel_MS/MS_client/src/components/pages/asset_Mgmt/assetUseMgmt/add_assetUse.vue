<template>
    <div class="container-wrap">
        <current yiji="资产管理" erji="资产使用管理" sanji="资产使用新增"></current>
            <div class="content-wrapper">
                <div class="titlebar">
                    <span class="title-text">资产使用新增</span>
                    <el-button type="primary" class="toolBtn btn-primary" @click="save">保存</el-button>
                </div>
                <div class="add-wrapper clearfix">
                    <el-form  :model="info" :rules="rules" :inline="true" ref="info1" label-width="130px"  label-position="right" >
                        <el-col :sm="24" :md="12" >
                            <el-form-item label="公司名称">
                                <el-input :disabled="true" v-model="applyUserInfo.organName">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12" >
                            <el-form-item label="申请部门名称">
                                <el-input :disabled="true" v-model="applyUserInfo.derpName">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12" >
                            <el-form-item label="CCC">
                                <el-input :disabled="true" v-model="applyUserInfo.ccc">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12" >
                            <el-form-item label="申请使用人工号" prop="applyUserNo">
                                <el-input readonly="readonly" v-model="info.applyUserNo" placeholder="请选择员工编号">
                                    <el-button slot="append" icon="search" @click="userNoSelect()"></el-button>
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
                                <el-input :disabled="true" v-model="applyUserInfo.custName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="手机号">
                                <el-input :disabled="true" v-model="applyUserInfo.mobileNo"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="岗位">
                                <el-select :disabled="true" v-model="applyUserInfo.custPost">
                                    <el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                         <el-col :sm="24" :md="12">
                            <el-form-item label="职级">
                                <el-select :disabled="true" v-model="applyUserInfo.custClass">
                                    <el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                                </el-select>
                            </el-form-item>
                         </el-col>
                    </el-form>
                    <el-col :span="24" class="item-title">资产信息</el-col>
                    <el-form label-width="130px" :model="info" :rules="rules" ref="info2" class="clearfix" :inline="true">
                        <el-col :sm="24" :md="12">
                            <el-form-item label="资产编号" prop="assetNo">
                                <el-input v-model="info.assetNo" placeholder="请选择资产编号" readonly="readonly">
                                    <el-button slot="append" icon="search"@click="assetNoSelect()"></el-button>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="购买单价">
                                <el-input :disabled="true" v-model="assetInfo.buyUnitPrice"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="当前库存数量">
                                <el-input :disabled="true" v-model="assetInfo.stockNum"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="购买金额">
                                <el-input :disabled="true" v-model="assetInfo.buyAmount"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="制造商">
                                <el-input :disabled="true" v-model="assetInfo.mfrs"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="供应商">
                                <el-input :disabled="true" v-model="assetInfo.supplier"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="资产类别">
                                <el-select placeholder="请选择资产类别" :disabled="true" v-model="assetInfo.assetType">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="资产名称">
                                <el-input :disabled="true" v-model="assetInfo.assetName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="SN编号">
                                <el-input :disabled="true" v-model="assetInfo.snNo"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="规格型号">
                                <el-input :disabled="true" v-model="assetInfo.specType" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="出厂时间">
                                <el-input :disabled="true" :value="assetInfo.factoryTime"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="免维保截至时间">
                                <el-input :disabled="true" :value="assetInfo.faxFreeTime"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="主要性能说明">
                                <el-input type="textarea" :disabled="true" v-model="assetInfo.configInstr"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form>
                    <el-col :span="24" class="item-title">使用信息</el-col>
                    <el-form label-width="130px" :model="applyInfo" :rules="rules" ref="info3" class="clearfix" :inline="true">
                        <el-col :sm="24" :md="12">
                            <el-form-item label="使用类别" prop="applyType">
                                <el-select placeholder="请选择使用类别" v-model="applyInfo.applyType">
                                    <el-option label="发放领用" value="01"></el-option>
                                    <el-option label="归还" value="02"></el-option>
                                    <el-option label="出借" value="03"></el-option>
                                    <el-option label="出售" value="04"></el-option>
                                    <el-option label="盘余" value="05"></el-option>
                                    <el-option label="盘亏" value="06"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="使用数量" prop="applyNum">
                                <el-input  v-model.number="applyInfo.applyNum"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="发生时间" prop="applyTime">
                                <!-- <el-input v-model="applyInfo.applyTime"></el-input> -->
                                <el-date-picker
                                    v-model="applyInfo.applyTime"
                                     :editable="false"
                                    type="date"
                                    placeholder="选择日期"
                                    @change="changeDate()"
                                    style="width:100%;"
                                    >
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="状态" prop="applyStatus">
                                <el-select placeholder="请选择状态" v-model="applyInfo.applyStatus">
                                    <el-option label="未核销/未归还" value="01"></el-option>
                                    <el-option label="已核销/已归还" value="02"></el-option>
                                    <el-option label="不需要核销/不需要归还" value="03"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="说明" prop="remark">
                                <el-input type="textarea" v-model="applyInfo.remark"></el-input>
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
import moment from "moment";
import api from "../../../../common/api/api.js";
let { addAssetUseINF } = api;
export default {
  data() {
    return {
      rules: {
        applyUserNo: [
          { required: true, message: "请选择申请使用人工号", trigger: "blur" }
        ],
        assetNo: [{ required: true, message: "请选择资产编号", trigger: "change" }],
        applyType: [{ required: true, message: "请选择使用类别", trigger: "change" }],
        applyNum: [
          {
            pattern: /^(0|([1-9][0-9]{0,10}))$/,
            message: "请输入正整数",
            trigger: "blur",
            required: true
          }
        ],
        applyTime: [{ required: true, message: "请输入发生时间", trigger: "blur" }],
        remark: [{ required: true, message: "请输入说明", trigger: "blur" }],
        applyStatus: [{ required: true, message: "请选择状态", trigger: "change" }]
      },
      info: {
        applyUserNo: "",
        assetNo: ""
      },
      tableOption: [],
      dialogVisible: false,
      inputFirstOption: {},
      inputSecOption: {},
      msgPagination: {},
      searchData: {},
      searchUrl: "",
      saveUrl: "",
      boxTitle: "",
      numType: "",
      applyUserInfo: {},
      assetInfo: {},
      applyInfo: {
        remark: "",
        applyStatus: "",
        applyTime: "",
        applyNum: "",
        applyType: ""
      },
      custPostList: [],
      custClassList: []
    };
  },
  created() {
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
  },
  methods: {
    dialogConfirm(ajaxNo) {
      let self = this;
      self.dialogVisible = false;
      self.$axios
        .get(self.saveUrl + ajaxNo.stateNo)
        .then(res => {
          if (res.data.code == "F00002") {
            self.$message({
              message: res.data.retMsg,
              type: "error"
            });
          } else {
            switch (self.numType) {
              case 1:
                self.applyUserInfo = res.data.data;
                self.info.applyUserNo = ajaxNo.stateNo;
                switch (self.applyUserInfo.ccc) {
                  case "01":
                    self.applyUserInfo.ccc = "管理CCC";
                    break;
                  case "02":
                    self.applyUserInfo.ccc = "售前CCC";
                    break;
                  case "03":
                    self.applyUserInfo.ccc = "项目CCC";
                    break;
                }
                break;
              case 2:
                self.assetInfo = res.data.data;
                self.info.assetNo = ajaxNo.stateNo;
                switch (self.assetInfo.assetType) {
                  case "01":
                    self.assetInfo.assetType = "办公用品";
                    break;
                  case "02":
                    self.assetInfo.assetType = "电脑";
                    break;
                  case "03":
                    self.assetInfo.assetType = "手机";
                    break;
                  case "04":
                    self.assetInfo.assetType = "后勤用品";
                    break;
                  case "05":
                    self.assetInfo.assetType = "数码相机";
                    break;
                }
                break;
            }
          }
        })
        .catch(e => {
          self.applyUserInfo = {};
          self.$message({
            message: e.retMsg,
            type: "error"
          });
        });
    },
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
        totalRows: 0
      };
      //点击确定后需要修改的对象 numType为changeNo方法所改变的type
      this.numType = 1;
      //dialog打开
      this.dialogVisible = true;
      //查询接口
      this.searchUrl = "/iem_hrm/CustInfo/queryCustBasicInfList";
      //点击确定后根据号码查询用户信息借口 没有则为空
      this.saveUrl = "/iem_hrm/assetUse/queryAssetUserByApplyUserNo/";
      //dialog标题
      this.boxTitle = "人工编号选择";
    },
    assetNoSelect() {
      //table
      this.tableOption = [
        {
          thName: "资产编号", //table 表头
          dataKey: "assetNo" //table-col所绑定的prop值
        },
        {
          thName: "资产名称", //table 表头
          dataKey: "assetName" //table-col所绑定的prop值
        }
      ];
      //input 第一个搜索框的配置项
      (this.inputFirstOption = {
        labelName: "资产名称", //label头
        placeholder: "请输入资产名称" //input placeholder
      }),
        //input 第二个搜索框的配置项
        (this.inputSecOption = {
          labelName: "资产编号",
          placeholder: "请输入资产编号"
        }),
        //搜索所需传值
        (this.searchData = {
          assetName: "hahha",
          assetNo: ""
        });
      //table分页所需传值
      this.msgPagination = {
        pageNum: 1,
        pageSize: 5,
        totalRows: 0
      };
      //点击确定后需要修改的对象 numType为changeNo方法所改变的type
      this.numType = 2;
      //dialog打开
      this.dialogVisible = true;
      //查询接口
      this.searchUrl = "/iem_hrm/assetUse/queryAssetNoList";
      //点击确定后根据号码查询用户信息借口 没有则为空
      this.saveUrl = "/iem_hrm/assetUse/queryAssetUserByAssetNo/";
      //dialog标题
      this.boxTitle = "资产编号选择";
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
    save() {
      let self = this;
      self.$refs.info1.validate(valid => {
        if (valid) {
          self.$refs.info2.validate(valid => {
            if (valid) {
              self.$refs.info3.validate(valid => {
                if (valid) {
                  let data = Object.assign(this.applyInfo, this.info);
                  self.$axios
                    .post(addAssetUseINF, data)
                    .then(res => {
                      let result = res.data.retMsg;
                      if ("操作成功" === result) {
                        self.$message({
                          message: result,
                          type: "success"
                        });
                      } else {
                        self.$message({
                          message: result,
                          type: "error"
                        });
                      }
                    })
                    .catch(e => {
                      self.$message({
                        message: e.retMsg,
                        type: "error"
                      });
                    });
                }
              });
            }
          });
        }
      });
    },

    changeDate() {
      let applyTime = moment(this.applyInfo.applyTime).format("YYYY-MM-DD");
      this.applyInfo.applyTime = applyTime.toString();
      console.log(applyTime);
    }
  },
  filters: {},
  components: {
    current,
    messageBox
  }
};
</script>

