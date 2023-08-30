<template>
  <div>
    <el-card class="card">
      <el-descriptions class="margin-top" title="简介" :column="2" border>
        <template slot="extra">
          <!-- <el-button type="primary" v-if="$route.params.id==$store.state.id" size="small">操作</el-button> -->
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            姓名
          </template>
          {{ Object1.name }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-odometer"></i>
            年龄
          </template>
          {{ Object1.age }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-message"></i>
            邮箱Email
          </template>
          {{ Object1.email }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号码
          </template>
          {{ Object1.phone }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-coordinate"></i>
            所属科室
          </template>
          {{ Object1.department }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-date"></i>
            注册日期
          </template>
          {{ Object1.createDate }}
        </el-descriptions-item>
      </el-descriptions>
      <el-button type="primary" @click="openalert">修改信息</el-button>
      <el-button type="danger" @click="out">退出登录</el-button>
    </el-card>
    <el-dialog title="提示" :visible.sync="dialogVisible1">
      <div>
        是否退出登录？
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="confirm1">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="个人信息修改" :visible.sync="dialogVisible">
      <div>
        <el-form :inline="true" ref="form" :model="Object1" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="Object1.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="Object1.age"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="Object1.email"></el-input>
          </el-form-item>
          <el-form-item label="电话号码">
            <el-input v-model="Object1.phone"></el-input>
          </el-form-item>
          <el-form-item label="所属科室">
            <el-input v-model="Object1.department"></el-input>
          </el-form-item>
          <el-form-item label="注册日期">
            <el-input v-model="Object1.createDate"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>

  </div>

</template>
<script>
export default {
  name: "Info",
  data() {
    return {
      Object1: [{
        name: '',
        age: '',
        email: '',
        phone: '',
        department:'',
        createDate: '',
      }],
      dialogVisible: false,
      dialogVisible1:false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      var that = this;
      var param=this.$cookie.get('name')
      this.$axios.post("", param)
        .then(function (res) {
          that.Object1 = res.data
        }).catch(function (err) {
          console.log(err)
        })

    },
    openalert() {
      this.dialogVisible = true
    },
    out() {
      this.dialogVisible1 = true
    },
    confirm() {//确认修改
            console.log(this.Object1.createDate)
            console.log(this.Object1.name)
            console.log(this.Object1.age)
            console.log(this.Object1.phone)
            console.log(this.Object1.email)
            var that = this
            this.$axios.post("", {
                id: this.Object1.createDate,
                name: this.Object1.name,
                age: this.Object1.age,
                phone: this.Object1.phone,
                email: this.Object1.email, 
                department:this.Object1.department  
            })
                .then(function (res) {
                    that.getnetwork()
                    console.log(res.data)
                    that.newsList = res.data
                }).catch(function (err) {
                    console.log(err)
                })
            this.dialogVisible = false;
        },
        confirm1(){
          this.$router.push("/login").catch(() => { });
        }
  }

};
</script>
<style scoped>


.el-descriptions__body {
  width: 100%;
}
.card{
  height: 100vh;
}
.margin-top{
  height: 50vh;
}
</style>