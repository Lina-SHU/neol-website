<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="fixed inset-x-0">
    <div class="bg-primary-50 container flex justify-between py-2">
      <h1>
        <RouterLink to="/">
          <img src="../assets/image/logo.svg" alt="neol" />
        </RouterLink>
      </h1>
      <a href="#" @click.prevent="toggleMenu" v-if="!isOpen">
        <img src="../assets/image/menu.svg" alt="" />
      </a>
      <a href="#" @click.prevent="toggleMenu" v-if="isOpen">
        <img src="../assets/image/closemenu.svg" alt="" />
      </a>
    </div>
    <div
      v-if="isOpen"
      class="fixed inset-x-0 top-[56px] bottom-0 bg-primary-900 bg-opacity-60 transition-opacity"
    >
      <ul class="bg-primary-50 py-10">
        <li>
          <RouterLink to="/" class="text-xl block text-center pb-3">首頁</RouterLink>
        </li>
        <li>
          <RouterLink to="/portfolio" class="text-xl block text-center py-3">作品集</RouterLink>
        </li>
        <li>
          <RouterLink to="/service" class="text-xl block text-center py-3">服務項目</RouterLink>
        </li>
        <li>
          <RouterLink to="/blog" class="text-xl block text-center py-3">部落格</RouterLink>
        </li>
        <li><a href="#" class="text-xl block text-center pt-3">聯絡我</a></li>
      </ul>
    </div>
  </header>
</template>
