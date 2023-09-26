<template>
    <mychart ref="chart"></mychart>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getAttractionsCountData } from '@/api/TouristAttractionData'

const chart = ref(null)

const chartData = ref([])

async function getChartData() {
    chartData.value = ((await getAttractionsCountData()).data.data).map(item => {
        return {
            name: item.tagName,
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
            // '#2B3BBD',
            // '#2846A5',
            '#24518D',
            '#235F82',
            '#267C99',
            '#2997AE',
            '#2DB4C5',
            '#33C8C1',
            '#3DDAB2',
            '#46EEA1',
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
                color: 'rgba(255,255,255,0.75)',
            },
        },
        series: [
            {
                type: "pie",
                radius: ['42%', '85%'],
                center: ["40%", "50%"],
                label: { show: false },
                data: chartData.value
            }
        ]
    };
    return option
}

onMounted(() => {
    // 初始化图表
    chart.value.initChart()

    // 请求数据
    getChartData().then(() => {
        // 渲染图表
        chart.value.renderChart(chart0ption())
    })
})
</script>

<style></style>