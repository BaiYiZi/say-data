import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useCongestionIndexRankingChartStore = defineStore('CongestionIndexRankingChart', () => {
  const congestionIndexRankingChartData = ref({ category: [], congestion_index: [] })
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    const category = []
    const congestion_index = []

      ; ((await API.PEOPLE_LIVELIHOOD.CongestionIndexRankingData()).data.data).map((v, i) => {
        if (i > 5) { return }
        category.unshift(v.name)
        congestion_index.unshift(v.congestion_index)
      })

    congestionIndexRankingChartData.value.category = category
    congestionIndexRankingChartData.value.congestion_index = congestion_index
  }

  async function loadData() {
    await getCurrentData()

    watch(congestionIndexRankingChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const congestionIndexRankingChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const congestionIndexRankingChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: { show: false },
      grid: {
        top: 20,
        bottom: '0%',
        left: 20,
        right: 20,
        containLabel: true
      },
      xAxis: { show: false },
      yAxis: {
        type: 'category',
        axisLine: false,
        splitLine: { show: false },
        data: congestionIndexRankingChartData.value.category
      },
      textStyle: {
        color: "#fff"
      },
      series: [
        {
          type: 'bar',
          barWidth: 14,
          itemStyle: {
            borderWidth: 1,
            barBorderRadius: [6, 6, 6, 6],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: 'rgba(9, 173, 168, 1)'
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 188, 1)'
              }
            ])
          },
          label: {
            normal: {
              show: true,
              lineHeight: 12,
              position: 'insideRight',
              textStyle: {
                color: '#ffffff',
                fontSize: 12
              },
            }
          },
          data: congestionIndexRankingChartData.value.congestion_index
        }
      ]
    };

    congestionIndexRankingChart.setOption(congestionIndexRankingChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const congestionIndexRankingChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    congestionIndexRankingChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})