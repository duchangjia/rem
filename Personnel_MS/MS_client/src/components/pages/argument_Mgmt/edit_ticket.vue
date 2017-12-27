<template>
    <div class="container-wrap">
        <current yiji="参数管理" erji="业务参数" sanji="公司开票信息维护" siji="开票信息新增"></current>
        <div class="content-wrapper">
          <div class="titlebar"><span class="title-text">开票信息修改</span><el-button type="primary" @click="save()" class="toolBtn">保存</el-button></div>
          <div class="add-wrapper">
              <el-form :inline="true" label-width="110px" :rules="rules" :model="custInfo" ref="info">
                  <el-col :sm="24" :md="12">
                      <el-form-item label="公司" prop="organName"  >
                          <el-input v-model="custInfo.organName" disabled="disabled">
                              
                          </el-input>
                      </el-form-item>
                  </el-col>
                  <!-- <el-col :sm="24" :md="12">
                      <el-form-item label="机构号" prop="organNo">
                            <el-input v-model="custInfo.organNo" placeholder="请输入机构号" disabled="disabled"></el-input>
                      </el-form-item>
                  </el-col> -->
                  <el-col :sm="24" :md="12">
                      <el-form-item label="纳税人编号" prop="organTaxNo">
                            <el-input v-model="custInfo.organTaxNo" placeholder="请输入纳税人编号"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="电话" prop="organTel">
                            <el-input v-model="custInfo.organTel" placeholder="请输入电话"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="账号" prop="organAcct">
                            <el-input v-model="custInfo.organAcct" placeholder="请输入账号"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="账户名称" prop="organAcctname">
                            <el-input v-model="custInfo.organAcctname"  placeholder="请输入账户名称"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="地址" prop="organAddr">
                            <el-input v-model="custInfo.organAddr"  placeholder="请输入地址"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="生效状态">
                            <el-switch
                                v-model="isDelete"
                                on-color="#ff9900"
                                off-color="#C0CCDA"
                                >
                            </el-switch>
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
        let ret  = /^\d+(-)?\d+((-)?\d+)?$/
        if(!ret.test(value)&&value!==''){
           return  callback('请输入正确的手机号码');
        }else{
            callback()
        }
    }
    return {
      custInfo: {
        organName: "",
        organNo: "",
        organTaxNo: "",
        organTel:"",        
        organAcct: "",
        organAcctname: "",
        organAddr: "",
        isDelete:''
      },
      rules: {
        organName: [{ required: true, message: "请选择公司名称", trigger: "change" }],
        organNo: [{ required: true, message: "请输入机构号", trigger: "blur" }],
        organTaxNo: [{ required: true, message: "请输入纳税人编号", trigger: "blur" }],
        organTel:[{validator:checkTel,trigger: 'blur'}]
      },
      companyName: [],
      isDelete:false
    };
  },
  mounted() {
    let self = this;
    self.getList();
  },
  methods: {
    getList(){
      let self = this,
          organNo = localStorage.getItem('ticketOrganNo');
      console.log(organNo);
      self.$axios
        .get(
          "/iem_hrm/organBillInfo/queryBillInfDtl/" +organNo
        )
        .then(res => {
          self.custInfo = res.data.data
          
          if(self.custInfo.isDelete == '01'){
            self.isDelete = true
          }else{
            self.isDelete = false
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
      if(self.isDelete == false){
        self.custInfo.isDelete = '02'
      }else{
        self.custInfo.isDelete = '01'
      }

      self.$refs.info.validate((valid) => {
        let custInfo = self.custInfo;
        delete custInfo.createdBy
        delete custInfo.createdDate
        delete custInfo.updatedBy
        delete custInfo.updatedDate
          console.log(custInfo,'传入的对象');
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

