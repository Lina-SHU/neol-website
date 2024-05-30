<script setup></script>

<template>
  <!-- 醫美診所官網 -->
  <section class="bg-clinic lg:pt-[176px] lg:pb-[112px]">
    <div class="lg:container">
      <div class="lg:flex lg:items-center lg:-mx-3">
        <div class="bg-clinic-sm bg-center py-[90px] lg:mr-[49px] lg:py-0">
          <div class="px-10 relative z-10">
            <img src="../assets/image/homepage-work3.png" alt="" />
          </div>
        </div>
        <div
          class="px-3 pt-6 pb-20 lg:relative lg:z-10 lg:w-6/12 lg:bg-primary-50 lg:bg-opacity-10 lg:rounded-3xl lg:pt-20 lg:pb-14 lg:px-10 2xl:w-4/12"
        >
          <h3
            class="font-bold text-center text-xl mb-2 lg:text-left lg:text-primary-50 lg:text-2xl"
          >
            醫美診所官網
          </h3>
          <p class="text-primary-600 text-center mb-4 lg:text-left lg:text-primary-50 lg:mb-6">
            永保青春的秘密，從粹究開始
          </p>
          <ul class="flex justify-center mb-5 lg:pb-10 lg:border-b lg:border-primary-50 lg:mb-10">
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
      <h3 class="flex items-center justify-center mb-10 lg:mb-20">
        <img src="../assets/image/title-deco-left-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-left-lg.png" alt="" class="hidden lg:block" />
        <span class="text-primary-700 text-2xl font-bold mx-4 lg:text-4xl">服務項目</span>
        <img src="../assets/image/title-deco-right-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-right-lg.png" alt="" class="hidden lg:block" />
      </h3>
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
</template>

<style lang="scss" scoped>
.bg-center {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
</style>
