import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useMuseumVisitorsChartStore = defineStore('MuseumVisitors', () => {
    const museumVisitorsChartData = ref([])
    const domID = ref(undefined)

    function setDomID(id) {
        domID.value = id
    }

    async function getCurrentData() {
        museumVisitorsChartData.value = {
            name: [],
            visitors: [],
        };

        var i = 13;
        (await API.PEOPLE_LIVELIHOOD.MuseumVisitorsData()).data.data.map(v => {
            if (i <= 0) {
                return
            }
            museumVisitorsChartData.value.name.push(v.name)
            museumVisitorsChartData.value.visitors.push(v.visitors)
            i--
        })
    }

    async function loadData() {
        await getCurrentData()

        watch(museumVisitorsChartData, () => {
            loadDom()
        })
    }

    function loadDom() {
        const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
        const museumVisitorsChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

        const museumVisitorsChartOption = {
            // title: {
            //   text: this.rightname + "",
            // },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            legend: {
                type: 'plain',
                x: 'center',
                // y: 'bottom',
                bottom: 15,
                icon: 'roundRect', // 图例的图标样式
                textStyle: { //图例的文字样式
                    color: '#fff',
                },
            },
            //图表位置
            grid: {
                top: "4%",
                left: "8%",
                right: "14%",
                bottom: "8%",
                containLabel: true,
            },
            //X轴
            xAxis: {
                type: "value",
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                //不显示X轴刻度线和数字
                splitLine: { show: false },
                axisLabel: { show: false },
            },
            yAxis: {
                type: "category",
                //升序
                inverse: true,
                splitLine: { show: false },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                //key和图间距
                offset: 10,
                //动画部分
                animationDuration: 300,
                animationDurationUpdate: 300,
                //key文字大小
                nameTextStyle: {
                    fontSize: 5,
                },
                data: museumVisitorsChartData.value.name,
            },
            series: [
                {
                    //柱状图自动排序，排序自动让Y轴名字跟着数据动
                    realtimeSort: true,
                    name: "年参观量（万人次）",
                    type: "bar",
                    // barWidth: 18,
                    barCategoryGap: 20,
                    smooth: true,
                    valueAnimation: true,
                    showBackground: true,
                    backgroundStyle: {
                        borderRadius: 100,
                        //颜色样式
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            { offset: 0, color: "rgba(0, 192, 254, 0.1)" },
                            { offset: 1, color: "rgba(15, 135, 250, 0.1)" },
                        ]),
                    },
                    //Y轴数字显示部分
                    label: {
                        show: true,
                        position: 'insideLeft',
                        offset: [200, 0],
                        valueAnimation: true,
                        color: "rgba(255,255,255,1)",
                        fontSize: 12,
                    },
                    itemStyle: {
                        borderRadius: [0, 100, 100, 0],
                        //阴影
                        shadowColor: 'rgba(0, 0, 0, 0.24)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 6,
                        shadowBlur: 18,
                        //颜色样式部分
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: "rgba(15, 135, 250, 1)" },
                            { offset: 1, color: "rgba(0, 192, 254, 1)" },
                        ]),
                    },
                    data: museumVisitorsChartData.value.visitors,
                },
            ],
            //动画部分
            animationDuration: 0,
            animationDurationUpdate: 3000,
            animationEasing: "linear",
            animationEasingUpdate: "linear",
        };

        museumVisitorsChart.setOption(museumVisitorsChartOption)
    }

    async function reLoadData() {
        const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
        const museumVisitorsChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
        museumVisitorsChart.dispose()

        await getCurrentData()
    }

    return { setDomID, loadDom, loadData, reLoadData }
})