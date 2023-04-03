<template>
    <div class="back">
        <el-button :span="8" type="primary" @click="adduser" class="add-btn" plain>添加病人信息</el-button>
        <el-button :span="8" type="primary" @click="addfile" class="add-btn1" plain>添加脑电数据</el-button>
        <el-input :span="8" placeholder="请输入人名" v-model="pname" class="add-btn" clearable></el-input>
        <el-button :span="8" slot="append" icon="el-icon-search" @click="check" class="button"></el-button>
        <el-table :data="nameInfo" style="width:100%" v-loading="loading">
            <!-- <el-table-column prop="id" label="编号"></el-table-column> -->
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column prop="gender" label="性别"></el-table-column>
            <!-- <el-table-column prop="diagnosis" label="诊断"></el-table-column>
            <el-table-column prop="medicine" label="药物"></el-table-column> -->
            <el-table-column prop="phone" label="电话"></el-table-column>
            <!-- <el-table-column prop="email" label="邮箱"></el-table-column> -->
            <el-table-column prop="birth" label="出生日期"></el-table-column>
            <el-table-column align="right">
                <el-input placeholder="请输入人名搜索" v-model="pname" clearable>
                </el-input>
                <el-button slot="append" icon="el-icon-search" @click="check" class="button"></el-button>
                <template slot-scope="scope">
                    <el-button size="mini" @click="edit(scope.row, scope.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.row.name)">删除</el-button>
                </template>
            </el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <el-button type="text" @click="edit1(scope.row, scope.row.id)">详情</el-button>
                </template>

            </el-table-column>

        </el-table>
        <el-dialog title="增加病人信息" :visible.sync="dialogVisible1" width="50%" :before-close="handleClose1">
            <div>
                <el-form ref="form" :inline="true" :model="editObj1" label-width="80px" label-position="right" >
                    <el-form-item label="姓名">
                        <el-input v-model="editObj1.name"></el-input>
                    </el-form-item>

                    <el-form-item label="年龄">
                        <el-input v-model="editObj1.age"></el-input>
                    </el-form-item>

                    <el-form-item label="性别">
                        <el-select v-model="editObj1.gender" placeholder="请选择">
                            <el-option label="男" value="男"></el-option>
                            <el-option label="女" value="女"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="诊断">
                        <el-input v-model="editObj1.diagnosis"></el-input>
                    </el-form-item>
                    <el-form-item label="药物">
                        <el-input v-model="editObj1.medicine"></el-input>
                    </el-form-item>

                    <el-form-item label="电话">
                        <el-input v-model="editObj1.phone"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱">
                        <el-input v-model="editObj1.email"></el-input>
                    </el-form-item>

                    <el-form-item label="出生日期">
                        <el-date-picker v-model="editObj1.birth" type="date" placeholder="选择日期"
                            value-format="yyyy-MM-dd"></el-date-picker>
                    </el-form-item>

                    <el-form-item label="地址">
                        <el-input v-model="editObj1.address"></el-input>
                    </el-form-item>

                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="confirm1">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="编辑病人信息" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
            <div>
                <el-form :inline="true" ref="form" :model="editObj" label-width="80px">
                    <el-input type="hidden" v-model="editObj.id"></el-input>

                    <el-form-item label="姓名">
                        <el-input v-model="editObj.name"></el-input>
                    </el-form-item>

                    <el-form-item label="年龄">
                        <el-input v-model="editObj.age"></el-input>
                    </el-form-item>

                    <el-form-item label="性别">
                        <el-select v-model="editObj.gender" placeholder="请选择">
                            <el-option label="男" value="男"></el-option>
                            <el-option label="女" value="女"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="诊断">
                        <el-input v-model="editObj.diagnosis"></el-input>
                    </el-form-item>

                    <el-form-item label="药物">
                        <el-input v-model="editObj.medicine"></el-input>
                    </el-form-item>

                    <el-form-item label="电话">
                        <el-input v-model="editObj.phone"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱">
                        <el-input v-model="editObj.email"></el-input>
                    </el-form-item>

                    <el-form-item label="出生日期">
                        <el-date-picker v-model="editObj.birth" type="date" placeholder="选择日期"
                            value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </el-form-item>

                    <el-form-item label="地址">
                        <el-input v-model="editObj.address"></el-input>
                    </el-form-item>
                    <el-form-item label="医生">
                        <el-input v-model="editObj.belongdoctor"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog title="用户详细信息" :visible.sync="dialogVisible2" width="50%" :before-close="handleClose2">
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
            </span>
            <el-descriptions class="margin-top" :column="3" border>
                <template slot="extra">
                </template>
                <el-descriptions-item v-model="editObj.name">
                    <template slot="label">
                        <i class="el-icon-user"></i>
                        姓名
                    </template>
                    {{ editObj.name }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-user"></i>
                        年龄
                    </template>
                    {{ editObj.age }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-user-solid"></i>
                        性别
                    </template>
                    {{ editObj.gender }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-check"></i>
                        诊断
                    </template>
                    {{ editObj.diagnosis }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-takeaway-box"></i>
                        药物
                    </template>
                    {{ editObj.medicine }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-mobile"></i>
                        电话
                    </template>
                    {{ editObj.phone }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-monitor"></i>
                        邮箱
                    </template>
                    {{ editObj.email }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-date"></i>
                        出生日期
                    </template>
                    {{ editObj.birth }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-location-outline"></i>
                        居住地
                    </template>
                    {{ editObj.address }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-s-custom"></i>
                        主治医师
                    </template>
                    {{ editObj.belongdoctor }}
                </el-descriptions-item>
            </el-descriptions>
            <!-- <template slot-scope="scope">
                <el-button size="mini" @click="edit(scope.row, scope.row.id)">编辑</el-button>
            </template> -->
        </el-dialog>
        <el-dialog title="上传脑电信息文件" :visible.sync="dialogVisible3" width="30%" :before-close="handleClose3">


            <!-- <form id="form1" action="http://10.224.130.115:5000/upload_edffile" target="frameName" method="post"
                enctype="multipart/form-data">
                <template>
                    <el-select v-model="value" placeholder="请选择病人" class="select" name="name1">
                        <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.name">
                        </el-option>
                    </el-select>
                </template>
                <template>
                    <el-select v-model="value1" placeholder="请选择" name="select1">
                        <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
                        </el-option>
                    </el-select>
                </template>
                <input type="file" name="file1">
                <input class="sub-btn fl" type="submit" value="提交"  @click="send"> 
                
            </form>
            <iframe src="" frameborder="0" name="frameName"></iframe> -->


            <!-- <form id="form1" action="uploadFile.do" target="frame1" method="post" enctype="multipart/form-data">
                   
                </form>
                <iframe name="frame1" frameborder="0" height="40"></iframe> -->

            <template>
                <el-select v-model="value" placeholder="请选择病人" class="select">
                    <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.name">
                    </el-option>
                </el-select>
            </template>
            <template>
                <el-select v-model="value1" placeholder="请选择数据的时期" class="select1">
                    <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.label">
                    </el-option>
                </el-select>
            </template>

            <!-- 
            <el-upload class="upload-demo" action="http://10.224.130.115:5000/upload_edffile" drag multiple
                :headers="headers"  :auto-upload="false" accept=".edf" :file-list="fileList" :http-request="htpreq">
                :on-change="handleChange" 
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">请上传.edf文件</div>
            </el-upload> -->
            <!-- <el-upload :action="action" :file-list="modeList" :http-request="modeUpload">
                <el-button size="small" type="primary">上传</el-button>
            </el-upload> -->
            <!-- <el-button @click="upload">点击上传文件</el-button> -->
                <input type="file" name="file1" id="myfile" >

            <div slot="footer" class="dialog-footer">
                <el-button @click="confirmUpload">上传</el-button>
                <el-button @click="dialogVisible3 = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mode: {},
            dialogVisible: false,
            dialogVisible1: false,
            dialogVisible2: false,
            dialogVisible3: false,
            pname: '',
            loading:true,
            modeList: [],
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            options: [{
                name: ''
            }],
            options1: [{

                label: '发作间期'
            }, {

                label: '发作前期'
            }, {

                label: '发作期'
            },],
            value: '',
            value1: '',
            nameInfo: [{
                id: '',
                name: '',
                age: '',
                gender: '',
                diagnosis: '',
                medicine: '',
                phone: '',
                email: '',
                birth: '',
                address: '',
                belongdoctor: ''
            }],
            editObj: {
                id: '',
                name: '',
                age: '',
                gender: '',
                diagnosis: '',
                medicine: '',
                phone: '',
                email: '',
                birth: '',
                address: '',
                belongdoctor: ''
            },
            editObj1: {
                name: '',
                age: '',
                gender: '',
                diagnosis: '',
                medicine: '',
                phone: '',
                email: '',
                birth: '',
                address: '',
                belongdoctor: ''
            },
            get1: '',
            userIndex: 0,
        }
    },
    mounted() {
        this.getnetwork();
        this.getname();
    },

    methods: {
        modeUpload(item) {
            // console.log(item.file);
            this.mode = item.file
        },


        // send() {
        //         var that = this
        //         this.$axios.post("http://10.224.130.115:5000/return_save").then(function (res) {
        //             console.log(res)
        //             that.get1 = res;
        //         }).catch(function (err) {
        //             console.err
        //         });
        //         if (this.get1 === 1) {
        //             alert('上传成功')
        //         } else {
        //             alert('上传失败')
        //         }

        // },

        //表单提交,会把所有有name属性的值提交到后台
        confirmUpload() { //确认上传
            var that = this
            // let fileObj = this.mode
            // console.log(typeof fileObj)
            var param1 = new FormData();
            // var param1=new FormData1();
            var param2 = this.value;
            var param3 = this.value1;
            param1.append("file", $('#myfile')[0].files[0])
            param1.append("name1", param2);
            param1.append("select1", param3);

            this.$axios.post("/table/upload_edffile", param1).then(function (res) {
                console.log(res.data)
                that.get1 = res.data
                if(res.data===1){
                    alert('上传成功') 
                }else if(res.data===0){
                    alert('文件已存在')
                }

            });
        },



        // upload() {
        //     $("#form1").submit();
        //     var t = setInterval(function() {
        //         //获取iframe标签里body元素里的文字。即服务器响应过来的"上传成功"或"上传失败"
        //         var word = $("iframe[name='frame1']").contents().find("body").text();
        //         if (word != "") {
        //             alert(word);        //弹窗提示是否上传成功
        //             clearInterval(t);   //清除定时器
        //         }
        //     }, 1000);
        // },

        getnetwork() {
            var that = this
            var name=this.$cookie.get('name')
            //网络请求获取数据axios
            this.$axios.post("/table/ini",name)
                .then(function (res) {
                    console.log(res.data)
                    that.nameInfo = res.data
                }).catch(function (err) {
                    console.log(err)
                })
        },
        getname() {
            var that = this
            //网络请求获取数据axios
            this.$axios.post("/table/ini")
                .then(function (res) {
                    console.log(res.data)
                    that.options = res.data
                }).catch(function (err) {
                    console.log(err)
                })
        },
        check() {
            var that = this
            this.$axios.post("/table/search_patient", {
                name: that.pname,
            })
                .then(function (res) {
                    console.log(res.data)
                    that.nameInfo = res.data
                    loading=true
                }).catch(function (err) {
                    console.log(err)
                })
        },
        adduser() {
            this.dialogVisible1 = true;
        },
        addfile() {
            this.dialogVisible3 = true
        },
        edit(item, id) {
            this.userIndex = id;
            console.log(id)
            this.editObj = {
                id: item.id,
                name: item.name,
                age: item.age,
                gender: item.gender,
                diagnosis: item.diagnosis,
                medicine: item.medicine,
                phone: item.phone,
                email: item.email,
                birth: item.birth,
                address: item.address,
                belongdoctor: item.belongdoctor
            };
            this.dialogVisible = true;
        },
        edit1(item, id) {
            this.userIndex = id;
            console.log(id)
            this.editObj = {
                id: item.id,
                name: item.name,
                age: item.age,
                gender: item.gender,
                diagnosis: item.diagnosis,
                medicine: item.medicine,
                phone: item.phone,
                email: item.email,
                birth: item.birth,
                address: item.address,
                belongdoctor: item.belongdoctor
            };
            this.dialogVisible2 = true;
        },
        detailed() {

        },
        deleteRow(nameid) {
            if (confirm('确定要删除？') == true) {
                //网络请求获取数据axios
                var that = this
                var param=nameid
                this.$axios.post("/table/delete_patient",param)
                    .then(res => {
                        that.getnetwork()
                        // console.log(res.data)
                        // that.newsList = res.data
                    }).catch(function (err) {//请求失败
                        console.log("失败了" + err)
                    })
            }
            
        },
        handleClose() {
            this.dialogVisible = false;
        },
        handleClose1() {
            this.dialogVisible1 = false;
        },
        handleClose2() {
            this.dialogVisible2 = false
        },
        handleClose3() {
            this.dialogVisible3 = false
        },
        confirm() {//确认修改
            console.log(this.editObj.id)
            console.log(this.editObj.name)
            console.log(this.editObj.age)
            console.log(this.editObj.gender)
            console.log(this.editObj.diagnosis)
            console.log(this.editObj.medicine)
            console.log(this.editObj.phone)
            console.log(this.editObj.email)
            console.log(this.editObj.birth)
            console.log(this.editObj.address)
            console.log(this.editObj.belongdoctor)
            var that = this
            this.$axios.post("/table/update_patient", {
                id: this.editObj.id,
                name: this.editObj.name,
                age: this.editObj.age,
                gender: this.editObj.gender,
                diagnosis: this.editObj.diagnosis,
                medicine: this.editObj.medicine,
                phone: this.editObj.phone,
                email: this.editObj.email,
                birth: this.editObj.birth,
                address: this.editObj.address,
                belongdoctor: this.editObj.belongdoctor
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
        confirm1() {//确认添加
            var that = this

            this.$axios.post("/table/add_patient", {
                name: this.editObj1.name,
                age: this.editObj1.age,
                gender: this.editObj1.gender,
                diagnosis: this.editObj1.diagnosis,
                medicine: this.editObj1.medicine,
                phone: this.editObj1.phone,
                email: this.editObj1.email,
                birth: this.editObj1.birth,
                address: this.editObj1.address,
                belongdoctor: this.editObj1.belongdoctor
            })
                .then(function (res) {
                    that.getnetwork()
                    console.log(res.data)
                    that.newsList = res.data
                }).catch(function (err) {
                    console.log(err)
                })
                this.getname();
            this.dialogVisible1 = false;
        }
    },
}
</script>
<style >
.el-main {
    line-height: 20px;
}

.el-button--primary.is-plain {
    float: left;
    width: 25%;
}

.el-input {
    float: right;
    width: 40%;
}

.button {
    float: right;
    width: 5%;
}

.select {
    display: flex;
    width: 250%
}
.el-input{
    float: right;
    width: 220px;
}
.el-select{
    display: flex;
    position: relative;
    width: 220px;
    float:left;
}
.select1{
    float:right
}

</style>