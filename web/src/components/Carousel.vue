<template>
    <div class="Carousel">
        <el-carousel trigger="click" class="pic-box shadow" :height="props.height">
            <el-carousel-item v-for="item in props.imgList" v-bind:key="item">
                <img class="img" alt="loading" :src="item.path" @click="getImg(item)"/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
import { onBeforeUnmount } from 'vue';
import emitter from '@/utils/bus.js'
const props = defineProps(["height", "imgList"])

function getImg(item) {
    emitter.emit('img', item)
}

onBeforeUnmount(() => {
    emitter.off('img')
})
</script>

<style scoped>
.Carousel{
    height: 100%;
    width: 100%;
}
.shadow {
    border-radius: 12px;
    box-shadow: 0px 4px 16px  rgba(0, 0, 0, 0.1);
}
</style>