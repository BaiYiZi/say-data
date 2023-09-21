<template>
    <mychart ref="chart"></mychart>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getRevenueDrevenue } from '@/api/DevelopmentData'

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 获取 API 接口数据
async function getChartData() {
    const year = []
    const irevenue = []
    const drevenue = []

    chartData.value = ((await getRevenueDrevenue()).data.data).map(item => {
        year.push(item.year)
        irevenue.push(item.irevenue)
        drevenue.push(item.drevenue)
    });

    chartData.value.year = year
    chartData.value.irevenue = irevenue
    chartData.value.drevenue = drevenue
}

function chart0ption() {
    // 图表样式
    const option = {
        tooltip: {
            trigger: "axis",
            formatter: '年份: {b0}<br/>{a0}: {c0}<br/>{a1}: {c1}',
            axisPointer: {
                type: "shadow",
            },
        },
        legend: {
            type: 'plain',
            x: 'center',
            // y: 'bottom',
            bottom: 0,
            icon: 'roundRect', // 图例的图标样式
            textStyle: { //图例的文字样式
                color: '#858585',
            },
        },
        grid: {
            top: '5%',
            left: '2%',
            right: '2%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: chartData.value.year
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(0,0,0,0.1)'
                }
            }
        },
        series: [
            {
                name: '国内游客创收(亿)',
                type: 'bar',
                barWidth: 24,
                data: chartData.value.drevenue,
                itemStyle: {
                    color: 'rgba(91, 241, 246, 1)',
                    borderRadius: [6, 6, 6, 6],
                    shadowBlur: 3,
                    shadowColor: 'rgba(91, 241, 246, 1)',
                }
            },
            {
                name: '国外游客创收(亿)',
                type: 'bar',
                barWidth: 24,
                data: chartData.value.irevenue,
                itemStyle: {
                    color: 'rgba(0, 143, 255, 0.85)',
                    borderRadius: [6, 6, 6, 6],
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 143, 255, 0.85)',
                }
            },
        ]
    }
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