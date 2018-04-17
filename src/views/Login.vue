<template>
<div class="login-box">
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="login-title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="ruleForm2.pwd" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remeber-pwd">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="submitForm" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import {requestLogin} from '../api/api'
export default {
    name:'Login',
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          pwd: '123456'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      submitForm:function(ev){
        console.log(ev)
        var _this = this;
        console.log(this)
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            this.logining = true;
            //NProgress.start();
            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.pwd };
            requestLogin(loginParams).then(data => {
              this.logining = false;
              //NProgress.done();
              let { msg, code, user } = data;
              if (code !== 200) {
                this.$message({
                  message: msg,
                  type: 'error'
                });
              } 
              else {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.$router.push({ path: '/table' });
              }
            });
          } 
          else {
            console.log('error submit!!');
            return false;
          }
        });
        // console.log(ev)
        // var _this=this;
        // console.log(this)
        // this.$refs.ruleForm2.validate((valid)=>{
        //    console.log(valid)
        //    if(valid){
        //        this.loading=true
        //        var loginParams={username:this.ruleForm2.account,pwd:this.ruleForm2.pwd}
        //        requestLogin(loginParams).then(data => {
        //         this.logining = false;
        //         //NProgress.done();
        //         let { msg, code, user } = data;
        //         if (code !== 200) {
        //             this.$message({
        //             message: msg,
        //             type: 'error'
        //             });
        //         } 
        //         else {
        //             sessionStorage.setItem('user', JSON.stringify(user));
        //             this.$router.push({ path: '/table' });
        //         }
        //         });
        //    }
        //    else{
        //        console.log('error submit!!');
        //        return false;
        //    }
        // })
      }
    }
}
</script>
<style>
@import url('../assets/css/login');

</style>



