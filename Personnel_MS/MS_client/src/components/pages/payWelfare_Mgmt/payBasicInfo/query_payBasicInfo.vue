<template>
    <div class="pact_mgmt">
        <current yiji="薪酬福利" erji="薪酬基数设置">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">薪酬基数设置</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">新增</el-button>
            </el-col>

        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
export default {
  data() {
    return {
      filters: {
        name: "",
        pactType: ""
      },
      pageNum: 1,
      pageSize: 7,
      totalRows: 1,
      pactListInfo: []
    };
  },
  components: {
    current
  },
  created() {
    this.filters.name = "";
    this.filters.pactType = "";
    this.getPactList(); //初始查询合同列表
  },
  methods: {
    getPactList() {},
    pactTypeFormatter(row, column) {
      return row.pactType == 1 ? "劳动合同" : row.pactType == 0 ? "保密协议" : "异常";
    },
    pactStatusFormatter(row, column) {
      return row.pactStatus == 1 ? "已生效" : row.pactStatus == 0 ? "未生效" : "异常";
    },
    dateFormat(row, column) {},
    handlePactDetail(index, row) {},
    handleCurrentChange(val) {},
    handleQuery() {},
    handleAdd() {
      this.$router.push({
        name: "add_payBasicInfo"
      });
    },
    handleEdit(index, row) {},
    handleDelete(index, row) {}
  }
};
</script>


<style>
.pact_mgmt {
  padding: 0 0 20px 20px;
}
</style>
