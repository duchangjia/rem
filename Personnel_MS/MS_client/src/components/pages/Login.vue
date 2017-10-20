<template>
    <div id="wrap">
        <div class="login-wrap">
            <div class="header"></div>
            <div class="main">
                <div class="img-wrapper"><img src="../../../static/img/login/omc_logo1.png" alt=""></div>
                <div class="form-wrapper">
                    <img src="../../../static/img/login/fly.png" alt="" width="86" height="77" class="fly">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form-content"  v-loading.fullscreen.lock="fullscreenLoading"  element-loading-text="登录中">
                        <span class="title">用户登录</span>
                        <el-form-item prop="username">
                            <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                        </el-form-item>
                        <el-form-item class="code-wrapper" prop="imageCode">
                            <el-input  placeholder="请输入验证码" class="last-input" v-model="ruleForm.imageCode" @keyup.enter.native="submitForm('ruleForm')"></el-input><span class="check-code" @click="changeCode"><img
                                :src="pic"></span>
                        </el-form-item>
                        <div class="error" style="display: none">帐号或密码错</div>
                        <el-button class="tijiao" @click="submitForm('ruleForm')">登录</el-button>
                        <a class="text" href="#">忘记密码</a>
                    </el-form>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                    <!--<errtip :title="title" :content="content" class="errtip" ref="errtip"></errtip>-->
                </div>
            </div>
            <div class="bottom">
                <span class="text">
                    橙色魔方版权所有 © Copyright Orange Magic Cube Co.ltd.All Rights Reserved. | 粤ICP备2553149号
                </span>
            </div>
        <!--<div class="ms-title">后台管理系统</div>-->
        <!--<div class="ms-login">-->
            <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">-->
                <!--<el-form-item prop="username">-->
                    <!--<el-input v-model="ruleForm.username" placeholder="username"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item prop="password">-->
                    <!--<el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>-->
                <!--</el-form-item>-->
                <!--<div class="login-btn">-->
                    <!--<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>-->
                    <!--<p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>-->
                <!--</div>-->
            <!--</el-form>-->
        <!--</div>-->
        </div>
        <errtip></errtip>
        <!--<toast></toast>-->
    </div>
</template>

<script>
	import Bus from '../../common/Bus.js'
//	import Toast from '../common/Toast.vue';
	import errtip from './errTip.vue'
    export default {
        data: function(){
            return {
                fullscreenLoading: false,
                pic:'',
                ruleForm: {
                    username: '',
                    password: '',
                    imageCode: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    imageCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                }
            }
        },
        created() {
            this.$axios.get('/api/auth/code/image', {responseType: 'blob'})
                .then( res => {
                    let reader = new FileReader()
                    reader.onload = (e => {
                        this.pic = e.target.result
                    })
                    reader.readAsDataURL(res.data)
                })
                .catch( (e)=> {
                    console.log(e)
                })
        },
        components: {
        	errtip
        },
        methods: {
            changeCode() {
              this.$axios.get('/api/auth/code/image', {responseType: 'blob'})
                  .then( res => {
                      let reader = new FileReader()
                      reader.onload = (e => {
                          this.pic = e.target.result
                      })
                      reader.readAsDataURL(res.data)
                  })
                  .catch( (e)=> {
                      console.log(e)
                  })
            },
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.fullscreenLoading = true;
//                        var loadingInstance = this.$loading({
//                            target: '.form-content',
//                            lock: true,
//                            text: '加载中'
//                        })
                    	//吐丝提示
//						Bus.$emit('showToast','正在努力加载中...');
                        var params = new URLSearchParams();
                        params.append('username', self.ruleForm.username);
                        params.append('password', self.ruleForm.password);
                        params.append('imageCode', self.ruleForm.imageCode);
//                            'http://10.0.0.6:3000/checkuser'
//                            self.$axios.get('/ifdp/checkuser',data)
//                        dataType:"json",
//                    contentType:"application/json",
//                    data:JSON.stringify(this.content2),
                            self.$axios.post('/api/auth/authentication/login', params, {
                                auth:{
                                    username:'iem_cloud',
                                    password:'thisissecret'
                                },
                            })
                                .then( function (res) {
//                                    let result = res.data.data
                                    let access_token = res.data.access_token
                                    let refresh_token = res.data.refresh_token
                                    window.localStorage.setItem('access_token', JSON.stringify(access_token))
                                    window.localStorage.setItem('refresh_token', JSON.stringify(refresh_token))
                                    if(true){
                                        localStorage.setItem('ms_username',self.ruleForm.username);
                                        self.fullscreenLoading = false
                                        self.$router.push('home');
                                    }else{
                                        Bus.$emit('showErrTip',{content:'登录失败！帐号或密码错。',title:'温馨提示'});
//                                        self.content = '登录失败！帐号或密码错'
//                                        self.$refs.errtip.errflag = false
                                    }
                                })
                                .catch( function (e) {
                                    self.fullscreenLoading = false
                                    console.log(e)
                                    self.$axios.get('/api/auth/code/image', {responseType: 'blob'})
                                        .then( res => {
                                            let reader = new FileReader()
                                            reader.onload = (e => {
                                                self.pic = e.target.result
                                            })
                                            reader.readAsDataURL(res.data)
                                        })
                                        .catch( (e)=> {
                                            console.log(e)
                                        })
                                })
                    } else {
//                        self.content = '登录失败！请填写正确的账号和密码'
//                        console.log(self.content,self.title,self.$refs.errtip)
//                        self.$nextTick(function () {
//                            self.$refs.errtip.errflag = false
//                        })

                        Bus.$emit('showErrTip',{content:'登录失败！请填写正确的账号和密码。',title:'温馨提示'});
//                        this.$alert('请填写正确的账号和密码', '温馨提示', {
//                            confirmButtonText: '确定',
//                            callback: action => {
//                                this.$message({
//                                    type: 'info',
//                                    message: `action: ${ action }`
//                                });
//                            }
//                        });

                    }
                });
                return false
            }
        }
    }
</script>

<style>
    #wrap .el-loading-mask{
        background-color: rgba(0,0,0,.5);
    }
    #wrap .login-wrap{
        overflow: hidden;
        width: 100%;
        margin: 0 auto;
        position: relative;
        height: 800px;
    }
    #wrap .login-wrap .header{
        height: 480px;
        width: 100%;
        background: #363D47 url("../../../static/img/login/bg_Bitmap.png") no-repeat left bottom;
        background-size: 100% ;
    }
    #wrap .login-wrap .main{
        position: absolute;
        top: 136px;
        left: 50%;
        transform: translate3d(-50%, 0 ,0);
    }
    #wrap .login-wrap .bottom{
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        height: 320px;
        background: #F7F7F7 url("../../../static/img/login/Rectangle 17.png") no-repeat top center;
    }
    #wrap .login-wrap .bottom .text{
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        letter-spacing: -0.29px;
        line-height: 12px;
        display: block;
        width: 540px;
        height: 12px;
        margin: 268px auto 40px auto;
    }
    #wrap .img-wrapper{
        text-align: center;
    }
    #wrap .img-wrapper>img{
        width: 260px;
        height: 64px;
    }
    #wrap .form-wrapper{
        position: relative;
        margin-top: 40px;
    }
    #wrap .form-wrapper .fly{
        position: absolute;
        right: -86px;
        top: -77px;
    }
    #wrap .form-wrapper .line1{
        width: 328px;
        height: 4px;
        background: #F1F1F1;
        margin: 0 auto;
    }
    #wrap .form-wrapper .line2{
        width: 308px;
        height: 4px;
        margin: 5px auto 5.5px auto;
        background: #F2F2F2;
    }
    #wrap .form-wrapper .line3{
        width: 288px;
        height: 4px;
        background: #F3F3F3;
        margin: 0 auto;
    }
    #wrap .el-form{
        width: 330px;
        height: 370px;
        background: #FFFFFF;
        overflow: hidden;
    }
    #wrap .form-content .title{
        display: block;
        margin:30px auto;
        width: 64px;
        height: 16px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #282828;
        letter-spacing: -0.39px;
        line-height: 16px;
    }
    #wrap .form-content .el-form-item{
        display: block;
        box-sizing: border-box;
        width: 260px;
        height: 40px;
        background: #FFFFFF;
        border-radius: 4px;
        margin: 0 auto 20px auto;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        line-height: 14px;
    }
    #wrap .form-content .el-form-item:nth-child(odd){
        letter-spacing:  -0.34px;
    }
    #wrap .el-form-item .el-input{
        width: 100%;
        height: 100%;
    }
    #wrap .form-content .code-wrapper{
        margin: 0 auto 23px auto;
        box-sizing: border-box;
        width: 260px;
    }
    #wrap .form-content .last-input{
        width: 160px;
        height: 40px;
        /*border: 1px solid #EEEEEE;*/
        border-radius: 4px;
        margin: 0 10px 0px 0px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
        letter-spacing: -0.34px;
        line-height: 14px;
    }
    #wrap .form-content .check-code{
        background: #F9F9F9;
        width: 90px;
        height: 40px;
        display: inline-block;
        /*vertical-align: middle;*/
        text-align: center;
        line-height: 40px;
        /*font-family: PingFangSC-Regular;*/
        /*font-size: 18px;*/
        /*color: #282828;*/
        /*letter-spacing: 4px;*/
    }
    #wrap .form-content .error{
        width: 71px;
        height: 14px;
        margin: 0 auto 10px 35px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FF6666;
        letter-spacing: -0.29px;
        line-height: 14px;
    }
    #wrap .form-content .tijiao{
        display: block;
        margin: 0 auto  20px auto;
        width: 260px;
        height: 40px;
        background: #FF9900;
        border-radius: 4px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.39px;
        line-height: 16px;
        border: none;
    }
    #wrap .form-content .text{
        display: block;
        width: 56px;
        height: 14px;
        margin: auto 35px 20px auto;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #282828;
        letter-spacing: -0.34px;
        line-height: 14px;
    }
</style>
