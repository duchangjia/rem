<template>
    <div class="assetUse_query">
        <current yiji="资产管理" erji="资产使用管理"></current>
            <div class="content-wrapper">
                <!-- <div class="title">
                    <span class="text">资产使用管理</span><button class="add" @click="add">新增</button>
                </div> -->
                <el-col :span="24" class="titlebar">
                    <span class="title-text">资产使用管理</span>
                    <el-button type="primary" @click="add" class="toolBtn ">新增</el-button>
                </el-col>
                <el-col :span="24" class="querybar">
                    <el-form :inline="true">
                        <el-col :span="6">
                            <el-form-item label="资产名称">
                                <el-input class="search_common" v-model="searchInfo.assetName" placeholder="请输入资产名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="资产类型">
                                <el-select class="search_common" v-model="searchInfo.assetType">
                                <el-option label="办公用品" value="01"></el-option>
                                <el-option label="电脑" value="02"></el-option>
                                <el-option label="手机" value="03"></el-option>
                                <el-option label="后勤用品" value="04"></el-option>
                                <el-option label="数码相机" value="05"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="资产编号">
                                <el-input class="search_common" v-model="searchInfo.assetNo" placeholder="请输入资产编号"></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="6">
                            <el-form-item label="工号" >
                                <el-input class="search_common" v-model="searchInfo.applyUserNo" placeholder="请输入工号"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="button-wrap">
                            <el-button class="restBtn" @click="resetForm()">重置</el-button>
                            <el-button class="queryBtn" @click="search">查询</el-button>
                        </el-col>   
                    </el-form> 
                </el-col>
                <el-table stripe :data="assetInfoList"  >
                    <el-table-column align="center" prop="applyNo" label="使用编号">
                        <template scope="scope">
                            <span @click="handleAssetInfoDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.applyNo }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="assetNo" label="资产编号" >
                    </el-table-column>
                    <el-table-column align="center" prop="assetType" label="资产类型" :formatter="assetTypeFormatter">
                    </el-table-column>
                    <el-table-column align="center" prop="assetName" label="资产名称" >
                    </el-table-column>
                    <el-table-column align="center" prop="applyNum" label="数量">
                    </el-table-column>
                    <el-table-column align="center" prop="applyType" label="使用类型" :formatter="applyTypeFormatter" >
                    </el-table-column>
                    <el-table-column align="center" prop="organName" label="公司名称" >
                    </el-table-column>
                    <el-table-column align="center" prop="derpName" label="申请部门" >
                    </el-table-column>
                    <el-table-column align="center" prop="applyUserNo" label="工号" >
                    </el-table-column>
                    <el-table-column align="center" prop="derpName" label="姓名">
                    </el-table-column>
                    <el-table-column align="center" prop="applyTime" label="发生时间">
                    </el-table-column>
                    <el-table-column align="center" prop="assetType" label="操作">
                        <template scope="scope">
                            <i class="el-icon-edit" @click="edit(scope.row)"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="el-icon-delete2" @click="del(scope.row)"></i>
                        </template>
                    </el-table-column>
                </el-table>
                 <el-pagination
                    @current-change="handleCurrentChange"
                    :page-size="pagination.pageSize"
                    layout="total,prev, pager, next, jumper"
                    :total="pagination.total">
                    </el-pagination>
            </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
import messageBox from "../../../common/messageBox-components.vue";
import moment from "moment";
export default {
  data() {
    return {
      searchInfo: {
        assetName: "",
        assetType: "",
        assetNo: "",
        applyUserNo: ""
      },

      assetInfoList:[],
      pagination: {
      	 pageNum: 1,
        pageSize: 10,
        total: 100
      },
      table: {
        th: [
          "使用编号",
          "资产编号",
          "资产类型",
          "资产名称",
          "数量",
          "使用类型",
          "公司名称",
          "申请部门",
          "工号",
          "姓名",
          "发生时间",
          "操作"
        ],
        td: [
          {
            num: 1111
          }
        ]
      }
    };
  },
  created() {
    let self = this;
    this.search();
  
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    assetTypeFormatter(row, column) {
    return row.assetType == "01"
        ? "全部"
        :       row.assetType == "02"
          ? "办公用品"
          : row.assetType == "03"
            ? "电脑"
            : row.assetType == "04" ? "后勤用品" : "异常";
    },
    applyTypeFormatter(row, column){
         return row.applyType == "01"
        ? "发放领用"
        :       row.applyType == "02"
          ? "归还"
          : row.applyType == "03"
          ?"出借"
            : row.applyType == "04" 
            ? "出售" 
            :row.applyType == "05"
            ?"盘余"
            :applyType=="06"
            ?"盘亏":"异常";
    },
    search() {
      let self = this;
      let params = {};
      params.assetName = this.searchInfo.assetName;
      params.assetType = this.searchInfo.assetType;
      params.assetNo = this.searchInfo.assetNo;
      params.applyUserNo = this.searchInfo.applyUserNo;
      params.pageNum = this.pagination.pageNum;
      params.pageSize = this.pagination.pageSize;
      var data = {};
      for (var name in params) {
        if (params[name]) {
          data[name] = params[name];
        }
      }
      console.log(data);
      this.$axios
        .get("/iem_hrm/assetUse/queryAssUseList", { params: data })
        .then(res => {
          this.assetInfoList =  res.data.data.list
          this.pagination.total = res.data.data.total
          console.log(this.assetInfoList,'列表数据');
        })
        .catch(e => {
          console.log(e);
        });
   
    },
    resetForm(){
        let self = this;
        this.searchInfo = {};
    },
    handleAssetInfoDetail(index,row) {
      this.$router.push({ name: "detail_assetUse", query: { applyNo:row.applyNo } });
    },
    edit(row) {
        console.log(row.applyNo)
      this.$router.push({ name: "edit_assetUse", query: { applyNo:row.applyNo } });
    },
    del(row) {
      let self = this;
      this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .get("/iem_hrm/assetUse/delAssUse/" + row.applyNo)
            .then(res => {
              let result = res.data.retMsg;
              if ("操作成功" === result) {
                self.$message({
                  message: "删除成功",
                  type: "success"
                });
                self.$axios
                  .get("/iem_hrm/assetUse/queryAssUseList")
                  .then(res => {
                    self.table.td = res.data.data.list;
                    self.fenye.total = res.data.data.total;
                    self.fenye.pageSize = res.data.data.pageSize;
                    self.fenye.pageNum = res.data.data.pageNum;
                  })
                  .catch(e => {
                    console.log(e);
                  });
              } else {
                self.$message({
                  message: result,
                  type: "error"
                });
              }
            })
            .catch(e => {
              console.log(e);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    add() {
      this.$router.push("add_assetUse");
    }
  },
  filters: {
    formatDate1(time) {
      return moment(time).format("YYYY-MM-DD");
    },
    formatDate(time) {
      return moment(time).format("YYYY-MM-DD hh:mm:ss");
    }
   
  },
  components: {
    current,
    messageBox
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.el-button{
    border: 1px solid #FF9900;
	color:#FF9900;
	margin: 0;
	height:30px;
    width:120px;
    line-height:30px;
    padding:0;
}
.assetUse_query {
    padding: 0 0 20px 20px;
    position: relative;
    .test {
        padding-left: 10px;
    }
    
    .content-wrapper {
        background: #fff;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom:30px;
        // height: 746px;
        .titlebar{
            height:50px;
            line-height:50px;
            font-size: 16px;
            font-family: "PingFang SC";
            border-bottom: 1px solid #eeeeee;
            margin-bottom:30px;
            .title-text {
                display: inline-block;
                position: relative;
            }
            .title-text::after{
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background: #333333;
            }
        }
       .toolBtn {
            float: right;
            margin-top:8px;
            background: #ff9900;
            border: none;
            color:#fff;
        }
        .querybar{
            .el-form-item{
                display: inline-block;
                margin-right: 10px;
                vertical-align: top;
                margin-bottom:30px;
            }
            .el-form-item__content{
                line-height: 30px;
            } 
            .el-input__inner{
                width:164px;
                height:30px;
                display:inline-block;
                border-color:#eee;
                color:#333;
            }
            .el-input__inner:hover{
                border-color:#FF9900;
            }
            .el-form-item__label{
                color: #999999;
	            font-weight: normal;
	            padding: 8px 10px 8px 0;
	            margin: 0;
            }	
        } 

        .button-wrap {
            margin: 0px auto 30px;
            font-size: 0px;
            text-align: center;
            .queryBtn{
                color: #ffffff;
                background: #ff9900;
                border: none;
            }
            .restBtn{
                color: #ff9900;
                margin-right:10px;
                border: 1px solid #ff9900;
            }
        }

        .el-table .cell, .el-table th>div{
            padding-left: 10px;
            padding-right: 10px;
        }
       .el-icon-delete2, .el-icon-edit {
            color: #ff9900;
            cursor: pointer;
            text-decoration: underline;
        }
      }  
}
</style>

<style lang='stylus' rel='stylesheet/stylus'>
	.el-pagination {
        text-align:right;
        margin-top:30px;
        padding-right:45px;
        .el-pagination__total {
            height: 24px;
        }
        .btn-prev, .el-pagination__jump, .btn-next {
            height: 24px;
            width: 24px;
            line-height: 24px;
        }

        .el-pager li {
            width: 24px;
            height: 24px;
            line-height: 24px;
        }

        .el-pager li.active {
            background: #ff9900;
            border: 1px solid #ff9900;
        }

        .el-pager li:hover, button:hover {
            color: #ff9900;
        }

        .el-pagination__jump {
            .el-pagination__editor {
                width: 24px;
                height: 24px;
                line-height: 24px;
                margin: 0 3px;
                text-indent: 0;
            }
        }
    }
// .assetUse_query {
//     padding: 0 0 20px 20px;
//     overflow: hidden;
//     position: relative;

//     .test {
//         padding-left: 10px;
//     }

//     .content-wrapper {
//         background: #fff;
//         padding-left: 20px;
//         padding-right: 20px;
//         height: 746px;

//         .title {
//             font-family: PingFangSC-Regular;
//             font-size: 16px;
//             color: #333333;
//             letter-spacing: 0;
//             height: 80px;
//             line-height: 80px;
//             border-bottom: 1px solid #f4f4f4;
//             position: relative;

//             .text {
//                 border-bottom: 2px solid black;
//                 display: inline-block;
//                 height: 80px;
//             }

//             .add {
//                 width: 120px;
//                 height: 40px;
//                 background: #FF9900;
//                 border: 1px solid #FF9900;
//                 outline: none;
//                 font-family: PingFangSC-Regular;
//                 font-size: 14px;
//                 color: #FFFFFF;
//                 line-height: 40px;
//                 text-align: center;
//                 position: absolute;
//                 right: 0px;
//                 bottom: 20px;
//             }
//         }

//         .content {
//             padding-top: 42px;
//             overflow: hidden;

//             .search {
//                 overflow: hidden;
//                 text-align: center;

//                 .text {
//                     color: #999;
//                     font-size: 14px;
//                     margin-right: 10px;
//                 }

//                 .el-input, .el-select {
//                     width: 200px;

//                     .el-input__inner {
//                         width: 100%;
//                     }

//                     .el-input__inner:hover {
//                         border-color: #f90;
//                     }
//                 }

//                 .toolBtn {
//                     border-radius: 0;
//                     background: #FF9900;
//                     border: none;
//                     font-family: PingFangSC-Regular;
//                     font-size: 14px;
//                     color: #fff;
//                     margin: 40px auto 0 auto;
//                 }
//             }

//             .el-icon-delete2, .el-icon-edit {
//                 color: #ff9900;
//                 cursor: pointer;
//                 text-decoration: underline;
//             }
//         }
//     }

//     .el-pagination {
//         position: absolute;
//         right: 45px;
//         bottom: 40px;

//         .el-pagination__total {
//             height: 24px;
//         }

//         .btn-prev, .el-pagination__jump, .btn-next {
//             height: 24px;
//             width: 24px;
//             line-height: 24px;
//         }

//         .el-pager li {
//             width: 24px;
//             height: 24px;
//             line-height: 24px;
//         }

//         .el-pager li.active {
//             background: #ff9900;
//             border: 1px solid #ff9900;
//         }

//         .el-pager li:hover, button:hover {
//             color: #ff9900;
//         }

//         .el-pagination__jump {
//             .el-pagination__editor {
//                 width: 24px;
//                 height: 24px;
//                 line-height: 24px;
//                 margin: 0 3px;
//                 text-indent: 0;
//             }
//         }


//         .el-pagination__editor:focus {
//             outline: none;
//             border-color: #ff9900;
//         }
//     }

//     _:-ms-lang(x), td {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
// }
</style>
