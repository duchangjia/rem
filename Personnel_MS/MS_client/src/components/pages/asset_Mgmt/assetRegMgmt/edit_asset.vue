<template>
    <div class="edit_assetinfo">
        <current yiji="资产管理" erji="资产登记管理" sanji="资产信息查询" siji="资产修改">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">资产修改</span>
                <el-button type="primary" @click="handleSave" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">采购信息</el-col>
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
      custInfo: {},
      editAssetInfo: {}
    };
  },
  components: {
    current
  },
  created() {
  },
  methods: {
    handleSave() {
    }
  }
};
</script>

<style>
.edit_assetinfo {
  padding: 0 0 20px 20px;
}
</style>
