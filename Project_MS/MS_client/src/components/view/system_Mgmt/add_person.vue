<template>
    <div class="edit-wrapper">
        <current yiji="系统管理" erji="组织架构" sanji="新增机构人员"></current>
        <div class="person-content">
            <div class="title">
                <span class="text">新增机构人员</span>
                <el-button type="primary" @click="save" class="save">保存</el-button>
            </div>
            <div class="serach">
                <span class="text">查询条件</span><input type="text" placeholder="请输入员工工号或姓名">
                <button>查询</button>
            </div>
            <div class="table-wrapper" style="text-align: right;">
                <template>
                    <el-table
                            ref="multipleTable"
                            :data="tableData"
                            border
                            stripe
                            tooltip-effect="dark"
                            @selection-change="handleSelectionChange"
                            >
                        <el-table-column
                                type="selection"
                                align="center">
                        </el-table-column>
                        <el-table-column
                                label="工号"
                                align="center"
                               >
                            <template scope="scope">{{ scope.row.number }}</template>
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="姓名"
                                align="center"
                                show-overflow-tooltip
                                >
                        </el-table-column>
                        <el-table-column
                                prop="phone"
                                label="手机"
                                align="center">
                        </el-table-column>
                    </el-table>
                </template>
                <div class="block" style="margin-top: 40px; display: inline-block;">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :page-size="100"
                            layout="prev, pager, next, jumper"
                            :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    export default {
        data() {
            return {
                multipleSelection: [],
                checked: false,
                tableData: [{
                    number: 'P00000',
                    name: '王小虎',
                    phone: '13222222222'
                }, {
                    number: 'P00000',
                    name: '王小虎',
                    phone: '13222222222'
                }, {
                    number: 'P00000',
                    name: '王小虎',
                    phone: '13222222222'
                }, {
                    number: 'P00000',
                    name: '王小虎',
                    phone: '13222222222'
                },{
                    number: 'P00000',
                    name: '王小虎',
                    phone: '13222222222'
                },{
                    number: 'P00000',
                    name: '王小虎',
                    phone: '13222222222'
                },
                ]
            }
        },
        components: {
            current,
        },
        methods: {
            save() {
                console.log('save')
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style scoped>
.edit-wrapper{
    padding:0px 0 20px 20px ;
}
.edit-wrapper .test{
    padding-left: 10px;
}
.person-content{
    /*margin-top: 29px;*/
    background: #fff;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
}
.person-content .title{
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    justify-content: space-between;
}
.person-content .title .text{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    border-bottom: 2px solid #363D47;
    height: 80px;
    line-height: 80px;
    width: 96px;
}
.person-content .title .save {
    border-radius: 0;
    height: 40px;
    width: 120px;
    background: #F4F4F4;
    border: none;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
}
.serach{
    margin: 40px 0;
}
.serach .text{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    line-height: 14px;
    margin-right: 30px;
}
.serach>input{
    width: 200px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    margin-right: 40px;
    text-indent: 1em;
    outline: none;
}
.serach>button{
    width: 120px;
    height: 40px;
    background: #FF9900;
    border: 1px solid #FF9900;
    ont-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
}
::-webkit-input-placeholder { /* WebKit browsers */
    color: #CCCCCC;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #CCCCCC;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #CCCCCC;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #CCCCCC;
}
</style>
