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

    console.log(hotelDensityChartData)

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
          normal: {
            borderColor: '#ffffff', //区域边框颜色
            areaColor: "#ffffff", //区域颜色
          },
        },
        // emphasis: {
        //   show: false,
        //   focus: 'self',
        //   itemStyle: {
        //     areaColor: "#d46e6e",
        //   }
        // }
      },
      visualMap: {
        min: 0, // 最小值
        max: 7, // 最大值
        inRange: {
          areaColor: [
            '#32ACEF',
            '#35F3FD',
            '#2C84B4',
            '#484CDC',
            '#229EA8',
            '#3BD2A6',
            '#2E33D1',
            '#22597E',
            '#2EBDCC',
            '#4EFD95',
          ]
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