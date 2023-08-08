<style scoped src="./ScenicSpotView.css"></style>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { useScenicSpotTestChartStore } from './Charts/TestChart'

const testChartLoadingState = ref(true)
const scenicSpotTestChart = useScenicSpotTestChartStore()

const timerReLoadPageDataFuncs = []

function func() {
  testChartLoadingState.value = true
  scenicSpotTestChart.reLoadData().then(() => {
    testChartLoadingState.value = false
  })
}

onMounted(() => {
  Promise.all([
    scenicSpotTestChart
      .loadData()
      .then(() => {
        scenicSpotTestChart.setDomID('test-chart-box')
      })
      .then(() => {
        testChartLoadingState.value = false
      })
      .then(() => {
        scenicSpotTestChart.loadDom()
      })
      .then(() => {
        return async () => {
          while (true) {
            await new Promise((resolve) => {
              setTimeout(() => {
                resolve()
              }, 5000)
            })

            testChartLoadingState.value = true
            await scenicSpotTestChart.reLoadData()
            testChartLoadingState.value = false
          }
        }
      })
  ]).then((reLoadDataFuncs) => {
    reLoadDataFuncs.forEach((v) => v())
  })
})

onUnmounted(() => {
  clearInterval(timerReLoadPageDataFuncs)
  console.log('back')
})
</script>

<template>
  <div class="container">
    <div
      id="test-chart-box"
      class="test-chart-box"
      v-loading="testChartLoadingState"
      element-loading-background="rgba(0, 0, 0, 0)"
    ></div>
    <button @click="func">click me</button>
  </div>
</template>
