<template>
    <mychart ref="chart"></mychart>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getActivity } from '@/api/DevelopmentData'

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 获取 API 接口数据
async function getChartData() {
    const dates = []
    const count = []
    chartData.value = ((await getActivity()).data.data).map(item => {
        var d = new Date(item.dates)
        dates.push(d.getFullYear() + '年' + d.getMonth() + '月')
        count.push(item.count)
    });

    chartData.value.dates = dates
    chartData.value.count = count
}

function chart0ption() {
    // 图表样式
    const option = {
        // color: [
        //   "red",
        //   "aqua",
        //   "#fac858",
        //   "#ee6666",
        //   "#73c0de",
        //   "#3ba272",
        //   "#fc8452",
        //   "#9a60b4",
        //   "#ea7ccc"
        // ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '5%',
            left: '2%',
            right: '2%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [
            {
                axisLabel: {
                    interval: 0,
                    formatter: function (value) {
                        return value.split("").join("\n");
                    }
                },
                type: 'category',
                data: chartData.value.dates,
                axisTick: {
                    alignWithLabel: true
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.15)'
                    }
                }
            }
        ],
        series: [
            {
                name: '次数',
                smooth: true,
                type: 'line',
                data: chartData.value.count,
                color: '#54EBC8',
                lineStyle: {
                    width: 4
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(84, 235, 200, 0.5)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(84, 235, 200, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            }
        ],
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