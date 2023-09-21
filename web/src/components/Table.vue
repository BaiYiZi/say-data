<template>
    <div class="Table">
        <table>
            <th v-for="item in props.headerLineList" :key="item">{{ item }}</th>

            <tr v-for="item in props.dataList" :key="item">
                <td v-for="key in item" :key="key">{{ key }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import "@/assets/table.less";
const props = defineProps(["title", "headerLineList", "dataList"])
function log() {
    console.log(props.dataList);
}
</script>

<style lang="less" scoped>
</style>