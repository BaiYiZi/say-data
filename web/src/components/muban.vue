<template>
    <mychart ref="chart"></mychart>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { xxxxxxxxxxx } from '@/api/xxxxxxxxxxx'

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 获取 API 接口数据
async function getChartData() {
    chartData.value = ((await xxxxxxxxxxx()).data.data).map(item => {
        
    });
}

function chart0ption() {
    // 图表样式
    const option = {}
    return option
}

onMounted(() => {
    // 初始化图表
    chart.value.initChart()

    getChartData().then(() => {
        chart.value.renderChart(chart0ption())
    })
})
</script>

<style></style>