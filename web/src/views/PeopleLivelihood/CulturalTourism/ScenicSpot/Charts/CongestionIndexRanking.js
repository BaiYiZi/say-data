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
        left: '2%',
        right: '8%',
        bottom: '2%',
        top: '2%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: congestionIndexRankingChartData.value.category
      },
      textStyle: {
        color: "white"
      },
      series: [
        {
          type: 'bar',
          itemStyle: {
            barBorderRadius: [0, 20, 20, 0],
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
              lineHeight: 10,
              position: 'right',
              textStyle: {
                color: '#fff',
                fontSize: 10
              }
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