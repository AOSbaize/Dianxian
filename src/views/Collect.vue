<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="病人多模态信息采集" name="first">
            <el-card id="card" shadow="hover">
                <h1>当前信息</h1>
                <div class="head">
                    <img src="../picture/Snipaste_2023-04-12_14-52-12.png" style="  border-radius: 50%;
      width:80px;
      height:80px;">
                </div>
                <el-descriptions class="message">
                    <el-descriptions-item label="姓名">患者</el-descriptions-item>
                    <el-descriptions-item label="当前阈值">0.7</el-descriptions-item>
                    <el-descriptions-item label="研究频段">theta(4-7Hz)</el-descriptions-item>
                    <el-descriptions-item label="窗长">0.7s</el-descriptions-item>
                    <el-descriptions-item label="窗移">0.4s</el-descriptions-item>
                    <el-descriptions-item label="备注">
                        <el-tag size="small">暂无</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="所选电极">A1,A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2,G1,G2,H1,H2,J1,J1
                    </el-descriptions-item>
                </el-descriptions>
            </el-card>
            <el-card class="outcome">
                <h1>分析结果</h1>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="区形" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="电极" width="180">
                    </el-table-column>


                </el-table>
            </el-card>
            <el-card>
                <h1>结论</h1>
                <h3 class="over">该名患者的病灶区为颞叶区，在10.5-132s发生癫痫</h3>


            </el-card>
        </el-tab-pane>
        <el-tab-pane label="信息流向分析" name="second">
            <el-card class="card1">
                <h3 class="text1">癫痫网络脑区的重要性分析</h3>
                <img src="../picture/11.jpg" class="picture4">
            </el-card>
            <el-card class="card2">
                <h1>结论</h1>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="区形" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="电极" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="置信度">
                    </el-table-column>
                </el-table>

            </el-card>
            <div id="app">
                <div ref="main" class="main" style="height: 42rem; width: 40rem;"></div>
            </div>

        </el-tab-pane>
        <el-tab-pane label="癫痫脑电信号识别" name="third">
            <img src="../picture/1.jpg" class="picture3">
            <img src="../picture/2.jpg" class="picture3">
            <img src="../picture/3.jpg" class="picture3">
            <img src="../picture/4.jpg" class="picture3">
            <img src="../picture/5.jpg" class="picture3">
            <img src="../picture/6.jpg" class="picture3">
            <img src="../picture/7.jpg" class="picture3">
            <img src="../picture/8.jpg" class="picture3">
            <img src="../picture/9.jpg" class="picture3">
            <img src="../picture/10.jpg" class="picture3">
            <el-card>
                <h1>结论:10.5s-132s为癫痫脑电信号，此时患者癫痫发作</h1>
            </el-card>
        </el-tab-pane>
        <el-tab-pane label="癫痫网络分析" name="fourth">
            <img src="../picture/01.jpg" class="picture">
            <img src="../picture/02.jpg" class="picture">
            <img src="../picture/03.jpg" class="picture">
            <img src="../picture/04.jpg" class="picture">
            <img src="../picture/A.png" class="picture1">
            <img src="../picture/B.png" class="picture1">
            <img src="../picture/C.png" class="picture1">
            <img src="../picture/D.png" class="picture1">
            <img src="../picture/E.png" class="picture1">
            <img src="../picture/F.png" class="picture1">
            <el-card>
                <h1>结论:10.5s-132s为癫痫脑电信号，此时患者癫痫发作</h1>

            </el-card>
        </el-tab-pane>
        <el-tab-pane label="能量谱分析" name="fifth">
            <img src="../picture/a.jpg" class="picture1">
            <img src="../picture/b.jpg" class="picture1">
            <img src="../picture/c.jpg" class="picture1">
            <img src="../picture/d.jpg" class="picture2">
            <img src="../picture/e.jpg" class="picture5">
            <el-card>
                <h1>结论：颞叶区处于高能量状态，高度活跃，疑似为病灶区。</h1>
            </el-card>
        </el-tab-pane>
        <el-tab-pane label="病灶区定位" name="sixth">
            <div>
                <el-card style="height: 25rem; width: 60rem;position: absolute; margin-left: 60rem;">
                    <h3 class="text1">信息流统计</h3>
                    <img src="../picture/12.jpg" class="picture4">
                </el-card>
                <el-card style="height: 25rem; width: 60rem;position: absolute; margin-top: 25rem; margin-left: 60rem;">
                    <h1 style="margin-top: 2rem;">结论：B（颞叶区）是病灶区</h1>
                </el-card>
            </div>

            <div style="width: 40rem;height:60rem;" id="main2">
            </div>

        </el-tab-pane>
    </el-tabs>
</template>
<script>
import * as echarts from 'echarts';
import data from '../store/text.js';
export default {
    name: "echarts",
    name: "App",
    data() {
        return {
            activeName: 'first',
            tableData: [{
                date: '传播区',
                name: 'B2,A1,C4',
                address: '70%'
            }, {
                date: '致痫区',
                name: 'B6,A7',
                address: '40%'
            }, {
                date: '不涉及区',
                name: 'D4,H7,B8',
                address: '80%'
            },],
        };
    },

    mounted() {
        this.echartsInit2();
        this.init();
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        echartsInit2() {
            echarts.init(document.getElementById('main2')).setOption({
                title: {
                    text: '病灶区疑似程度'
                },
                legend: {
                    top: 'bottom'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [30, 260],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8
                        },
                        data: [
                            { value: 20, name: 'A' },
                            { value: 38, name: 'B' },
                            { value: 32, name: 'C' },
                            { value: 30, name: 'D' },
                            { value: 28, name: 'E' },
                            { value: 26, name: 'F' },
                            { value: 22, name: 'G' },
                            { value: 18, name: 'H' },
                            { value: 18, name: 'J' }
                        ]
                    }
                ]
            }
            )
        },

        init() {
            let chartDom = this.$refs.main;
            let myChart = echarts.init(chartDom);
            myChart.showLoading();
            this.echartsOnTree(data, myChart);
        },
        echartsOnTree(graph, myChart) {
            myChart.hideLoading();
            graph.nodes.forEach(function (node) {
                node.label = {
                    show: node.symbolSize > 30,
                };
            });
            let option = {
                title: {
                    text: "信息流向图",
                    subtext: "Circular layout",
                    top: "top",
                    left: "left",
                },
                tooltip: {},
                legend: [
                    {
                        data: graph.categories.map(function (a) {
                            return a.name;
                        }),
                    },
                ],
                animationDurationUpdate: 1500,
                animationEasingUpdate: "quinticInOut",
                series: [
                    {
                        name: "信息流向图",
                        type: "graph",
                        layout: "circular",
                        circular: {
                            rotateLabel: true,
                        },
                        data: graph.nodes,
                        links: graph.links,
                        categories: graph.categories,
                        // roam: true,
                        label: {
                            position: "right",
                            formatter: "{b}",
                        },
                        lineStyle: {
                            color: "source",
                            curveness: 0.3,
                        },
                    },
                ],
            };
            myChart.setOption(option);
        },
    }
};
</script>
<style scoped>
.head {
    margin: auto;
    height: 5rem;
    width: 5rem;
    margin-left: 1rem;
    margin-top: 1rem;
}

.picture {
    width: 25rem;
    height: auto;
}

.over {
    margin-top: 1rem;
}

.picture1 {
    width: 33rem;
    height: auto;
}

.picture2 {
    width: 33rem;
    height: auto;
    margin-left: 14rem;
}

.picture3 {
    width: 50%;
    height: auto;
}

.picture4 {
    margin-top: -1rem;
}

.picture5 {
    width: 33rem;
    height: auto;
    margin-left: 6rem;
}

.outcome {
    height: 20rem;
    width: auto;
}

.card1 {
    width: 60rem;
    height: 25rem;
    position: absolute;
}

.card2 {
    width: 60rem;
    height: 25rem;
    position: absolute;
    margin-top: 26rem;
}





.main {
    margin-left: 60rem;
}



.text1 {
    position: absolute;
    text-align: left;
    margin-left: -0.3rem;
    margin-top: -1.2rem;
}

.descriptions {
    font-size: 2rem;
}
</style>