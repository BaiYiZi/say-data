import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const usechangsuoChartStore = defineStore('changsuoChart', () => {
  const changsuoChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    changsuoChartData.value = ((await API.PEOPLE_LIVELIHOOD.changsuo()).data.data).map(v => {
      return {
        name: v.atype,
        value: v.count
      }
    });
  }

  async function loadData() {
    await getCurrentData()

    watch(changsuoChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const changsuoChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    const changsuoChartOption = {
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
        // '#24518D',
        // '#235F82',
        // '#267C99',
        '#2997AE',
        '#2DB4C5',
        '#33C8C1',
        '#3DDAB2',
        '#46EEA1',
      ],
      series: [
        {
          type: "pie",
          radius: ["30%", "70%"],
          center: [
            "50%",
            "50%"
          ],
          label: {
            show: true,
            color: "#ffffff",
            fontSize: 16,
            position: "outside"
          },
          data: changsuoChartData.value,
        }
      ]
    }

    changsuoChart.setOption(changsuoChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const changsuoChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    changsuoChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})