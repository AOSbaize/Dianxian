<template>  
    <div class="manage">
        <commonTable></commonTable>
    </div>

</template>
<script>
import commonTable from '../components/commonTable.vue'
export default {
    components:{
        commonTable
    },
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                age: '',
                sex: '',
                med: '',
                dia: '',
                date: '',
                num: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名' }
                ],
                age: [
                    { required: true, message: '请输入年龄' }
                ],
                sex: [
                    { required: true, message: '请选择性别' }
                ],
                dia: [
                    { required: true, message: '请输入诊断内容' }
                ],
                med: [
                    { required: true, message: '请输入药品' }
                ],
                num: [
                    { required: true, message: '请输入病案号' }
                ],
                date: [
                    { required: true, message: '请选择时间' }
                ],
            },
            tableData:[]
        };
    },
    methods: {
        //提交用户表单
        submit() {
            this.$refs.form.validate((valid) => {
                // console.log(valid,'valid')
                if (valid) {
                    this.$refs.form.resetFields()
                    //后续表单数据获取
                    //  console.log(this.form,'form')
                    //关闭弹窗
                    this.dialogVisible = false
                }
            })
        },
        //弹窗关闭的时候
        handleClose() {
            this.$refs.form.resetFields()
            this.dialogVisible = false
        },
        cancel() {
            this.handleClose()
        }
    }
}
</script>
<style>
.manage-header{
    display: flex;
}
</style>