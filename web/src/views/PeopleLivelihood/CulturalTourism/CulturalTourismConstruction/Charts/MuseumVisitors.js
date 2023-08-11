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
                bottom: 12,
                icon: 'roundRect', // 图例的图标样式
                textStyle: { //图例的文字样式
                    color: '#fff',
                },
            },
            //图表位置
            grid: {
                top: "4%",
                left: "10%",
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
                data: museumVisitorsChartData.value.name,
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
            },
            series: [
                {
                    //柱状图自动排序，排序自动让Y轴名字跟着数据动
                    realtimeSort: true,
                    name: "年参观量（万人次）",
                    type: "bar",
                    data: museumVisitorsChartData.value.visitors,
                    barWidth: 14,
                    barGap: 10,
                    smooth: true,
                    valueAnimation: true,
                    //Y轴数字显示部分
                    label: {
                        normal: {
                            show: true,
                            position: "right",
                            valueAnimation: true,
                            offset: [5, -2],
                            textStyle: {
                                color: "#fff",
                                fontSize: 13,
                            },
                        },
                    },
                    itemStyle: {
                        emphasis: {
                            barBorderRadius: 7,
                        },
                        //颜色样式部分
                        normal: {
                            barBorderRadius: 7,
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: "rgba(15, 135, 250, 1)" },
                                { offset: 1, color: "rgba(0, 192, 254, 1)" },
                            ]),
                        },
                    },
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