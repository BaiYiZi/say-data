<template>
    <carousel height="200px" :imgList="list"/>
    <dialogFrame title="test" ref="dialog" width="1200px" height="444px">
        <frame :title="imgItem.name">
            <!-- <TouristAttractionInfo :name="imgItem.name" :imgItem="imgItem"/> -->
            <Info :infoData ="imgItem"/>
        </frame >
    </dialogFrame>
</template>

<script setup>
import { ref } from 'vue'
import carousel from '@/components/Carousel.vue'
import frame from '@/components/Frame.vue'
import dialogFrame from '@/components/dialogFrame.vue'
import emitter from '@/utils/bus'

import TouristAttractionInfo from './TouristAttractionInfo.vue'

import Info from '@/components/Info.vue'

const dialog = ref(null)

const imgItem = ref(null)

emitter.on('img', (params) => {
    dialog.value.open()
    imgItem.value = params
})

const base = "/src/assets/PeopleLivelihood/CulturalTourism"
const list = ref([
    {
        name: "清西陵",
        imgPath: base + "/qingxiling.png",
        infoImgPath: base + "/qingxilingInfoImage.png"
    },
    {
        name: "白石山",
        imgPath: base + "/baishishan4.png",
        infoImgPath: base + "/baishishanInfoImage.png"
    }
])
</script>

<style></style>