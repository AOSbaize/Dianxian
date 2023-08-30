<template>
    <div>
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
                <el-button size="mini" click="">详情</el-button>
            </el-table-column>

        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [{
                date: '',
                name: '',
                threshold:'',
                windowlen:'',
                windowstep:'',
                interest:'',
                state1:'完成'
            }]
        }
    },
    mounted(){
        this.getnetwork();
        this.timer = setInterval(this.getnetwork(), 6000);
    },
    methods:{
        getnetwork() {
            var that = this
            var name=this.$cookie.get('name')
            //网络请求获取数据axios
            this.$axios.post("/table/history",name)
                .then(function (res) {
                    console.log(res.data)
                    that.tableData = res.data
                }).catch(function (err) {
                    console.log(err)
                })
        },
    }
}

</script>
<style scoped>

</style>