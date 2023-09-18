<template>
    <mychart ref="chart"></mychart>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getTourworthy } from '@/api/TouristAttractionData'

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 获取 API 接口数据
async function getChartData() {
    chartData.value = ((await getTourworthy()).data.data)

    const tmp = { names: [], values: [] }
    for (let i = 0; i < 6; i++) {
        tmp.names.push(Object.keys(chartData.value[i])[0])
        tmp.values.push(Object.values(chartData.value[i])[0])
    }

    chartData.value = tmp
}

function chart0ption() {
    // 图表样式
    const option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        //图表位置
        grid: {
            top: "-10px",
            left: "100px",
            right: "60px",
            bottom: "5px"
        },
        //X轴
        xAxis: {
            type: "value",
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            //不显示X轴刻度线和数字
            splitLine: { show: false },
            axisLabel: { show: false },
        },
        yAxis: {
            type: "category",
            data: chartData.value.names,
            //升序
            inverse: true,
            splitLine: { show: false },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            //key和图间距
            offset: 10,
            //key文字大小
            axisLabel: {
                show: true,
                fontFamily: 'SourceHanSans',
                color: "#858585",
                fontSize: '12',
            }
        },
        series: [
            {
                // 柱状图自动排序，排序自动让Y轴名字跟着数据动
                realtimeSort: true,
                name: "数量(个)",
                type: "bar",
                data: chartData.value.values,
                barWidth: 18,
                barGap: 10,
                smooth: true,
                valueAnimation: true,
                showBackground: true,
                backgroundStyle: {
                    borderRadius: [0, 100, 100, 0],
                    color: 'rgba(0,0,0,0.05)',
                },
                // Y轴数字显示部分
                label: {
                    show: true,
                    position: 'outsideLeft',
                    offset: [200, 0],
                    valueAnimation: true,
                    color: "#858585",
                    fontSize: 12,
                },
                // 样式
                itemStyle: {
                    borderRadius: [0, 100, 100, 0],
                    //颜色样式部分
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 1,  //左
                        y2: 0,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(15, 135, 250, 1)" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(0, 192, 254, 1)" // 100% 处的颜色
                            }
                        ]
                    }
                },
            },
        ],
        // 动画部分
        animationDurationUpdate: 0
    };
    return option
}

onMounted(() => {
    // 初始化图表
    chart.value.initChart()

    // chart.value.renderChart(chart0ption())
    getChartData().then(() => {
        chart.value.renderChart(chart0ption())
    })
})

</script>

<style>

</style>