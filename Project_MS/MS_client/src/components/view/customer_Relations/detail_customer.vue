<template>
    <div class="container-wrap">
        <current yiji="客户关系" erji="客户一览" sanji="客户详细信息">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">客户详细信息</span>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="detailCustMsg" :label-position="labelPosition" label-width="80px">
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
      detailCustMsg: {}
    };
  },
  components: {
    current
  },
  created() {
    const self = this;
    
  },
  methods: {
    
  }
};
</script>

<style>
</style>
