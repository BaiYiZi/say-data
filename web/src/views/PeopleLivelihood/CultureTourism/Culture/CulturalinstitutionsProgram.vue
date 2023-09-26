<template>
    <mychart ref="chart"></mychart>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getCulturalinstitutionsProgram } from '@/api/CultureData'

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 获取 API 接口数据
async function getChartData() {
    var year = []
    var programCoverage = []

    chartData.value = ((await getCulturalinstitutionsProgram()).data.data).map(item => {
        year.push(item.year)
        programCoverage.push(item.program_coverage * 100)
    })

    chartData.value.year = year;
    chartData.value.programCoverage = programCoverage;
}

function chart0ption() {
    var formatter = '年份:{b}<br/>人口覆盖率: {c}%';
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
            min: 98,
            max: 100,
            axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value} %'//纵坐标百分比
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
                name: '人口覆盖率',
                data: chartData.value.programCoverage,
                itemStyle: {
                    color: '#54EBC8',
                },
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