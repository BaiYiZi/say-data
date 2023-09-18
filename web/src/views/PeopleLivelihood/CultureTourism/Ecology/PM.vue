<template>
    <mychart ref="chart"></mychart>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getPm } from '@/api/EcologyData'

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 获取 API 接口数据
async function getChartData() {
    var year = []
    var pm = []

    chartData.value = ((await getPm()).data.data).map(item => {
        year.push(item.year)
        pm.push(item.pm)
    })

    chartData.value.year = year;
    chartData.value.pm = pm;
}

function chart0ption() {
    var formatter = '年份:{b}<br/>PM2.5年平均浓度(μg/m3): {c}';
    // 图表样式
    const option = {
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: formatter, //展示百分比
            color: '#858585'
        },
        legend: {
            type: 'plain',
            x: 'center',
            // y: 'bottom',
            bottom: 0,
            // icon: 'roundRect', // 图例的图标样式
            textStyle: { //图例的文字样式
                fontSize: 14,
                color: '#858585',
            },
        },
        grid: {
            top: '6%',
            left: '2%',
            right: '2%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: chartData.value.year
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 80,
            axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value}'//纵坐标百分比
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(0,0,0,0.1)'
                }
            }
        },
        series: [
            {
                type: 'line',
                name: 'PM2.5 年平均浓度（μg/m3）',
                data: chartData.value.pm,
                itemStyle: {
                    color: 'rgba(255, 166, 82, 1)',
                },
                lineStyle: {
                    width: 4,
                    shadowBlur: 3,
                    shadowColor: 'rgba(255, 166, 82, 1)',
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(255, 166, 82, 0.5)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(255, 166, 82, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            }
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