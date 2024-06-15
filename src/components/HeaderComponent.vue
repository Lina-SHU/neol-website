<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(true)
const toggleMenu = () => {
  // 手機板收合
  if (window.innerWidth < 960) {
    isOpen.value = !isOpen.value
  }
}
</script>

<template>
  <header class="bg-primary-50 fixed inset-x-0 z-40">
    <div class="container flex justify-between py-2 lg:relative lg:py-0">
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
      v-if="isOpen"
      class="fixed inset-x-0 top-[56px] bottom-0 z-10 bg-primary-900 bg-opacity-60 transition-opacity lg:static lg:z-20"
    >
      <ul
        class="bg-primary-50 py-10 lg:py-8 lg:flex lg:justify-center lg:gap-x-10"
        @click.prevent="toggleMenu"
      >
        <li>
          <RouterLink to="/" class="text-xl block relative text-center pb-3 group lg:py-1 lg:px-2">
            首頁
            <!-- hover -->
            <div
              class="w-2 h-2 border-t border-l border-primary-500 absolute top-0 left-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-t border-r border-primary-500 absolute top-0 right-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-b border-l border-primary-500 absolute bottom-0 left-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-b border-r border-primary-500 absolute bottom-0 right-0 hidden group-hover:block"
            ></div>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/portfolio"
            class="text-xl block relative text-center py-3 group lg:py-1 lg:px-2"
          >
            作品集
            <!-- hover -->
            <div
              class="w-2 h-2 border-t border-l border-primary-500 absolute top-0 left-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-t border-r border-primary-500 absolute top-0 right-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-b border-l border-primary-500 absolute bottom-0 left-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-b border-r border-primary-500 absolute bottom-0 right-0 hidden group-hover:block"
            ></div>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/service"
            class="text-xl block relative text-center py-3 group lg:py-1 lg:px-2"
          >
            服務項目
            <!-- hover -->
            <div
              class="w-2 h-2 border-t border-l border-primary-500 absolute top-0 left-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-t border-r border-primary-500 absolute top-0 right-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-b border-l border-primary-500 absolute bottom-0 left-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-b border-r border-primary-500 absolute bottom-0 right-0 hidden group-hover:block"
            ></div>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/blog"
            class="text-xl block relative text-center py-3 group lg:py-1 lg:px-2"
          >
            部落格
            <!-- hover -->
            <div
              class="w-2 h-2 border-t border-l border-primary-500 absolute top-0 left-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-t border-r border-primary-500 absolute top-0 right-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-b border-l border-primary-500 absolute bottom-0 left-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-b border-r border-primary-500 absolute bottom-0 right-0 hidden group-hover:block"
            ></div>
          </RouterLink>
        </li>
        <li>
          <a href="#" class="text-xl block relative text-center pt-3 group lg:py-1 lg:px-2">
            聯絡我
            <!-- hover -->
            <div
              class="w-2 h-2 border-t border-l border-primary-500 absolute top-0 left-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-t border-r border-primary-500 absolute top-0 right-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-b border-l border-primary-500 absolute bottom-0 left-0 hidden group-hover:block"
            ></div>
            <div
              class="w-2 h-2 border-b border-r border-primary-500 absolute bottom-0 right-0 hidden group-hover:block"
            ></div>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
