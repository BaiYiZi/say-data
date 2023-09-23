<template>
    <div class="Activity">
        <div class="button-box">
            <div class="text">年份：</div>
            <div v-for="item in yearList" :key="item" 
            @click="selectedYear = item" class="item" 
            :class="{ 'active': selectedYear == item }">{{ item }}</div>
            <!-- <div @click="select(2)" class="item" :class="{ 'active': selectedId == 2 }">绿地面积</div>
            <div @click="select(3)" class="item" :class="{ 'active': selectedId == 3 }">公园绿地面积</div>
            <div @click="select(4)" class="item" :class="{ 'active': selectedId == 4 }">绿化覆盖面积</div> -->
        </div>
        <div class="chart-box">
            <mychart ref="chart"></mychart>
        </div>
    </div>  
</template>

<script setup>
import { ref, onMounted, watch } from "vue"

import mychart from "@/components/Chart.vue"
import { getActivity } from '@/api/DevelopmentData'

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])

const yearList = ref(["2020", "2021", "2022", "2023"])

const selectedYear = ref(yearList.value[0])

watch(selectedYear, (newValue, oldValue) => {
    getChartData().then(() => {
        chart.value.renderChart(chart0ption())
    })
})

// 获取 API 接口数据
async function getChartData() {
    const dates = []
    const count = []
    chartData.value = ((await getActivity(selectedYear.value)).data.data).map(item => {
        var d = new Date(item.dates)
        dates.push(d.getFullYear() + '年' + d.getMonth() + '月')
        count.push(item.count)
    });

    chartData.value.dates = dates
    chartData.value.count = count
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
            top: '3%',
            left: '1%',
            right: '1%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [
            {
                axisLabel: {
                    interval: 0,
                    rotate: 40
                    // formatter: function (value) {
                    //     return value.split("").join("\n");
                    // }
                },
                type: 'category',
                data: chartData.value.dates,
                axisTick: {
                    alignWithLabel: true
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.15)'
                    }
                }
            }
        ],
        series: [
            {
                name: '次数',
                smooth: true,
                type: 'line',
                data: chartData.value.count,
                color: '#54EBC8',
                lineStyle: {
                    width: 4
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
            }
        ],
    }
    return option
}

onMounted(() => {
    // 初始化图表
    chart.value.initChart()

    getChartData().then(() => {
        chart.value.renderChart(chart0ption())
    })
})
</script>

<style lang="less" scoped>
.Activity {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.button-box {
    height: 32px;
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    text-align: center;
    line-height: 32px;

    .text {
        height: 32px;
        width: 48px;
        margin-left: 8px;
        color: rgba(95, 95, 95, 1);
    }
}

.item {
    height: 32px;
    width: 68px;
    margin-right:12px;

    text-align: center;
    color: rgba(95, 95, 95, 1);
    border-radius: 8px;
    background: rgba(240, 240, 240, 1);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
}

.item:hover {
    background: rgb(232, 232, 232);
}

.item .active {
    color: rgba(255, 255, 255, 1);
    background: linear-gradient(90deg, rgba(118, 106, 240, 1) 0%, rgba(142, 140, 255, 1) 100%);
    box-shadow: 0px 0px 4px rgba(118, 106, 240, 1);
}

.chart-box {
    height: calc(100% - 32px);
    width: 100%;
}
</style>