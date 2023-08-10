<style scoped src="./CulturalTourismConstructionView.css"></style>
<script setup></script>

<template>
  <div class="page-container">
    <div class="left">
      <div class="left-up">
        <div class="title">
          <div class="img"></div>
          <div class="text">非物质文化遗产数量</div>
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
            <div class="text">各类型文化保护单位数量</div>
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
            <div class="text">各地区博物馆数量</div>
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
          <div class="text">各博物馆年参观人次</div>
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
          <div class="text">红色遗址</div>
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
