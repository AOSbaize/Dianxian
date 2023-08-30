<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <el-scrollbar class="page-scroll">
          <common-aside></common-aside>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <common-tag></common-tag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue';
import CommonTag from '../components/CommonTag.vue';

export default {
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  },
  data() {
    return {}
  }
}
</script>
<style>
.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.page-scroll {
  height: 100%;
}

.page-scroll .el-scrollbar__wrap {
  overflow-x: hidden;
} 

* {
  margin: 0;
  padding: 0;
  border: 0
}

.el-aside {
  background-color: #545c64;
  color: #333;
  background-color: white;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 100vh;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}



.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

html,
body,
#app,
.el-container {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.el-header {
  padding: 0;
}
</style>