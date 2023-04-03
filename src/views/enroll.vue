<template>
    <div class="building">
        <el-col :xm="6" :sm="8" :md="9" :lg="9"></el-col>
        <el-col :xm="12" :sm="8" :md="6" :lg="6" class="col">
            <div class="login-container">
                    <h1 class="head">注册</h1>
                <el-form :inline="true" :model="form" :rules="rule" label-position="left" label-width="120px">

                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号码" prop="id">
                        <el-col :span="24">
                            <el-input v-model="form.id" placeholder="请输入身份证号码">
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="form.password" placeholder="请输入密码" class="pwd"></el-input>
                    </el-form-item>
                    <el-form-item label="出生日期" prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="form.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group></el-form-item>

                    <el-form-item label="家庭住址" prop="address">
                        <el-input v-model="form.address" placeholder="请输入住址"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="submit" style="margin-left: 6rem;" type="primary" class="login">注册</el-button>

                    </el-form-item>
                </el-form>
            </div>

        </el-col>
        <el-col :xm="6" :sm="8" :md="9" :lg="9"></el-col>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                id: '',
                password: '',
                date1: '',
                sex: '',
                address: ''
            },
            rule: {
                name: [
                    {
                        required: true, pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9.·-]+$/,
                        message: '请输入正确的名字格式', trigger: 'blur'
                    }
                ],
                date1: [{ required: true, trigger: 'blur', message: '请输入日期' }],
                id: [{
                    required: true, pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                    message: '请输入正确的身份证号码', trigger: 'blur'
                }],
                password: [{ required: true, trigger: 'blur', message: '请输入密码' }],
                address: [{ required: true, trigger: 'blur', message: '请输入家庭住址' }],
                sex: [{ required: true, trigger: 'blur', message: '请选择性别' }]
            }
        }
    },
    methods: {
        //注册
        submit() {
            var that = this;
            var param = new FormData();
            var param1 = this.form.name;
            var param2 = this.form.id;
            var param3 = this.form.date1;
            var param4 = this.form.sex;
            var param5 = this.form.address;
            var param6 =this.form.password;
            param.append("name", param1);
            param.append("id", param2);
            param.append("date", param3);
            param.append("sex", param4);
            param.append("address", param5);
            param.append("password",param6)
            this.$axios.post("", param).then(function (res) {
                that.get1 = res.data;
                if (res.data = 1) {
                    alert("注册成功")
                    that.$router.push("/login").catch(() => { });
                } else {
                    alert("注册失败,请重新注册")
                    that.$router.push("/enroll").catch(() => { });
                }
            })

        }
    }
}
</script>
<style scoped>
.login-container {
    width: 22rem;
    margin: 0.5rem auto;
    padding: 2.1875rem 2.1875rem 0.9375rem 2.1875rem;
    backdrop-filter: blur(10px);
    border-radius: 0.9375rem;
    box-shadow: 0 0 1.5625rem #aca038;
    box-sizing: border-box;
    

}
.head{
    margin: auto;
    display: flex;
    justify-content: center;
    color: greenyellow;
}

.col {

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

}

.building {
    background: url("../picture/illust_106501098_20230324_105939.png");
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;

}
</style>