<template>
    <div class="container-wrap">
        <current yiji="客户关系" erji="客户一览" sanji="客户单价维护">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">客户单价维护</span>
                <el-button type="primary" @click="handleSave('addCustForm')" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="addCustMsg" :rules="custInfoRules" ref="addCustForm" :label-position="labelPosition" label-width="80px">
                </el-form>
            </div>
            
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
import Vue from 'vue'
export default {
  data() {
    return {
      labelPosition: "right",
      addCustMsg: {},
      custInfoRules: {}
    };
  },
  components: {
    current
  },
  created() {
    const self = this;
    
  },
  methods: {
    handleSave(addCustForm) {
      this.$refs[addCustForm].validate(valid => {
        if (valid) {
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
</style>
