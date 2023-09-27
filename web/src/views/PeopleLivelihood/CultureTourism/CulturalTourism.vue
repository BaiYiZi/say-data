<template>
    <div class="page">
        <!-- 头部 -->
        <div class="header">
            <div class="header-text"
            @mouseover="hover" 
            @mouseleave="leave"
            @click="goPeopleLivelihoodHome"
            >{{ title }}</div>
        </div>
        <!-- 内容 -->
        <div class="container">
            <!-- 左侧菜单栏 -->
            <div class="menu">
                <div v-for="(item, index) in menuList" :key="item" 
                    class="item" 
                    :class="{ 'item-active': selectedId == index }" 
                    @click="select(index)"
                    >
                    <div>
                        <img :src="`/src/assets/icon` + item.icon">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </div>
            <!-- 右侧内容 -->
            <div class="context">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const title = ref('数说保定-文化旅游')

function goPeopleLivelihoodHome() {
    router.push('/people-livelihood')
}

const menuList = ref([
    {
        id: 0,
        icon: "/JingQu.svg",
        name: "景点及周边",
        pathName: "tourist-attraction"
    },
    {
        id: 1,
        icon: "/WenHua.svg",
        name: "各类文化情况",
        pathName: "cultrue"
    },
    {
        id: 2,
        icon: "/FaZhan.svg",
        name: "文旅发展概况",
        pathName: "development"
    },
    {
        id: 3,
        icon: "/ZhouBian.svg",
        name: "文旅周边生态",
        pathName: "ecology"
    }
])

const selectedId = ref(0)

function select(index) {
    selectedId.value = index;
    router.replace({ name: menuList.value[index].pathName })
}

function selected() {
    menuList.value.some(item => {
        if (item.pathName === route.name) {
            selectedId.value = item.id;
            return true
        }
    })
}

function hover() {
    title.value = " <<数说保定-民生"
}

function leave() {
    title.value = "数说保定-文化旅游"
}

onMounted(() => {
    selected()
})

</script>

<style lang="less" scoped>
.page {
    width: 1920px;
    height: 1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F7F7;
}

.header {
    width: 1920px;
    height: 80px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    background-color: #F8F7FF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);

    .header-text {
        height: 80px;
        width: 420px;
        line-height: 80px;
        padding-left: 40px;

        cursor: pointer;
        font-size: 48px;
        font-family: 'YouSheBiaoTiHei';
        color: #7367F0;

        transition-property: all;
        transition-duration: 0.26s;
        transition-timing-function: ease-out 200ms;
    }

    .header-text:hover {
        width: 432px;
        transform: translateX(-12px);
        background: rgba(114, 103, 240, 0.06);
        color: #7367F0;
    }
}

.container {
    width: 1880px;
    height: 960px;
    display: flex;
    flex-direction: row;

    .menu {
        width: 280px;
        height: 960px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        border-radius: 16px;
        background-color: #fff;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

        .item {
            width: 240px;
            height: 215px;
            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
            overflow: hidden;

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                img {
                    width: 62px;
                    height: 62px;
                    filter: drop-shadow(#5F5F5F 200px 0);
                    transform: translateX(-200px);
                }

                span {
                    margin-top: 6px;
                    color: #5F5F5F;
                    font-weight: bold;
                    font-size: 18px;
                    font-family: "SourceHanSans"
                }
            }
        }

        .item:hover {
            cursor: pointer;
            opacity: 0.9;
            transform: scale(1.03);
            transition: all 100ms ease-in-out;
        }

        .item-active {
            width: 240px;
            height: 215px;

            border-radius: 8px;
            background: linear-gradient(90deg, rgba(117, 105, 240, 1) 0%, rgba(153, 153, 255, 1) 100%);
            box-shadow: 0px 0px 4px rgba(118, 106, 240, 1);

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                img {
                    width: 62px;
                    height: 62px;
                    filter: drop-shadow(#ffffff 200px 0);
                    transform: translateX(-200px);
                }

                span {
                    margin-top: 6px;
                    color: #ffffff;
                    font-weight: bold;
                    font-size: 18px;
                    font-family: "SourceHanSans"
                }
            }
        }
    }

    .context {
        width: 1580px;
        height: 960px;
    }
}
</style>