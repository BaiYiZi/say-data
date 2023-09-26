<script>
import { provide } from 'vue'
import * as echarts from 'echarts'

export default {
  setup() {
    provide('echarts', echarts)
  },
};
</script>

<template>
  <RouterView />
</template>

<style></style>
