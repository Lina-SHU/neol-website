<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="py-6 px-8">
            <h3 class="text-2xxl font-bold text-primary-700 text-center mb-2">星際旅行訂票平台</h3>
            <p class="text-primary-500 text-center mb-6">悠遊宇宙的夢想，從這裡開始實現</p>
            <p>STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。</p>
            <p class="pb-6 border-b border-primary-400 mb-6">
              主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。
            </p>
            <ul class="text-primary-600 text-center">
              <li class="mb-6">
                <h4 class="mb-1">設計原則</h4>
                <p>宇宙旅行、深色背景、強烈視覺效果</p>
              </li>
              <li>
                <h4 class="mb-1">開發方式</h4>
                <p>Bootstrap、Javascript、RWD</p>
              </li>
            </ul>
          </div>
          <div class="py-10 px-4">
            <ul>
              <li class="mb-14">
                <img
                  src="../assets/image/modal-image1.png"
                  alt="modal-image1"
                  class="w-full object-cover rounded-lg mb-4"
                />
                <h4 class="text-primary-800 text-xl font-bold text-center mb-2">主視覺</h4>
                <p class="text-primary-600">
                  可直接設定日期、起迄星球、張數，快速查詢可購買的票券。
                </p>
              </li>
              <li>
                <img
                  src="../assets/image/modal-image2.png"
                  alt="modal-image2"
                  class="w-full object-cover rounded-lg mb-4"
                />
                <h4 class="text-primary-800 text-xl font-bold text-center mb-2">推薦查詢</h4>
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
