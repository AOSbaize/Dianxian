<template>
    <div>
        <el-card v-for="item in history" class="box-card">
            <div slot="header" class="clearfix">
                <span class="span">结果</span>
                <div :class="{ red: item.state == '处理中', green: item.state == '处理成功' }">{{ item.state }}</div>
                <el-button v-if="isNeedAudit" style="float: right; padding: 3px 0 " class="into" type="text"
                    @click="analyse(item.name,item.threshold,item.windowlen,item.windowstep,item.interest,item.chans)">进入分析页面
                </el-button>
            </div>
            <div class="text">
                <div class="text1">
                    {{ '姓名：' + item.name }}
                </div>
                <div class="text1">
                    {{ '阈值：' + item.threshold }}
                </div>
                <div class="text1">
                    {{ '窗长：' + item.windowlen }}
                </div>
                <div class="text1">
                    {{ '窗移：' + item.windowstep }}
                </div>
                <div class="text1" >
                    {{ '频段：' + item.interest }}
                </div>
                <div class="text1">
                    {{ '电极：' + item.chans }}
                </div>
            </div>

        </el-card>
    </div>

</template>
<script>
export default {

    data() {
        return {
            history: [{
                name: '',
                threshold: '',
                windowlen: '',
                windowstep: '',
                state: '',
                interest: '',
                chans: ''
            }],
            isNeedAudit: true,
            value: 0,
        }
    },
    mounted() {
        this.getmessage();
        this.timer = setInterval(this.getmessage, 6000);
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods: {
        getmessage() {
            var that = this
            this.value++;
            console.log(this.value)
            this.$axios.post("/table/history").then(function (res) {
                console.log(res)
                that.history = res.data;
                console.log(that.history)
                // for (var i = 0; i < res.data; i++) {
                //     if (that.history[i].state == '处理中') {
                //         that.isNeedAudit = false
                //     } else {
                //         that.isNeedAudit = true
                //     }
                // }

            }).catch(function (err) {
                console.log(err)
            })

        },
        analyse(name,threshold,windowlen,windowstep,interest,chans) {
            // var that = this
            var param = new FormData();
            var param1 =name;
            var param2 =threshold;
            var param3 =windowlen;
            var param4 =windowstep;
            var param5 =interest;
            var param6 =chans;
            param.append("name", param1)
            param.append("threshold", param2)
            param.append("windowlen", param3)
            param.append("windowstep", param4)
            param.append("interest", param5)
            param.append("chans", param6)
            // this.$axios.post("/table/get_information", param).then(function (res) {
                window.open("http://10.224.130.115:5500/test_final_2.html")
                // http://10.224.130.115:5500/test_final.html
                // /table/open_html
            // })
        },
    }
}
</script>
<style scoped>
.text {
    float: left;
    width: 100%;
    margin-top: 10px;
    line-height: 2.0;
}

.text1 {
    width: 600px;
    height: 40px;
    float: left;
    clear: both;
    text-align: left;
    font-size: 20px;

}

.span {
    display: flex;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;

}

.red {
    color: red;
    text-align: right;
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: bold;
}

.green {
    color: green;
    text-align: right;
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: bold;
}

.into {
    font-size: 20px;
    margin-top: 1px;
}
</style>