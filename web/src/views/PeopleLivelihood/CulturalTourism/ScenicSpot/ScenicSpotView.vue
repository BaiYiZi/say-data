<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue'
import * as echarts from 'echarts'
import API from '@/api/index'

const loading = ref(true)

const testChartData = ref({ category: [], value: [] })
function getTestChartInfo() {
  const chartDom = document.getElementById('box', 'dark')
  const myChart = echarts.init(chartDom)

  const testChartOption = {
    xAxis: {
      type: 'category',
      data: testChartData.value.category
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: testChartData.value.value,
        type: 'bar',
        showBackground: true
      }
    ]
  }

  return [myChart, testChartOption]
}

onMounted(() => {
  API.PEOPLE_LIVELIHOOD.test().then((res) => {
    testChartData.value = res.data.data
    const [testChart, testChartOption] = getTestChartInfo()

    loading.value = false

    watchEffect(() => {
      testChart.setOption(testChartOption)
    })
  })
})

function func() {
  loading.value = true
  API.PEOPLE_LIVELIHOOD.test().then((res) => {
    testChartData.value = res.data.data
    const [testChart, testChartOption] = getTestChartInfo()
    testChart.setOption(testChartOption)
    loading.value = false
  })
}
</script>

<template>
  <div>ScenicSpot Page</div>

  <div v-loading="loading" id="box" :style="{ width: '1024px', height: '300px' }"></div>

  <button @click="func">CLick Me!</button>
</template>
