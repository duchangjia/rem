<template>
    <div class="agg-content">
        <current yiji="首页" erji="基本信息"></current>
        <div class="content">
			<contentTitle titleTxt="基本信息"></contentTitle>
        	<div class="content-inner clearfix user_con">
				<div class="imgUserHead">
					<!-- <img src="../../../../../static/img/common/avatar.png" alt=""> -->
					<img v-if="imageUrl" :src="imageUrl">
				</div>
				<el-form class="clearfix" :inline="true" label-width="100" >
					<el-col :sm="24" :md="12" v-for="(item,index) in msgList" >
						<el-form-item :label="item.label" class="no-border-input">
							<div @click="searchAsset(index)">
								<el-input v-model="item.val" readonly="readonly" ></el-input>
							</div>
						</el-form-item>
					</el-col>
				</el-form>
				 <el-dialog title="个人资产查询" :visible.sync="dialogTableVisible" size="large" >
					<p>若实际使用的IT资产情况与以下显示信息不符，还请及时与后台人员联系核实并更改以确保您名下资产的准确性</p>
					<el-table :data="gridData"  height="200" stripe>
						<el-table-column prop="" label="序号"  align="center">
							<template scope="scope">
								{{scope.$index+1}}
							</template>
						</el-table-column>
						<el-table-column prop="assetNo" label="资产编码"  align="center"></el-table-column>
						<el-table-column prop="organName" label="公司" align="center"></el-table-column>
						<el-table-column prop="assetType" label="资产类型" align="center" :formatter="assetTypeFormatter"></el-table-column>
						<el-table-column prop="custName" label="使用人"  align="center"></el-table-column>
					</el-table>
        		</el-dialog> 
        	</div>
			
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
	import current from '../common/current_position.vue'
	import contentTitle from '../common/content_title.vue'
	import api from '../../../../common/api/api.js'
	// let {custSelfInfo,queryCustAsset} = api
	const baseURL = 'iem_hrm';
    export default {
		data() {
			return {
				//头像数据
                imageUrl: '',
				msgList:[
					{
						label:'工号',
						val:'暂无数据'
					},
					{
						label:'姓名',
						val:'暂无数据'
					},
					{
						label:'直线经理',
						val:'暂无数据'
					},
					{
						label:'部门',
						val:'暂无数据'
					},
					{
						label:'职位',
						val:'暂无数据'
					},
					{
						label:'职级',
						val:'暂无数据'
					},
					{
						label:'合同实体',
						val:'暂无数据'
					},
					{
						label:'CCC',
						val:'暂无数据'
					},
					{
						label:'劳动合同截止日',
						val:'暂无数据'
					},
					{
						label:'入职日期',
						val:'暂无数据'
					},
					{
						label:'手机号码',
						val:'暂无数据'
					},
					{
						label:'个人资产',
						val:'暂无数据'
					}
				],
				dialogTableVisible:false,
				gridData:[],
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				//CCC列表
				costTypeList: [],
				// titleTxt:'',
				// showTitleBtn:false
				
			}
		},
		components: {
			current,contentTitle
		},
		mounted() {
			//查询头像
			this.queryUserImage();
			//查询用户信息
			this.queryUserList();
		},
		methods: {
			queryUserList() {
				let self = this;
				self.$axios.get(api.custSelfInfo)
				.then(res =>{
					console.log('List',res.data.data);
					let data = res.data.data,
						assetTypeVal = '',
						assetInfListName = [],
						assetInfList = [];
					self.msgList[0].val = data.userNo||'暂无数据'
					self.msgList[1].val = data.custName||'暂无数据'
					self.msgList[2].val = data.lineManager||'暂无数据'
					self.msgList[3].val = data.derpName||'暂无数据'
					self.msgList[4].val = data.custPost||'暂无数据'
					self.msgList[5].val = data.custClass||'暂无数据'
					self.msgList[6].val = data.organName||'暂无数据'
					self.msgList[7].val = data.costCode||'暂无数据'
					self.msgList[8].val = data.compactEndTime||'暂无数据'
					self.msgList[9].val = data.entryTime||'暂无数据'
					self.msgList[10].val = data.mobileNo||'暂无数据'
					
					
					//查询岗位列表
					this.queryCustPostList();
					//查询职级列表
					this.queryCustClassList();
					//查询CCC列表
					this.queryCostTypeList();
					//查询直线经理
					// self.queryUserInfo(self.msgList[2].val);
					for(let i = 0 ; i< data.assetInfList.length;i++){
						let assetType = data.assetInfList[i].assetType;
						switch(assetType){
							case '01':
								assetType = '办公用品'
							break;
							case '02':
								assetType ='电脑'
							break;
							case '03':
								assetType = '手机'
							break;
							case '04':
								assetType = '后勤用品'
							break;
							case '05':
								assetType ='数码相机'
							break;
						}
						assetInfList.push(assetType)
					}
					assetInfList.sort();
					for (let i = 0; i < assetInfList.length;) {
						let count = 0;
						for (let j = i; j < assetInfList.length; j++) {
						if (assetInfList[i] === assetInfList[j]) {
							count++;
						}
						}
						assetInfListName.push({
							name: assetInfList[i],
							count: count
						})
						i+=count;
					  }
					  for(let i = 0;i<assetInfListName.length;i++){
						  assetTypeVal += assetInfListName[i].name+'('+assetInfListName[i].count+'),'
					  }
					self.msgList[11].val = assetTypeVal
					 
					// self.quanxianList = res.data.data.list;
				}).catch(function(err) {
					console.log(err);
				})
			},
			searchAsset(index){ 
				console.log(index);
				if(index !== 11){
					return
				}
               let self = this;
               self.$axios
                .get(queryCustAsset)
                .then(res => {
                    console.log(res)
                self.gridData =  res.data.data
                
                // // self.pagination.total = res.data.data.total
                // console.log(res,'列表数据');
                console.log(self.gridData)
                 if(self.gridData.length == 0){
                        self.$message({
                            type: "error",
                            message: "查找内容不存在！"
                        });
                    }else{
                        self.dialogTableVisible = true;
                    }
                
                })
                .catch(e => {
                console.log(e);
                });   
		   },
		   assetTypeFormatter(row, column) {
            return row.assetType == "01"
                ? "全部"
                :       row.assetType == "02"
                ? "办公用品"
                : row.assetType == "03"
                    ? "电脑"
                    : row.assetType == "04" ? "后勤用品" : "异常";
			},
			queryCustPostList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
				.then((res) => {
					console.log('CustPost',res);
					if(res.data.code === "S00000") {
						self.custPostList = res.data.data;
						self.custPostList.forEach((ele,num) => {
							if(ele.paraValue == self.msgList[4].val) {
								self.msgList[4].val = ele.paraShowMsg;
							}
						});
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
			queryCustClassList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED')
				.then((res) => {
					console.log('CustClass',res);
					if(res.data.code === "S00000") {
						self.custClassList = res.data.data;
						self.custClassList.forEach((ele,num) => {
							if(ele.paraValue == self.msgList[5].val) {
								self.msgList[5].val = ele.paraShowMsg;
							}
						});
					}
				}).catch((err) => {
					console.log('error');
				})
			},
			queryCostTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=COST_TYPE')
				.then((res) => {
					console.log('costType',res);
					if(res.data.code === "S00000") {
						self.custClassList = res.data.data;
						self.custClassList.forEach((ele,num) => {
							if(ele.paraValue == self.msgList[7].val) {
								self.msgList[7].val = ele.paraShowMsg;
							}
						});
					}
				}).catch((err) => {
					console.log('error');
				})
			},
			queryUserImage() {
				this.$axios.get(baseURL+'/CustInfo/queryLoadCustAvatar')
                    .then(res=>{
                        console.log('头像查询', res)
                        if(res.data.data) {
                            let url = 'data:image/jpg;base64,'+res.data.data
                            this.imageUrl = url
                        }
                    })
                    .catch(e=>{
                        console.log(e)
                    })
			},
			queryUserInfo(userNo) {
				let self = this;
				self.$axios.get(baseURL+'/CustInfo/queryCustInfoByUserNo/'+ userNo)
				.then((res) => {
					console.log('userInfo',res);
					self.msgList[2].val = res.data.data.custName;
				}).catch((err) => {
					console.log(err);
				})
			}
		}

    }
</script>

<style lang="scss">

.user_con{
	font-size:14px;
	padding-top:30px;
	padding-bottom:10px;
	span{
		color:#000;
	}
	.imgUserHead{
		@include size(100px,100px);
		border-radius:50%;
		overflow: hidden;
		margin: 0 auto;
		margin-bottom:30px;
		position: relative;
		left:20px;
		img{
			height:100%;
			width:100%;
		}
	}
	form{
		padding-left:100px;
		text-align:center;
		
		.el-form-item__content{
			width:100px;
			&:last-child{
				width:200px;
				.el-input__inner{
					cursor:pointer;
				}
			}
		}	
	}
	.el-dialog__body p{
		margin-bottom:20px;
		color:#FF6666;
	}
	
}

</style>
