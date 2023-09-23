<template>
    <div class="Table">
        <div class="tbox">
            <table>
                <th v-for="item in props.headerLineList" :key="item">{{ item }}</th>
                <tr v-for="item in props.dataList" :key="item">
                    <td :title="key" v-for="key in item" :key="key">{{ key }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
import "@/assets/table.less";

const props = defineProps(["title", "headerLineList", "dataList"])
</script>

<style lang="less" scoped>
</style>