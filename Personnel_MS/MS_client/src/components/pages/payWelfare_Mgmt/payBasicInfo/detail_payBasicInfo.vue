<template>
    <div class="add_contract">
        <current yiji="薪酬福利" erji="薪酬基数设置" sanji="薪酬基数详情">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">薪酬基数详情</span>
                <el-button type="primary" @click="handleSave" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
export default {
  data() {
    return {
      labelPosition: "right",
      addPactMsg: {},
      rules: {}
    };
  },
  components: {
    current
  },
  methods: {
    getTime(date) {},
    handleSave() {}
  }
};
</script>

<style>
.add_contract {
  padding: 0 0 20px 20px;
}
</style>
