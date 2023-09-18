<template>
    <!-- 图标容器 -->
    <div :id="props.id" style="height: 100%; width: 100%;"></div>
    <!-- 下钻图表容器 -->
    <dialogFrame :id="drillDownChartDomId" title="test" ref="dialog">
        <div style="height: 100%; width: 100%;"></div>
    </dialogFrame>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getAttractionsCountData } from '@/api/TouristAttractionData'
import { mychart } from '@/components/Chart'
import dialogFrame from '@/components/dialogFrame.vue'

const props = defineProps(["id","drillDown"]);

const chart = mychart()
const chartData = ref([])

const dialog = ref(null)
const drillDownChartDomId = props.id + "-DrillDown"
const drillDownChart = mychart()
const drillDownChartData = ref([])

async function getChartData() {
    chartData.value = ((await getAttractionsCountData()).data.data).map(item => {
        return {
            name: item.tagName,
            value: item.count
        }
    })
}

async function getDrillDownChartData() {
    drillDownChartData.value = ((await getAttractionsCountData()).data.data).map(item => {
        return {
            name: item.tagName,
            value: item.count
        }
    })
}

function chart0ption() {
    // 图表样式
    const option  = {
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
                radius: ['35%', '70%'],
                center: ["40%", "50%"],
                label: { show: false },
                data: chartData.value
            }
        ]
    };
    return option
}

onMounted(() => {
    console.log("调用了onMounted")
    chart.initChart(props.id)
    
    getChartData().then(() => {
        chart.renderChart(chart0ption())
    })
    // 检查是否开启下钻
    if (props.drillDown) {
        // 图表点击事件
        chart.chart.value.on("click", function (params) {
            // 打开下钻窗口
            dialog.value.open()
            // 初始化下钻图表
            drillDownChart.initChart(drillDownChartDomId)
            console.log(document.getElementById(drillDownChartDomId));
            // 获取下钻图表数据
            getChartData().then(() => {
                drillDownChart.renderChart(chart0ption())
            })
        });
    }
})
</script>