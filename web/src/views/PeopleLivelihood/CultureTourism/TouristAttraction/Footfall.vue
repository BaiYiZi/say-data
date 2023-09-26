<template>
    <mychart ref="chart"></mychart>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getFootfall } from '@/api/TouristAttractionData'

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 获取 API 接口数据
async function getChartData() {
    var category = []
    var footfallIndex = []

    chartData.value = ((await getFootfall()).data.data).map(item => {
        category.push(item.name)
        footfallIndex.push(item.footfall_index)
    })

    chartData.value.category = category;
    chartData.value.footfallIndex = footfallIndex;
}

function chart0ption() {
    // 图表样式
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '5%',
            left: '4%',
            right: '1%',

            // containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                interval: 0,
                formatter: function (value) {
                    return value.split("").join("\n");
                },
                color: "#858585",
            },
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 0, 0, 0.15)",
                }
            },
            
            data: chartData.value.category
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false,
            }
        },
        series: [
            {
                name: "客流指数",
                type: 'bar',
                barWidth: 20,
                showBackground: true,
                backgroundStyle: {
                    borderRadius: [10, 10, 10, 10],
                    color: 'rgba(0,0,0,0.03)',
                },
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                     //数值样式
                    color: '#858585',
                    fontSize: 12
                },
                itemStyle: {
                    shadowBlur: 4,
                    shadowColor: '#7FEFFF',
                    //颜色样式部分
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(108, 229, 245, 1)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(69, 184, 255, 1)' // 100% 处的颜色
                            }
                        ]
                    },

                    borderRadius: [10, 10, 10, 10],
                },
                data: chartData.value.footfallIndex
            }
        ]
    };
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