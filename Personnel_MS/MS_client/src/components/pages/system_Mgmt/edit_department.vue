<template>
    <div class="edit-wrapper">
        <current yiji="系统管理" erji="组织架构" sanji="编辑部门" class="test" ></current>
        <div class="edit-content">
            <div class="title">
                <span class="text">编辑部门</span>
                <el-button type="primary" @click="save" class="save">保存</el-button>
            </div>
            <div class="department-info">
                <div class="text">部门信息</div>
                <div class="item-common">
                    <div><span class="label-common">部门编号</span><input type="text" value="10000" class="input-common input-dark"></div>
                    <div><span class="label-common">部门名称</span><input type="text" value="互联网中心" class="input-common input-light"></div>
                </div>
                <div class="item-common">
                    <div><span class="label-common">上级部门</span><input type="text" value="10000" class="input-common input-dark"></div>
                    <div><span class="label-common">部门主管</span><input type="text" value="主管" class="input-common input-light"></div>
                </div>
                <div class="item-common">
                    <div><span class="label-common">部门类型</span><select  class="input-common input-select">
                        <option value="一级部门">一级部门</option>
                        <option value="二级部门">二级部门</option>
                        <option value="三级部门">三级部门</option>
                    </select></div>
                    <div><span class="label-common">部门状态</span><select class="input-common input-select">
                        <option value="正常">正常</option>
                        <option value="正常">正常</option>
                    </select></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    export default {
        components: {
            current,
        },
        methods: {
            save() {
                console.log('test')
            }
        }
    }
</script>

<style scoped>
.edit-wrapper{
    padding:27px 0 16px 20px ;
}
.edit-wrapper .test{
    padding-left: 10px;
}
.content-right .title{
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
}
.edit-content{
    background: #fff;
    padding-left: 20px;
    padding-right: 20px;
}
.edit-content .title{
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    justify-content: space-between;
}
.edit-content .title .text{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    border-bottom: 2px solid #363D47;
    height: 80px;
    line-height: 80px;
    width: 80px;
}
.edit-content .title .save {
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
.department-info{
    margin-top: 40px;
    padding-left: 8px;
    padding-bottom: 307px;
}
.department-info .text{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    line-height: 14px;
    width: 56px;
    height: 14px;
    margin-bottom: 30px;
}
.department-info .item-common{
    margin-bottom: 30px;
    display: flex;
    flex: 1;
}
.department-info .item-common>div{
    flex: 1;
}
.department-info .item-common .label-common{
    margin-right: 30px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    vertical-align: middle;
 }
.department-info .item-common .input-common{
    border-radius: 4px;
    width: 300px;
    height: 40px;
    border: none;
    text-indent: 1em;
    outline: none;
}
.department-info .item-common .input-select{
    border: 1px solid #EEEEEE;
    outline: none;
}
.department-info .item-common .input-dark{
    background: #F4F4F4;

}
.department-info .item-common .input-light{
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
}
</style>
