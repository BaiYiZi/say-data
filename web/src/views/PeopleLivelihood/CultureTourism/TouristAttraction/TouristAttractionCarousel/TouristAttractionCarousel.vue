<template>
    <carousel ref="aCarousel" height="200px" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import carousel from '@/components/Carousel.vue';

const base = "/src/assets/PeopleLivelihood/CulturalTourism"
const list = ref([
    base + "/qingxiling.png",
])

const aCarousel = ref(null)

onMounted(() => {
    aCarousel.value.setPathList(list)
})
</script>

<style></style>