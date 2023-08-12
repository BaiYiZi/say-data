import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useScenicTrafficChartStore = defineStore('ScenicTrafficChart', () => {
  const scenicTrafficChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    const category = []
    const value = []

    scenicTrafficChartData.value = ((await API.PEOPLE_LIVELIHOOD.ScenicTrafficData()).data.data).map(v => {
      category.unshift(v.name)
      value.unshift(v.footfallIndex)
    })

    scenicTrafficChartData.value.category = category
    scenicTrafficChartData.value.value = value
  }

  async function loadData() {
    await getCurrentData()

    watch(scenicTrafficChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const scenicTrafficChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const scenicTrafficChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '10%',
        left: '5%',
        right: '4%',

        // containLabel: true
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          formatter: function (value) {
            return value.split("").join("\n");
          }
        },
        axisTick: {
          alignWithLabel: true
        },
        data: scenicTrafficChartData.value.category
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.15)'
          }
        }
      },
      series: [
        {
          name: "客流指数",
          type: 'bar',
          barWidth: 30,
          showBackground: true,
          backgroundStyle: {
            borderRadius: [3, 3, 0, 0],
            color: 'rgba(0,0,0,0.05)',
          },
          label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            textStyle: { //数值样式
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: 12
            }
          },
          itemStyle: {
            borderRadius: [3, 3, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(33, 196, 255, 1)'
              },
              {
                offset: 1,
                color: 'rgba(28, 146, 189, 1)'
              }
            ])
          },
          data: scenicTrafficChartData.value.value.reverse()
        }
      ]
    };

    scenicTrafficChart.setOption(scenicTrafficChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const scenicTrafficChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    scenicTrafficChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})