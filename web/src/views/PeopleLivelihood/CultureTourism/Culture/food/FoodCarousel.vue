<template>
    <carousel height="308px" :imgList="list" />
    <dialogFrame title="test" ref="dialog" width="1200px" height="444px">
        <frame :title="imgItem.name">
            <FoodInfo :infoData ="imgItem"/>
        </frame>
    </dialogFrame>
</template>

<script setup>
import { ref } from 'vue'
import carousel from '@/components/Carousel.vue'
import frame from '@/components/Frame.vue'
import dialogFrame from '@/components/dialogFrame.vue'
import emitter from '@/utils/bus'

import FoodInfo from './FoodInfo.vue'

const dialog = ref(null)

const imgItem = ref(null)

emitter.on('img', (params) => {
    imgItem.value = params
    dialog.value.open()
})

const base = "/src/assets/PeopleLivelihood/CulturalTourism"
const list = ref([
    {
        name: "驴肉火烧",
        imgPath: base + "/huoshao.png",
        infoImgPath: base + "/huoshaoInfoImage.png"
    },
    {
        name: "定州焖子",
        imgPath: base + "/dingzhoumenzi.png",
        infoImgPath: base + "/dingzhoumenziInfoImage.png"
    },
])
</script>

<style></style>