<template>
	<el-form :inline="true" :model="userDetail" label-width="80px">
					
		<el-col :span="12">
			<el-form-item label="object">
				<el-select v-model="comp" value-key="compOrgNo" placeholder="所属公司" @change="changeValue">
					<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="name">
				<el-select v-model="comp.compName" placeholder="所属公司" @change="changeValue">
					<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compName"></el-option>
				</el-select>
			</el-form-item>
		</el-col>
		
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				userDetail:{
					compName: 'adasd',
					compOrgNo: '12'	
				},
				comp: {
					compName: '广州分公司',
					compOrgNo: '02'	
				},
				compList: [
					{compName: '广州分公司',compOrgNo: '01'},
					{compName: '深圳分公司',compOrgNo: '02'},
					{compName: '上海分公司',compOrgNo: '03'}
				]
			}
		},
		created() {
			console.log('comp'+this.comp);
		},
		methods: {
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
	            
	       },
		}
	}
</script>

<style>
</style>