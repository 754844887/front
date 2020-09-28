<template>
  <div class="login_container">
    <div class="login_box">
      <h3 class="title">后台管理系统</h3>
      <!-- 登陆表单开始       -->
      <el-form class="login_form" :model="form" :rules="rules" ref="loginRulForm">
        <el-form-item prop="email">
          <el-input prefix-icon="el-icon-user" placeholder="请输入邮箱地址" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" prefix-icon="el-icon-key" placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="login_btn">
          <el-button type="primary" @click="login('loginRulForm')">登录</el-button>
          <el-button type="info" @click="resetForm('loginRulForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 登陆表单结束 -->
    </div>
  </div>
</template>    

<script>
export default {
  name: "Login",
  data(){
    return{
      form:{
        email: '754844887@qq.com',
        password: 'xjp20111225'
      },
      rules: {
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] } 
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
      }    
    }
  },
  methods: {
    // 重置表单
    resetForm(formName){
      this.$refs[formName].resetFields();
    },

    // 表单预验证
    login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios({
              method: 'POST',
              url: 'token', 
              headers: {'Content-Type': 'application/json'},
              auth: {
                username: this.form.email,
                password: this.form.password
              }
          }
            ).then((response) => {
              const res = response.data
              console.log(res)
              if (res.code === 200){
                this.$message.success('登录成功！')
                // 保存token
                window.sessionStorage.setItem('token', res.data.token)
                // 登录成功跳转到主页
                this.$router.push('/home')
              }else {
                this.$message.error('登录失败！')
              }
            }).catch((error) => {
              console.log(error);
              this.$message.error('用户名或密码错误！')
            });
          } else {
            console.log('登录预校验失败！');
            return false;
          }
        });
      },
  }
};
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #2b4b6b;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* 50%为自身尺寸的一半 */
  border-radius: 3px;
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.login_btn {
  display: flex;
  justify-content: flex-end;
}

.title{
  text-align: center;
  margin-top: 40px;
}
</style>