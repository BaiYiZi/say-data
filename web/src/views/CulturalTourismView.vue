<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const currentCircleShowID = ref(1)
const route = useRoute()

router.push({ name: 'tourist-tattraction' })

onMounted(() => {
    console.log(route.name);
    switch (route.name) {
        case '/people-livelihood/cultural-tourism/scenic-spot':
            currentCircleShowID.value = 1
            break
        case 'tourist-tattraction':
            currentCircleShowID.value = 2
            break
        case '/people-livelihood/cultural-tourism/mechanism':
            currentCircleShowID.value = 3
            break
        case '/people-livelihood/cultural-tourism/cultural-heritage':
            currentCircleShowID.value = 4
            break
    }
})

</script>

<template>
    <header class="header">
        <h1 class="title">数说保定</h1>
    </header>

    <div class="container">
        <div class="navigation">
            <div class="menu-bar">
                <div class="menu-bar-title">
                    <div class="message">
                        <span class="breathe">文</span>
                        <span class="breathe">化</span>
                        <span class="breathe">旅</span>
                        <span class="breathe">游</span>
                    </div>
                </div>

                <div class="menu-bar-list">
                    <div class="box">
                        <span class="little-circle"><span v-show="currentCircleShowID == 1"></span></span>
                        <span class="scenic-spot-img"></span>
                        <div @click="goScenicSpot">景区及周边</div>
                    </div>
                    <div class="box">
                        <span class="little-circle"><span v-show="currentCircleShowID == 2"></span></span>
                        <span class="cultural-construction-img"></span>
                        <div @click="goCulturalTourismConstruction">各类文化情况</div>
                    </div>
                    <div class="box">
                        <span class="little-circle"><span v-show="currentCircleShowID == 3"></span></span>
                        <span class="mechanism-img"></span>
                        <div @click="goMechanism">文旅发展概况</div>
                    </div>
                    <div class="box">
                        <span class="little-circle"><span v-show="currentCircleShowID == 4"></span></span>
                        <span class="cultural-heritage-img"></span>
                        <div @click="goCulturalHeritage">文旅周边生态</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <RouterView />
        </div>
    </div>
</template>



<style lang="less" src="./CulturalTourismView.css" scoped></style>