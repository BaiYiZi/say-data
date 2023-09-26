<template>
    <mychart ref="chart"></mychart>
    <dialogFrame ref="dialog">
        <frame :title="address">
            <TourisAttractionLevelByAddress :address="address"></TourisAttractionLevelByAddress>
        </frame>
    </dialogFrame>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getALevel } from '@/api/TouristAttractionData'

import dialogFrame from '@/components/dialogFrame.vue'
import frame from '@/components/Frame.vue'
import mapData from '@/utils/MapData/MapData.json'

import TourisAttractionLevelByAddress from "./TourisAttractionLevelByAddress.vue"

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

// 引用对话框组件
const dialog = ref(null)

// 给子组件传入的参数
const address = ref(null)

// 获取 API 接口数据
async function getChartData() {
    chartData.value = ((await getALevel()).data.data).map(item => {
        return {
            name: item.address,
            value: item.count
        }
    })
}

function chart0ption() {
    // 图表样式
    const option = {
        tooltip: {
            // formatter: '{a}<br/>{b}: {c}个'
            formatter: function (params) {
                if (params.value) {
                    return params.seriesName + '<br/>' + params.name + ' : ' + params.value + ' 个'
                } else {
                    return params.seriesName + '<br/>' + params.name + ' : ' + '0 个'
                }
            }
        },
        geo: {
            show: true,
            map: 'baoding',
            layoutCenter: ['50%', '50%'],//位置
            layoutSize: '105%',//大小
            label: {
                show: true,
            },
            itemStyle: {
                //边框样式
                // borderColor: '#ffffff',
                borderWidth: 0,
                //阴影
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                shadowBlur: 20,
                //区域颜色
                areaColor: "#ffffff",
            },
            emphasis: {
                show: true,
                focus: 'self',
                itemStyle: {
                    //区域颜色
                    areaColor: "#d46e6e",
                    //阴影
                    shadowColor: 'rgba(255, 255, 255, 0.75)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowBlur: 20,
                },
                label: {
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 'bold'
                },
            },
            select: {

            }
        },
        visualMap: {
            show: true,
            type: 'continuous',
            splitNumber: 10,
            min: 0, // 最小值
            max: 7, // 最大值
            calculable: true,
            realtime: true,
            itemWidth: 10,
            inRange: {
                color: [
                    '#1e4e6f',
                    '#00668b',
                    '#0080a2',
                    '#009ab1',
                    '#00b4b7',
                    '#00cdb4',
                    '#00e6a8',
                    '#4efd95',

                ],
            },
        },
        series: [
            {
                geoIndex: 0,
                name: 'A级景区分布',
                type: 'map',
                map: 'baoding',
                coordinateSystem: 'geo',
                aspectScale: 0.75,
                // zoom: 1.2,
                selectedMode: false,
                data: chartData.value
            }
        ]
    }
    return option
}

onMounted(() => {
    // 初始化图表
    chart.value.initChart()
    chart.value.echarts.registerMap('baoding', mapData)

    getChartData().then(() => {
        chart.value.renderChart(chart0ption())
    })

    // 图表点击事件
    chart.value.chart.on("click", function (params) {
        if (params.data) {
            // 打开下钻窗口
            dialog.value.open()
            address.value = params.name
        }
    });
})

</script>

<style lang="scss" scoped>

</style>