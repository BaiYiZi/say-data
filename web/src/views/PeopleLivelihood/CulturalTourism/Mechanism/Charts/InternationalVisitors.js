import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useInternationalVisitorsChartStore = defineStore('InternationalVisitors', () => {
  const internationalVisitorsChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    internationalVisitorsChartData.value = {
      year: [],
      revenue: [],
      visitors: []
    };

    (await API.PEOPLE_LIVELIHOOD.RevenueData()).data.data.map(v => {
      internationalVisitorsChartData.value.year.push(v.year)
      internationalVisitorsChartData.value.revenue.push(v.irevenue)
      internationalVisitorsChartData.value.visitors.push(v.internationalVisitors)
    })
  }

  async function loadData() {
    await getCurrentData()

    watch(internationalVisitorsChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const internationalVisitorsChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const internationalVisitorsChartOption = {
      tooltip: {
        trigger: "axis",
        formatter: '{b0}<br/>{a0}: {c0}<br/>{a1}: {c1}',
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
      grid: {
        top: '10%',
        left: '6%',
        right: '6%',
        bottom: '14%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: internationalVisitorsChartData.value.year.reverse()
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
          name: '接待国际游客(万)',
          type: 'bar',
          barWidth: 24,
          data: internationalVisitorsChartData.value.visitors.reverse(),
          itemStyle: {
            color: '#8277E9',
            borderRadius: [3, 3, 0, 0]
          },
        },
        {
          name: '创收(亿)',
          type: 'bar',
          barWidth: 24,
          data: internationalVisitorsChartData.value.revenue.reverse(),
          itemStyle: {
            color: '#5BF1F6',
            borderRadius: [3, 3, 0, 0]
          },
        },
      ]
    }
    internationalVisitorsChart.setOption(internationalVisitorsChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const internationalVisitorsChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    internationalVisitorsChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})