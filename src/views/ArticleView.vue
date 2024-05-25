<script setup>
import BlogListComponent from '@/components/BlogListComponent.vue'
</script>

<template>
  <div class="lg:container lg:pb-20 lg:pt-30">
    <div class="lg:flex lg:flex-row-reverse lg:flex-wrap lg:-mx-3 lg:items-stretch">
      <!-- 部落格分類選單 -->
      <div class="lg:w-2/12 lg:px-3">
        <BlogListComponent />
      </div>
      <!-- 部落格內文 -->
      <div class="pt-8 pb-10 lg:pt-0 lg:pb-0 lg:w-10/12 lg:px-3">
        <div class="container">
          <div class="flex justify-between text-primary-500 mb-4">
            <p>數位產品設計</p>
            <p>2023/09/20 發佈</p>
          </div>
          <div class="text-center text-primary-700 px-3 mb-6">
            <h2 class="font-bold text-2xl mb-4">虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究</h2>
            <p>- 探索虛擬實境技術的現狀與前景 -</p>
          </div>
        </div>
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
</style>
