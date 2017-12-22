<template>
    <div class="container-wrap payBase_Info">
        <current yiji="薪酬福利" erji="薪酬基数设置">
        </current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
              <span class="title-text">薪酬基数设置</span>
                <div class="titleBtn_wrapper">
                  <el-upload ref="upload" name="file" class="upload-demo imExport-btn-item"
                      :on-change="changeUpload" 
                      :on-success="successUpload"
                      action="/iem_hrm/attence/batchimport" 
                      :show-file-list="false" 
                      :headers="token">
                      <span class="icon-import" slot="trigger" title="批量导入"></span>
                  </el-upload>
                  <span class="icon-export imExport-btn-item" title="批量导出" @click="handleExport"></span>
                  <span class="icon-download imExport-btn-item" title="下载模版" @click="handleDownloadTemplate"></span>
                  <el-button type="primary" class="btn-primary" @click="handleAdd">新增</el-button>
                </div>
            </div>
            <div class="queryContent_inner">
              <el-form :inline="true" :model="filters" class="demo-ruleForm">
                <el-col :sm="12" :md="5">
                   <el-form-item label="工号">
                      <el-input v-model="filters.userNo" placeholder="请输入工号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :sm="12" :md="6">
                  <el-form-item label="姓名">
                        <el-input v-model="filters.custName" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :sm="12" :md="6">
                  <div class="queryButton_wrapper">
                    <el-button @click="handleReset" class="btn-default">重置</el-button>
                    <el-button @click="handleQuery" class="btn-primary">查询</el-button>
                  </div>
                </el-col>
				      </el-form>
              <el-table stripe :data="payBaseInfoList" border>
                  <el-table-column align="center" label="工号">
                      <template scope="scope">
                          <span @click="handlePayBaseInfoDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.userNo }}</span>
                      </template>
                  </el-table-column>
                  <el-table-column align="center" prop="userName" label="姓名">
                  </el-table-column>
                  <el-table-column align="center" prop="wagesBase" label="基本工资">
                  </el-table-column>
                  <el-table-column align="center" prop="wagesPerf" label="绩效工资">
                  </el-table-column>
                  <el-table-column align="center" prop="postPension" label="岗位津贴">
                  </el-table-column>
                  <el-table-column align="center" prop="otherPension" label="其他补贴">
                  </el-table-column>
                  <el-table-column align="center" prop="endmBase" label="养老保险基数">
                  </el-table-column>
                  <el-table-column align="center" prop="houseBase" label="公积金基数">
                  </el-table-column>
                  <el-table-column align="center" prop="createdDate" label="录入时间">
                  </el-table-column>
                  <el-table-column align="center" label="操作">
                      <template scope="scope">
                          <i class="icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
                          <i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
                      </template>
                  </el-table-column>
              </el-table>
              <el-pagination class="toolbar" @current-change="handleCurrentChange" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalRows">
              </el-pagination>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
const baseURL = 'iem_hrm';
export default {
  data() {
    return {
      filters: {
        userNo: "",
        custName: ""
      },
      pageNum: 1,
      pageSize: 10,
      totalRows: 1,
      payBaseInfoList: [],
      token: {
				Authorization:`Bearer `+localStorage.getItem('access_token'),
			}
    };
  },
  components: {
    current
  },
  created() {
    this.filters.userNo = "";
    this.filters.custName = "";
    this.getPayBaseInfoList(); //初始查询薪酬基数列表
  },
  methods: {
    getPayBaseInfoList() {
      const self = this;
      let params = {
        pageNum: self.pageNum,
        pageSize: self.pageSize,
        userNo: self.filters.userNo,
        custName: self.filters.custName
      };
      self.$axios
        .get("/iem_hrm/pay/queryPayBaseInfoList", { params: params })
        .then(res => {
          console.log(res);
          self.payBaseInfoList = res.data.data.models;
          self.totalRows = res.data.data.total;
        })
        .catch(() => {
          console.log("error");
        });
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getPayBaseInfoList(); //分页查询薪酬基数列表
    },
    handleReset() {
      this.filters.userNo = "";
      this.filters.custName = "";
    },
    handleQuery() {
      this.getPayBaseInfoList(); //根据条件查询薪酬基数列表
    },
    // 批量导入
    changeUpload(file, fileList) {
      console.log(file);
    },
    successUpload(res, file, fileList) {
      console.log("import_response", res);
      if (res.code === "S00000") {
        this.$message({ message: "操作成功", type: "success" });
      } else {
        this.$message({ message: res, type: "info" });
      }
    },
    // 批量导出
    handleExport() {
      this.exportFile();
    },
    exportFile() {
      const self = this;
      let params = {
        userNo: self.filters.userNo,
        custName: self.filters.custName
      };
      self.$axios
        .get(baseURL + "/pay/payBaseDataExport", {
          params: params,
          responseType: "blob"
        })
        .then(res => {
          console.log("response", res);
          const fileName = "薪酬基本信息.xlsx";
          const blob = res.data;
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fileName);
          } else {
            let elink = document.createElement("a"); // 创建a标签
            elink.download = fileName;
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click(); // 触发点击a标签事件
            document.body.removeChild(elink);
          }
        })
        .catch(e => {
          console.error(e);
          self.$message({ message: "导出薪酬基数信息失败", type: "error" });
        });
    },
    // 模板下载
    handleDownloadTemplate() {
      this.downloadFile();
    },
    downloadFile() {
      const self = this;
      self.$axios
        .get(baseURL + "/file/downloadTemplate?templateName=" + "薪酬基本信息模板", {
          responseType: "blob",
        })
        .then(res => {
          console.log(res);
          const fileName = "薪酬基本信息模板.xlsx";
          const blob = res.data;
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fileName);
          } else {
            let elink = document.createElement("a"); // 创建a标签
            elink.download = fileName;
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click(); // 触发点击a标签事件
            document.body.removeChild(elink);
          }
        })
        .catch(e => {
          console.error(e);
          self.$message({ message: "下载模版失败", type: "error" });
        }); 
    },
    
    handleAdd() {
      this.$router.push({
        name: "add_payBaseInfo"
      });
    },
    handlePayBaseInfoDetail(index, row) {
      sessionStorage.setItem('payBaseInfo_userNo', row.userNo); 
      this.$router.push("/detail_payBaseInfo");
    },
    handleEdit(index, row) {
      sessionStorage.setItem('payBaseInfo_userNo', row.userNo); 
      this.$router.push("/edit_payBaseInfo");
    },
    handleDelete(index, row) {
      this.$confirm("此操作将会删除该条薪酬基数信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .delete("/iem_hrm/pay/deletePayBaseInfo/" + row.userNo)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "操作成功!" });
                this.getPayBaseInfoList();
              } else this.$message.error(res.data.retMsg);
            })
            .catch(() => {
              this.$message.error("操作失败！");
            });
        })
        .catch(() => {
          this.$message("您已取消操作！");
        });
    }
  }
};
</script>


<style>
.payBase_Info .imExport-btn {
	float: right;
}
.payBase_Info .imExport-btn-item{
	display: inline-block;
	margin-left: 20px;
	cursor: pointer;
	vertical-align: middle;
}

.payBase_Info .el-upload__input {
    display: none;
}
.payBase_Info .icon-import {
	display: inline-block;
	width: 16px;
	height: 16px;
	vertical-align: middle;
	background: url(../../../../../static/img/common/batch-import0.png);
}
.payBase_Info .icon-export {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/batch-export0.png);
}
.payBase_Info .icon-download {
	display: inline-block;
	width: 16px;
	height: 16px;
  background: url(../../../../../static/img/common/template-download0.png);
  margin-right: 20px;
}
</style>
