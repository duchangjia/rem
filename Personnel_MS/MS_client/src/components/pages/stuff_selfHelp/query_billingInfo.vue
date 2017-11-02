<template>
    <div class="paybaseinfo_mgmt">
        <current yiji="员工自助" erji="开票信息查询">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">开票信息查询</span>
            </el-col>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
export default {
  data() {
    return {
      
    };
  },
  components: {
    current
  },
  created() {
  },
  methods: {
    getCustInfoList() {},
    handleQuery() {}
  }
};
</script>


<style>
.paybaseinfo_mgmt {
  padding: 0 0 20px 20px;
}
</style>
