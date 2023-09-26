<template>
    <div class="Greenbelt">
        <div class="button-box">
            <div class="text">类型：</div>
            <div @click="select(1)" 
            class="item" 
            :class="{ 'active': selectedId == 1 }"
            >
                公园面积
            </div>
            <div @click="select(2)" class="item" :class="{ 'active': selectedId == 2 }">绿地面积</div>
            <div @click="select(3)" class="item" :class="{ 'active': selectedId == 3 }">公园绿地面积</div>
            <div @click="select(4)" class="item" :class="{ 'active': selectedId == 4 }">绿化覆盖面积</div>
        </div>
        <div class="chart-box">
            <mychart ref="chart"></mychart>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getParkGreenbelt } from '@/api/EcologyData'
import { getCityGreenbelt } from '@/api/EcologyData'
import { getGreeneryCoverage } from '@/api/EcologyData'

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

const selectedId = ref(1)

function select(id) {
    selectedId.value = id

    switch (selectedId.value) {
        case 1:
            getParkGreenbeltData("park").then(() => {
                chart.value.renderChart(chart0ption())
            })
            break;
        case 2:
            getCityGreenbeltData().then(() => {
                chart.value.renderChart(chart0ption())
            })
            break;
        case 3:
            getParkGreenbeltData("parkGreen").then(() => {
                chart.value.renderChart(chart0ption())
            })
            break;
        case 4:
            getGreeneryCoverageData().then(() => {
                chart.value.renderChart(chart0ption())
            })
            break;
    }
}

// 获取全市及市辖区的公园/公园绿地面积
async function getParkGreenbeltData(flag) {
    // 年份
    var year = []
    // 全市公园面积（公顷）
    var apic = []
    // 市辖区公园面积（公顷）
    var apuj = []

    // 全市公园绿地面积（公顷）
    var agsc = []
    // 市辖区公园绿地面积（公顷）
    var apgs = []

    chartData.value = ((await getParkGreenbelt()).data.data).map(item => {
        year.unshift(item.year)
        apic.unshift(item.apic)
        apuj.unshift(item.apuj)
        agsc.unshift(item.agsc)
        apgs.unshift(item.apgs)
    })

    chartData.value.year = year

    // 判断flag
    if (flag === 'park') {
        chartData.value.total = apic
        chartData.value.city = apuj
    } else if(flag === 'parkGreen') {
        chartData.value.total = agsc
        chartData.value.city = apgs
    }
}

// 获取全市及市辖区的绿地面积
async function getCityGreenbeltData() {
    // 年份
    const year = []
    // 全市绿地面积（公顷）
    const agic = []
    // 市辖区绿地面积（公顷）
    const agsm = []

    chartData.value = ((await getCityGreenbelt()).data.data).map(item => {
        year.unshift(item.year)
        agic.unshift(item.agic)
        agsm.unshift(item.agsm)
    })

    chartData.value.year = year
    chartData.value.total = agic
    chartData.value.city = agsm
}

// 获取 API 接口数据
async function getGreeneryCoverageData() {
    // 年份
    const year = []
    // 全市绿地面积（公顷）
    const acgm = []
    // 市辖区绿地面积（公顷）
    const cgca = []

    chartData.value = ((await getGreeneryCoverage()).data.data).map(item => {
        year.unshift(item.year)
        acgm.unshift(item.acgm)
        cgca.unshift(item.cgca)
    })

    chartData.value.year = year
    chartData.value.total = acgm
    chartData.value.city = cgca
}

function chart0ption() {
    var formatter = '年份:{b}<br/>全市:{c}<br/>市辖区:{c1}';
    // 图表样式
    const option = {
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: formatter, //展示样式
            color: '#858585'
        },
        legend: {
            type: 'plain',
            x: 'center',
            // y: 'bottom',
            bottom: 0,
            // icon: 'roundRect', // 图例的图标样式
            textStyle: { //图例的文字样式
                fontSize: 14,
                color: '#858585',
            },
        },
        grid: {
            top: '6%',
            left: '2%',
            right: '2%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: chartData.value.year
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value}'//纵坐标百分比
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(0,0,0,0.1)'
                }
            }
        },
        series: [
            {
                type: 'line',
                name: '全市',
                data: chartData.value.total,
                itemStyle: {
                    color: '#54EBC8',
                },
                lineStyle: {
                    width: 4,
                    shadowBlur: 3,
                    shadowColor: 'rgba(84, 235, 200, 1)',
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(84, 235, 200, 0.5)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(84, 235, 200, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            },
            {
                type: 'line',
                name: '市辖区',
                data: chartData.value.city, 
                itemStyle: {
                    color: 'rgba(255, 166, 82, 1)',
                },
                lineStyle: {
                    width: 4,
                    shadowBlur: 3,
                    shadowColor: 'rgba(255, 166, 82, 1)',
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(255, 166, 82, 0.5)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(255, 166, 82, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            }
        ]
    }
    return option
}

onMounted(() => {
    // 初始化图表
    chart.value.initChart()

    getParkGreenbeltData("park").then(() => {
        chart.value.renderChart(chart0ption())
    })
})
</script>

<style lang="less" scoped>
.Greenbelt {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.button-box {
    height: 62px;
    width: calc(100% - 60px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    text-align: center;
    line-height: 42px;

    .text {
        height: 42px;
        width: 48px;
        color: rgba(95, 95, 95, 1);
    }
}

.item {
    height: 42px;
    width: 140px;

    text-align: center;
    color: rgba(95, 95, 95, 1);
    border-radius: 8px;
    background: rgba(240, 240, 240, 1);
    box-shadow: 0px 4px 16px  rgba(0, 0, 0, 0.05);
}

.item:hover {
    cursor: pointer;
    background: rgb(232, 232, 232);
}

.item .active {
    color: rgba(255, 255, 255, 1);
    background: linear-gradient(90deg, rgba(118, 106, 240, 1) 0%, rgba(142, 140, 255, 1) 100%);
    box-shadow: 0px 0px 4px rgba(118, 106, 240, 1);
}

.chart-box {
    height: calc(100% - 82px);
    width: 100%;
}

</style>