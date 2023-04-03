<template>
    <div class="header-container">
        <div class="l-content">
            <el-button style="margin-right:20px" @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item class="bread" v-for="item in tags" :key="item.path" :to="{ path:item.path}">{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb>
            
        </div>
        <el-tooltip content="欢迎您，admin">
            <img src="../picture/R-C.jpg" class="header1">
        </el-tooltip>


    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            url:"../"
        }
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        }
    },
    computed:{
        ...mapState({
            tags:state=>state.tab.tabsList
        })
    },
    mounted(){
        console.log(this.tags,'tags')
    }
}
</script>
<style scoped>
.header-container {
    padding: 0 20px;
    background-color: 	#AEEEEE;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header1{
    float: right;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.header2{
    padding: 0 20px;
    background-color:#AEEEEE;
    height: 60px;
    display:flex;
    text-align: right;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-family:Georgia, 'Times New Roman', Times, serif;
}

.text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
}
.l-content{
    display: flex;
    align-items: center;

}
.bread{
    color: blue;
}
</style>