<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main class="space-top">
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style lang="scss" scoped>
.space-top {
  padding-top: 56px;
}
</style>
