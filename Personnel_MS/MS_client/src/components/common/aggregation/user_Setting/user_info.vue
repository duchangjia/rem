<template>
    <div class="user_info">
        <current yiji="首页" erji="基本信息"></current>
        <div class="content">
        	<div class="title">
        		<span class="title-text">基本信息</span>
        	</div>
        	<div class="content-inner clearfix user_con">
				<div class="imgUserHead"><img src="../../../../../static/img/common/avatar.png" alt=""></div>
				<el-form class="clearfix" :inline="true" label-width="100" >
					<el-col :sm="24" :md="12" v-for="(item,index) in msgList" >
						<el-form-item :label="item.label" >
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
	import current from '../../../common/current_position.vue'
	const getMsgURL = '/iem_hrm/CustInfo/queryCustSelfInfo'
    export default {
		data() {
			return {
				msgList:[
					{
						label:'工号',
						val:''
					},
					{
						label:'姓名',
						val:'123425325'
					},
					{
						label:'直线经理',
						val:'123425325'
					},
					{
						label:'部门',
						val:'123425325'
					},
					{
						label:'职位',
						val:'123425325'
					},
					{
						label:'职级',
						val:'123425325'
					},
					{
						label:'合同实体',
						val:'123425325'
					},
					{
						label:'CCC',
						val:'123425325'
					},
					{
						label:'劳动合同截止日',
						val:'123425325'
					},
					{
						label:'入职日期',
						val:'123425325'
					},
					{
						label:'手机号码',
						val:'123425325'
					},
					{
						label:'个人资产',
						val:'123425325'
					}
				],
				dialogTableVisible:false,
				gridData:[]
				
			}
		},
		components: {
			current
		},
		mounted() {
			this.queryUserList();
		},
		methods: {
			queryUserList() {
				let self = this;
				self.$axios.get(getMsgURL)
				.then(function(res) {
					console.log('List',res.data.data);
					let data = res.data.data,
						assetTypeVal = '',
						assetInfListName = [],
						assetInfList = [];
					self.msgList[0].val = data.userNo
					self.msgList[1].val = data.custName
					self.msgList[2].val = data.lineManager
					self.msgList[3].val = data.derpName
					self.msgList[4].val = data.custPost
					self.msgList[5].val = data.custClass
					self.msgList[6].val = data.organName
					self.msgList[7].val = data.ownerCCC
					self.msgList[8].val = data.compactEndTime
					self.msgList[9].val = data.entryTime
					self.msgList[10].val = data.mobileNo
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
                .get("/iem_hrm/CustInfo/queryCustAsset")
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
            }
		}

    }
</script>

<style lang="scss">

.user_info {
	padding-left: 20px;
	width: 100%;
}

.location-wrapper {
	width: 100%;
    height: 70px;
    line-height: 70px;
    font-size: 12px;
}

.location-wrapper .title {
    color: #475669;
    vertical-align: middle;
}
.location-wrapper .breadcrumb-inner {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
}
.user_info .content {
	width: 100%;
    height: calc(100% - 90px);
	padding: 0px 40px;
	background: #ffffff;
}
.user_info .content .title {
	border-bottom: 1px solid #EEEEEE;
}
.user_info .content .title .title-text{
	display: inline-block;
	position: relative;
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
}
.user_info .content .title .title-text:after{
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}


.user_con{
	margin:0 auto;
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
		label{
			color:#999;
			font-weight:normal;
			text-align:right;
			padding:0;
			height:36px;
			line-height:36px;
			min-width:110px;
			margin-right:20px;
		}
		.el-form-item__content{
			width:100px;
			&:last-child{
				width:200px;
				.el-input__inner{
					cursor:pointer;
				}
			}
			.el-input__inner{
				border:none;
				padding:0;
			}
		}
		
	}
	.el-dialog__title{color:#333;font-weight:normal;}
	.el-dialog__headerbtn .el-dialog__close{color:#ff9900;}
	.el-dialog__headerbtn:hover .el-dialog__close{color:#ff6600;}
	.el-dialog__header{background:#eef1f6;padding-bottom:20px;}
	.el-dialog__body{padding-top:20px;}
	.el-dialog__body p{margin-bottom:20px;color:#FF6666;}
}

</style>
