<template>
    <div>
        <el-dialog :title="title"
        @close="dialogClose()"
        :visible.sync="dialogVisible" 
        width="80%">
            <div class="item-box">
                <el-form class="clearfix">
                    <el-form-item :label="labelFirst" v-if="assNoHidden">
                        <el-input placeholder="请输入姓名"v-model="custInfo.stateName"></el-input>
                    </el-form-item>
                    <el-form-item :label="labelSec">
                        <el-input placeholder="请输入编号" v-model="custInfo.stateNo">
                        </el-input>
                    </el-form-item>
                    <div class="button">
                            <el-button class="toolBtn restBtn" @click="reset()">重置</el-button>
                            <el-button class="toolBtn" @click="getList()">查询</el-button>
                        </div>
                </el-form>
                <el-table stripe :data="pactListInfo" border v-if="flag" style="width:100%;" @row-click="handleCurrentChange" highlight-current-row height="270">
                  <el-table-column align="center" label="选择">
                    <template scope="scope">
                      <el-radio class="radio":label="scope.$index+1" v-model="radio"></el-radio>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="工号" prop="userNo" v-if="assNoHidden">
                  </el-table-column>
                  <el-table-column align="center" prop="custName" label="姓名" v-if="assNoHidden">
                  </el-table-column>
                  <el-table-column align="center" prop="" label="资产编号" v-if="assNoShow">
                    <template scope="scope">
                     {{pactListInfo[scope.$index]}}
                    </template>
                  </el-table-column>
              </el-table>
              <el-pagination class="pagination-toolbar" 
                @current-change="handleCurrentPagination" 
                :page-size="pagination.pageSize" 
                layout="prev, pager, next, jumper" 
                :total="pagination.totalRows"
                v-show="pagination.totalRows>pagination.pageSize&&flag"
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
      flag:false,
      radio:0,
      applyUserNo:'',
      assetNo:'',

      // info:this.info,
      pactListInfo:[],
      custInfo:{
        stateName:'',
        stateNo:''
      },
      pagination: {
        pageNum:1,
        pageSize:5,
        totalRows:0
      }
    };
  },
  methods: {
    getList() {
      this.radio = 0;
      this.flag = true;
      if(this.assNoHidden){
          var data = {
            pageNum:this.pagination.pageNum,
            pageSize:this.pagination.pageSize, 
            custName:this.custInfo.stateName,
            userNo:this.custInfo.stateNo
          }
      }else{
        var data = {
          pageNum:this.pagination.pageNum,
          pageSize:this.pagination.pageSize,
          assetNo:this.custInfo.stateNo
        }
      }
      this.$axios.get(this.searchUrl,{ params: data })
      .then(res => {
        console.log(res);
        if (res.status == 200) {
          if (res.data.data!=={}) {
            if(this.assNoHidden){
              this.pactListInfo = res.data.data.list;
              this.pagination.totalRows = res.data.data.total
              console.log(res.data.data,"返回值");
            }else{
              this.pactListInfo = res.data.data;
              console.log(this.pactListInfo,'fanhui');
            }
            
          }else{
            this.flag = false;
            this.$message({
              message:'请输入合法的人工号',
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
          
          self.$message({
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
      this.flag = false;

    },
    dialogClose(){
      this.flag = false;
      this.custInfo = {};
      this.$emit('update:dialogVisible',false);
    },
    handleCurrentChange(row, event, column) {
        let index = this.pactListInfo.indexOf(row)+1;
        this.radio = index;
        if(this.assNoHidden){
          this.custInfo = {
            stateName:row.custName,
            stateNo:row.userNo
          }
          }else{
            this.custInfo = {
               stateNo:row
            }
          }
        
    },
    confirm(){
      this.$emit('update:dialogVisible',false);
      let self =this;
      this.dialogVisible = false;
      if(this.assNoHidden){
        this.$emit('update:applyUserNo', self.custInfo.stateNo);
      }else{
        this.$emit('update:assetNo', self.custInfo.stateNo);
      }
      
      this.$axios
        .get(
          this.saveUrl+
          this.custInfo.stateNo
        )
        .then(res => {
          if (res.data.code == 'F00002') {
            if(this.assNoHidden){
              this.$emit('update:applyUserInfo', {});
              this.$emit('update:applyUserNo', '');
            }else{
              this.$emit('update:assetInfo', res.data.data)
              this.$emit('update:assetNo','');
            }
            this.$message({
              message:res.data.retMsg,
              type: "error"
            });
           
          }else{
            console.log(this.custInfo,'输入内容');
            this.flag=false;
            this.dialogVisible = false;
            if(this.assNoHidden){
              this.$emit('update:applyUserInfo', res.data.data)
            }else{
              this.$emit('update:assetInfo', res.data.data)
            }
             
          }
          this.custInfo = {};
        })
        .catch(e => {
          console.log(e,"错误信息")
          if(this.assNoHidden){
            this.applyUserInfo = {};
          }else{
            this.assetInfo = {};
          }
          
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
    labelFirstShow:{
      type:Boolean,
      default:false
    },
    labelSecShow:{
      type:Boolean,
      default:false
    },
    assNoHidden:{
       type:Boolean,
       default:false
    },
    assNoShow:{
      type:Boolean,
       default:false
    }
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
.my-autocomplete li {
  line-height: 20px;
  padding: 7px;
}
.my-autocomplete .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete .highlighted .addr {
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
.item-box .button .toolBtn {
    border-radius: 0;
    height: 40px;
    width: 120px;
    background: #f90;
    border: none;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #fff;
    display: inline-block;
}
.item-box .button .restBtn{
    background: #fff;
    border: 1px solid #f90;
    color: #f90;
    display: inline-block;
}
.toolbar{text-align:right;}
.add_assetUser .content-wrapper .content .item-box .el-form-item .el-input{width:200px;}
.item-box .button{float:right;}
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
.el-dialog__footer .el-button--primary{background:#f4f4f4;color:#333;border-radius:0;border:none;padding:10px 40px;}
.el-dialog__footer .el-button--primary:hover{background:#f90;color:#fff;}
.content-wrapper .el-pager li.active{border-color: #ff9900;background-color: #ff9900;}
.el-pager li:hover,.el-pagination button:hover{color:#ff9900;}
.el-pagination__editor:focus{border-color: #ff9900}
.pagination-toolbar{margin-top:20px;text-align:right}
</style>
