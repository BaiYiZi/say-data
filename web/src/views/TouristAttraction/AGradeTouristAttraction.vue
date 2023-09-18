<template>
    <mychart ref="chart"></mychart>
    <dialogFrame title="test" ref="dialog">
        <frame title="testDrillDown">
            <passengerFlow />
        </frame>
    </dialogFrame>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getAttractionsCountData } from '@/api/TouristAttractionData'
import dialogFrame from '@/components/dialogFrame.vue'
import frame from "../../components/Frame.vue"
import passengerFlow from "PassengerFlow.vue"

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 引用对话框组件
const dialog = ref(null)

// 获取 API 接口数据
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
                center: ["35%", "50%"],
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

    getChartData().then(() => {
        chart.value.renderChart(chart0ption())
    })

    // 图表点击事件
    chart.value.chart.on("click", function (params) {
        // 打开下钻窗口
        dialog.value.open()
    });
})
</script>

<style></style>