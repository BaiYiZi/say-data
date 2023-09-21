<template>
    <div class="chart-box">
        <div class="title">保定一至四星级酒店占河北省一至四星级酒店数量的份额</div>
        <mychart ref="chartOf"></mychart>
    </div>
    <div class="chart-box">
        <div class="title">保定五星级酒店占河北省五星级酒店的份额</div>
        <mychart ref="chartFive"></mychart>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getHotelOf, getHotelFive } from '@/api/TouristAttractionData'

// 引用图表组件 chart
const chartOf = ref(null)
const chartFive = ref(null)

const chartOfData = ref([])
const chartFiveData = ref([])

// 获取 API 接口数据
async function getChartData() {
    let data = (await getHotelOf()).data.data.OF
    let dataList = [
        {
            name: "保定市",
            // value: (data * 100).toFixed(1)
            value: data

        },
        {
            name: "河北省其他地区",
            // value: 100 - (data * 100).toFixed(1)
            value: 1 - data
        }
    ]
    chartOfData.value = dataList
    console.log(chartOfData.value);

    data = (await getHotelFive()).data.data.OF
    dataList = [
        {
            name: "保定市",
            // value: (data * 100).toFixed(1)
            value: data
        },
        {
            name: "河北省其他地区",
            // value: 100 - (data * 100).toFixed(1)
            value: 1 - data
        }
    ]
    chartFiveData.value = dataList
    console.log(chartFiveData.value);
}

function chart0ption(data) {
    // 图表样式
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: (params) => {
                let value = params.data.value
                let item = (value * 100).toFixed(1)
                return '<div class="showBox">'+ params.data.name + '&nbsp&nbsp&nbsp&nbsp' + item + '%</div>'
            }
        },
        color: [
            '#3DDAB2',
            '#2DB4C5',     
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
                radius: '80%',
                center: ["50%", "50%"],
                label: { show: false },
                data: data.value,
                formatter: '{value}%'
            }
        ]
    };
    return option
}

onMounted(() => {
    // 初始化图表
    chartOf.value.initChart()
    chartFive.value.initChart()

    getChartData().then(() => {
        chartOf.value.renderChart(chart0ption(chartOfData))
        chartFive.value.renderChart(chart0ption(chartFiveData))
    })
})
</script>

<style lang="less" scoped>
.chart-box {
    height: 100%;
    width: 100%;
    
    .title {
        text-align: center;
    }
}
</style>