<template>
    <div>
        <el-dialog :title="title"
        @close="dialogClose()"
        @open="dialogOpen()"
        :visible.sync = "visible"
        size="large"
        >
            <div class="item-box" id="msg_item_box">
                <el-form class="clearfix" :inline="true">
                  <el-form-item :label="inputFirstOption.labelName">
                        <el-input :placeholder="inputFirstOption.placeholder" v-model="custInfo.stateName" ></el-input>
                    </el-form-item>
                    <el-form-item :label="inputSecOption.labelName" v-if="secInpuShow">
                        <el-input :placeholder="inputSecOption.placeholder" v-model="custInfo.stateNo" >
                        </el-input>
                    </el-form-item>
                    <div class="button-box">
                      <el-form-item>
                          <el-button class="btn-default" @click="reset()">重置</el-button>
                      </el-form-item>
                      <el-form-item>
                          <el-button class="btn-primary" @click="getList()">查询</el-button>
                      </el-form-item>
                    </div>
                </el-form>
                <el-table stripe :data="pactListInfo"  style="width:100%;" @row-click="handleCurrentChange" highlight-current-row>
                  <el-table-column align="center" label="选择">
                    <template scope="scope">
                      <el-radio class="radio":label="scope.$index+1" v-model="radio"></el-radio>
                    </template>
                  </el-table-column>
                   <el-table-column 
                   align="center" 
                   :label="item.thName" 
                   :prop="item.dataKey"
                    v-for="item in tableOption">
                  </el-table-column>
              </el-table>
              <el-pagination class="pagination-toolbar" 
                @current-change="handleCurrentPagination" 
                :page-size="pagination.pageSize" 
                layout="prev, pager, next, jumper" 
                :total="pagination.totalRows"
                v-show="pagination.totalRows>pagination.pageSize"
                >
              </el-pagination>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="confirm()" class="btn-primary">确 定</el-button>
              </span>
            </div>
           
        </el-dialog>        
    </div>
</template>
<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      radio:0,
      applyUserNo:'',
      assetNo:'',
      pactListInfo:[],
      custInfo:{
        stateName:'',
        stateNo:''
      },
      secInpuShow:true,
      visible:false,
      tableOption:[]
    };
  },
  created(){

  },
  methods: {
    dialogOpen(){
      this.pagination.totalRows = 0
      this.pagination.pageSize = 5
      this.pactListInfo = []
      this.custInfo = {}
      console.log(this.searchData.length);
      if(this.searchData.length<2){
        this.secInpuShow = false
      }
    },
    getList(){
      let data = this.searchData,
          params = {},
          pageData = {
            pageNum:this.pagination.pageNum,
            pageSize:this.pagination.pageSize
          },
          keyOne = '',
          keyTwo = '',
          dataArr = Object.keys(data);
          
          if(dataArr.length>1){
            keyOne = dataArr[0]
            keyTwo = dataArr[1]
            data[keyOne] = this.custInfo.stateName;
            data[keyTwo] = this.custInfo.stateNo;
          }else{
            keyOne = dataArr[0]
            data[keyOne] = this.custInfo.stateNo
          }
          params = Object.assign(data,pageData);
          console.log(params)

      this.$axios.get(this.searchUrl,{ params: params })
      .then(res => {
        console.log(res);
        if (res.status == 200) {
          if (res.data.data!=={}) {
              let result = res.data.data.list
              this.pactListInfo = result
              this.pagination.totalRows = res.data.data.total
              console.log(this.pactListInfo,"返回值");
          }else{
            this.$message({
              message:'请输入合法编号',
              type: "error"
            });
          }
        }
      })
      .catch(e => {
          this.$message({
            message:e.retMsg,
            type: "error"
          });
        });
    },
    handleCurrentPagination(val){
      this.pagination.pageNum = val;
      this.getList();
    },
    reset(){
      this.custInfo = {};
    },
    dialogClose(){
      // this.$emit('update:dialogVisible',false)
    },
    handleCurrentChange(row, event, column) {
      this.custInfo = {}
      console.log(row)
        let index = this.pactListInfo.indexOf(row)+1,
            data = this.searchData,
            dataArr = Object.keys(data),
            keyOne = dataArr[0],
            keyTwo = dataArr[1];
        
        this.radio = index;
         console.log(row[keyOne])
        if(dataArr.length>1){
          this.custInfo.stateName = row[keyOne];
          this.custInfo.stateNo = row[keyTwo];
        }else{
           this.custInfo.stateNo = row[keyOne];
        }
    },
    confirm(){
      let self =this;
      self.$emit('dialogConfirm',self.custInfo);
    }
    
  },
  watch:{
    dialogVisible(flag){
       this.visible = flag;
    },
    visible(flag){
       this.$emit('update:dialogVisible',flag);
    }
  },
  props: {
    title: {
      type: String,
      default: "提示"
    },
    placeholder: {
      type: String,
      default: ""
    },
    labelFirst: {
      type: String,
      default: ""
    },
    labelSec: {
      type: String,
      default: ""
    },
    searchUrl:{
      type: String,
      default: ""
    },
    saveUrl:{
      type:String,
      default:""
    },
    dialogVisible:{
      type:Boolean,
      default:false
    },
    firstPlaceholder:{
       type:String,
        default:""
    },
    secPlaceholder:{
      type:String,
      default:""
    },
    tableOption:{
      type:Array,
      default:[]
    },
    // inputOption:{
    //   type:Array,
    //   default:[]
    // }
    inputFirstOption:{
      type:Object,
      default:{}
    },
    inputSecOption:{
      type:Object,
      default:{}
    },
    searchData:{
      type:Object,
      default:{}
    },
    pagination:{
      type:Object,
      default:{}
    },
  }
};
</script>
<style lang="scss" socped>
#msg_item_box{
  .el-form{
    margin-bottom:20px;
    margin-top:0;
    .el-form-item:last-child{
        margin-right:0;
    }
    .el-form-item{
      .el-input__inner{
        width:164px;
        height:32px;
        line-height:32px;
      }
    }
    .button-box{
      float:right;
    }
  }
  
  .my-autocomplete{
    li{
      line-height: 20px;
      padding: 7px;
    }
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr{
      font-size: 12px;
      color: #b4b4b4;
    }
    .highlighted{
      .addr {
        color: #ddd;
      }
    } 
  }
  .el-table{
    tr{
      cursor:pointer;
    } 
  }
  .el-dialog__footer{
    text-align:left;
  }
  .dialog-footer{
    position: relative;
    top:10px;
    }
}

// .item-box .el-input__inner{height:30px;}
// .toolbar{text-align:right;}
// .item-box .el-form-item .el-input{width:164px !important;}
// .item-box .button-box{float:right;}
// .el-table__body-wrapper{overflow-x:hidden;}
// .el-table tr{cursor:pointer }
// .el-dialog__header{background:#f4f4f4;padding:10px 20px;}
// .el-dialog__title{color:#333;font-weight:normal;font-size:14px;}
// .el-dialog__headerbtn{font-size:14px;}
// .el-dialog__headerbtn .el-dialog__close{color:#ff9900;}
// .el-dialog--small{width:80%;}
// .item-box .el-form-item{width:270px;display:inline-block;}
// .el-form-item.is-required .el-form-item__label:before{display:none;}
// .el-dialog__footer{text-align:left;padding-left:40px;}
// .el-dialog__footer .el-button--primary{background:#f4f4f4;color:#333;border:none;padding:10px 40px;}
// .el-dialog__footer .el-button--primary:hover{background:#f90;color:#fff;}
// .content-wrapper .el-pager li.active{border-color: #ff9900;background-color: #ff9900;}
// .el-pager li:hover,.el-pagination button:hover{color:#ff9900;}
// .el-pagination__editor:focus{border-color: #ff9900}
// .pagination-toolbar{margin-top:20px;text-align:right}
</style>
