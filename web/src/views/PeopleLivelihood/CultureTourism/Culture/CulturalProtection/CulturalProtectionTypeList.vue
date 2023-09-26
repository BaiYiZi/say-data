<template>
    <Table :headerLineList="header" :dataList="chartData"></Table>
</template>

<script setup>
import { ref, onMounted } from "vue"

import Table from "@/components/Table.vue"
import { getCulturalProtectionTypeList } from '@/api/CultureData'

const props = defineProps(["type"])

const header = ref()
const chartData = ref()

const shiji = ["所属类别", "所属批次", "编号", "项目名称", "申报地区或单位"]

// 获取 API 接口数据
async function getChartData() {
    chartData.value = ((await getCulturalProtectionTypeList(props.type)).data.data).map(item => {
        return {
            name: item.name,
            address: item.address,
            time: item.time,
            batch: item.batch,
        }
    })
}

onMounted(() => {
    getChartData().then(() => {
        header.value = ['名称', '地址', '年代', '所属批次']
    })
})
</script>

<style lang="less" scoped></style>