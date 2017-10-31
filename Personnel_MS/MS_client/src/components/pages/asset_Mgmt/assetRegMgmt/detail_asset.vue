<template>
    <div class="detail_assetinfo">
        <current yiji="资产管理" erji="资产登记管理" sanji="资产信息查询" siji="资产详情">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">资产详情</span>
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
      addAssetInfo: {}
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
.detail_assetinfo {
  padding: 0 0 20px 20px;
}
</style>
