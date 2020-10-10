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
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
         <div class="username">susan</div>
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
</style>
