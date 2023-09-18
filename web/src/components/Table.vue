<template>
    <div class="Table">
        <div class="title">{{ props.title }}</div>
        <table>
            <th v-for="item in props.headerLineList" :key="item">{{ item }}</th>

            <tr v-for="item in props.dataList" :key="item">
                <td v-for="key in item" :key="key">{{ key }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps("title")

const headerLineList = ref([])
const dataList = ([])

function setter(anotherHeaderLineList, anotherDataList) {
    headerLineList.value = anotherHeaderLineList
    dataList.value = anotherDataList
}

defineExpose(() => {
    setter
})
</script>

<style lang="less" scoped>
.title {
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    color: #6E6E6E;
    display: flex;
    align-items: center;
}
.Table {
    width: 100%;
    height: 100%;
    padding: 0 30px 30px 30px;

    border-radius: 8px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 20px  rgba(0, 0, 0, 0.1);

    table {
        table-layout: fixed;
        width: 100%;
    }

    table th {
        text-align: left;
        font-size: 14px;
        font-weight: 400;
        color: rgba(133, 133, 133, 1);
    }

    table tr {
        height: 30px;
        border-bottom: 1px solid #000
    }

    table tr td{
        text-align: left;

        font-size: 14px;
        font-weight: 400;
        color: rgba(133, 133, 133, 1);
    }
}

</style>