<template>
    <div class="ParkList">
        <select v-model="select">
            <option v-for="item in addressList" :key="item" :value="item">{{ item }}</option>
        </select>
        <Table :headerLineList="['名称', '地址']" :dataList="parkList"/>
    </div>
</template>

<script setup>
import { watch, onMounted, ref } from 'vue';
import { getParkAreaList, getParkList } from '@/api/DevelopmentData'
import Table from '@/components/Table.vue'

const addressList = ref([])
const parkList = ref([])

const select = ref()

watch(select, () => {
    getParkListData()
})

// 获取 地区信息 接口数据
async function getAddressListData() {
    addressList.value = (await getParkAreaList()).data.data
    select.value = addressList.value[0]
    
}

// 获取 某地区 公园列表
async function getParkListData() {
    parkList.value = (await getParkList(select.value)).data.data
    console.log(parkList.value)
}

onMounted(() => {
    getAddressListData().then(() => {
        getParkListData()
    })
})
</script>

<style lang="less" scoped>
    .ParkList {
        width: 100%;
        height: 100%;
    }
</style>