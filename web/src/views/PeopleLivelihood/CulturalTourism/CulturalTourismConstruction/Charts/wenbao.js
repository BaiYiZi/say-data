import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const usewenbaoChartStore = defineStore('wenbaoChart', () => {
  const wenbaoChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    wenbaoChartData.value = ((await API.PEOPLE_LIVELIHOOD.wenbao()).data.data).map(v => {
      return {
        name: v.type,
        value: v.count
      }
    });
  }

  async function loadData() {
    await getCurrentData()

    watch(wenbaoChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const wenbaoChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const wenbaoChartOption = {
      tooltip: {
        trigger: 'item'
      },
      // color: [
      //   "red",
      //   "aqua",
      //   "#fac858",
      //   "#ee6666",
      //   "#73c0de",
      //   "#3ba272",
      //   "#fc8452",
      //   "#9a60b4",
      //   "#ea7ccc"
      // ],
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
        right: 28,
        bottom: 20,
        itemHeight: 14,
        itemGap: 10,
        height: '38%',
        pageTextStyle: {
          color: 'rgba(255,255,255,0.25)'
        },
        icon: 'circle', // 图例的图标样式
        textStyle: { //图例的文字样式
          color: 'rgba(255,255,255,1.75)',
        },
      },
      series: [
        {
          type: "pie",
          radius: ['35%', '70%'],
          center: ["30%", "50%"],
          label: {
            show: false,
            // color: "#ffffff",
            // fontSize: 16,
            // position: "outside"
          },
          itemStyle: {
            
          },
          data: wenbaoChartData.value,
        }
      ]
    }

    wenbaoChart.setOption(wenbaoChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const wenbaoChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    wenbaoChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})