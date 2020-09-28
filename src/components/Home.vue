<template>
    <el-button type="info" @click="logout">logout</el-button>
</template>


<script>
export default {
    name: "Home",
    methods: {
        logout(){
            window.sessionStorage.clear()
            this.$router.push('/login')
        }
    },
    data: {}
    
}
</script>


<style lang="less" scoped>

</style>