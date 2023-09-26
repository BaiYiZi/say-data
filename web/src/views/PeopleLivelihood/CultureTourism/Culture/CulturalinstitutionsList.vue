<template>
    <mychart ref="chart"></mychart>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getCulturalinstitutionsList } from '@/api/CultureData'

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 获取 API 接口数据
async function getChartData() {
    var year = []
    var publicLibrary = []
    var museum = []

    chartData.value = ((await getCulturalinstitutionsList()).data.data).map(item => {
        year.push(item.year)
        publicLibrary.push(item.public_library)
        museum.push(item.museum)
    })

    chartData.value.year = year;
    chartData.value.publicLibrary = publicLibrary;
    chartData.value.museum = museum;
}

function chart0ption() {
    var formatter = '年份:{b}<br/>公共图书馆建设数量: {c1}<br/>博物馆建设数量: {c}';
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
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: chartData.value.year
        },
        yAxis: {
            type: 'value',
            min: 15,
            max: 45,
            axisLabel: {
                show: true,
                interval: 'auto',
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
                name: '公共图书馆建设数量',
                data: chartData.value.museum,
                itemStyle: {
                    // color: '#54EBC8',
                    color: 'rgba(108, 229, 245, 1)'
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
                            offset: 0, color: 'rgba(108, 229, 245, 0.5)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(84, 235, 200, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            },
            {
                type: 'line',
                name: '博物馆建设数量',
                data: chartData.value.publicLibrary,
                itemStyle: {
                    // color: '#FFA652',
                    color: 'rgba(69, 184, 255, 1)'
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
                            offset: 0, color: 'rgba(69, 184, 255, 0.5)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(69, 184, 255, 0)' // 100% 处的颜色
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