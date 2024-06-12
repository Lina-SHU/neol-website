<script setup>
import { ref } from 'vue'
import DialogComponent from '@/components/DialogComponent.vue'

const showDialog = ref(false)
const handleDialog = () => {
  showDialog.value = !showDialog.value
}
</script>

ScriptCompileContext

<template>
  <!-- 標題 -->
  <div class="bg-primary-100 pt-10 pb-20 text-center lg:pt-20">
    <div class="w-[80%] mb-10 mx-auto 2xl:w-[35%] xl:mb-6">
      <img src="../assets/image/quote-left.png" alt="quote-left" class="mx-auto lg:ml-0 lg:-mb-4" />
      <div class="text-primary-800 text-xl lg:text-2xl">
        <p class="mb-2">讓使用者在觀賞與使用的旅程中，發現設計的價值</p>
        <p>而我在設計與開發的過程中，看見自己的價值</p>
      </div>
      <img
        src="../assets/image/quote-right.png"
        alt=""
        class="hidden lg:block lg:ml-auto lg:-mt-4"
      />
    </div>
    <ul class="w-[62.6%] mx-auto xl:w-[33%] xl:grid xl:gap-x-10 xl:grid-cols-2">
      <li class="text-center mb-5">
        <h3 class="text-primary-600 mb-1">2B經驗</h3>
        <div class="title-underline mx-auto mb-2"></div>
        <p class="text-primary-700">內部監控系統、庫存系統、採購系統、行銷整合系統</p>
      </li>
      <li class="text-center">
        <h3 class="text-primary-600 mb-1">2C經驗</h3>
        <div class="title-underline mx-auto mb-2"></div>
        <p class="text-primary-700">跨國美妝保養電商、個人品牌網站、醫美網站、電子商務</p>
      </li>
    </ul>
  </div>
  <!-- 作品集 -->
  <div class="container py-20 lg:py-30">
    <ul class="caseList lg:flex lg:flex-wrap lg:justify-between lg:-mx-3">
      <li class="mb-12 lg:w-1/2 lg:px-3 lg:mb-20">
        <a href="#" @click.prevent="handleDialog" class="group">
          <img
            src="../assets/image/work-image1.png"
            alt="work-image"
            class="w-full object-cover rounded mb-4 group-hover:opacity-70"
          />
          <div class="mx-4">
            <h3 class="font-bold text-xl text-primary-700 mb-2 lg:text-2xxl">星際旅行訂票平台</h3>
            <p class="text-primary-500 mb-4 lg:mb-6">悠遊宇宙的夢想，從這裡開始實現</p>
            <ul class="flex">
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">網頁設計</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">響應式設計</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl">Bootstrap</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="mb-12 lg:w-1/2 lg:px-3 lg:mb-20">
        <a href="#" @click.prevent="handleDialog" class="group">
          <img
            src="../assets/image/work-image2.png"
            alt="work-image"
            class="w-full object-cover rounded mb-4 group-hover:opacity-70"
          />
          <div class="mx-4">
            <h3 class="font-bold text-xl text-primary-700 mb-2 lg:text-2xxl">理財App</h3>
            <p class="text-primary-500 mb-4 lg:mb-6">
              連動帳戶與行動支付，讓 AI 提供您最好的理財建議
            </p>
            <ul class="flex">
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">APP設計</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">iOS</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl">React</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="mb-12 lg:w-1/2 lg:px-3 lg:mb-20">
        <a href="#" @click.prevent="handleDialog" class="group">
          <img
            src="../assets/image/work-image3.png"
            alt="work-image"
            class="w-full object-cover rounded mb-4 group-hover:opacity-70"
          />
          <div class="mx-4">
            <h3 class="font-bold text-xl text-primary-700 mb-2 lg:text-2xxl">醫美診所官網</h3>
            <p class="text-primary-500 mb-4 lg:mb-6">永保青春的秘密，從粹究開始</p>
            <ul class="flex">
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">網頁設計</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">響應式設計</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl">ＷordPress</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="mb-12 lg:w-1/2 lg:px-3 lg:mb-20">
        <a href="#" @click.prevent="handleDialog" class="group">
          <img
            src="../assets/image/work-image4.png"
            alt="work-image"
            class="w-full object-cover rounded mb-4 group-hover:opacity-70"
          />
          <div class="mx-4">
            <h3 class="font-bold text-xl text-primary-700 mb-2 lg:text-2xxl">
              美美美早餐店 POS 機 UI Design
            </h3>
            <p class="text-primary-500 mb-4 lg:mb-6">訂單送單一目瞭然，自動報表分析好輕鬆</p>
            <ul class="flex">
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">UI 設計</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">前端開發</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl">Wix</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="mb-12 lg:w-1/2 lg:px-3 lg:mb-20">
        <a href="#" @click.prevent="handleDialog" class="group">
          <img
            src="../assets/image/work-image5.png"
            alt="work-image"
            class="w-full object-cover rounded mb-4 group-hover:opacity-70"
          />
          <div class="mx-4">
            <h3 class="font-bold text-xl text-primary-700 mb-2 lg:text-2xxl">電影院訂票系統</h3>
            <p class="text-primary-500 mb-4 lg:mb-6">三步驟完成訂票，電腦手機都支援</p>
            <ul class="flex">
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">前端開發</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">後端支援</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl">Vue</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="mb-12 lg:w-1/2 lg:px-3 lg:mb-20">
        <a href="#" @click.prevent="handleDialog" class="group">
          <img
            src="../assets/image/work-image6.png"
            alt="work-image"
            class="w-full object-cover rounded mb-4 group-hover:opacity-70"
          />
          <div class="mx-4">
            <h3 class="font-bold text-xl text-primary-700 mb-2 lg:text-2xxl">
              巧克巧克形象官網設計
            </h3>
            <p class="text-primary-500 mb-4 lg:mb-6">三步驟完成訂票，電腦手機都支援</p>
            <ul class="flex">
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">UI設計</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">設計系統</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl">網路電商</li>
            </ul>
          </div>
        </a>
      </li>
    </ul>
    <!-- 分頁 -->
    <ul class="text-2xl flex justify-center">
      <li
        class="bg-primary-700 text-primary-50 mr-4 py-[2px] px-[13px] rounded hover:bg-primary-500"
      >
        <a href="#" class="block">1</a>
      </li>
      <li
        class="text=primary-700 mr-4 py-[2px] px-[13px] rounded hover:text-primary-100 hover:bg-primary-500"
      >
        <a href="#" class="block">2</a>
      </li>
      <li
        class="text=primary-700 py-[2px] px-[13px] rounded hover:text-primary-100 hover:bg-primary-500"
      >
        <a href="#" class="block">3</a>
      </li>
    </ul>
  </div>
  <DialogComponent :show-dialog="showDialog" @handleDialog="handleDialog" />
</template>

<style lang="scss" scoped>
.title-underline {
  height: 2px;
  width: 24px;
  background-color: #c1c1c1;
}

.caseList {
  img {
    height: 224px;
    @media (min-width: 1140px) {
      height: 400px;
    }
  }
}
</style>
