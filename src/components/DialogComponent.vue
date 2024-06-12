<script setup>
const props = defineProps({
  showDialog: Boolean
})
const emit = defineEmits(['handleDialog'])
const close = () => {
  emit('handleDialog')
}
</script>

ScriptCompileContext

<template>
  <div
    v-if="showDialog"
    class="relative z-50"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="fixed inset-0 bg-primary-900 bg-opacity-60 transition-opacity"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all mx-3 sm:my-8 sm:w-full 2xl:w-[56%]"
        >
          <div class="pt-8 pr-8 lg:pr-10">
            <a href="#" class="block" @click.prevent="close">
              <img src="../assets/image/close.svg" alt="close" class="ml-auto" />
            </a>
          </div>
          <div class="py-6 px-8 lg:py-10">
            <h3 class="text-2xxl font-bold text-primary-700 text-center mb-2">星際旅行訂票平台</h3>
            <p class="text-primary-500 text-center mb-6">悠遊宇宙的夢想，從這裡開始實現</p>
            <div class="xl:flex">
              <div class="xl:mr-18 xl:w-[49%]">
                <p>STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。</p>
                <p class="pb-6 border-b border-primary-400 mb-6 xl:mb-0 xl:border-0 xl:pb-0">
                  主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。
                </p>
              </div>
              <ul
                class="text-primary-600 text-center xl:pl-6 xl:border-l xl:border-primary-600 xl:w-[33%]"
              >
                <li class="mb-6 xl:flex xl:text-nowrap lg:mb-2">
                  <h4 class="mb-1 xl:mb-0">設計原則</h4>
                  <p>宇宙旅行、深色背景、強烈視覺效果</p>
                </li>
                <li class="xl:flex xl:text-nowrap">
                  <h4 class="mb-1 xl:mb-0">開發方式</h4>
                  <p>Bootstrap、Javascript、RWD</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="py-10 px-4 xl:py-20">
            <ul class="xl:w-[67%] lg:mx-auto">
              <li class="mb-14">
                <img
                  src="../assets/image/modal-image1.png"
                  alt="modal-image1"
                  class="w-full object-cover rounded-lg mb-4 lg:mb-6"
                />
                <h4 class="text-primary-800 text-xl font-bold text-center mb-2 lg:text-2xl lg:mb-4">
                  主視覺
                </h4>
                <p class="text-primary-600">
                  可直接設定日期、起迄星球、張數，快速查詢可購買的票券。
                </p>
              </li>
              <li>
                <img
                  src="../assets/image/modal-image2.png"
                  alt="modal-image2"
                  class="w-full object-cover rounded-lg mb-4 lg:mb-6"
                />
                <h4 class="text-primary-800 text-xl font-bold text-center mb-2 lg:text-2xl lg:mb-4">
                  推薦查詢
                </h4>
                <p class="text-primary-600">
                  給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
