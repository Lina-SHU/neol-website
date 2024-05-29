<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const isMobile = ref(width.value < 960)

const isOpen = ref(width.value < 960)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="fixed inset-x-0">
    <div class="bg-primary-50 container flex justify-between py-2 lg:relative lg:py-0">
      <h1 class="lg:absolute lg:left-3 lg:top-[28px] lg:z-10">
        <RouterLink to="/">
          <img src="../assets/image/logo.svg" alt="neol" />
        </RouterLink>
      </h1>
      <a href="#" @click.prevent="toggleMenu" v-if="!isOpen" class="lg:hidden">
        <img src="../assets/image/menu.svg" alt="" />
      </a>
      <a href="#" @click.prevent="toggleMenu" v-if="isOpen" class="lg:hidden">
        <img src="../assets/image/closemenu.svg" alt="" />
      </a>
    </div>
    <div
      v-if="isOpen || !isMobile"
      class="fixed inset-x-0 top-[56px] bottom-0 z-10 bg-primary-900 bg-opacity-60 transition-opacity lg:static lg:z-20"
    >
      <ul
        class="bg-primary-50 py-10 lg:py-8 lg:flex lg:justify-center lg:gap-x-10"
        @click.prevent="toggleMenu"
      >
        <li>
          <RouterLink to="/" class="text-xl block text-center pb-3 lg:py-1 lg:px-2"
            >首頁</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/portfolio" class="text-xl block text-center py-3 lg:py-1 lg:px-2"
            >作品集</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/service" class="text-xl block text-center py-3 lg:py-1 lg:px-2"
            >服務項目</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/blog" class="text-xl block text-center py-3 lg:py-1 lg:px-2"
            >部落格</RouterLink
          >
        </li>
        <li><a href="#" class="text-xl block text-center pt-3 lg:py-1 lg:px-2">聯絡我</a></li>
      </ul>
    </div>
  </header>
</template>
