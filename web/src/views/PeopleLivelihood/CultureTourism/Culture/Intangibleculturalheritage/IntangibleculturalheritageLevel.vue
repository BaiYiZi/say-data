<template>
    <mychart ref="chart"></mychart>
    <dialogFrame title="test" ref="dialog" width="1400px" height="800px">
        <frame :title="level">
            <IntangibleculturalheritageList :level="level"/>
        </frame>
    </dialogFrame>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getIntangibleculturalheritageLevel } from '@/api/CultureData.js'
import dialogFrame from '@/components/dialogFrame.vue'
import frame from "@/components/Frame.vue"
import IntangibleculturalheritageList from "./IntangibleculturalheritageList.vue"

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 引用对话框组件
const dialog = ref(null)

// 给子组件传参
const level = ref()

// 获取 API 接口数据
async function getChartData() {
    chartData.value = ((await getIntangibleculturalheritageLevel()).data.data).map(item => {
        return {
            name: item.level,
            value: item.count
        }
    })
}

function chart0ption() {
    // 图表样式
    const option = {
        tooltip: {
            trigger: 'item'
        },
        color: [
            // '#00c1bf',
            // '#00cfce',
            // '#00dcde',
            // '#00eaee',
            // '#00f8ff'
            '#5297f0',
            '#00baf9',
            '#3fd8f3',
            '#88f2ea'
        ],
        legend: {
            type: 'scroll',
            orient: 'vertical',
            align: 'left',
            right: 20,
            bottom: 20,
            itemHeight: 12,
            itemGap: 10,
            height: '50%',
            pageTextStyle: {
                color: 'rgba(255,255,255,0.25)'
            },
            icon: 'circle', // 图例的图标样式
            textStyle: { //图例的文字样式
                color: '#858585',
            },
        },
        series: [
            {
                type: "pie",
                radius: ['42%', '85%'],
                center: ["35%", "50%"],
                label: {
                    show: true,
                    position: 'inner',
                    color: '#fff',
                },
                data: chartData.value
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
        level.value = params.name
        // 打开下钻窗口
        dialog.value.open()
    });
})
</script>

<style></style>