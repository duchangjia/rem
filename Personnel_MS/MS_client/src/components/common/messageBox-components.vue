1<template>
    <div>
        <el-dialog :title="title"
        @close="dialogClose()"
        @open="dialogOpen()"
        :visible.sync="dialogVisible" 
        >
            <div class="item-box">
                <el-form class="clearfix">
                  <el-form-item :label="inputFirstOption.labelName">
                        <el-input :placeholder="inputFirstOption.placeholder" v-model="custInfo.stateName"></el-input>
                    </el-form-item>
                    <el-form-item :label="inputSecOption.labelName" >
                        <el-input :placeholder="inputSecOption.placeholder" v-model="custInfo.stateNo" >
                        </el-input>
                    </el-form-item>
                    <!-- <el-form-item :label="item.labelName" v-for="item in inputOption">
                        <el-input :placeholder="item.placeholder" :v-model="item.modelKey">
                        </el-input>
                    </el-form-item> -->
                    <div class="button-box">
                        <el-button class="toolBtn restBtn" @click="reset()">重置</el-button>
                        <el-button class="toolBtn" @click="getList()">查询</el-button>
                    </div>
                </el-form>
                <el-table stripe :data="pactListInfo"  style="width:100%;" @row-click="handleCurrentChange" highlight-current-row height="270">
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
            </div>
            <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="confirm()">确 定</el-button>
            </span>
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

      // info:this.info,
      pactListInfo:[],
      // inputFirShow:false,
      // inputSecShow:false,
      custInfo:{
        stateName:'',
        stateNo:''
      },
     
    };
  },
  methods: {
    dialogOpen(){
      this.pagination.totalRows = 0
      this.pagination.pageSize = 5
      this.pactListInfo = []
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
            data[keyOne] = this.custInfo.stateName
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
          console.log(e,"错误信息")
          if(this.assNoHidden){
            this.applyUserInfo = {};
          }else{
            this.assetInfo = {};
          }
          
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
      this.custInfo = {};
      this.$emit('update:dialogVisible',false);
    },
    handleCurrentChange(row, event, column) {
      console.log(row)
        let index = this.pactListInfo.indexOf(row)+1,
            data = this.searchData,
            dataArr = Object.keys(data),
            keyOne = dataArr[0],
            keyTwo = dataArr[1];
        this.radio = index;
        if(dataArr.length>1){
          this.custInfo.stateName = row[keyOne];
          this.custInfo.stateNo = row[keyTwo];
        }else{
           this.custInfo.stateName = row[keyOne];
        }
        // this.$emit('update:NoItem', row[keyOne]);
        // this.NoItem = row[keyOne]
        
    },
    confirm(){
      let self =this;

      self.$emit('changeNo', self.custInfo.stateNo);
      self.$emit('update:dialogVisible',false);
      if(this.saveUrl == ''){
        return false;
      }
      
      
    
      
      self.$axios
        .get(
          self.saveUrl+
          self.custInfo.stateNo
        )
        .then(res => {
          if (res.data.code == 'F00002') {
            self.$emit('update:applyUserNo','');
            self.$message({
              message:res.data.retMsg,
              type: "error"
            });
           
          }else{
            self.dialogVisible = false;
            self.$emit('update:applyUserInfo', res.data.data);
          }
          self.custInfo = {};
        })
        .catch(e => {
          this.applyUserInfo = {};
          self.$message({
            message:e.retMsg,
            type: "error"
          });
        });
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
    NoItem:{
      type:String,
      default:''
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
<style>
.item-box .el-form{
  margin-bottom:20px;
}
.item-box .el-form-item:last-child{
  margin-right:0;
}
.item-box .my-autocomplete li {
  line-height: 20px;
  padding: 7px;
}
.item-box .my-autocomplete .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.item-box .my-autocomplete .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.item-box .my-autocomplete .highlighted .addr {
  color: #ddd;
}
.el-radio__input.is-checked .el-radio__inner,.el-radio__input.is-focus .el-radio__inner{
    background:#f90;
    border-color:#f90;
}
.el-radio__inner:after {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) scale(0);
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6);
}
.el-radio__input.is-checked .el-radio__inner:after ,.el-radio__input.is-focus .el-radio__inner:after{
    transform: translate(-50%,-50%) scale(1);
}
.item-box .button-box .toolBtn {
    height:30px;
    width: 120px;
    background: #f90;
    border: 1px solid #f90;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #fff;
    display: inline-block;
    line-height:30px;
    padding:0;
    float:none;
}
.item-box .button-box .restBtn{
    background: #fff;
    border: 1px solid #f90;
    color: #f90;
    display: inline-block;
    margin-left: 10px;
}
.item-box .el-input__inner{height:30px;}
.toolbar{text-align:right;}
.add_assetUser .content-wrapper .content .item-box .el-form-item .el-input{width:164px;}
.item-box .button-box{float:right;}
.el-table__body-wrapper{overflow-x:hidden;}
.el-table tr{cursor:pointer }
.el-dialog__header{background:#f4f4f4;padding:10px 20px;}
.el-dialog__title{color:#333;font-weight:normal;font-size:14px;}
.el-dialog__headerbtn{font-size:14px;}
.el-dialog__headerbtn .el-dialog__close{color:#ff9900;}
.el-dialog--small{width:80%;}
.item-box .el-form-item{width:270px;}
.el-form-item.is-required .el-form-item__label:before{display:none;}
.el-dialog__footer{text-align:left;padding-left:40px;}
.el-dialog__footer .el-button--primary{background:#f4f4f4;color:#333;border:none;padding:10px 40px;}
.el-dialog__footer .el-button--primary:hover{background:#f90;color:#fff;}
.content-wrapper .el-pager li.active{border-color: #ff9900;background-color: #ff9900;}
.el-pager li:hover,.el-pagination button:hover{color:#ff9900;}
.el-pagination__editor:focus{border-color: #ff9900}
.pagination-toolbar{margin-top:20px;text-align:right}
</style>
