<script setup>
import { register } from 'swiper/element/bundle'
register()
</script>

<template>
  <!-- Banner -->
  <section>
    <div
      class="xl:flex xl:flex-row-reverse xl:items-center xl:flex-wrap xl:relative xl:h-[470px] 2xl:h-[720px]"
    >
      <div class="xl:w-[60%] xl:absolute xl:right-0 xl:top-0">
        <img src="../assets/image/hero-sm.png" alt="" class="w-full object-cover lg:hidden" />
        <img src="../assets/image/hero-lg.png" alt="" class="object-cover hidden lg:block" />
      </div>
      <div class="xl:container">
        <div class="xl:flex xl:flex-wrap xl:-mx-3">
          <div class="w-[72%] mx-auto py-10 xl:w-5/12 xl:px-3 xl:mr-auto xl:ml-0">
            <h2 class="text-center font-bold text-4xl mb-6 xl:text-[40px] xl:text-left">
              Hi！我是 Noel
            </h2>
            <div class="xl:flex">
              <p class="text-center text-xl">具有 10 年經驗的</p>
              <p class="text-center text-xl mb-2">資深 UI 設計師兼前端工程師</p>
            </div>
            <div class="xl:flex">
              <p class="text-center text-xl">技術雙修並行，</p>
              <p class="text-center text-xl mb-4">熱衷於優化使用者的網頁體驗</p>
            </div>
            <p class="text-center text-primary-400 mb-8 xl:text-left">
              WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN
            </p>
            <ul class="flex justify-center gap-x-4 xl:justify-start">
              <li>
                <a href="#"><img src="../assets/image/instagram.svg" alt="instagram" /></a>
              </li>
              <li>
                <a href="#"><img src="../assets/image/facebook.svg" alt="facebook" /></a>
              </li>
              <li>
                <a href="#"><img src="../assets/image/youtube.svg" alt="youtube" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 作品介紹 -->
  <h2 class="flex items-center justify-center py-10 lg:pt-40 lg:pb-20">
    <img src="../assets/image/title-deco-left-sm.png" alt="" class="lg:hidden" />
    <img src="../assets/image/title-deco-left-lg.png" alt="" class="hidden lg:block" />
    <span class="text-primary-700 text-2xl font-bold mx-4 lg:text-4xl">作品介紹</span>
    <img src="../assets/image/title-deco-right-sm.png" alt="" class="lg:hidden" />
    <img src="../assets/image/title-deco-right-lg.png" alt="" class="hidden lg:block" />
  </h2>
  <!-- 星際旅行訂票平台 -->
  <section class="bg-star bg-center lg:pt-20">
    <div class="lg:container">
      <div class="lg:flex lg:items-center lg:-mx-3">
        <div class="bg-star-sm bg-center py-[90px] lg:mr-[49px] lg:py-0">
          <div class="px-10 relative z-10">
            <img src="../assets/image/homepage-work1.png" alt="" />
          </div>
        </div>
        <div
          class="px-3 pt-6 pb-12 lg:relative lg:z-10 lg:w-6/12 lg:bg-primary-50 lg:bg-opacity-10 lg:rounded-3xl lg:pt-20 lg:pb-14 lg:px-10 2xl:w-5/12"
        >
          <h3
            class="font-bold text-center text-xl mb-2 lg:text-left lg:text-primary-50 lg:text-2xl"
          >
            星際旅行訂票平台
          </h3>
          <p class="text-primary-600 text-center mb-4 lg:text-left lg:text-primary-50 lg:mb-6">
            悠遊宇宙的夢想，從這裡開始實現
          </p>
          <ul
            class="flex justify-center mb-5 lg:pb-10 lg:border-b lg:border-primary-50 lg:justify-start lg:mb-10"
          >
            <li>
              <div class="bg-primary-200 rounded-2xl py-1 px-3 mr-2 lg:mr-4">網頁設計</div>
            </li>
            <li>
              <div class="bg-primary-200 rounded-2xl py-1 px-3 mr-2 lg:mr-4">響應式設計</div>
            </li>
            <li>
              <div class="bg-primary-200 rounded-2xl py-1 px-3">Bootstrap</div>
            </li>
          </ul>
          <button
            class="bg-primary-900 text-primary-50 font-bold rounded-[5px] flex items-center px-4 py-2 mx-auto lg:text-xl lg:px-8 lg:py-4"
          >
            完整介紹
            <img src="../assets/image/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- 理財APP -->
  <section class="bg-app bg-center lg:py-[200px]">
    <div class="lg:container">
      <div class="lg:flex lg:items-center lg:-mx-3">
        <div class="bg-app-sm bg-center"></div>
        <div
          class="px-3 pt-6 pb-20 lg:relative lg:z-10 lg:w-6/12 lg:bg-primary-50 lg:bg-opacity-10 lg:rounded-3xl lg:pt-20 lg:pb-14 lg:px-10 2xl:w-5/12"
        >
          <h3
            class="font-bold text-center text-xl mb-2 lg:text-left lg:text-primary-50 lg:text-2xl"
          >
            理財APP
          </h3>
          <p class="text-primary-600 text-center mb-4 lg:text-left lg:text-primary-50 lg:mb-6">
            連動帳戶與行動支付，讓 AI 提供您最好的理財建議
          </p>
          <ul
            class="flex justify-center mb-5 lg:pb-10 lg:border-b lg:border-primary-50 lg:justify-start lg:mb-10"
          >
            <li>
              <div class="bg-primary-200 rounded-2xl py-1 px-3 mr-2 lg:mr-4">APP設計</div>
            </li>
            <li>
              <div class="bg-primary-200 rounded-2xl py-1 px-3 mr-2 lg:mr-4">APP設計</div>
            </li>
            <li>
              <div class="bg-primary-200 rounded-2xl py-1 px-3">React</div>
            </li>
          </ul>
          <button
            class="bg-primary-900 text-primary-50 font-bold rounded-[5px] flex items-center px-4 py-2 mx-auto lg:text-xl lg:px-8 lg:py-4"
          >
            完整介紹
            <img src="../assets/image/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- 醫美診所官網 -->
  <section class="bg-clinic bg-center lg:pt-[176px] lg:pb-[112px]">
    <div class="lg:container">
      <div class="lg:flex lg:items-center lg:-mx-3">
        <div class="bg-clinic-sm bg-center py-[90px] lg:mr-[49px] lg:py-0">
          <div class="px-10 relative z-10">
            <img src="../assets/image/homepage-work3.png" alt="" />
          </div>
        </div>
        <div
          class="px-3 pt-6 pb-20 lg:relative lg:z-10 lg:w-6/12 lg:bg-primary-50 lg:bg-opacity-10 lg:rounded-3xl lg:pt-20 lg:pb-14 lg:px-10 2xl:w-5/12"
        >
          <h3
            class="font-bold text-center text-xl mb-2 lg:text-left lg:text-primary-50 lg:text-2xl"
          >
            醫美診所官網
          </h3>
          <p class="text-primary-600 text-center mb-4 lg:text-left lg:text-primary-50 lg:mb-6">
            永保青春的秘密，從粹究開始
          </p>
          <ul
            class="flex justify-center mb-5 lg:pb-10 lg:border-b lg:border-primary-50 lg:justify-start lg:mb-10"
          >
            <li>
              <div class="bg-primary-200 rounded-2xl py-1 px-3 mr-2 lg:mr-4">網頁設計</div>
            </li>
            <li>
              <div class="bg-primary-200 rounded-2xl py-1 px-3 mr-2 lg:mr-4">響應式設計</div>
            </li>
            <li>
              <div class="bg-primary-200 rounded-2xl py-1 px-3">WordPress</div>
            </li>
          </ul>
          <button
            class="bg-primary-900 text-primary-50 font-bold rounded-[5px] flex items-center px-4 py-2 mx-auto lg:text-xl lg:px-8 lg:py-4"
          >
            完整介紹
            <img src="../assets/image/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- 服務項目 -->
  <section class="bg-service pt-10 pb-20 lg:py-30">
    <div class="container">
      <h2 class="flex items-center justify-center mb-10 lg:mb-20">
        <img src="../assets/image/title-deco-left-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-left-lg.png" alt="" class="hidden lg:block" />
        <span class="text-primary-700 text-2xl font-bold mx-4 lg:text-4xl">服務項目</span>
        <img src="../assets/image/title-deco-right-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-right-lg.png" alt="" class="hidden lg:block" />
      </h2>
      <ul class="serviceList mb-10 lg:flex lg:flex-wrap lg:-mx-3 lg:mb-20">
        <li class="w-[82%] mx-auto mb-6 lg:w-3/12 lg:px-3 lg:mb-0">
          <div class="bg-service-item flex justify-center items-center rounded-2xl">
            ;

            <div>
              <img
                src="../assets/image/service-item-visual.svg"
                alt="平面設計"
                class="mb-2 mx-auto"
              />
              <p class="text-white text-center font-bold text-2xl">平面設計</p>
            </div>
          </div>
        </li>
        <li class="w-[82%] mx-auto mb-6 lg:w-3/12 lg:px-3 lg:mb-0">
          <div class="bg-service-item flex justify-center items-center rounded-2xl">
            <div>
              <img src="../assets/image/service-item-ui.svg" alt="UI 設計" class="mb-2 mx-auto" />
              <p class="text-white text-center font-bold text-2xl">UI 設計</p>
            </div>
          </div>
        </li>
        <li class="w-[82%] mx-auto mb-6 lg:w-3/12 lg:px-3 lg:mb-0">
          <div class="bg-service-item flex justify-center items-center rounded-2xl">
            <div>
              <img
                src="../assets/image/service-item-html&css.svg"
                alt="切版服務"
                class="mb-2 mx-auto"
              />
              <p class="text-white text-center font-bold text-2xl">切版服務</p>
            </div>
          </div>
        </li>
        <li class="w-[82%] mx-auto lg:w-3/12 lg:px-3">
          <div class="bg-service-item flex justify-center items-center rounded-2xl">
            <div>
              <img
                src="../assets/image/service-item-front-end.svg"
                alt="前端開發"
                class="mx-auto"
              />
              <p class="text-white text-center font-bold text-2xl">前端開發</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="text-center">
        <p class="text-xl font-bold mb-6 lg:text-2xxl lg:mb-10">想要合作或瞭解更多？</p>
        <button
          class="bg-primary-900 text-primary-50 font-bold rounded-[5px] flex items-center px-4 py-2 mx-auto lg:text-xl lg:px-8 lg:py-4"
        >
          詳細內容與合作流程
          <img src="../assets/image/arrow.svg" alt="arrow" class="ml-2" />
        </button>
      </div>
    </div>
  </section>
  <!-- 精選文章 -->
  <section class="py-20">
    <h2 class="flex items-center justify-center py-10 lg:pt-40 lg:pb-20">
      <img src="../assets/image/title-deco-left-sm.png" alt="" class="lg:hidden" />
      <img src="../assets/image/title-deco-left-lg.png" alt="" class="hidden lg:block" />
      <span class="text-primary-700 text-2xl font-bold mx-4 lg:text-4xl">精選文章</span>
      <img src="../assets/image/title-deco-right-sm.png" alt="" class="lg:hidden" />
      <img src="../assets/image/title-deco-right-lg.png" alt="" class="hidden lg:block" />
    </h2>
    <div class="articleHeight container">
      <swiper-container
        class="swiper articleSwiper"
        loop="true"
        spaceBetween="24"
        slidesPerView="1"
        :pagination="true"
        :breakpoints="{
          960: {
            slidesPerView: 3,
            'grid.rows': 1
          }
        }"
      >
        <swiper-slide class="mb-12 lg:mb-0">
          <img
            src="../assets/image/article-image2.png"
            alt="article-image"
            class="w-full object-cover rounded-lg"
          />
          <div class="pt-4 px-2">
            <h4 class="font-bold text-xl mb-4">
              Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)
            </h4>
            <div class="flex justify-between items-center">
              <p class="text-primary-700 bg-primary-200 rounded-2xl py-1 px-3">UI/UX 新知</p>
              <p class="text-primary-600">2024/02/10</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="mb-12 lg:mb-0">
          <img
            src="../assets/image/article-image3.png"
            alt="article-image"
            class="w-full object-cover rounded-lg"
          />
          <div class="pt-4 px-2">
            <h4 class="font-bold text-xl mb-4">
              給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)
            </h4>
            <div class="flex justify-between items-center">
              <p class="text-primary-700 bg-primary-200 rounded-2xl py-1 px-3">UI/UX 新知</p>
              <p class="text-primary-600">2023/11/20</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/image/article-image1.png"
            alt="article-image"
            class="w-full object-cover rounded-lg"
          />
          <div class="pt-4 px-2">
            <h4 class="font-bold text-xl mb-4">
              給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)
            </h4>
            <div class="flex justify-between items-center">
              <p class="text-primary-700 bg-primary-200 rounded-2xl py-1 px-3">UI/UX 新知</p>
              <p class="text-primary-600">2023/10/18</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="mb-12 lg:mb-0">
          <img
            src="../assets/image/article-image2.png"
            alt="article-image"
            class="w-full object-cover rounded-lg"
          />
          <div class="pt-4 px-2">
            <h4 class="font-bold text-xl mb-4">
              Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)
            </h4>
            <div class="flex justify-between items-center">
              <p class="text-primary-700 bg-primary-200 rounded-2xl py-1 px-3">UI/UX 新知</p>
              <p class="text-primary-600">2024/02/10</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <button
        class="bg-primary-900 text-primary-50 font-bold rounded-[5px] flex items-center px-4 py-2 mx-auto mt-10 lg:hidden"
      >
        更多文章
        <img src="../assets/image/arrow.svg" alt="arrow" class="ml-2" />
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bg-center {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-star-sm {
  background-image: url('../assets/image/homepage-work1-bg.png');
  @media (min-width: 960px) {
    background: none;
  }
}

.bg-star {
  @media (min-width: 960px) {
    background-image: url('../assets/image/homepage-work1-bg.png');
  }
}

.bg-app-sm {
  background-image: url('../assets/image/homepage-work2-sm.png');
  height: 390px;
  @media (min-width: 960px) {
    background: none;
    height: auto;
  }
}

.bg-app {
  @media (min-width: 960px) {
    position: relative;
    background-image: url('../assets/image/homepage-work2-lg.png');
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-color: rgba(13, 12, 7, 0.5);
      z-index: 1;
    }
  }
}

.bg-clinic-sm {
  position: relative;
  background-image: url('../assets/image/homepage-work3-bg.png');
  @media (min-width: 960px) {
    background: none;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(13, 12, 7, 0.5);
    z-index: 1;
    @media (min-width: 960px) {
      content: none;
    }
  }
}

.bg-clinic {
  @media (min-width: 960px) {
    position: relative;
    background-image: url('../assets/image/homepage-work3-bg.png');
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(13, 12, 7, 0.5);
      z-index: 1;
    }
  }
}

.bg-service {
  @media (min-width: 960px) {
    background-image: url('../assets/image/homepage-services-bg.png');
  }
}

.bg-service-item {
  background: linear-gradient(315deg, #1e1e1e 0%, #1e1e1e 49.97%, #000000 50%);
}

.serviceList li > div {
  height: 306px;
}

.articleHeight.container {
  overflow: hidden;
  height: 400px;
}

:deep(.articleSwiper::part(container)) {
  overflow: visible;
}

:deep(.articleSwiper::part(pagination)) {
  display: none;
  @media (min-width: 960px) {
    bottom: -40px;
    display: block;
  }
}

:deep(.articleSwiper::part(bullet)) {
  width: 12px;
  height: 12px;
}

:deep(.articleSwiper::part(bullet-active)) {
  background-color: #000000;
  width: 12px;
  height: 12px;
}
</style>
