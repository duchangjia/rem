<template>
	<div class="content_wrap">
		<current yiji="考勤管理" erji="考勤数据查询" sanji="考勤数据导入"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">考勤数据导入</span>
			</div>
			<div class="content-inner">
				<el-form ref="formdata" :inline="true" :rules="rules" :model="formdata" label-width="100px">
					<el-form-item label="文件" style="width: 100%;">
				  		<el-input v-model="formdata.attachm"></el-input>
				  		<el-upload class="upload-demo upload_btn" :on-change="handleChange" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
                            <el-button slot="trigger" type="primary" >选取文件</el-button>
                       </el-upload>
                       <div class="btn_wrap">
	                       	<el-button type="primary"  class="upload_btn" @click="handleImport">导入</el-button>
							<el-button type="primary"  class="upload_btn" @click="handleDownload">模版下载</el-button>
                       </div>
						
                        
				  	</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../../common/current_position.vue'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			formdata: {
				attachm: ""
			},
			rules: {
				attachm: [
					
				]
			}
		}
	},
	components: {
		current
	},
	methods: {
      	handleChange(file, fileList) {
//		    this.fileList3 = fileList.slice(-3);
			console.log(file);
      	},
		handleImport() {
			let self = this;
			let params = {
				
			};
			self.$axios.get(baseURL+'/batchimport', {params: params})
			.then(function(res) {
				console.log(res);
				
			}).catch(function(err) {
				console.log(err);
			})
		},
		handleDownload() {
			let self = this;
			let params = {
				
			};
			self.$axios.get(baseURL+'/download', {params: params})
			.then(function(res) {
				console.log(res);
			}).catch(function(err) {
				console.log(err);
			})
		}
	}
}
</script>

<style>
</style>