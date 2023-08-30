<template id="title">
  <div id="all">
    <div style="width:37.5rem;height:20rem; " id="table">
      <el-card id="card" shadow="hover">
        <h1>当前信息</h1>
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

    </div>
    <div style="width: 30rem;height: 25rem" id="main">
    </div>
    <div style="width: 25rem;height:25rem;" id="main1">
    </div>
    <div style="width: 63rem;height:25rem;" id="main2">
    </div>
    <div id="app">
      <div ref="main" class="main"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
import data from '../store/text.js';
//通过this.$echarts来使用
export default {
  name: "echarts",
  data() {
    return {}
  },
  name: "App",
  components: {},
  mounted() {
    this.echartsInit();
    this.echartsInit1();
    this.echartsInit2();
    this.init();
  },
  methods: {
    echartsInit() {
      echarts.init(document.getElementById('main')).setOption({
        title: {
          text: '特征值变化图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['特征值1', '特征值2']
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '特征值1',
            type: 'line',
            stack: 'Total',
            data: [10, 11.5, 20, 50, 25, 60, 33, 28, 30, 40, 55, 70, 12, 44, 23]
          },
          {
            name: '特征值2',
            type: 'line',
            stack: 'Total',
            data: [11, 12, 40, 30, 23, 22, 31, 26, 45, 42, 32, 66, 44, 45, 25]
          },



        ]
      }
      )
    },
    echartsInit1() {
      echarts.init(document.getElementById('main1')).setOption({
        title: {
          text: '流向统计'
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
            radius: [15, 150],
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
              { value: 18, name: 'H' }
            ]
          }
        ]
      }
      )
    },
    echartsInit2() {
      echarts.init(document.getElementById('main2')).setOption({
        xAxis: {
          type: 'category',
          min: 0,
          setInterval: 79,


        },
        yAxis: {
          type: 'value',
          min: -0.07,
          setInterval: 0.0001
        },
        series: [
          {
            data: [0.01745240643728351,0.034899496250097, 0.06975647374453, 0.087174274765816, 0.104528466765346, 0.21869340514747, 0.139173106006544, 0.56434464023087, 0.7364876693033, 0.908089965448, 0.0791169775931, 0.2495105386497, 0.19218959966773, 0.2588190410252074, 0.275637358169996, 0.29237170722737, 0.30901699374974, 0.32556815457167, 0.342020143325687, 0.3583679495453027, 0.37460659341512, 0.390731128492737, 0.4067366430780015, 0.4226182617469944, 0.438371146780774, 0.4539904997954675,0.469471562758908, 0.4848096202633706, 0.4999999999999994, 0.15038049100542, 0.29919262332049, 0.4463903015027, 0.59192904707468, 0.7357646351046, 0.87785222924731, 0.01815021520483, 0.156614753256583, 0.293203910498375, 0.427876096865392, 0.560590289905073,0.691306063588582, 0.819983600624985, 0.946583704589972, 0.071067811865475, 0.193398003386511, 0.313537016191705, 0.431448254773941, 0.7547095802227719, 0.766044443118978, 0.7771459614569708, 0.7880107536067219, 0.7986355100472928, 0.8090169943749474, 0.8191520442889918,0.8290375725550417, 0.8386705679454239, 0.848048096156426, 0.8571673007021122, 0.8660254037844386, 0.8746197071393957,0.8829475928589269, 0.8910065241883678, 0.898794046299167, 0.063077870366499, 0.135454576426009, 0.205048534524404, 0.271838545667873,0.9335804264972017, 0.9396926207859083, 0.9455185755993167, 0.9510565162951535, 0.9563047559630354, 0.9659258262890683, 0.9702957262759965, 0.9743700647852352, 0.9781476007338057, 0.981627183447664, 0.984807753012208,0.9876883405951378, 0.9902680687415704, 0.992546151641322, 0.9945218953682733, 0.961946980917455, 0.9975640502598242, 0.9986295347545738, 0.9993908270190958, 0.9998476951563913,1,],
            type: 'line'
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
          // text: "信息流向图",
          // top: "bottom",
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
            name: "Les Miserables",
            type: "graph",
            layout: "circular",
            circular: {
              rotateLabel: true,
            },
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: false,
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
  },
}


</script>
<style scoped>
#table {
  float: left;
}

#main2 {
  float: right;
  position: absolute;
  margin-left: 45rem;

}

#main1 {
  position: absolute;
  margin-top: 23rem;
  margin-left: 75rem;

}

#main {
  position: absolute;
  margin-top: 25rem;
  margin-left: 3rem
}

#app {
  height: 50%;
  width: 50%;
  position: absolute;
  margin-top: 25rem;
  margin-left: 25rem;
}

#card {
  width: 100%;
  height: 100%;
}

.main {
  height: 25rem;
}

.message {
  margin-top: 2rem;
  font-size: 1.1rem;
}
</style>