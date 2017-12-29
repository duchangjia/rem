<template>
    <div class="container-wrap">
        <current yiji="参数管理" erji="系统参数" sanji="系统参数修改" ></current>
        <div class="content-wrapper">
          <div class="titlebar"><span class="title-text">系统参数修改</span><el-button type="primary" @click="save()" class="toolBtn">保存</el-button></div>
          <div class="add-wrapper">
              <el-form :inline="true" label-width="110px" :rules="rules" :model="custInfo" ref="info">
                  <el-col :sm="24" :md="12">
                      <el-form-item label="参数名称" prop="paraName"  >
                          <el-input v-model="custInfo.organName" disabled="disabled">
                              
                          </el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="参数代码" prop="paraCode">
                            <el-input v-model="custInfo.organNo" disabled="disabled"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="参数值" prop="paraValue">
                            <el-input v-model="custInfo.organTaxNo"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="参数显示信息" prop="paraShowMsg">
                            <el-input v-model="custInfo.organTel"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="参数类别" prop="paraClass">
                            <el-input v-model="custInfo.organAcct"></el-input>
                      </el-form-item>
                  </el-col>
                  <!-- <el-col :sm="24" :md="12">
                      <el-form-item label="账户名称" prop="organAcctname">
                            <el-input v-model="custInfo.organAcctname"  placeholder="请输入账户名称"></el-input>
                      </el-form-item>
                  </el-col> -->
                  <el-col :sm="24" :md="12">
                      <el-form-item label="参数描述" prop="paraDesc">
                        <el-input v-model="custInfo.organAddr"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="参数状态">
                        <el-select  v-model="custInfo.paraStatus">
                          <el-option label="启用" value="1"></el-option>
                          <el-option label="停用" value="2"></el-option>
                        </el-select>
                            <!-- <el-switch
                                v-model="paraStatus"
                                on-color="#ff9900"
                                off-color="#C0CCDA"
                                >
                            </el-switch> -->
                      </el-form-item>
                  </el-col>
              </el-form>
          </div>
      </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
export default {
  data() {
    let checkTel = (rule, value, callback) => {
      let ret = /^\d+(-)?\d+((-)?\d+)?$/;
      if (!ret.test(value) && value !== "") {
        return callback("请输入正确的手机号码");
      } else {
        callback();
      }
    };
    return {
      custInfo: {},
      sysParam: {
        paraName: "",
        paraValue: "",
        paraShowMsg: "",
        paraClass: "",
        paraStatus: "",
        paraDesc: "",
        organAddr: "",
        isDelete: ""
      },
      rules: {
        organName: [{ required: true, message: "请选择公司名称", trigger: "change" }],
        organNo: [{ required: true, message: "请输入机构号", trigger: "blur" }],
        organTaxNo: [{ required: true, message: "请输入纳税人编号", trigger: "blur" }],
        organTel: [{ validator: checkTel, trigger: "blur" }]
      },
      companyName: [],
      isDelete: false
    };
  },
  mounted() {
    let self = this;
    self.getList();
  },
  methods: {
    getList() {
      let self = this,
        organNo = localStorage.getItem("ticketOrganNo");
      console.log(organNo);
      self.$axios
        .get("/iem_hrm/organBillInfo/queryBillInfDtl/" + organNo)
        .then(res => {
          self.custInfo = res.data.data;

          if (self.custInfo.isDelete == "01") {
            self.isDelete = true;
          } else {
            self.isDelete = false;
          }
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    save() {
      console.log(this.info);
      let self = this;
      if (self.isDelete == false) {
        self.custInfo.isDelete = "02";
      } else {
        self.custInfo.isDelete = "01";
      }

      self.$refs.info.validate(valid => {
        let custInfo = self.custInfo;
        delete custInfo.createdBy;
        delete custInfo.createdDate;
        delete custInfo.updatedBy;
        delete custInfo.updatedDate;
        console.log(custInfo, "传入的对象");
        if (valid) {
          self.$axios
            .put("/iem_hrm/organBillInfo/modBillInf", custInfo)
            .then(res => {
              let result = res.data;
              if ((result.code = "S00000")) {
                self.$message({
                  message: result.retMsg,
                  type: "success"
                });
              } else {
                self.$message({
                  message: result.retMsg,
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
  },
  components: {
    current
  }
};
</script>

