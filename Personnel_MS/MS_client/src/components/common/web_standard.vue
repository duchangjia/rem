<template>
<div>
    <h1>前端UI标准概览</h1>
    <div class="q-content">
        <div class="q-list">
            <h2>按钮</h2>
            <div class="q-item">
                  <el-button class="btn-default">重置</el-button>
                  <el-button class="btn-primary">查询</el-button>
                  <el-button class="btn-primary">新增</el-button>
                  <i class="el-icon-edit"></i>
                  <i class="el-icon-delete2"></i>
                <p>代码如下</p> 
                <pre>
                    {{btnHtml}}
                </pre>
            </div>
        </div>
        <div class="q-list">
            <h2>删除弹窗样式</h2>
            <div class="q-item">
                  <i class="el-icon-delete2" @click="openDelete()"></i>
                <p>代码如下</p> 
                <pre>
                    删除弹窗样式无须修改
                </pre>
            </div>
        </div>
        <div class="q-list">
            <h2>修改新增页面结构</h2>
            <div class="q-item clearfix">
                外层div自定义，内部结构类名统一，current为面包屑组件
                <p>代码如下</p>
                <pre>
                    {{addHtml}}
                </pre>
            </div>
        </div>
        <div class="q-list">
            <h2>修改新增页面titlebar(依赖页面结构)</h2>
            <div class="q-item clearfix">
                <div class="content-wrapper">
                    <div class="titlebar">
                        <span class="title-text">标题</span>
                        <el-button type="primary" class="toolBtn btn-primary">保存</el-button>
                    </div>
                </div>
                <p>代码如下</p>
                <pre>
                   {{titleBar}}
                </pre>
            </div>
        </div>
        <div class="q-list">
            <h2>修改新增页面form表单(依赖页面结构)</h2>
            <div class="q-item clearfix">
                <div class="content-wrapper">
                    <div class="add-wrapper clearfix">
                        <el-form  label-width="110px" :inline="true" :model="data" ref="form" :rules="pactMsgRules">
                            <el-col :sm="24" :md="12" prop="text">
                                <el-form-item label="文本框">
                                    <el-input v-model="data.text"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :sm="24" :md="12" >
                                <el-form-item label="搜索文本框" prop="search">
                                    <el-input readonly="readonly" placeholder="请选择员工编号" v-model="data.search" >
                                        <el-button slot="append" icon="search"></el-button>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :sm="24" :md="12">
                                <el-form-item label="下拉框" prop="select" v-model="data.select">
                                    <el-select>
                                        <el-option label="选项1" value="1"></el-option>
                                        <el-option label="选项2" value="2"></el-option>
                                        <el-option label="选项3" value="3"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :sm="24" :md="12">
                                <el-form-item label="日期选择" prop="time">
                                    <el-date-picker type="date" placeholder="选择日期" style="width:100%;" v-model="data.time" @change="timePicker()"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :sm="24" :md="12">
                                <el-form-item label="上传文本框" prop="upload">
                                    <el-input v-model="data.upload"></el-input>
                                    <el-upload class="upload-demo"  ref="upload":show-file-list="false" :auto-upload="false" action="">
                                        <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
                                    </el-upload>
				  	            </el-form-item>
                            </el-col>
                        </el-form>
                    </div>
                </div>
                <p>代码如下</p>
                <pre>
                   {{formContent}}
                </pre>
            </div>
        </div>
        <div class="q-list">
            <h2>查询页面结构</h2>
            <div class="q-item clearfix">
                内部结构类名统一，current为面包屑组件
                <p>代码如下</p>
                <pre>
                    {{searchHtml}}
                </pre>
            </div>
        </div>
       <div class="q-list">
            <h2>查询页面titlebar(依赖页面结构)</h2>
            <div class="q-item clearfix">
                <div class="queryContent_wrapper">
                    <div class="titleBar">
				        <span class="title-text">查询页标题</span>
                        <el-button class="btn-primary">标题按钮</el-button>
			        </div>
                </div>
                <p>代码如下</p>
                <pre>
                   {{searchTitleBar}}
                </pre>
            </div>
        </div>
        <div class="q-list">
            <h2>查询页面搜索条件(依赖页面结构)</h2>
            <div class="q-item clearfix">
                <div class="queryContent_wrapper">
                    <div class="queryContent_inner">
                        <el-form>
                            <el-col :sm="12" :md="6">
                                <el-form-item label="下拉框">
                                    <el-select>
                                        <el-option label="选项1"></el-option>
                                        <el-option label="选项2"></el-option>
                                        <el-option label="选项3"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :sm="12" :md="6">
                                <el-form-item label="文本框">
                                    <el-input type="text" placeholder="文本框"></el-input>
                                </el-form-item>
                            </el-col>
                           <el-col :sm="12" :md="6">
                                <el-form-item label="下拉框">
                                    <el-select>
                                        <el-option label="选项1"></el-option>
                                        <el-option label="选项2"></el-option>
                                        <el-option label="选项3"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :sm="12" :md="6">
                                <el-form-item label="文本框">
                                    <el-input type="text" placeholder="文本框"></el-input>
                                </el-form-item>
                            </el-col>
                            <div class="queryButton_wrapper">
                                <el-button class="resetform btn-default" >重置</el-button>
                                <el-button  class="btn-primary">查询</el-button>
                            </div>
                        </el-form>
                    </div>
                </div>
                <!-- <p>代码如下</p>
                <pre>
                   {{searchTitleBar}}
                </pre> -->
            </div>
        </div>
    </div>
        
</div>
</template>
<<script>
export default {
  data(){
      return{
          data:{
            time:'',
            text:'',
            select:'',
            search:'',
            upload:''
          },
          pactMsgRules:{
               text: [{ required: true, message: "不能为空", trigger: "blur" }],
               time: [{ required: true, message: "不能为空", trigger: "blur" }],
               select: [{ required: true, message: "不能为空", trigger: "blur" }],
               search: [{ required: true, message: "不能为空", trigger: "blur" }],
               upload: [{ required: true, message: "不能为空", trigger: "blur" }],
               
          },
          btnHtml:`<el-button class="btn-default">重置</el-button>
                    <el-button class="btn-primary">查询</el-button>
                    <el-button class="btn-primary">新增</el-button>
                    <i class="el-icon-edit"></i>
                    <i class="el-icon-delete2"></i>`,

        addHtml:`<div class="container-wrap">
                    <current yiji="1级标题" erji="二级标题" sanji="三级标题">
                        <!-- 面包屑 -->
                    </current>
                    <div class="content-wrapper">
                        <div class="titlebar">
                            <!-- 头部标题和按钮 -->
                        </div>
                         <div class="add-wrapper">
                            <!-- 表单内容 -->
                         </div>
                    </div>
                </div>`,

        titleBar:`<div class="titlebar">
                        <span class="title-text">标题</span>
                        <el-button type="primary" class="toolBtn btn-primary">保存</el-button>
                    </div>`,

        formContent:`<div class="add-wrapper clearfix">
                        <el-form  label-width="110px" :inline="true" :model="data" ref="form" :rules="pactMsgRules">
                            <el-col :sm="24" :md="12" prop="text">
                                <el-form-item label="文本框">
                                    <el-input v-model="data.text"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :sm="24" :md="12" >
                                <el-form-item label="搜索文本框" prop="search">
                                    <el-input readonly="readonly" placeholder="请选择员工编号" v-model="data.search" >
                                        <el-button slot="append" icon="search"></el-button>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :sm="24" :md="12">
                                <el-form-item label="下拉框" prop="select" v-model="data.select">
                                    <el-select>
                                        <el-option label="选项1" value="1"></el-option>
                                        <el-option label="选项2" value="2"></el-option>
                                        <el-option label="选项3" value="3"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :sm="24" :md="12">
                                <el-form-item label="日期选择" prop="time">
                                    <el-date-picker type="date" placeholder="选择日期" style="width:100%;" v-model="data.time" @change="timePicker()"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :sm="24" :md="12">
                                <el-form-item label="上传文本框" prop="upload">
                                    <el-input v-model="data.upload"></el-input>
                                    <el-upload class="upload-demo"  ref="upload":show-file-list="false" :auto-upload="false" action="">
                                        <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
                                    </el-upload>
				  	            </el-form-item>
                            </el-col>
                        </el-form>
                    </div>`,
            searchHtml:`<div class="query_wrapper">
                    <current yiji="1级标题" erji="二级标题" sanji="三级标题">
                        <!-- 面包屑 -->
                    </current>
                    <div class="queryContent_wrapper">
                        <div class="titlebar">
                            <!--页面标题-->
                        </div>
                         <div class="queryContent_inner">
                            <el-form>
                                <!--查询条件-->
                            </el-form>
                            <el-table>
                                <!-- 查询列表 -->
                            </el-table>
                            <el-pagination>
                             <!-- 分页 -->
                            </el-pagination>
                         </div>
                    </div>
                </div>`,
            searchTitleBar:`<div class="titleBar">
				            <span class="title-text">查询页标题</span>
                            <el-button class="btn-primary">标题按钮</el-button>
			            </div>`
      }
  },
  methods:{
      openDelete(){
           let self = this;
            self.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
      },
      timePicker(val){
          this.time = val;
      }
  }
}
</script>

<style lang="scss">
h1{
    text-align:center;
    padding:20px 0;
}
h2{
    background:$color-bg;
    padding:10px 20px;
}
.q-list{
    margin-bottom:20px;
    .q-item{
        background:$bg-wihte;
        padding:20px;
        
        p{
            padding:10px 0;
        }
        pre{
            padding-bottom:20px;
            padding-left:20px;
        }

    }
}

</style>
