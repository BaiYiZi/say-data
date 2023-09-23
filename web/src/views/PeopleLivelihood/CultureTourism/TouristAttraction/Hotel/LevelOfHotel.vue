<template>
    <div class="LevelOfHotel">
        <div class="box">
            <div class="title">保定市四星及以下级酒店占河北省的份额</div>
            <div class="chart-box">
                <mychart ref="chartOf"></mychart>
            </div>
        </div>
        <div class="box">
            <div class="title">保定五星级酒店占河北省的份额</div>
            <div class="chart-box">
                <mychart ref="chartFive"></mychart>
            </div>
        </div>
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
                radius: '70%',
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
.LevelOfHotel {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .box {
        height: 100%;
        width: calc(50% - 10px);
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 8px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);

        // background-color: #f6f6f6;
        .title {
            width: fit-content;
            height: 50px;
            line-height: 50px;
            padding: 0 20px 0 20px;

            border-radius: 6px;
            background-color: #fff;
            font-size: 18px;
            color: #585858;
            text-align: center;
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);
        }
        .chart-box {
            height: calc(100% - 50px);
            width: 100%;
        }
    }
}

</style>