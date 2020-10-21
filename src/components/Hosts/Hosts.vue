<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>资产管理</el-breadcrumb-item>
      <el-breadcrumb-item>资产列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row :gutter="25">
        <el-col :span="7"
          ><el-input placeholder="请输入内容">
            <el-button
              slot="append"
              icon="el-icon-search"
            ></el-button> </el-input
        ></el-col>
        <el-col :span="8">
          <el-button type="primary">添加主机</el-button></el-col
        >
      </el-row>

      <el-table :data="hosts" style="width: 100%" border stripe>
        <el-table-column prop="name" label="主机名"> </el-table-column>
        <el-table-column prop="in_ipaddr" label="内网IP地址"> </el-table-column>
        <el-table-column prop="out_ipaddr" label="外网IP地址">
        </el-table-column>
        <el-table-column prop="location" label="机柜号"> </el-table-column>
        <el-table-column prop="use" label="用途"> </el-table-column>
        <el-table-column prop="is_active" label="是否启用"> </el-table-column>
        <el-table-column prop="create_time" label="创建时间"> </el-table-column>
        <el-table-column label="操作">
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params_info.current_page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="params_info.page_size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hosts: [],
      total: 0,
      params_info: {
        current_page: 1,
        page_size: 10,
      },
    };
  },
  created() {
    this.get_hosts(this.params_info);
  },
  methods: {
    // 监听page-size的改变
    handleSizeChange(newPageSize) {
      this.params_info.page_size = newPageSize;
      this.get_hosts(this.params_info);
      console.log(newPageSize);
    },
    handleCurrentChange(newPage) {
      this.params_info.current_page = newPage;
      this.get_hosts(this.params_info);
      console.log(newPage);
    },
    get_hosts(params_info) {
      this.$axios
        .get("/hosts", { params: params_info })
        .then((response) => {
          const res = response.data;
          if (res.code === 200) {
            this.hosts = res.data.hosts;
            this.total = res.data.total;
            console.log(res);
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch((error) => {
          this.$message.error(error.message);
        });
    },
  },
};
</script>