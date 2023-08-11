import { ref, watch } from "vue";
import { defineStore } from 'pinia'
import mapData from '../MapData/MapData.json'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useHotelDensityChartStore = defineStore('HotelDensityChart', () => {
  const hotelDensityChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    hotelDensityChartData.value = ((await API.PEOPLE_LIVELIHOOD.HotelDensityData()).data.data).map(v => {
      return {
        name: v.address,
        value: v.count
      }
    });
  }

  async function loadData() {
    await getCurrentData()

    watch(hotelDensityChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const hotelDensityChart = echarts.getInstanceById(instanceID) || echarts.init(document.getElementById(domID.value))

    echarts.registerMap('baoding', mapData);

    const hotelDensityChartOption = {
      tooltip: {
        formatter: '{a}<br/>{b}: {c}个'
      },
      geo: {
        map: 'baoding',
        label: {
          show: true,
        },
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 0.5,
          areaColor: "#ffffff", //区域颜色
        },
        emphasis: {
          show: true,
          focus: 'self',
          itemStyle: {
            areaColor: "#d46e6e",
          }
        }
      },
      visualMap: {
        show: true,
        type: 'continuous',
        splitNumber: 10,
        min: 0, // 最小值
        max: 7, // 最大值
        calculable: true,
        realtime: true,
        itemWidth: 10,
        inRange: {
          color: [
            '#46EEA1',
            '#3DDAB2',
            '#33C8C1',
            '#2DB4C5',
            '#2997AE',
            '#267C99',
            '#235F82',
            '#24518D',
            '#2846A5',
            '#2B3BBD',
          ],
          symbolSize: [30, 100]
        },
        outOfRange: {
          color: 'rgba(255,255,255,0.20)'
        }
      },
      series: [
        {
          geoIndex: 0,
          name: '饭店分布',
          type: 'map',
          map: 'baoding',
          coordinateSystem: 'geo',
          aspectScale: 0.75,
          // zoom: 1.2,
          data: hotelDensityChartData.value
        }
      ]
    }

    hotelDensityChart.setOption(hotelDensityChartOption)
  }

  async function reLoadData() {
    const instanceId = document.getElementById(domID.value).getAttribute("_echarts_instance_")
    const hotelDensityChart = echarts.getInstanceById(instanceId) || echarts.init(document.getElementById(domID.value))
    hotelDensityChart.dispose()

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})