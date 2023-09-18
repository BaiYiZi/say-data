<template>
    <mylist ref="alist"></mylist>
</template>

<script setup>
import mylist from '@/components/List.vue';
import { getRed } from '@/api/CultureData'
import { ref, onMounted } from 'vue';

// 引用list组件
const alist = ref(null)

// 需要渲染的数据
const listData = ref([])

async function getChartData() {
    listData.value = (await getRed()).data.data
}

onMounted(() => {
    getChartData().then(() => {
        alist.value.setListData(listData.value)
    })
})
</script>