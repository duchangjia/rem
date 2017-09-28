<template>
    <div class="framework-content-wrapper">
        <current yiji="系统管理" erji="组织架构" class="test"></current>
        <div class="framework-content">
           <div class="content-left">
               <div class="content-left-title"><img  height="21px" src="../../../../static/img/common/home_logo.png" /><span class="text">深圳前海橙色魔方信息技术有限公司</span></div>
               <ul class="list ">
                   <li class="guangzhou common L">广州分公司<span class="count">(111)</span></li>
                   <li class="shanghai common L">上海分公司<span class="count">(111)</span>
                    <ul class="common-list ">
                        <li class=" common dot">行政部<span class="count">(111)</span></li>
                        <li class=" common dot">行政部<span class="count">(111)</span></li>
                        <li class=" common dot">行政部<span class="count">(111)</span></li>
                        <li class=" common dot">行政部<span class="count">(111)</span></li>
                        <li class=" common dot">行政部<span class="count">(111)</span>
                            <ul class="common-list-item">
                                <li class="common dot">一部<span class="count">(111)</span></li>
                                <li class="common dot">一部<span class="count">(111)</span></li>
                                <li class="common dot">一部<span class="count">(111)</span></li>
                            </ul>
                        </li>
                    </ul>
                   </li>
               </ul>
           </div>
           <div class="content-right">
               <div class="title">
                   <span class="text">互联网中心</span>
                   <div class="button-wrapper" style="display: flex">
                       <el-button class="del">删除</el-button>
                       <el-button type="primary" @click="handleAdd('edit_department')" class="toolBtn">编辑</el-button>
                   </div>
               </div>
               <div class="form1-wrapper">
                   <span>上级机构</span><input type="text" value="上海分公司"><br>
                   <span>主管</span><input type="text" value="上海分公司"><br>
                   <span>类型</span><select value="">
                   <option value="一级部门">一级部门</option>
                   <option value="一级部门">一级部门</option>
                   <option value="一级部门">一级部门</option></select><br>
                   <span>状态</span><input type="text" value="上海分公司">
               </div>
               <div class="title" style="margin-top: 36px;">
                   <span class="text">下级机构</span>
                   <el-button type="primary" @click="handleAdd('add_junior')" class="toolBtn">新增</el-button>
               </div>
               <div class="table-wrapper" style="margin-top: 13px; text-align: right;">
                   <!--<table>-->
                       <!--<tr><td>名称</td><td>类型</td><td>主管</td><td>状态</td></tr>-->
                       <!--<tr><td>研发部</td><td>三级部门</td><td>老王</td><td>正常</td></tr>-->
                       <!--<tr><td>研发部</td><td>三级部门</td><td>老王</td><td>正常</td></tr>-->
                       <!--<tr><td>研发部</td><td>三级部门</td><td>老王</td><td>正常</td></tr>-->
                       <!--<tr><td>研发部</td><td>三级部门</td><td>老王</td><td>正常</td></tr>-->
                       <!--<tr><td>研发部</td><td>三级部门</td><td>老王</td><td>正常</td></tr>-->
                   <!--</table>-->
                   <template>
                       <el-table
                               :data="tableData"
                               border
                               stripe
                               >
                               <el-table-column
                                       prop="date"
                                       label="名称"
                                       align="center"
                                       >
                               </el-table-column>
                               <el-table-column
                                       prop="type"
                                       label="类型"
                                       align="center"
                               >
                               </el-table-column>
                               <el-table-column
                                       prop="name"
                                       label="主管"
                                       align="center"
                                      >
                               </el-table-column>
                               <el-table-column
                                       prop="address"
                                       label="状态"
                                       align="center">
                               </el-table-column>
                       </el-table>
                   </template>
                   <div class="block" style="margin-top: 40px; display: inline-block;">
                       <el-pagination
                               @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"
                               :current-page.sync="currentPage3"
                               :page-size="100"
                               layout="prev, pager, next, jumper"
                               :total="1000">
                       </el-pagination>
                   </div>
               </div>
               <div class="title" style="margin-top: 36px;">
                   <span class="text">机构人员</span>
                   <el-button type="primary" @click="handleAdd('add_person')" class="toolBtn">新增</el-button>
               </div>
               <div class="table-wrapper" style="margin-top: 13px; text-align: right;">
                   <template>
                       <el-table
                               :data="tableData2"
                               border
                               stripe
                       >
                           <el-table-column
                                   prop="user_name"
                                   label="姓名"
                                   align="center"
                           >
                           </el-table-column>
                           <el-table-column
                                   prop="user_num"
                                   label="工号"
                                   align="center"
                           >
                           </el-table-column>
                           <el-table-column
                                   prop="position"
                                   label="职位"
                                   align="center"
                                   width="170"
                           >
                           </el-table-column>
                           <el-table-column
                                   prop="phone"
                                   label="手机"
                                   align="center">
                           </el-table-column>
                           <el-table-column
                                   label="操作"
                                   align="center">
                               <template scope="scope">
                                   <i class="el-icon-delete" style="color: #FF9900"></i>
                               </template>
                           </el-table-column>
                       </el-table>
                   </template>
                   <div class="block" style="margin-top: 40px; display: inline-block;">
                       <el-pagination
                               @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"
                               :current-page.sync="currentPage3"
                               :page-size="100"
                               layout="prev, pager, next, jumper"
                               :total="1000">
                       </el-pagination>
                   </div>
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
                currentPage3: 1,
                tableData: [{
                    date: '研发部',
                    name: '王小虎',
                    address: '正常',
                    type: '三级部门'
                }, {
                    date: '研发部',
                    name: '王小虎',
                    address: '正常',
                    type: '三级部门'
                }, {
                    date: '研发部',
                    name: '王小虎',
                    address: '正常',
                    type: '三级部门'
                }, {
                    date: '研发部',
                    name: '王小虎',
                    address: '正常',
                    type: '三级部门'
                }, {
                    date: '研发部',
                    name: '王小虎',
                    address: '正常',
                    type: '三级部门'
                }],
                tableData2: [
                    {
                        user_num: 'P001',
                        user_name: '王小虎',
                        position: '高级软件开发工程师',
                        phone: '13111111111',
                    },
                    {
                        user_num: 'P001',
                        user_name: '王小虎',
                        position: '高级软件开发工程师',
                        phone: '13111111111',
                    },
                    {
                        user_num: 'P001',
                        user_name: '王小虎',
                        position: '高级软件开发工程师',
                        phone: '13111111111',
                    },
                    {
                        user_num: 'P001',
                        user_name: '王小虎',
                        position: '高级软件开发工程师',
                        phone: '13111111111',
                    },
                    {
                        user_num: 'P001',
                        user_name: '王小虎',
                        position: '高级软件开发工程师',
                        phone: '13111111111',
                    },
                ]
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleAdd(tt) {
                this.$router.push(tt);
            }
        },
        components: {
            current,
        }
    }
</script>

<style scoped>
.framework-content-wrapper *{
    margin:0;
    padding: 0;
}
.framework-content-wrapper .test{
   padding-left: 10px;
}
.framework-content-wrapper{
    padding:27px 0 16px 20px ;
}
.framework-content-wrapper .framework-content{
    margin-top: 27px;
    display: flex;
}
.framework-content .content-left{
    flex: 0 0 350px;
    width: 350px;
    background: #fff;
    padding: 32px 0 0 32px;
}
.framework-content .content-right{
    flex: 1;
    padding-left: 41px;
    padding-right: 40px;
    padding-bottom: 40px;
    background: #fff;
    border-left: 1px solid #eee;
}
.content-left-title>img{
    vertical-align: middle;
    margin-right: -54px;
}
.content-left .text{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    line-height: 16px;
    height: 16px;
    display: inline-block;
    margin-left: 6.7px;
    vertical-align: middle;
}
.content-left .list{
    margin-top: 32px;
    padding-left: 18px;
}
.content-left .common{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    line-height: 14px;
    margin-bottom: 20px;
    margin-right: 4px;
}
.content-left ul>li:first-child{
    margin-top: 20px;
}
.list .count{
    margin-left: 4px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #CCCCCC;
    letter-spacing: 0;
}
ul, li{
    list-style: none;
}
.list>.L:before{
    display: inline-block;
    content: 'L';
    color: #CCCCCC;
    width: 8px;
    height: 12px;
    margin-right: 10px;
}
.list .dot:before{
    display: inline-block;
    content: '';
    background: #CCCCCC;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin-right: 10px;
    vertical-align: middle;
}
.list .common-list{
    padding-left: 18px;
}
.list .common-list .common-list-item{
    padding-left: 16px;
}
.content-right .title{
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
}
.content-right .title .text{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    margin-right: 309px;
    border-bottom: 2px solid #363D47;
    height: 80px;
    line-height: 80px;
    width: 80px;
}
.content-right .title .del {
    border-radius: 0;
    height: 40px;
    line-height: 40px;
    width: 120px;
    color: #FF9900;
    border-color:#FF9900 ;
    margin-right: 20px;
}
.content-right .title .toolBtn {
    border-radius: 0;
    height: 40px;
    line-height: 40px;
    width: 120px;
    background: #FF9900;
    border: none;
}
.form1-wrapper{
    padding-left: 10px;
    margin-top: 40px;
}
.form1-wrapper>span{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    line-height: 14px;
    width: 56px;
    height: 14px;
    display: inline-block;
    margin-right: 30px;
    vertical-align: middle;
    text-align: right;
}
.form1-wrapper>input, .form1-wrapper>select{
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    width: 300px;
    height: 40px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    line-height: 14px;
    text-indent: 1em;
    margin-bottom: 20px;
}

</style>
