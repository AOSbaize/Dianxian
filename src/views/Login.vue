<template>
    <div id="building">
        <el-col :xm="6" :sm="8" :md="9" :lg="9"></el-col>
        <el-col :xm="12" :sm="8" :md="6" :lg="6" class="col">
            <div class="login-container">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="管理员登录" name="first">
                            <el-form :inline="true" :model="form" :rules="rules">
                                <el-form-item label="管理名" prop="username">
                                    <el-input v-model="form.username" placeholder="请输入管理员名"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="password">
                                    <el-input type="password" v-model="form.password" placeholder="请输入密码"
                                        class="pwd"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button @click="submit" style="margin-left: 105px;" type="primary">登录</el-button>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>


                        <el-tab-pane label="用户登录" name="second">
                            <el-form :inline="true" :model="form1" :rules="rules">
                                <el-form-item label="用户名" prop="username">
                                    <el-input v-model="form1.username1" placeholder="请输入用户名"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="password">
                                    <el-input type="password" v-model="form1.password1" placeholder="请输入密码"
                                        class="pwd"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button @click="submit1" style="margin-left: 4rem;" type="primary"
                                        class="login">登录</el-button>
                                    <el-button @click="submit2" style="margin-left: 12rem;" type="success"
                                        class="enroll">注册</el-button>
                                </el-form-item>
                            </el-form>

                        </el-tab-pane>


                </el-tabs>

            </div>
        </el-col>
        <el-col :xm="6" :sm="8" :md="9" :lg="9"></el-col>


    </div>
</template>
<script>
import { Collapse } from 'element-ui'

export default {
    data() {
        return {
            activeName: "first",
            form: {
                username: "",
                password: ""
            },
            form1: {
                username1: "",
                password1: ""
            },
            rules: {
                username: [
                    { required: true, trigger: "blur", message: "请输入用户名" }
                ],
                password: [{ required: true, trigger: "blur", message: "请输入密码" }]
            },
            get1: "",
        };
    },
    methods: {
        //登录
        submit() {
            // alert('用户名或密码错误')
            // this.$router.push('/home').catch(() =>{})
            var that = this;
            var param = new FormData();
            var param1 = this.form.username;
            var param2 = this.form.password;
            param.append("username", param1);
            param.append("password", param2);
            this.$axios.post("/table/login", param).then(function (res) {
                console.log(res);
                that.get1 = res.data;
                console.log(that.get1);
                if (that.get1 == "1") {
                    that.$router.push("/home").catch(() => { });
                    that.$cookie.set("name", param1, 60 * 60 * 24);
                }
                else {
                    alert("用户名或密码错误");
                    that.$router.push("/login").catch(() => { });
                }
            });
        },
        submit1() {
            // alert('用户名或密码错误')
            // this.$router.push('/home').catch(() =>{})
            var that = this;
            var param = new FormData();
            var param1 = this.form1.username1;
            var param2 = this.form1.password1;
            param.append("username", param1);
            param.append("password", param2);
            this.$axios.post("", param).then(function (res) {
                console.log(res);
                that.get1 = res.data;
                console.log(that.get1);
                if (that.get1 == "1") {
                    that.$router.push("/home").catch(() => { });
                    that.$cookie.set("name", param1, 60 * 60 * 24);
                }
                else {
                    alert("用户名或密码错误");
                    that.$router.push("/login").catch(() => { });
                }
            });
        },
        submit2() {
            this.$router.push("/enroll").catch(() => { });
        }
    },
    handleClick(tab, event) {
        console.log(tab, event);
    },
    components: { Collapse }
}
</script>
<style scoped>
.login-container {
    width: 21.875rem;
    margin: 11.25rem auto;
    padding: 2.1875rem 2.1875rem 0.9375rem 2.1875rem;
    backdrop-filter: blur(10px);
    border-radius: 0.9375rem;
    box-shadow: 0 0 1.5625rem #aca038;
    box-sizing: border-box;
}

.el-input {
    width: 12.375rem;
}

.login_title {
    text-align: center;
    margin-bottom: 2.5rem;
    color: #505458;
}

.pwd {
    margin-left: 0.875rem;
}

.col {

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

}

.login {
    position: absolute;
}





#building {
    background: url("../picture/illust_106501098_20230324_105939.png");
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;

}
</style>