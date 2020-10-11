<template>
  <el-container ref="homePage">
    <el-aside width="200px">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-folder"></i>
            <span>资产管理</span>
          </template>
            <el-menu-item index="1-1">资产列表</el-menu-item>
            <el-menu-item index="1-2">添加资产</el-menu-item>   
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>用户管理</span>
          </template>
            <el-menu-item index="2-1">用户列表</el-menu-item>
            <el-menu-item index="2-2">添加用户</el-menu-item>   
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-unlock"></i>
            <span>权限管理</span>
          </template>
            <el-menu-item index="3-1">添加权限</el-menu-item>
            <el-menu-item index="3-2">删除权限</el-menu-item>   
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span>代码发布</span>
          </template>
            <el-menu-item index="4-1">ansible</el-menu-item>
            <el-menu-item index="4-2">shell</el-menu-item>   
        </el-submenu>

      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
         <div class="username">{{getUser}}</div>
        <el-dropdown trigger="click" @command="handleCommand">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              :size="35"
            ></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="look">查看</el-dropdown-item>
            <el-dropdown-item command="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
        <p>width: 100%;</p>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        this.logout()
      } else if (command === "look"){
        console.log('look')
      }
    },
    logout() {
      console.log("---------")
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    changeFixed(clientHeight) {
      //动态修改样式
      // console.log(clientHeight);
      // console.log(this.$refs.homePage.$el.style.height);
      this.$refs.homePage.$el.style.height = clientHeight - 20 + "px";
    },
  },
  computed: {
    getUser: function(){
      return window.sessionStorage.getItem('username')
    }
  },
  data() {
    return {
      clientHeight: "",
    };
  },
  mounted() {
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`;
    //document.body.clientWidth;
    //console.log(self.clientHeight);
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function () {
      this.changeFixed(this.clientHeight);
    },
  },
};
</script>


<style lang="less" scoped>
.el-header {
  background-color: #545c64;
  flex-direction: row-reverse;
  display: flex;
  align-items: center;
}

.el-aside {
  background-color: #545c64;
}

.username {
  color: #fff;
  margin-left: 10px;
}

.el-menu {
  border-right: none;
}
</style>
