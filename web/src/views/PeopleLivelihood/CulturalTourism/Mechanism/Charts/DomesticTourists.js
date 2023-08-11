import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useDomesticTouristsChartStore = defineStore('DomesticTourists', () => {
  const domesticTouristsChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    domesticTouristsChartData.value = {
      year: [],
      revenue: [],
      visitors: []
    };

    (await API.PEOPLE_LIVELIHOOD.RevenueData()).data.data.map(v => {
      domesticTouristsChartData.value.year.push(v.year)
      domesticTouristsChartData.value.revenue.push(v.drevenue)
      domesticTouristsChartData.value.visitors.push(v.domesticTourists)
    })
  }

  async function loadData() {
    await getCurrentData()

    watch(domesticTouristsChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const domesticTouristsChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const domesticTouristsChartOption = {
      tooltip: {
        trigger: "axis",
        formatter: '年份: {b0}<br/>{a0}: {c0}<br/>{a1}: {c1}',
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        type: 'plain',
        x: 'center',
        y: 'bottom',
        top: 270,
        icon: 'circle', // 图例的图标样式
        textStyle: { //图例的文字样式
          color: '#fff',
        },
      },
      xAxis: {
        name: '年份',
        type: 'category',
        data: domesticTouristsChartData.value.year.reverse()
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
          name: '接待国内游客(万)',
          type: 'bar',
          barWidth: 24,
          data: domesticTouristsChartData.value.visitors.reverse(),
          itemStyle: {
            color: '#008FFF',
            borderRadius: [3, 3, 0, 0]
          }
        },
        {
          name: '创收(亿)',
          type: 'bar',
          barWidth: 24,
          data: domesticTouristsChartData.value.revenue.reverse(),
          itemStyle: {
            color: '#5BF1F6',
            borderRadius: [3, 3, 0, 0]
          }
        },
      ]
    }

    domesticTouristsChart.setOption(domesticTouristsChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const domesticTouristsChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    domesticTouristsChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})