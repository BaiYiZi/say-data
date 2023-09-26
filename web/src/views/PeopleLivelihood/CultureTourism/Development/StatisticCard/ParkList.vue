<template>
    <div class="ParkList">
        <div class="select-box">
            <span>地址：</span>
            <select name="select" class="drop-down-list" v-model="select">
                <option v-for="item in addressList" :key="item" :value="item">{{ item }}</option>
            </select>
        </div>

        <div class="table-box">
            <Table :headerLineList="['名称', '地址']" :dataList="parkList"/>
        </div>
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
        .select-box {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 8px;

            span {
                height: 30px;
                margin-right: 3px;
            }
            .drop-down-list{
                height: 30px;
                width: 132px;

                font-size: 14px;
                color: rgb(65, 65, 65);
                border-radius: 5px;
                border: 3px solid #858585;
            }
        }

        .table-box {
            width: 100%;
            height: calc(100% - 32px);
        }
    }
</style>