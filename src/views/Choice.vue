<template>
    <div class="choice">
        <div class="back" style="background-color: black;">
            <el-col :xm="6" :sm="8" :md="9" :lg="9"></el-col>
            <el-col :xm="12" :sm="8" :md="6" :lg="6" class="col">
                <el-avatar size="large" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                    class="head"></el-avatar>
                <h1 class="user">***</h1>
                <h1 class="user">欢迎</h1>
                <h2 class="then">本系统为基于癫痫的管理系统</h2>
                <div class="div1" style="margin-left: 1rem; margin-top: 4rem;" @click="left">
                    <i class="el-icon-s-order"></i>
                    <div style="font-size: 1.5rem;" id="left">病人管理</div>
                </div>

                <div class="div2" style="margin-left: 15rem; margin-top: 4rem;" @click="right">
                    <i class="el-icon-thumb">
                    </i>
                    <div style="font-size: 1.5rem;" id="right">数据分析</div>
                </div>
            </el-col>
            <el-col :xm="6" :sm="8" :md="9" :lg="9"></el-col>
        </div>

    </div>
</template>
<script>
export default{
    methods:{
        left(){
            this.$router.push("/mall").catch(() => { });
        },
        right(){
            this.$router.push("/page1").catch(() => { });
        }
    }
}
</script>
<style scoped>
.head {
    margin: auto;
    height: 10rem;
    width: 10rem;
    margin-left: 9.2rem;
    margin-top: 12rem;
}

.user {
    text-align: center;
    color: white;
}

.then {
    text-align: center;
    color: white;
}

.div1 {
    height: 5rem;
    width: 10rem;
    background-color: aqua;
    position: absolute;
    border-radius: 7%;
}

.div2 {
    height: 5rem;
    width: 10rem;
    background-color: rgb(15, 161, 161);
    border-radius: 7%;
    position: absolute;
}

.el-icon-s-order {
    font-size: 3rem;
    align-items: center;
    margin-top: 0.8rem;
    position: absolute;
}

.el-icon-thumb {
    font-size: 3rem;
    align-items: center;
    margin-top: 0.8rem;
    position: absolute;

}

#left {
    margin-top: 1.7rem;
    margin-left: 3rem;
}

#right {
    margin-top: 1.7rem;
    margin-left: 3rem;
}



.col {

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

}

.back {
    width: 100%;
    height: 100%;
    opacity: 0.5;
}

.choice {
    background: url("../picture/syringe-26623.png");
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;

}</style>