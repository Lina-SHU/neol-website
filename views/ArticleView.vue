<script setup>
import BlogListComponent from '@/components/BlogListComponent.vue'
</script>

<template>
  <div class="lg:container lg:pb-20 lg:pt-30">
    <div class="lg:flex lg:flex-row-reverse lg:flex-wrap lg:-mx-3 lg:items-stretch">
      <!-- 部落格分類選單 -->
      <div class="lg:w-3/12 lg:px-3">
        <BlogListComponent />
      </div>
      <!-- 部落格內文 -->
      <div class="pt-8 pb-10 lg:py-0 lg:w-8/12 lg:px-3 lg:mr-auto">
        <div class="mx-3 text-primary-700 lg:mx-0">
          <div class="flex justify-between text-primary-500 mb-4 lg:mb-10 lg:justify-start">
            <p>數位產品設計</p>
            <p class="hidden lg:block lg:mx-2">/</p>
            <p>2023/09/20 發佈</p>
          </div>
          <div class="text-center px-3 mb-6 lg:mb-16">
            <h2 class="font-bold text-2xl mb-4 lg:text-4xl lg:mb-6">
              虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究
            </h2>
            <p class="lg:text-2xl">- 探索虛擬實境技術的現狀與前景 -</p>
          </div>
          <p class="text-xl mb-8 lg:mb-10">
            在當今數位科技的快速發展下，虛擬實境（VR）技術日益受到關注。VR技術為使用者提供了身臨其境的體驗，並在多個領域中得到應用，如遊戲、教育、醫療等。然而，要實現真正的沈浸感需要考慮多個因素，其中介面設計是至關重要的一環。本研究旨在探討不同介面設計對使用者在虛擬環境中的沈浸感的影響，以期為優化VR技術的使用者體驗提供參考。
          </p>
          <h3 class="text-xl font-bold text-xl mb-4 lg:text-2xl">大眾看法</h3>
          <p class="text-xl mb-8 lg:mb-10">
            虛擬實境技術近年來受到越來越多人的關注和接受。人們對VR技術的潛力持樂觀態度，認為它能夠提供全新的體驗和娛樂方式，並在教育、訓練等領域中有著廣泛的應用前景。然而，也有一些人擔心虛擬實境技術的成熟度和可靠性，對其潛在風險抱有顧慮。
          </p>
          <h3 class="text-xl font-bold text-xl mb-4 lg:text-2xl">現行產品</h3>
          <p class="text-xl mb-8 lg:mb-10">
            目前市面上有許多虛擬實境產品，如Vision Pro、Oculus Rift、HTC Vive、PlayStation
            VR等。這些產品在硬件性能、軟件支持和使用者體驗等方面存在差異，而介面設計是影響使用者體驗的重要因素之一。不同的介面設計可以影響使用者的操作方式、感知真實度以及沈浸感。
          </p>
          <ul class="lg:flex lg:flex-wrap lg:-mx-3">
            <li class="mb-8 lg:w-6/12 lg:px-3 lg:mb-6">
              <img src="../assets/image/vision-pro.png" alt="vision-pro.png" class="mb-2 mx-auto" />
              <p class="text-center text-primary-500">Vision Pro</p>
            </li>
            <li class="mb-8 lg:w-6/12 lg:px-3 lg:mb-6">
              <img src="../assets/image/oculus-rift.png" alt="Oculus Rift" class="mb-2 mx-auto" />
              <p class="text-center text-primary-500">Oculus Rift</p>
            </li>
            <li class="mb-8 lg:w-6/12 lg:px-3 lg:mb-10">
              <img src="../assets/image/htc-vive.png" alt="htc-vive.png" class="mb-2 mx-auto" />
              <p class="text-center text-primary-500">HTC Vive</p>
            </li>
            <li class="mb-8 lg:w-6/12 lg:px-3 lg:mb-10">
              <img
                src="../assets/image/playstation-vr.png"
                alt="playstation-vr.png"
                class="mb-2 mx-auto"
              />
              <p class="text-center text-primary-500">PlayStation VR</p>
            </li>
          </ul>
          <h3 class="text-xl font-bold text-xl mb-4 lg:text-2xl">技術創新</h3>
          <p class="text-xl mb-8 lg:mb-10">
            隨著硬件技術的不斷進步，VR設備的性能和功能也在不斷提升。高解析度的顯示器、感應器、追蹤技術等創新技術的應用，使得虛擬實境的感知和互動性能夠更加真實和流暢。然而，技術創新也帶來了一些挑戰，例如圖像質量、感知延遲等問題仍然存在，需要進一步解決。<br />技術瓶頸：儘管虛擬實境技術取得了巨大進步，但仍然存在一些技術瓶頸需要克服。例如，許多使用者報告在使用VR設備時出現眩暈和不適感，這與感知延遲和畫面模糊等問題有關。此外，虛擬實境的內容和應用也需要更多的創新和豐富，以滿足不同使用者的需求。
          </p>
          <h3 class="text-xl font-bold text-xl mb-4 lg:text-2xl">技術瓶頸</h3>
          <p class="text-xl mb-8 lg:mb-10">
            儘管虛擬實境技術取得了巨大進步，但仍然存在一些技術瓶頸需要克服。例如，許多使用者報告在使用VR設備時出現眩暈和不適感，這與感知延遲和畫面模糊等問題有關。此外，虛擬實境的內容和應用也需要更多的創新和豐富，以滿足不同使用者的需求。
          </p>
          <h3 class="text-xl font-bold text-xl mb-4 lg:text-2xl">未來展望</h3>
          <p class="text-xl mb-8 lg:mb-10">
            未來，虛擬實境技術將繼續向前發展。我們可以期待更加先進的硬件設備和更加豐富多彩的虛擬內容。同時，介面設計也將繼續演進，以提供更加直觀和便捷的操作方式，進一步增強使用者的沈浸感和參與感。總的來說，虛擬實境技術的未來是充滿希望和潛力的，我們期待著看到它在各個領域中的廣泛應用和發展。
          </p>
          <p>Noel 主筆</p>
        </div>
      </div>
      <!-- 相關文章 -->
      <div
        class="mx-3 border-t border-primary-400 pt-10 pb-20 lg:container lg:border-0 lg:pt-20 lg:pb-30"
      >
        <h2 class="font-bold text-2xl text-center mb-10 lg:text-left lg:text-2xxl">相關文章</h2>
        <ul class="articleList w-[88%] mx-auto lg:w-full lg:flex lg:flex-wrap lg:-mx-3">
          <li class="mb-10 lg:mb-0 lg:w-4/12 lg:px-3">
            <img
              src="../assets/image/article-image1.png"
              alt=""
              class="w-full object-cover rounded-lg mb-4"
            />
            <div class="px-2 lg:flex lg:flex-col lg:flex-col-reverse">
              <div class="flex justify-between items-center mb-4 lg:mb-0">
                <p class="text-primary-600">2024/02/10</p>
                <p class="bg-primary-200 text-primary-700 py-1 px-3 rounded-2xl">UI/UX 新知</p>
              </div>
              <h3 class="font-bold text-xl lg:mb-4">
                Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)
              </h3>
            </div>
          </li>
          <li class="lg:w-4/12 lg:px-3">
            <img
              src="../assets/image/article-image7.png"
              alt=""
              class="w-full object-cover rounded-lg mb-4"
            />
            <div class="px-2 lg:flex lg:flex-col lg:flex-col-reverse">
              <div class="flex justify-between items-center mb-4 lg:mb-0">
                <p class="text-primary-600">2023/07/10</p>
                <p class="bg-primary-200 text-primary-700 py-1 px-3 rounded-2xl">UI/UX 新知</p>
              </div>
              <h3 class="font-bold text-xl lg:mb-4">Vision Pro 來了！UIUX 設計師的未來在哪裡？</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-x {
  white-space: nowrap;
  overflow: auto;
  @media (min-width: 960px) {
    white-space: initial;
    overflow: initial;
  }
  li {
    display: inline-block;
  }
}

.articleList {
  img {
    height: 306px;
    @media (min-width: 960px) {
      height: 220px;
    }
  }
}
</style>
