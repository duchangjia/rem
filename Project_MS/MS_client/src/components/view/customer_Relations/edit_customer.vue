<template>
  <div class="container-wrap">
    <current yiji="客户关系" erji="客户一览" sanji="客户详细编辑">
    </current>
    <div class="content-wrapper">
      <div class="titlebar">
        <span class="title-text">客户详细编辑</span>
        <el-button type="primary" @click="handleSave('addCustForm')" class="toolBtn">保存</el-button>
      </div>
      <div class="add-wrapper">
        <el-form :inline="true" :model="editCustMsg" :rules="custInfoRules" ref="addCustForm" :label-position="labelPosition" label-width="80px">
          <el-col :sm="24" :md="12">
            <el-form-item label="客户编号">
              <el-input type="text" v-model="editCustMsg.coocustNo" readonly></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="客户名称" prop="custName">
              <el-input type="text" v-model="editCustMsg.custName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="行业">
              <el-select v-model="editCustMsg.custInd">
                <el-option label="金融" value="J"></el-option>
                <el-option label="制造" value="C"></el-option>
                <el-option label="医疗" value="L"></el-option>
                <el-option label="航空" value="G"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="类别">
              <el-select v-model="editCustMsg.custType">
                <el-option label="客户" value="1"></el-option>
                <el-option label="供应商" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="级别">
              <el-select v-model="editCustMsg.custLevel">
                <el-option label="重点客户" value="01"></el-option>
                <el-option label="普通客户" value="02"></el-option>
                <el-option label="低价值客户" value="03"></el-option>
                <el-option label="黑名单客户" value="04"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="所属地区">
              <el-input type="text" v-model="editCustMsg.custCity"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="注册地址">
              <el-input type="text" v-model="editCustMsg.regstAddr" class="w_full"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="通讯地址">
              <el-input type="text" v-model="editCustMsg.contAddr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="邮编">
              <el-input type="text" v-model="editCustMsg.contPstCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="成立时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="editCustMsg.regstDate" value-format="yyyy-MM-dd"  style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="法人代表">
              <el-input type="text" v-model="editCustMsg.Legal"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="企业规模">
              <el-select v-model="editCustMsg.custScale">
                <el-option label="100人以下" value="1"></el-option>
                <el-option label="100人以上" value="2"></el-option>
                <el-option label="500人以上" value="3"></el-option>
                <el-option label="1000人以上" value="4"></el-option>
                <el-option label="5000人以上" value="5"></el-option>
                <el-option label="10000人以上" value="6"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-form>
      </div>

      <div class="add-wrapper">
        <el-col :span="24" class="subtitlebar"><span class="title-text">客户联系人</span>
          <el-button type="text" class="addBtn" @click="addCustContactVisible = true">新增</el-button>
        </el-col>
        <el-table stripe :data="custContactList" border>
          <el-table-column align="center" prop="attnName" label="姓名">
          </el-table-column>
          <el-table-column align="center" prop="attnDept" label="部门">
          </el-table-column>
          <el-table-column align="center" prop="attnDuty" label="职务">
          </el-table-column>
          <el-table-column align="center" prop="attnOfftel" label="办公电话">
          </el-table-column>
          <el-table-column align="center" prop="attnMail" label="邮箱">
          </el-table-column>
          <el-table-column align="center" prop="attnMob" label="手机号码">
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template scope="scope">
              <i class="icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="toolbar" @current-change="handleCustContactPage" :page-size="custContactPage.pageSize" layout="total, prev, pager, next, jumper"
          :total="custContactPage.totalRows" v-show="custContactPage.totalRows>custContactPage.pageSize">
        </el-pagination>
        <el-dialog title="客户联系人-新增" :visible.sync="addCustContactVisible">
          <el-form :model="addCustContactForm" :label-position="labelPosition" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="addCustContactForm.attnName"></el-input>
            </el-form-item>
            <el-form-item label="部门">
              <el-input v-model="addCustContactForm.attnDept"></el-input>
            </el-form-item>
            <el-form-item label="职务">
              <el-input v-model="addCustContactForm.attnDuty"></el-input>
            </el-form-item>
            <el-form-item label="手机">
              <el-input v-model="addCustContactForm.attnMob"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="addCustContactForm.attnMail"></el-input>
            </el-form-item>
            <el-form-item label="办公电话">
              <el-input v-model="addCustContactForm.attnOfftel"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button class="btn-default" @click="addCustContactVisible = false">取 消</el-button>
            <el-button type="primary" class="btn-primary" @click="addCustContactConfirm">确 定</el-button>
          </div>
        </el-dialog>
      </div>

      <div class="add-wrapper">
        <el-col :span="24" class="subtitlebar"><span class="title-text">公司销售信息</span>
          <el-button type="text" class="addBtn" @click="addSalesContactVisible = true">新增</el-button>
        </el-col>
        <el-table stripe :data="salesContactList" border>
          <el-table-column align="center" prop="salesName" label="姓名">
          </el-table-column>
          <el-table-column align="center" prop="salesDept" label="部门">
          </el-table-column>
          <el-table-column align="center" prop="salesDuty" label="职务">
          </el-table-column>
          <el-table-column align="center" prop="salesOfftel" label="办公电话">
          </el-table-column>
          <el-table-column align="center" prop="salesMobile" label="手机号码">
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template scope="scope">
              <i class="icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="toolbar" @current-change="handleSalesContactPage" :page-size="salesContactPage.pageSize" layout="total, prev, pager, next, jumper"
          :total="salesContactPage.totalRows" v-show="salesContactPage.totalRows>salesContactPage.pageSize">
        </el-pagination>
        <el-dialog title="销售联系人-新增" :visible.sync="addSalesContactVisible">
          <el-form :model="addSalesContactForm" :label-position="labelPosition" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="addSalesContactForm.salesName"></el-input>
            </el-form-item>
            <el-form-item label="部门">
              <el-input v-model="addSalesContactForm.salesDept"></el-input>
            </el-form-item>
            <el-form-item label="职务">
              <el-input v-model="addSalesContactForm.salesDuty"></el-input>
            </el-form-item>
            <el-form-item label="手机">
              <el-input v-model="addSalesContactForm.salesMob"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="addSalesContactForm.salesMail"></el-input>
            </el-form-item>
            <el-form-item label="办公电话">
              <el-input v-model="addSalesContactForm.salesOfftel"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button class="btn-default" @click="addSalesContactVisible = false">取 消</el-button>
            <el-button type="primary" class="btn-primary" @click="addSalesContactConfirm">确 定</el-button>
          </div>
        </el-dialog>
      </div>

    </div>
  </div>
</template>

<script>
  import current from "../../common/current_position.vue";
  import Vue from "vue";
  const basicUrl="crmCoopcustInfo";
  export default {
    data() {
      return {
        labelPosition: "right",
        editCustMsg: {},
        custContactList: [],
        salesContactList: [],
        custContactPage: {
          pageNum: 1,
          pageSize: 5,
          totalRows: 0
        },
        salesContactPage: {
          pageNum: 1,
          pageSize: 5,
          totalRows: 0
        },
        addCustContactVisible: false,
        addSalesContactVisible: false,
        addCustContactForm: {
        },
        addSalesContactForm: {
        },

        custInfoRules: {
          custName: [
            { required: true, message: '请输入客户名称', trigger: 'blur' }
          ]
        }
      };
    },
    components: {
      current
    },
    created() {
      const vm = this;
      const custNo = "001" //vm.$route.query.custNo;
      vm.getCustomerDetail(custNo);
      vm.getCustContactList(custNo,"1","5");
      vm.getSalesContactList(custNo,"1","5");
    },
    methods: {
      // 客户详情
      getCustomerDetail(custNo) {
        const vm = this;
        let params = {
          coocustNo: vm.$route.query.coocustNo // 接收路由传参
        };
        vm.$axios.get(basicUrl+"/crmCoopcustInfo/queryCocustDetail" , {params: params})
          .then(res => {
              let resData = res.data;
              vm.editCustMsg = resData.data;
          })
          .catch(err =>{

          })
      },
      // 联系人列表
      getCustContactList(custNo,page,pageSize) {
        const vm = this;
        let params = {
          coocustNo: custNo,
          pageNum: page,
          pageSize: pageSize
        };
        vm.$axios.get(basicUrl+"/crmCustAttn/queryCocustLinkman",{params: params} )
          .then(res => {
              let resData = res.data;
              vm.custContactList = resData.data.list;
              vm.custContactPage.pageSize = pageSize;
              vm.custContactPage.totalRows = resData.data.total;
          })
          .catch(err =>{
          })
      },
      // 公司销售信息列表
      getSalesContactList(custNo,page,pageSize) {
        const vm = this;
        let params = {
          coocustNo: custNo,
          pageNum: page,
          pageSize: pageSize
        };
        vm.$axios.get(basicUrl+"/crmSalesAttn/queryCocustSales",{params: params} )
          .then(res => {
              let resData = res.data;
              vm.salesContactList = resData.data.list;
              vm.salesContactPage.pageSize = pageSize;
              vm.salesContactPage.totalRows = resData.data.total;
          })
          .catch(err =>{
          })
      }, 
      handleEdit(index, row) {},
      handleCustContactPage(val) {
        this.custContactPage.pageNum = val;
        let custNo = "001";//this.$route.query.custNo
        this.getCustContactList(custNo,val,"5"); //分页查询联系人列表
      },
      handleSalesContactPage(val) {
        this.salesContactPage.pageNum = val;
        let custNo = "001";//this.$route.query.custNo
        this.getSalesContactList(custNo,val,"5"); //分页查询公司销售信息列表
      },
      // 新增客户联系人
      addCustContactConfirm() {
        const vm = this;
        vm.addCustContactForm.coocustNo = "001";//this.$route.query.custNo
        vm.$axios.post(basicUrl+"/crmCustAttn/addCrmCustAttn",vm.addCustContactForm)
          .then(res => {
            this.$message('操作成功');
          })
          .catch(err =>{
          })
        
        this.addCustContactVisible = false;
        console.log(this.addCustContactForm);
      },
      // 新增公司销售信息
      addSalesContactConfirm() {
        const vm = this;
        vm.addSalesContactForm.coocustNo = "001";//this.$route.query.custNo
        vm.$axios.post(basicUrl+"/crmSalesAttn/addCrmSalesAttn",vm.addSalesContactForm)
          .then(res => {
            this.$message('操作成功');
          })
          .catch(err =>{
          })
        this.addSalesContactVisible = false;  
        console.log(this.addSalesContactForm);
      },
      pickSetUpTimeTime(val) {
        this.editCustMsg.regstDate = val;
      },
      handleSave(editCustForm) {

        const vm = this;
        this.$refs[editCustForm].validate(valid => {
          if (valid) {
            delete vm.editCustMsg.createdDate;
            delete vm.editCustMsg.updatedDate;
            vm.$axios.post(basicUrl+"/crmCoopcustInfo/modifyCocustInfo",vm.editCustMsg )
              .then(res => {
                this.$message('操作成功');
              })
              .catch(err =>{
              })
          } else {
            return ;
          }
        });
        /*if (vm.editCustMsg.custName === "" || vm.editCustMsg.custName === null) {
          this.$message('客户名称不能为空！');return;
        }*/
      }
    }
  };
</script>

<style lang="scss" socped>
</style>