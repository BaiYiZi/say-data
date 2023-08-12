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

    // redScenicSpotChartData.value.forEach(v => { console.log(v) })
  }

  async function loadData() {
    await getCurrentData()

    watch(redScenicSpotChartData, () => {
      loadDom()
    })
  }

  function loadDom() {
    const instanceID = document.getElementById(domID.value)

    const childs = instanceID.children
    for (let i = 0; i < 6; i++) {
      // console.log(childs.item(i))
      // console.log(childs.item(i).firstChild)
      childs.item(i).firstChild.innerHTML = redScenicSpotChartData.value[i] || "待推荐"
    }
  }

  async function reLoadData() {

    await getCurrentData()
  }

  return { setDomID, loadDom, loadData, reLoadData }
})