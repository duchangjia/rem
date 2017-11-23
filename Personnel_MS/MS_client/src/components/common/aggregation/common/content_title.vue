<template>
    <div class="title clearfix">
        <span class="title-text">{{titleTxt}}</span>
        <el-button class="btn-primary btn-title" v-show="showTitleBtn">{{btnTxt}}</el-button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                
            }
        },
        props:{
            titleTxt:{
                type:String,
                default:''
            },
            showTitleBtn:{
                type:Boolean,
                default:false
            },
            btnTxt:{
                type:String,
                default:''
            }
        }
    }
</script>
<style lang="scss">
    .title {
			border-bottom: 1px solid #EEEEEE;
			.title-text{
				display: inline-block;
				position: relative;
				padding: 14px 0px;
				font-size: 16px;
				height: 50px;
				&:after{
					content: '';
					position: absolute;
					left: 0;
					bottom: -1px;
					width: 100%;
					height: 2px;
					background: #333333;
				}
            }
            .btn-title{
                float:right;
                margin-top:10px;
            }
		}
</style>
