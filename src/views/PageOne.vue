<template>
    <div>
        <el-card class="box-card">
            <template>
                <el-select v-model="value" placeholder="请选择病人" class="select" name="name1">
                    <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.name">
                    </el-option>
                </el-select>
                <el-select v-model="ruleForm.timer" placeholder="请选择时期">
                    <el-option v-for="item in options3" :key="item.label" :label="item.label" :value="item.label">
                    </el-option>
                </el-select>
                <input type="file" name="file1" id="myfile" class="file1">
                <el-button type="success" @click="getarray" class="btn">确认</el-button>

            </template>


            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="阈值" prop="threshold">
                    <el-input v-model="ruleForm.threshold" placeholder="请输入阈值(0-1)"></el-input>
                </el-form-item>
                <el-form-item label="窗长" prop="window">
                    <el-input v-model="ruleForm.window" placeholder="请输入窗长(s)"></el-input>
                </el-form-item>
                <el-form-item label="窗移" prop="windows">
                    <el-input v-model="ruleForm.windows" placeholder="请输入窗移(小于窗长 s )"></el-input>
                </el-form-item>
                <template>
                    <el-form-item label="频段" prop="band">
                        <el-select v-model="ruleForm.band" placeholder="请选择频段" class="select1">
                            <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="数据" prop="band">
                        <el-select v-model="ruleForm.label" placeholder="请选择数据" class="select1">
                            <el-option label="01.edf" value="shanghai"></el-option>
                            <el-option label="02.edf" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </template>
                <el-scrollbar>
                    <h3 class="title">电极选择</h3>
                    <div class="button"><Button></Button></div>

                    <div class="choice">
                        <div v-for="item in arr2">
                            <el-checkbox-group v-model="checkboxGroup1" v-if="isReloadData">
                                <el-checkbox-button v-for="electrode in item" :label="electrode" :key="electrode">{{
                                    electrode
                                }}
                                </el-checkbox-button>
                            </el-checkbox-group>
                        </div>
                    </div>
                </el-scrollbar>
                <!-- oninput="value=value.replace(/^([^01]|(0(\.\d{2}.+))|(1\.[^0]+)|(1\.00.+)|([01][^\.]))$/,'')" -->

                <el-form-item>
                    <el-button type="primary" @click="onsubmit">提交</el-button>
                </el-form-item>
            </el-form>

        </el-card>
        <el-card>
            <div>
                <h1>
                    历史记录
                </h1>
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                    </el-table-column>
                    <el-table-column prop="threshold" label="阈值" width="180">
                    </el-table-column>
                    <el-table-column prop="windowlen" label="窗长" width="180">
                    </el-table-column>
                    <el-table-column prop="windowstep" label="窗移" width="180">
                    </el-table-column>
                    <el-table-column prop="interest" label="频段" width="180">
                    </el-table-column>
                    <el-table-column prop="state1" label="处理状态" width="180">
                    </el-table-column>
                    <el-table-column align="right">
                        <el-button size="mini" @click="show">详情</el-button>
                    </el-table-column>

                </el-table>
            </div>
        </el-card>

    </div>
</template>
<script>
import Button from '../components/Button.vue'
const arr1 = [];
export default {
    components: {
        Button,
    },
    data() {
        var validatethreshold = (rule, value, callback) => {
            if (value === "")
                callback(new Error("请输入数值"));
            else if (value > 1)
                callback(new Error("请输入小于1的值"));
            else if (value < 0)
                callback(new Error("请输入大于0的值"));
            else if (!(/^(0(\.\d{1,2})?|1(\.0{1,2})?)$/).test(value))
                callback(new Error("请输入正确的格式"));

            else
                callback();
        };

        var validatewindows = (rule, value, callback) => {
            if (value > this.ruleForm.window)
                callback(new Error("请输入小于窗长的值"));
            else
                callback();
        }

        return {
            tableData: [{
                date: '',
                name: '',
                threshold: '',
                windowlen: '',
                windowstep: '',
                interest: '',
                state1: '完成'
            }],
            rules: {
                threshold: [
                    { required: true, message: '请输入0-1之间的数', trigger: 'blur' },
                    { validator: validatethreshold, trigger: 'blur' }
                ],
                window: [{ required: true, message: '请输入数值', trigger: 'blur' },
                ],
                windows: [{ required: true, message: '请输入数值', trigger: 'blur' },
                { validator: validatewindows, trigger: 'blur' }
                ],
            },
            isReloadData: true,
            arr2: [],
            arr3: [],
            options1: [{
                value1: 1,
                label: 'delta(1-3Hz)'
            }, {
                value1: 2,
                label: 'theta(4-7Hz)'
            }, {
                value1: 3,
                label: 'alpha(8-13Hz)'
            }, {
                value1: 4,
                label: 'beta(14-30Hz)'
            }, {
                value1: 5,
                label: 'gamma(31-80Hz)'
            }, {
                value1: 6,
                label: 'all(1-80Hz)'
            }],
            options3: [{
                label: '发作间期'
            }, {
                label: '发作前期'
            }, {
                label: '发作期'
            }],
            ruleForm: { threshold: '', window: '', windows: '', band: '', label: '', timer: '' },
            options: [{
                name: ''
            }],

            value: '',
            checkboxGroup1: [],
            Arr1: arr1,
        }

    },
    mounted() {
        this.getname()
        this.getnetwork();
        this.timer = setInterval(this.getnetwork(), 6000);
    },
    methods: {
        onSubmit(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    //验证成功做的事情
                } else {
                    //不成功出现提示
                    if (this.form.threshold == "") {
                        this.$message.error("请输入正确的阈值")
                    }
                    if (this.form.window == "") {
                        this.message.error("请输入正确的窗长")
                    }
                    if (this.form.windows == "") {
                        this.message.error("请输入正确的窗移")
                    }
                }
            })
        },
        getname() {
            var that = this
            //网络请求获取数据axios
            this.$axios.post("/table/ini")
                .then(function (res) {
                    that.options = res.data
                }).catch(function (err) {
                    console.log(err)
                })
            this.arr2 = [];
            this.options2 = []
        },
        getnetwork() {
            var that = this
            var name = this.$cookie.get('name')
            //网络请求获取数据axios
            this.$axios.post("/table/history", name)
                .then(function (res) {
                    console.log(res.data)
                    that.tableData = res.data
                }).catch(function (err) {
                    console.log(err)
                })
        },

        getarray() {
            const that = this
            var param = new FormData()
            var param1 = this.value
            var param2 = this.ruleForm.timer
            param.append("file", $('#myfile')[0].files[0])
            param.append('name', param1)
            param.append('timer', param2)
            this.$axios.post("/table/get_name", param).then(function (res) {
                console.log(res.data)
                that.arr2 = res.data['chan']
                that.arr3 = res.data['eegdata']
                console.log(res.data['eegdata'])
                // console.log(that.arr2)
                // for (var i = 0; i < that.arr3.length; i++) {
                //     // arr1[i] = that.arr2[i]
                //     that.options2.push(that.arr3[i])
                // }
                console.log(that.options2)
            }).catch(function (err) {
                console.log(err)
            })
            this.reloadpart()
            alert("提交成功")
        },
        onsubmit() {
            let param = new FormData();
            var param1 = this.ruleForm.threshold;
            var param2 = this.ruleForm.window;
            var param3 = this.ruleForm.windows;
            var param4 = this.ruleForm.band;
            var param5 = this.checkboxGroup1;
            var param6 = this.ruleForm.label;
            var param7 = this.value;
            var param8 = this.ruleForm.timer;
            param.append('threshold', param1);
            param.append('windowlen', param2);
            param.append('windowstep', param3);
            param.append('state', param4);
            param.append('group', param5);
            param.append('eegdata', param6);
            param.append('name', param7);
            param.append('timer', param8);
            this.$axios.post("/table/get_chans", param).then(function (res) {
            })
            alert('提交成功')

        },
        reloadpart() {
            this.isReloadData = false
            this.$nextTick(() => {
                this.isReloadData = true
            })
        },
        show() {
            this.$router.push("/Collect").catch(() => { });
        }
    }
}
</script>
<style scoped>
.title {
    display: flex;
    height: 60px;
    margin-top: 0;

}

.select {
    width: 50%;
}

.choice {
    flex-direction: row;
}

.el-checkbox-group {
    display: flex;

}

.el-main {
    line-height: 60px;
}

.select1 {
    float: right;
}

.demo-ruleForm {
    margin-top: 10px;
    font-size: 20px;
    width: 964px;
}

.el-checkbox-group {
    margin-top: 5px;
}

.button {
    width: 100%;
}
</style>