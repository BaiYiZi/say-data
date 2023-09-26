<template>
    <mychart ref="chart"></mychart>
    <dialogFrame ref="dialog">
        <frame :title="props.address">
            <TourisAttractionListByAddress :address="address" :level="level"></TourisAttractionListByAddress>
        </frame>
    </dialogFrame>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getLevelsByAddress } from '@/api/TouristAttractionData'
import dialogFrame from '@/components/dialogFrame.vue'
import frame from '@/components/Frame.vue'

import TourisAttractionListByAddress from "./TourisAttractionListByAddress.vue"

const props = defineProps(["address"])

const address = ref(props.address)
const level = ref()

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 引用对话框组件
const dialog = ref(null)

// 获取 API 接口数据
async function getChartData() {
    chartData.value = ((await getLevelsByAddress(props.address)).data.data).map(item => {
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
            '#2DB4C5',
            '#2997AE',
            '#33C8C1',
            '#46EEA1',
        ],
        legend: {
            type: 'scroll',
            orient: 'vertical',
            align: 'left',
            right: 20,
            bottom: 20,
            itemHeight: 20,
            itemGap: 10,
            height: '50%',
            pageTextStyle: {
                color: 'rgba(255,255,255,0.25)'
            },
            icon: 'circle', // 图例的图标样式
            textStyle: { //图例的文字样式
                color: '#858585',
                fontSize: 14
            },
        },
        series: [
            {
                type: "pie",
                radius: ['0%', '82%'],
                center: ["45%", "50%"],
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

        level.value = params.name
    });
})
</script>


<style lang="less" scoped>
</style>