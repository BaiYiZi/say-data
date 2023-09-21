<template>
    <div class="pad">
        <div class="museum-map">
            <mychart ref="chart"></mychart>
        </div>
        <div class="rank">
            <div class="title">博物馆年参观人次前N名</div>
            <div class="t-box">
                <Table :headerLineList="['博物馆名称', '地址', '参观人次(年/万次)']" :dataList="rankData"/>
            </div>
        </div>
    </div>
    <dialogFrame ref="dialog">
        <frame :title="address">
            <MuseumList :address="address"/>
        </frame>
    </dialogFrame>
</template>

<script setup>
import { ref, onMounted } from "vue"

import mychart from "@/components/Chart.vue"
import { getMuseumAddress, getMuseumVisitors } from '@/api/DevelopmentData'
import dialogFrame from '@/components/dialogFrame.vue'
import frame from "@/components/Frame.vue"
import mapData from '@/utils/MapData/MapData.json'
import Table from '@/components/Table.vue'

import MuseumList from './MuseumList.vue'

// 引用图表组件 chart
const chart = ref(null)
const chartData = ref([])
const rankData = ref()

// 引用对话框组件
const dialog = ref(null)

// 给子组件传递的参数
const address = ref()

// 获取 API 接口数据
async function getChartData() {
    chartData.value = ((await getMuseumAddress()).data.data).map(item => {
        return {
            name: item.address,
            value: item.count
        }
    });
    rankData.value = ((await getMuseumVisitors()).data.data).map(item => {
        return {
            name: item.name,
            address: item.address,
            visitors: item.visitors
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
            layoutSize: '100%',//大小
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
                    '#46EEA1',
                    '#3DDAB2',
                    '#33C8C1',
                    '#2DB4C5',
                    '#2997AE',
                    '#267C99',
                    '#235F82',
                    '#24518D',
                    '#2846A5',
                    '#2B3BBD',
                ],
            },
        },
        series: [
            {
                geoIndex: 0,
                name: '博物馆数量',
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
        address.value = params.name
        // // 打开下钻窗口
        dialog.value.open()
    });
})

</script>


<style lang="less" scoped>
.pad{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.museum-map{
    width: 740px;
    height: 658px;
}

.rank {
    width: 740px;
    height: 194px;
}
.title {
    height: 50px;
    font-size: 12px;
    font-weight: 700;
    color: #6E6E6E;
    display: flex;
    align-items: center;
}
.t-box {
    width: 740px;
    height: 144px;
}
</style>