<template>
    <div id="building">
        <el-col :xm="6" :sm="8" :md="9" :lg="9"></el-col>
        <el-col :xm="6" :sm="4" :md="3" :lg="3" class="col">
            <Transition name="el-zoom-in-top" >
                <div @mouseover="mouseover1()" @mouseleave="mouseLeave1()" :style="active" class="div1" v-if="show">
                    <i class="el-icon-s-custom" :style="custom1"></i>
                    <el-button @click="submit1" :style="button1" type="success" class="login">用户版</el-button>

                </div>

            </Transition>
            <Transition name="el-zoom-in-bottom">
                <div @mouseover="mouseover2()" @mouseleave="mouseLeave2()" :style="active1" class="div2" v-if="show2">
                    <i class="el-icon-s-custom" :style="custom2"></i>
                    <el-button @click="submit2" :style="button2" type="primary" class="login">医生版</el-button>
                </div>

            </Transition>

        </el-col>

        <el-col :xm="6" :sm="8" :md="9" :lg="9"></el-col>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show:false,
            show2: false,
            active: '',
            active1: '',
            custom1: '',
            custom2:'',
            button1:'margin-left:3.5rem',
            button2:'margin-left:3.5rem'

        }
    },
    mounted(){
        this.start1();
        this.start2();
    },
    methods: {
        submit1() {
            this.$router.push("/login1").catch(() => { });
        },
        submit2() {
            this.$router.push("/login").catch(() => { });
        },
        mouseover1: function () {
            this.active = 'background-color:#e3c887; height:18rem; width:16rem;'
            this.custom1 = 'font-size: 8rem; align-items: center; display: flex;justify-content: center;'
            this.button1='margin-left:5rem;margin-top:2rem'
        },
        mouseLeave1: function () {
            this.active = 'background-color: #fbb8ac;'
            this.button1='margin-left:3.5rem;'
        },
        mouseover2: function () {
            this.active1 = 'background-color:yellowgreen;height:18rem; width:16rem'
            this.custom2 = 'font-size: 8rem; align-items: center; display: flex;justify-content: center;'
            this.button2='margin-left:5rem;margin-top:2rem'
        },
        mouseLeave2: function () {
            this.active1 = 'background-color: #2ae0c8;'
            this.button2='margin-left:3.5rem;'
        },
        start1(){
            this.show=!this.show
        },
        start2(){
            this.show2=!this.show2
        }
    }
}
</script>
<style scoped>
.div1 {
    position: absolute;
    height: 15rem;
    width: 13rem;
    opacity: 0.9;
    background-color: #fbb8ac;
    border: none;
    margin-top: 7rem;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
}


.div2 {
    position: absolute;
    height: 15rem;
    width: 13rem;
    margin-left: 6.5rem;
    margin-top: 2rem;
    opacity: 0.9;
    background-color: #2ae0c8;
    border: none;
    border-radius: 0.5rem;
    margin-top: 20rem;
}

.el-icon-s-custom {
    font-size: 8rem;
    align-items: center;
    display: flex;
    justify-content: center;
}

.col {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 20rem;
}







#building {
    background: url("../picture/syringe-26623.png");
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;

}
</style>