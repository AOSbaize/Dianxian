<template>
    <div class="home">
       

        <el-card class="card">
            <div class="header1">癫痫辅助定位系统</div>
            <!-- <div class="simple">系统简介:</div> -->
            <el-card class="card3">
                <h3>一套癫痫辅助诊断系统，该系统依托于互联网，可将患者脑电数据上传至云数据中心，进而实现对该数据的诊断分析</h3>
            </el-card>
            <el-row class="row1">
                <el-col :span="6">
                    <el-card :body-style="{ padding: '0px' }" class="card1">
                        <img src="../picture/微信图片_20221129180544.png" class="img1">
                        <div class="text1">癫痫是大脑神经元突发性异常放电，导致短暂的大脑功能障碍的一种慢性疾病。
                            根据最新流行病学资料显示：在中国，癫痫已经成为神经科仅次于头痛的第二大常见病</div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{ padding: '0px' }" class="card1">
                        <img src="../picture/微信图片_20221129180554.png" class="img1">
                        <div class="text2">由于癫痫在发作时脑电图可以准确地记录出散在性慢波、棘波或不规则棘波，
                            因此对于诊断癫痫，脑电图检查十分准确,且脑电图对抗癫痫药的停药具有指导作用。</div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{ padding: '0px' }" class="card1">
                        <img src="../picture/微信图片_20221129180556.png" class="img1">
                        <div class="text3">立体脑电图是一种通过深度电极(电极通过手术植入脑组织)记录脑电图信号的方法。
                            医生将电极放置在目标大脑区域,然后对其进行监控以精确定位癫痫发作的来源。
                            SEEG 可以发现常规脑电图测试可能无法到达的大脑深处的癫痫发作部位。</div>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </div>

</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.header1 {
    display: flex;
    font-size: 50px;
    text-align: left;
    font-weight: bold;
    margin-top: 10px;
    font-family: 'Times New Roman', Times, serif;

}

.card {
    /* margin-top: 20px; */
    height: 100vh;
    background-color: aquamarine;
    /* background-image: url(../picture/VCG211270907901_edit_471347843889535.jpg); */
}

.simple {
    margin-left: 0px;
    text-align: left;
    font-size: 20px;
    color: red;
    font-weight: bold;
}

.card1 {
    height: 60vh;
    margin-left: 182px;
    margin-top: 20px;
    background-color: bisque;
    width: 320px;

}

.img1 {
    height: 30vh;
    width: 320px;
}

.card3 {
    margin-top: 20px;
    height: 20vh;
    text-align: left;
}
.text1,.text2,.text3{
    font-size: 20px;
    line-height: 32px;
    text-align: left;
    text-indent: 50px;
}
</style>