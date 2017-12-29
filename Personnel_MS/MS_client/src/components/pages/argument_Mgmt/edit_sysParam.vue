<template>
    <div class="container-wrap">
        <current yiji="参数管理" erji="系统参数" sanji="系统参数修改" ></current>
        <div class="content-wrapper">
          <div class="titlebar">
            <span class="title-text">系统参数修改</span>
            <el-button type="primary" @click="save()" class="toolBtn">保存</el-button>
          </div>
          <div class="add-wrapper">
              <el-form :inline="true" label-width="122px" :rules="rules" :model="custInfo" ref="info">
                  <el-col :sm="24" :md="12">
                      <el-form-item label="参数代码" prop="paraCode">
                            <el-input v-model="custInfo.paraCode" disabled="disabled"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="参数名称" prop="paraName"  >
                          <el-input v-model="custInfo.paraName">
                              
                          </el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="参数值" prop="paraValue">
                            <el-input v-model="custInfo.paraValue" disabled="disabled"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="显示信息" prop="paraShowMsg">
                            <el-input v-model="custInfo.paraShowMsg"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                    <el-form-item label="语种" prop="paraLang">
                        <el-select  v-model="custInfo.paraLang" disabled="disabled">
                        <el-option v-for="item in languageList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                      </el-select>
                      </el-form-item>
                  </el-col> 
                  <el-col :sm="24" :md="12">
                      <el-form-item label="参数类型" prop="paraClass">
                          <el-select  v-model="custInfo.paraClass">
                            <el-option label="系统参数" value="1"></el-option>
                            <el-option label="业务参数" value="2"></el-option>
                          </el-select>
                      </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="12">
                      <el-form-item label="状态">
                        <el-select  v-model="custInfo.status">
                          <el-option label="启用" value="1"></el-option>
                          <el-option label="关闭" value="0"></el-option>
                        </el-select>
                      </el-form-item>
                  </el-col>
              </el-form>
              <el-form :model="custInfo" :rules="rules" ref="info" :label-position="labelPosition" label-width="122px" style="margin-top:0;overflow:visible;">                
                <el-col :span="24">
                  <el-form-item label="参数描述" prop="paraDesc">
                        <el-input type="textarea" v-model="custInfo.paraDesc"></el-input>
                      </el-form-item>
                </el-col>        
              </el-form>	 
          </div>
      </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
const baseURL = 'iem_hrm'
export default {
  data() {
    return {
			labelPosition: "right",
      custInfo: {},
      sysParam: {
        paraName: "",
        paraValue: "",
        paraShowMsg: "",
        paraClass: "",
        status: "",
        paraDesc: "",
        organAddr: "",
        isDelete: ""
      },
      
			languageList: [],
      rules: {
        paraClass: [

        ],
        paraDesc: [

        ]
      },
      companyName: [],
      isDelete: false
    };
  },
  mounted() {
    let self = this;
    self.getList();
    self.queryLeaveTypeList();
  },
  methods: {
    getList() {
      let self = this,
        paraValue = sessionStorage.getItem("paramInfo_paraValue"),
        paraCode = sessionStorage.getItem("paramInfo_paraCode"),
        paraLang = sessionStorage.getItem("paramInfo_paraLang");; 
      self.$axios
        .get("/iem_hrm/sysParamMgmt/getSysParMgmtByCV/" + paraCode + '/' + paraValue + '/' + paraLang)
        .then(res => {
          console.log('paramDel',res);
          self.custInfo = res.data;
          
        })
        .catch(e => {
          console.log(e);
        });
    },
    save() {
      let self = this;
      self.$refs.info.validate(valid => {
        if (valid) {
          let params = {
            paraName: self.custInfo.paraName,
            paraCode: self.custInfo.paraCode,
						paraValue: self.custInfo.paraValue,
						paraShowMsg: self.custInfo.paraShowMsg,
						paraClass: self.custInfo.paraClass,
						paraDesc: self.custInfo.paraDesc,
						paraLang: self.custInfo.paraLang,
						status: self.custInfo.status
          }
          console.log('params', params)
          self.$axios.put("/iem_hrm/sysParamMgmt/modSysParMgmtInfo", params)
            .then(res => {
              let result = res.data;
              if ((result.code = "S00000")) {
                self.$message({ message: result.retMsg, type: "success" });
                self.$router.push('/argument_1');
              } else {
                self.$message({ message: result.retMsg, type: "error" });
              }
            })
            .catch(e => {
              console.log(e)
            });
        }
      });
    },
    queryLeaveTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=LANGUAGE')
				.then((res) => {
					console.log('sysParamMgmt',res);
					if(res.data.code === "S00000") {
						self.languageList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
  },
  components: {
    current
  }
};
</script>

