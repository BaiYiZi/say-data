<template>
    <mychart ref="chart"></mychart>
    <dialogFrame title="test" ref="dialog">
        <frame :title="type">
            <CulturalProtectionTypeList :type="type"/>
        </frame>
    </dialogFrame>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getCulturalProtectionType } from '@/api/CultureData'
import dialogFrame from '@/components/dialogFrame.vue'
import frame from "@/components/Frame.vue"

import CulturalProtectionTypeList from "./CulturalProtectionTypeList.vue"

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 引用对话框组件
const dialog = ref(null)

// 给子组件传递的参数
const type = ref()

// 获取 API 接口数据
async function getChartData() {
    var type = []
    var count = []

    chartData.value = ((await getCulturalProtectionType()).data.data).map(item => {
        type.push(item.type)
        count.push(item.count)
    })

    chartData.value.type = type;
    chartData.value.count = count;
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
            bottom: '15%'

            // containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                interval: 0,
                formatter: function (value) {
                    return value.split("及").join("\n");
                },
                margin: 15,
                color: "#858585",
                fontSize:14
            },
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 0, 0, 0.15)",
                }
            },

            data: chartData.value.type
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false,
            }
        },
        series: [
            {
                name: "数量",
                type: 'bar',
                barWidth: 80,
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
                    // shadowColor: '#7FEFFF',
                    shadowColor: 'rgba(118, 106, 240, 0.5)',
                    //颜色样式部分
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            // {
                            //     offset: 0,
                            //     color: 'rgba(108, 229, 245, 1)' // 0% 处的颜色
                            // },
                            // {
                            //     offset: 1,
                            //     color: 'rgba(69, 184, 255, 1)' // 100% 处的颜色
                            // },
                            {
                                offset: 0,
                                color: 'rgba(152, 152, 255, 1)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(118, 106, 240, 1)' // 100% 处的颜色
                            },
                        ]
                    },

                    borderRadius: [10, 10, 10, 10],
                },
                data: chartData.value.count
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

    // 图表点击事件
    chart.value.chart.on("click", function (params) {
        type.value = params.name
        // 打开下钻窗口
        dialog.value.open()
    });
})
</script>

<style></style>