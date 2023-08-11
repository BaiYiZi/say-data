import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'

export const useRedScenicSpotChartStore = defineStore('RedScenicSpotDataChart', () => {
  const redScenicSpotChartData = ref([])
  const domID = ref(undefined)

  function setDomID(id) {
    domID.value = id
  }

  async function getCurrentData() {
    redScenicSpotChartData.value = ((await API.PEOPLE_LIVELIHOOD.RedScenicSpotData()).data.data).map(v => {
      return v.attractions_name
    });

    redScenicSpotChartData.value.forEach(v => { console.log(v) })
  }

  async function loadData() {
    await getCurrentData()

    watch(redScenicSpotChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    // const instanceID = document.getElementById(domID.value)
    // const carouselBox = instanceID.children.item(0)
    // carouselBox.innerHTML = ""
    // console.log(redScenicSpotChartData.value.length)

    // const currentInsertDom = document.createElement('el-carousel-item')
    // carouselBox.appendChild(currentInsertDom)

    // const childs = instanceID.children
    // for (let i = 0; i < childs.length; i++) {
    //   childs[i].style.color = "red"
    // }
  }

  async function reLoadData() {

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})