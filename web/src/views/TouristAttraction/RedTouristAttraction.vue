<template>
  <list :data="listData"></list>
</template>

<script setup>
import list from '@/components/List.vue';

const listData = ref([])

async function getChartData() {
    listData.value = ((await getAttractionsCountData()).data.data).map(item => {
        return {
            
        }
    })
}
</script>

<style>

</style>