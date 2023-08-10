<style scoped src="./CulturalHeritageView.css"></style>
<script setup></script>

<template>
  <div class="page-container">
    <div class="left">
      <div class="left-up">
        <div class="title">
          <div class="img"></div>
          <div class="text">文旅月活动频率</div>
        </div>
        <div
          id="left-up-content"
          class="content"
          v-loading="true"
          element-loading-background="rgba(0, 0, 0, 0)"
        ></div>
      </div>

      <div class="left-down">
        <div class="left-down-left">
          <div class="title">
            <div class="img"></div>
            <div class="text">各类公园数量</div>
          </div>
          <div
            id="left-down-left-content"
            class="content"
            v-loading="true"
            element-loading-background="rgba(0, 0, 0, 0)"
          ></div>
        </div>

        <div class="left-down-right">
          <div class="title">
            <div class="img"></div>
            <div class="text">休闲运动场所数量 </div>
          </div>
          <div
            id="left-down-right-content"
            class="content"
            v-loading="true"
            element-loading-background="rgba(0, 0, 0, 0)"
          ></div>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="right-up">
        <div class="title">
          <div class="img"></div>
          <div class="text">娱乐场所各类别数量</div>
        </div>
        <div
          id="right-up-content"
          class="content"
          v-loading="true"
          element-loading-background="rgba(0, 0, 0, 0)"
        ></div>
      </div>

      <div class="right-down">
        <div class="title">
          <div class="img"></div>
          <div class="text">绿地面积</div>
        </div>
        <div
          id="right-down-content"
          class="content"
          v-loading="true"
          element-loading-background="rgba(0, 0, 0, 0)"
        ></div>
      </div>
    </div>
  </div>
</template>
