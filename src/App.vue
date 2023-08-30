<template>
  <div id="app" >
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router';
export default {
  name: 'App',
  components: {
    router
}, data() {
    return {
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
}
</script>

<style>

</style>
