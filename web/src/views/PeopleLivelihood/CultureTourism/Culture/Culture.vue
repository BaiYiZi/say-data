<template>
    <div class="Cultrue">
        <div class="up">
            <div class="up-left">
                <frame title="非遗项目各级别数量">
                    <IntangibleculturalheritageLevel/>
                </frame>
            </div>
            <div class="up-right">
                <frame title="不同类型文化保护单位数量占比">
                    <CulturalProtectionType/>
                </frame>
            </div>
        </div>
        <div class="mid">
            <div class="mid-left">
                <frame title="剧场和影剧院、公共图书馆、博物馆建设趋势">
                    <CulturalinstitutionsList/>
                </frame>
            </div>
            <div class="mid-right">
                <frame title="红色保定在线看展">
                    <Red/>
                </frame>
            </div>
        </div>
        <div class="down">
            <div class="down-left">
                <frame title="广播电视剧节目综合人口覆盖率 ">
                    <CulturalinstitutionsProgram/>
                </frame>
            </div>
            <div class="down-right">
                <frame title="特色美食推荐">

                </frame>
            </div>
        </div>
    </div>
</template>

<script setup>
import frame from '@/components/Frame.vue';
import IntangibleculturalheritageLevel from './Intangibleculturalheritage/IntangibleculturalheritageLevel.vue'
import CulturalProtectionType from './CulturalProtection/CulturalProtectionType.vue'
import Red from './Red.vue';
import CulturalinstitutionsList from './CulturalinstitutionsList.vue';
import CulturalinstitutionsProgram from './CulturalinstitutionsProgram.vue';
</script>

<style lang="less" scoped>
    ::-webkit-scrollbar {
        height: 0px;
        width: 0px;
    }

    /*定义滚动条轨道：内阴影+圆角*/
    ::-webkit-scrollbar-track {
        background-color: rgba(227, 227, 227, 0);
    }

    .Cultrue {
        width: 1580px;
        height: 960px;
        display: flex;
        flex-direction: column;
        overflow-y: visible;
        overflow-x: auto;
    }

    .up {
        width: 1580px;
        height: 388px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .up-left {
        width: 488px;
        height: 388px;
    }

    .up-right {
        width: 1072px;
        height: 388px;
    }

    .mid {
        width: 1580px;
        height: 398px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .mid-left {
        width: 1104px;
        height: 398px;
    }

    .mid-right {
        width: 456px;
        height: 398px;
    }

    .down {
        width: 1580px;
        height: 398px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .down-left {
        width: 1104px;
        height: 398px;
    }

    .down-right {
        width: 456px;
        height: 398px;
    }
</style>