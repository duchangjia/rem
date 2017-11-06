<template>
    <div class="add_assetUser">
        <current yiji="资产管理" erji="资产使用管理" sanji="资产使用新增"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">资产使用新增</span><button class="add" @click="save">保存</button></div>
                <div class="content">
                    <el-form :model="info" :rules="rules" ref="info1" label-width="200px">
                        <el-form-item label="公司名称">
                            <el-select placeholder="请选择公司名称" :disabled="true" v-model="applyUserInfo.organName">
                                <el-option label="区域一" value="shanghai"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="申请部门名称">
                            <el-select placeholder="请选择申请部门名称" :disabled="true" v-model="applyUserInfo.derpName">
                                <el-option label="区域一" value="shanghai"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="CCC">
                            <el-select placeholder="请选择CCC" :disabled="true" v-model="applyUserInfo.ccc">
                                <el-option label="区域一" value="shanghai"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="申请使用人工号" prop="applyUserNo">
                            <!-- <el-input placeholder="请输入申请使用人工号" @blur="getUserInfo(info.applyUserNo)" v-model="info.applyUserNo"></el-input> -->
                            <el-input v-model="info.applyUserNo">
                                <el-button slot="append" icon="search" @click="getUserInfo(info.applyUserNo)"></el-button>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input :disabled="true" v-model="applyUserInfo.custName"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <el-input :disabled="true" v-model="applyUserInfo.mobileNo"></el-input>
                        </el-form-item>
                        <el-form-item label="岗位">
                            <el-input :disabled="true" v-model="applyUserInfo.custPost"></el-input>
                        </el-form-item>
                        <el-form-item label="职级">
                            <el-input :disabled="true" v-model="applyUserInfo.custClass"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="form_info">资产信息</div>
                    <el-form label-width="200px" :model="info" :rules="rules" ref="info2">
                        <el-form-item label="资产编号" prop="assetNo">
                            <!-- <el-input placeholder="请输入资产编号" @blur="getAssetInfo(info.assetNo)" v-model="info.assetNo"></el-input> -->
                            <el-input v-model="info.assetNo">
                                <el-button slot="append" icon="search" @click="getAssetInfo(info.assetNo)"></el-button>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="购买单价">
                            <el-input :disabled="true" v-model="assetInfo.buyUnitPrice"></el-input>
                        </el-form-item>
                        <el-form-item label="当前库存数量">
                            <el-input :disabled="true" v-model="assetInfo.stockNum"></el-input>
                        </el-form-item>
                        <el-form-item label="购买金额">
                            <el-input :disabled="true" v-model="assetInfo.buyAmount"></el-input>
                        </el-form-item>
                        <el-form-item label="制造商">
                            <el-input :disabled="true" v-model="assetInfo.mfrs"></el-input>
                        </el-form-item>
                        <el-form-item label="供应商">
                            <el-input :disabled="true" v-model="assetInfo.supplier"></el-input>
                        </el-form-item>
                        <el-form-item label="资产类别">
                            <el-select placeholder="请选择资产类别" :disabled="true" v-model="assetInfo.assetType">
                                <el-option label="区域一" value="shanghai"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="资产名称">
                            <el-input :disabled="true" v-model="assetInfo.assetName"></el-input>
                        </el-form-item>
                        <el-form-item label="SN编号">
                            <el-input :disabled="true" v-model="assetInfo.snNo"></el-input>
                        </el-form-item>
                        <el-form-item label="规格型号">
                            <el-input :disabled="true" v-model="assetInfo.specType" ></el-input>
                        </el-form-item>
                        <el-form-item label="出厂时间">
                            <el-input :disabled="true" :value="assetInfo.factoryTime"></el-input>
                        </el-form-item>
                        <el-form-item label="免维保截至时间">
                            <el-input :disabled="true" :value="assetInfo.faxFreeTime"></el-input>
                        </el-form-item>
                        <el-form-item label="主要性能说明">
                            <el-input type="textarea" :disabled="true" v-model="assetInfo.configInstr"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="form_info">使用信息</div>
                    <el-form label-width="200px" :model="applyInfo" :rules="rules" ref="info3">
                        <el-form-item label="使用类别" prop="applyType">
                            <el-select placeholder="请选择使用类别" v-model="applyInfo.applyType">
                                <el-option label="发放领用" value="01"></el-option>
                                <el-option label="归还" value="02"></el-option>
                                <el-option label="出借" value="03"></el-option>
                                <el-option label="出售" value="04"></el-option>
                                <el-option label="盘余" value="05"></el-option>
                                <el-option label="盘亏" value="06"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="使用数量" prop="applyNum">
                            <el-input v-model="applyInfo.applyNum"></el-input>
                        </el-form-item>
                        <el-form-item label="发生时间" prop="applyTime">
                            <!-- <el-input v-model="applyInfo.applyTime"></el-input> -->
                            <el-date-picker
                                v-model="applyInfo.applyTime"
                                type="date"
                                placeholder="选择日期"
                                @change="changeDate()"
                                >
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="状态" prop="applyStatus">
                            <el-select placeholder="请选择状态" v-model="applyInfo.applyStatus">
                                <el-option label="未核销/未归还" value="01"></el-option>
                                <el-option label="已核销/已归还" value="02"></el-option>
                                <el-option label="不需要核销/不需要归还" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="说明" prop="remark">
                            <el-input type="textarea" v-model="applyInfo.remark"></el-input>
                        </el-form-item>

                        <!--<el-form-item>-->
                            <!--<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>-->
                            <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
                        <!--</el-form-item>-->
                    </el-form>
                </div>
            </div>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
import moment from "moment";
export default {
  data() {
    return {
      rules: {
        applyUserNo: [
          { required: true, message: "请输入申请使用人工号", trigger: "blur" }
        ],
        assetNo: [{ required: true, message: "请输入资产编号", trigger: "blur" }],
        applyType: [{ required: true, message: "请选择使用类别", trigger: "change" }],
        applyNum: [{ required: true, message: "请输入使用数量", trigger: "blur" }],
        applyTime: [{ required: true, message: "请输入发生时间", trigger: "blur" }],
        remark: [{ required: true, message: "请输入说明", trigger: "blur" }],
        applyStatus: [{ required: true, message: "请选择状态", trigger: "change" }]
      },
      info: {
        applyUserNo: "",
        assetNo: ""
      },
      applyUserInfo: {},
      assetInfo: {},
      applyInfo: {
        remark: "",
        applyStatus: "",
        applyTime: "",
        applyNum: "",
        applyType: ""
      }
    };
  },
  methods: {
    save() {
      let self = this;
      self.$refs.info1.validate(valid => {
        if (valid) {
          self.$refs.info2.validate(valid => {
            if (valid) {
              self.$refs.info3.validate(valid => {
                if (valid) {
                  let data = Object.assign(this.applyInfo, this.info);
                  this.$axios
                    .get(
                      "/iem_hrm/assetUse/getOrganNoAndDerpNo/" +
                        this.applyUserInfo.organName +
                        "/" +this.applyUserInfo.derpName
                    )
                    .then(res => {
                      let obj = Object.assign(data, res.data);
                      this.$axios
                        .post("/iem_hrm/assetUse/addAssetUseINF", obj)
                        .then(res => {
                          let result = res.data.retMsg;
                          if ("操作成功" === result) {
                            self.$message({
                              message: "修改成功",
                              type: "success"
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
                    .catch(e => {
                      console.log(e);
                    });
                }
              });
            }
          });
        }
      });
    },
    getUserInfo() {
      let self = this;
      if (this.info.applyUserNo == ""){
          self.$message({
          message: "工号不存在",
          type: "error"
        });
        return;
      }; //为空验证
      this.$axios
        .get(
          "/iem_hrm/assetUse/queryAssetUserByApplyUserNo/" +
            this.info.applyUserNo
        )
        .then(res => {
          console.log(res.data);
          if (res.data == null) {
            this.$message({
              message: res.retMsg,
              type: "error"
            });
            return;
          }
          this.applyUserInfo = res.data.data;
          console.log(this.applyUserInfo);
        })
        .catch(e => {
          this.applyUserInfo = {
            organName: "",
            derpName: "",
            ccc: "",
            custName: "",
            mobileNo: "",
            custPost: "",
            custClass: ""
          };
          self.$message({
            message: "工号不存在",
            type: "error"
          });
          console.log(e);
        });
    },
    getAssetInfo() {
      console.log(this.info.assetNo);
      let self = this;
      if (this.info.assetNo == "") {
        self.$message({
          message: "资产编号不存在",
          type: "error"
        });
        return; //为空验证
      }

      this.$axios
        .get("/iem_hrm/assetUse/queryAssetUserByAssetNo/" + this.info.assetNo)
        .then(res => {
          this.assetInfo = res.data.data;
          console.log(this.assetInfo);
        })
        .catch(e => {
          this.assetInfo = {
            buyUnitPrice: "",
            stockNum: "",
            buyAmount: "",
            mfrs: "",
            supplier: "",
            assetType: "",
            assetName: "",
            snNo: "",
            specType: "",
            factoryTime: "",
            faxFreeTime: "",
            configInstr: ""
          };
          self.$message({
            message: "资产编号不存在",
            type: "error"
          });
          console.log(e);
        });
    },
    changeDate(){
       let applyTime =  moment(this.applyInfo.applyTime).format("YYYY-MM-DD");
       this.applyInfo.applyTime = applyTime.toString();
        console.log(applyTime);
    }
  },
  components: {
    current
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.add_assetUser {
    padding: 0 0 20px 20px;
    overflow: hidden;
    position: relative;

    .content-wrapper {
        background: #fff;
        padding-left: 20px;
        padding-right: 20px;
        min-height: 746px;

        .title {
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #333333;
            letter-spacing: 0;
            height: 80px;
            line-height: 80px;
            border-bottom: 1px solid #f4f4f4;
            position: relative;

            .text {
                border-bottom: 2px solid black;
                display: inline-block;
                height: 80px;
            }

            .add {
                width: 120px;
                height: 40px;
                background: #FF9900;
                border: 1px solid #FF9900;
                outline: none;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #FFFFFF;
                line-height: 40px;
                text-align: center;
                position: absolute;
                right: 0px;
                bottom: 20px;
            }
        }

        .content {
            padding-top: 42px;
            overflow: hidden;

            .form_info {
                margin: 10px 0;
                font-size: 16px;
                padding-left: 20px;
                font-weight: bold;
            }

            .el-form-item {
                display: inline-block;

                .el-form-item__label {
                    color: #999;
                }

                .el-input, .el-select {
                    width: 300px;

                    .el-input__inner {
                        width: 100%;

                        &:hover {
                            border-color: #f90;
                        }
                    }
                }

                .el-textarea__inner {
                    min-width: 800px;
                    min-height: 100px;

                    &:hover, &:focus {
                        border-color: #f90;
                    }
                }
            }
        }
    }
}
</style>
