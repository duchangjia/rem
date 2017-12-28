<template>
    <div class="container-wrap">
        <current yiji="参数管理" erji="业务参数" sanji="公司开票信息维护" siji="开票信息新增"></current>
            <div class="content-wrapper">
                <div class="titlebar">
                  <span class="title-text">开票信息新增</span>
                  <el-button type="primary" @click="save()" class="toolBtn">保存</el-button>
                </div>
                <div class="add-wrapper">
                    <el-form :inline="true" label-width="110px" :rules="rules" :model="custInfo" ref="info">
                        <!-- <el-col :sm="24" :md="12">
                            <el-form-item label="公司" prop="organName">
                                <el-select v-model="custInfo.organName" @change="changeCompany">
                                    <el-option
                                      v-for="item in companyName"
                                      :key="item.organNo"
                                      :label="item.organName"
                                      :value="item.organName">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col> -->
                        <el-col :sm="24" :md="12">
                            <el-form-item label="合同主体" prop="pactSubject">
                                 <el-select v-model="custInfo.pactSubject" >
                                    <el-option
                                      v-for="item in contactList"
                                      :label="item.paraShowMsg"
                                      :value="item.paraValue">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <!-- <el-col :sm="24" :md="12">
                            <el-form-item label="机构号" prop="organNo">
                                 <el-input v-model="custInfo.organNo" placeholder="请输入机构号" readonly="readonly"></el-input>
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
        console.log(ret.test(value),'验证值')
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
        pactSubject:""
      },
      rules: {
        organName: [{ required: true, message: "请选择公司名称", trigger: "change" }],
        organNo: [{ required: true, message: "请输入机构号", trigger: "blur" }],
        organTaxNo: [{ required: true, message: "请输入纳税人编号", trigger: "blur" }],
        organTel:[{validator:checkTel,trigger: 'blur'}],
        pactSubject:[{ required: true, message: "请选择合同主体", trigger: "change" }]
      },
      companyName: [],
      contactList:[]
    };
  },
  mounted() {
    //拉取公司名称
    let self = this;
    self.getContact()//获取合同实体
    self.$axios.get("/iem_hrm/organ/queryAllCompany").then(res => {
      let result = res.data.data;
      self.companyName = result;
    });
  },
  methods: {
    changeCompany(value) {
      let self = this,
        companyArray = this.companyName;
      for (let i = 0; i < companyArray.length; i++) {
        if (companyArray[i].organName == value) {
          self.custInfo.organNo = companyArray[i].organNo;
        }
      }
    },
    getContact(){
      let self = this,
         params = {paraCode:'PACT_SUBJECT'}
      self.$axios.get("/iem_hrm/sysParamMgmt/queryPubAppParams",{params:params}).then(res => {
        let result = res.data.data;
        console.log('合同实体',result)
        self.contactList = result;

      });
    },
    save() {
      let self = this;
      self.$refs.info.validate(valid => {
        if(valid){
          self.$axios
          .post("/iem_hrm/organBillInfo/addBillInf", self.custInfo)
          .then(res => {
            let result = res.data;
            if(result.code = 'S00000'){
              self.$message({
                message:result.retMsg,
                type: "success"
              })
            }else{
              self.$message({
                message:result.retMsg,
                type: "error"
              })
            }
          })
          .catch(e=>{
            self.$message({
              message: e.retMsg,
              type: "error"
            });
          });
        }
      })
      
    }
  },
  components: {
    current
  }
};
</script>
