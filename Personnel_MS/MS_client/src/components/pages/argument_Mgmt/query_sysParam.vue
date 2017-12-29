<template>
    <div class="container-wrap" id="pactMgmt">
        <current yiji="参数管理" erji="系统参数">
        </current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
              <span class="title-text">系统参数</span>
                <div class="titleBtn_wrapper">
                  <el-button type="primary" class="btn-primary" @click="addParam">新增</el-button>
                </div>
            </div>
            <div class="queryContent_inner">
              <el-form :inline="true" :model="filters" class="demo-ruleForm">
                <el-col :span="6">
                    <el-form-item label="参数代码">
                      <el-input v-model="filters.paraCode" placeholder="请输入参数代码"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="参数名称">
                        <!-- <el-select v-model="filters.pactType">
                            <el-option label="劳动合同" value="01"></el-option>
                            <el-option label="保密协议" value="02"></el-option>
                            <el-option label="其他" value="99"></el-option>
                        </el-select> -->
						<el-input v-model="filters.paraName" placeholder="参数名称"></el-input>
                  </el-form-item>
                </el-col>
				<el-col :span="6">
				  <el-form-item label="参数状态">
 					<el-select v-model="filters.paraStatus" >
                        <el-option label="开启" value="1"></el-option>
                        <el-option label="关闭" value="0"></el-option>
                        <!-- <el-option label="其他" value="99"></el-option> -->
                    </el-select> 
				   </el-form-item>
                </el-col>
                <el-col :span="6">
                  <div class="queryButton_wrapper">
                    <el-button @click="handleReset" class="btn-default">重置</el-button>
                    <el-button @click="getParamList" class="btn-primary">查询</el-button>
                  </div>
                </el-col>
			  </el-form>
              <el-table stripe :data="paramList" border>
                <el-table-column align="center"  prop="paraCode" label="参数代码">
                    <!-- <template scope="scope">
                        <span @click="handleParamDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.pactNo }}</span>
                    </template> -->
                </el-table-column>
                <el-table-column align="center" prop="paraName" label="参数名称">
                </el-table-column>
                <el-table-column align="center" prop="paraValue" label="参数值">
                </el-table-column>
                <el-table-column align="center" prop="paraShowMsg" label="显示信息">
                </el-table-column>
                <el-table-column align="center" prop="paraClass" label="参数类别">
                </el-table-column>
                <el-table-column align="center" prop="paraStatus" label="参数状态">
                </el-table-column>
                <el-table-column align="center" prop="paraDesc" label="参数描述">
                </el-table-column>
                <!-- <el-table-column align="center" prop="pactStatus" label="合同状态" :formatter="pactStatusFormatter">
                </el-table-column>
                <el-table-column align="center" prop="signTime" label="签订日期">
                </el-table-column>
                <el-table-column align="center" prop="pactStartTime" label="合同开始日期">
                </el-table-column>
                <el-table-column align="center" prop="pactEndTime" label="合同结束日期">
                </el-table-column> -->
                <el-table-column align="center" label="操作" width="120">
                    <!-- <template scope="scope">
                        <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        <el-button type="text" size="small" @click="handlePChange(scope.$index, scope.row)">变更</el-button>
                        <el-button type="text" size="small" @click="handlePRenew(scope.$index, scope.row)">续签</el-button>
                        <el-button size="small" @click="handleTerminate(scope.$index, scope.row)">解除</el-button>
                        <el-button size="small" @click="handleProbation(scope.$index, scope.row)">试用</el-button> 
                    </template> 
					-->
					<template scope="scope">
                        <i class="el-icon-edit" @click="handleEdit(scope.$index,scope.row)"></i>
                        <i class="el-icon-delete2" @click="handleDel(scope.$index,scope.row)"></i>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
			 class="toolbar" 
			 @current-change="handleCurrentChange" 
			 :current-page="pageNum" 
			 :page-size="pageSize" 
			 layout="total, prev, pager, next, jumper" 
			 :total="totalRows">
            </el-pagination>

            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
export default {
  data() {
    return {
      filters: {
        paraCode: "",
		    paraStatus: "",
		    paraName: ""
      },
      pageNum: 1,
      pageSize: 10,
	  totalRows: 0,
	  paramList:[],
      pactListInfo: []
    };
  },
  components: {
    current
  },
  mounted() {
  let self = this;
    // sessionStorage.setItem("contractInfo_activeName", ""); // 设置activeName为空
    // sessionStorage.setItem("contractInfo_pactSubFlag", "false"); // 设置pactSubFlag为false
	// this.getPactList(); //初始查询合同列表
	self.getParamList(); //初始化查询参数列表
  },
  methods: {
	  getParamList () {
		  let self = this;
		  let params = {
			  pageNum: self.pageNum,
			  pageSize:self.pageSize,
			  paraCode: self.filters.paraCode,
			  paraName: self.filters.paraName,
			  paraStatus: self.filters.paraStatus
		  };
		self.$axios
		  .get("/iem_hrm/sysParamMgmt/querySysParMgmtList", { params: params })
		  .then(res => {
			  console.log(res);
			//   self.pageNum = res.data.data.pageNum;此处不能要，不然会无限查询
			  self.pageSize = res.data.data.pageSize;
			  self.totalRows = res.data.data.total;
			  self.paramList = res.data.data.list;
			  return;
		  })
		.catch(() => {
          	console.log("error");
         });
	  },



    // getPactList() {
    //   const self = this;
    //   let params = {
    //     pageNum: self.pageNum,
    //     pageSize: self.pageSize,
    //     paraCode: self.filters.paraCode,
    //     pactType: self.filters.pactType
    //   };
    //   self.$axios
    //     .get("/iem_hrm/pact/queryPactList", { params: params })
    //     .then(res => {
    //       console.log(res);
    //       self.pactListInfo = res.data.data.models;
    //       self.totalRows = res.data.data.total;
    //     })
    //     .catch(() => {
    //       console.log("error");
    //     });
    // },
    // pactTypeFormatter(row, column) {
    //   return row.pactType == "01"
    //     ? "劳动合同"
    //     : row.pactType == "02" ? "保密协议" : "其他";
    // },
    // pactStatusFormatter(row, column) {
    //   return row.pactStatus == "01"
    //     ? "试用"
    //     : row.pactStatus == "02"
    //       ? "有效"
    //       : row.pactStatus == "03"
    //         ? "提前解除"
    //         : row.pactStatus == "04" ? "到期解除" : "其他";
    // },

    // dateFormat(row, column) {},

    handleCurrentChange(val) {
      this.pageNum = val;
      this.getParamList(); //分页查询参数列表
    },
    handleReset() {
      this.filters.paraCode = "";
      this.filters.pactType = "";
    },
    addParam() {
      this.$router.push("add_sysParam");
    },
    // handleParamDetail(index, row) {
    //   sessionStorage.setItem("contractInfo_pactNo", row.pactNo); // 暂存当前pactNo
    //   sessionStorage.setItem("contractInfo_userNo", row.userNo); // 暂存当前userNo
    //   this.$router.push("/detail_contract");
    // },
    handleEdit(index, row) {
      console.log(row);
      sessionStorage.setItem("paramInfo_paraValue", row.paraValue); // 暂存当前paraValue
      sessionStorage.setItem("paramInfo_paraCode", row.paraCode); // 暂存当前paraCode
      sessionStorage.setItem("paramInfo_paraLang", row.paraLang); // 暂存当前paraLang
      this.$router.push("/edit_sysParam");
    }
    // handleDelete(index, row) {
    //   this.$confirm("此操作将会删除该条合同, 是否继续?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   })
    //     .then(() => {
    //       this.$axios
    //         .delete("/iem_hrm/pact/deletePact?pactNo=" + row.pactNo)
    //         .then(res => {
    //           console.log(res);
    //           if (res.data.code == "S00000") {
    //             this.$message({ type: "success", message: "操作成功!" });
    //             this.getPactList();
    //           } else this.$message.error(res.data.retMsg);
    //         })
    //         .catch(() => {
    //           this.$message.error("操作失败");
    //         });
    //     })
    //     .catch(() => {
    //       this.$message("您已取消删除！");
    //     });
    // },
    // handlePChange(index, row) {
    //   sessionStorage.setItem("contractInfo_pactNo", row.pactNo); // 暂存当前pactNo
    //   sessionStorage.setItem("contractInfo_userNo", row.userNo); // 暂存当前userNo
    //   this.$router.push("/add_pactChange");
    // },
    // handlePRenew(index, row) {
    //   sessionStorage.setItem("contractInfo_pactNo", row.pactNo); // 暂存当前pactNo
    //   sessionStorage.setItem("contractInfo_userNo", row.userNo); // 暂存当前userNo
    //   this.$router.push("/add_pactRenew");
    // },
    // handleTerminate(index, row) {},
    // handleProbation(index, row) {}
  }
};
</script>

<style>

</style>
