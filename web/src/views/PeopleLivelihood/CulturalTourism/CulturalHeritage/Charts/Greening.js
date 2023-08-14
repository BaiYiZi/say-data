import { ref, watch } from "vue";
import { defineStore } from 'pinia'

import API from '@/api/index'
import * as echarts from 'echarts'

export const useGreeningChartStore = defineStore('GreeningChart', () => {
    const greeningChartData = ref([])
    const domID = ref(undefined)
    const greeningName = ref([])

    function setDomID(id) {
        domID.value = id
    }

    async function getCurrentData() {
        [{ area: greeningChartData.value.area, aarea: greeningChartData.value.aarea }] = ((await API.PEOPLE_LIVELIHOOD.GreeningData()).data.data)
    }

    async function loadData() {
        await getCurrentData()

        watch(greeningChartData, () => {
            loadDom()
        })
    }

    function loadDom() {
        const instanceID = document.getElementById(domID.value)

        const childs = instanceID.children.item(0)
        console.log(childs.childNodes[0].childNodes[2])

        childs.childNodes[0].childNodes[2].innerHTML = greeningChartData.value.area
        childs.childNodes[1].childNodes[2].innerHTML = greeningChartData.value.aarea
    }

    async function reLoadData() {

        await getCurrentData()
    }

    return { setDomID, loadDom, loadData, reLoadData }
})