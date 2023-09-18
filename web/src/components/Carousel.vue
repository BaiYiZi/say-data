<template>
    <el-carousel trigger="click" class="pic-box shadow" :height="props.height">
        <el-carousel-item v-for="item in pathList" v-bind:key="item">
            <img class="img" :src="item"/>
        </el-carousel-item>
    </el-carousel>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(["height"])
const pathList = ref([])

function setPathList(list) {
    pathList.value = list.value
    
}

defineExpose({
    setPathList
})
</script>

<style scoped>
.shadow {
    border-radius: 12px;
    box-shadow: 0px 4px 16px  rgba(0, 0, 0, 0.1);
}
</style>