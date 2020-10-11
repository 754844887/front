<template>
  <div class="register_container">
    <div class="register_box">
      <h3 class="title">注册用户</h3>
      <!-- 注册表单开始       -->
      <el-form
        class="register_form"
        :rules="rules"
        ref="RegisterForm"
        :model="RegisterForm"
      >
        <el-form-item prop="name">
          <el-input
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
            v-model="RegisterForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input
            prefix-icon="el-icon-postcard"
            placeholder="请输入邮箱地址"
            v-model="RegisterForm.email"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="el-icon-key"
            placeholder="请输入密码"
            v-model="RegisterForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input
            type="password"
            prefix-icon="el-icon-key"
            placeholder="确认密码"
            v-model="RegisterForm.password2"
          ></el-input>
        </el-form-item>
        <el-form-item class="register_btn">
          <el-button type="primary">注册</el-button>
          <el-button type="info" @click="resetForm('RegisterForm')"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <!-- 注册表单结束 -->
    </div>
  </div>
</template>


<script>
export default {
  name: "Register",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码必须大于6位小于16位！"));
      } else {
        if (this.RegisterForm.password2 !== "") {
          this.$refs.RegisterForm.validateField("password2");
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码！"));
      } else if (value !== this.RegisterForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      RegisterForm: {
        name: "",
        email: "",
        password: "",
        password2: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        password2: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>


<style lang="less" scoped>
.register_container {
  height: 100%;
  background-color: #2b4b6b;
}

.register_box {
  width: 450px;
  height: 400px;
  background-color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* 50%为自身尺寸的一半 */
  border-radius: 3px;
}

.register_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.register_btn {
  display: flex;
  justify-content: flex-end;
}

.title {
  text-align: center;
  margin-top: 40px;
}
</style>