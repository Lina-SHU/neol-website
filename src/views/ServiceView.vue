<template>
  <!-- 服務項目 -->
  <section class="bg-primary-100 pt-10 pb-20 lg:py-30">
    <div class="container">
      <h3 class="flex items-center justify-center mb-10 lg:mb-20">
        <img src="../assets/image/title-deco-left-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-left-lg.png" alt="" class="hidden lg:block" />
        <span class="text-primary-700 text-2xl font-bold mx-4 lg:text-4xl">服務項目</span>
        <img src="../assets/image/title-deco-right-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-right-lg.png" alt="" class="hidden lg:block" />
      </h3>
      <ul class="serviceList lg:flex lg:flex-wrap lg:-mx-3">
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
    </div>
  </section>
  <!-- 服務流程 -->、
  <section class="bg-service bg-primary-800 py-20 lg:py-30">
    <div class="container">
      <h3 class="flex items-center justify-center mb-10 lg:mb-20">
        <img src="../assets/image/title-deco-left-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-left-lg.png" alt="" class="hidden lg:block" />
        <span class="text-primary-50 text-2xl font-bold mx-4 lg:text-4xl">服務流程</span>
        <img src="../assets/image/title-deco-right-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-right-lg.png" alt="" class="hidden lg:block" />
      </h3>
      <ul class="processList">
        <li
          class="bg-primary-700 rounded border border-primary-500 px-6 py-6 pb-12 mb-16 lg:w-1/2 lg:mx-auto lg:p-8"
        >
          <div class="text-center lg:text-start lg:flex">
            <img
              src="../assets/image/1.svg"
              alt=""
              class="proccessNumber mx-auto mb-2 lg:mb-0 lg:mr-8 lg:ml-0"
            />
            <div>
              <h3 class="text-primary-50 font-bold mb-2 text-2xxl">服務流程</h3>
              <p class="text-primary-300 lg:text-xl">
                透過表單或其他社群軟體與我聯絡<br />根據難易度與複雜度，後續可能需要電話/線上討論
              </p>
            </div>
          </div>
        </li>
        <li
          class="bg-primary-700 rounded border border-primary-500 px-6 py-6 pb-12 mb-16 lg:w-1/2 lg:mx-auto lg:p-8"
        >
          <div class="text-center lg:text-start lg:flex">
            <img
              src="../assets/image/2.svg"
              alt=""
              class="proccessNumber mx-auto mb-2 lg:mb-0 lg:mr-8 lg:ml-0"
            />
            <div>
              <h3 class="text-primary-50 font-bold mb-2 text-2xxl">需求釐清</h3>
              <p class="text-primary-300 lg:text-xl">
                透過訪談與問卷，解析客戶需求，並針對痛點給予實際建議
              </p>
            </div>
          </div>
        </li>
        <li
          class="bg-primary-700 rounded border border-primary-500 px-6 py-6 pb-12 mb-16 lg:w-1/2 lg:mx-auto lg:p-8"
        >
          <div class="text-center lg:text-start lg:flex">
            <img
              src="../assets/image/3.svg"
              alt=""
              class="proccessNumber mx-auto mb-2 lg:mb-0 lg:mr-8 lg:ml-0"
            />
            <div>
              <h3 class="text-primary-50 font-bold mb-2 text-2xxl">委託簽約</h3>
              <p class="text-primary-300 lg:text-xl">
                合約雙方用印後，即正式開始合作<br />可提供發票或勞務報酬單，須支付 20% 訂金
              </p>
            </div>
          </div>
        </li>
        <li
          class="bg-primary-700 rounded border border-primary-500 px-6 py-6 pb-12 mb-16 lg:w-1/2 lg:mx-auto lg:p-8"
        >
          <div class="text-center lg:text-start lg:flex">
            <img
              src="../assets/image/4.svg"
              alt=""
              class="proccessNumber mx-auto mb-2 lg:mb-0 lg:mr-8 lg:ml-0"
            />
            <div>
              <h3 class="text-primary-50 font-bold mb-2 text-2xxl">版本呈現</h3>
              <p class="text-primary-300 lg:text-xl">根據合約內容進行設計或開發</p>
            </div>
          </div>
        </li>
        <li
          class="bg-primary-700 rounded border border-primary-500 px-6 py-6 pb-12 mb-16 lg:w-1/2 lg:mx-auto lg:p-8"
        >
          <div class="text-center lg:text-start lg:flex">
            <img
              src="../assets/image/5.svg"
              alt=""
              class="proccessNumber mx-auto mb-2 lg:mb-0 lg:mr-8 lg:ml-0"
            />
            <div>
              <h3 class="text-primary-50 font-bold mb-2 text-2xxl">來回修正</h3>
              <p class="text-primary-300 lg:text-xl">
                依據合約規定之修正次數進行，次數計算以 mail 為準
              </p>
            </div>
          </div>
        </li>
        <li
          class="bg-primary-700 rounded border border-primary-500 px-6 py-6 pb-12 mb-16 lg:w-1/2 lg:mx-auto lg:p-8"
        >
          <div class="text-center lg:text-start lg:flex">
            <img
              src="../assets/image/6.svg"
              alt=""
              class="proccessNumber mx-auto mb-2 lg:mb-0 lg:mr-8 lg:ml-0"
            />
            <div>
              <h3 class="text-primary-50 font-bold mb-2 text-2xxl">終版確認</h3>
              <p class="text-primary-300 lg:text-xl">雙方同意後即為最終版</p>
            </div>
          </div>
        </li>
        <li
          class="bg-primary-700 rounded border border-primary-500 px-6 py-6 pb-12 lg:w-1/2 lg:mx-auto lg:p-8"
        >
          <div class="text-center lg:text-start lg:flex">
            <img
              src="../assets/image/7.svg"
              alt=""
              class="proccessNumber mx-auto mb-2 lg:mb-0 lg:mr-8 lg:ml-0"
            />
            <div>
              <h3 class="text-primary-50 font-bold mb-2 text-2xxl">結案</h3>
              <p class="text-primary-300 lg:text-xl">客戶簽署驗收單，並於約定日期支付尾款</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!-- 價格表 -->
  <section class="bg-primary-50 pt-10 pb-20 lg:py-30">
    <div class="container">
      <h3 class="flex items-center justify-center mb-10 lg:mb-20">
        <img src="../assets/image/title-deco-left-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-left-lg.png" alt="" class="hidden lg:block" />
        <span class="text-primary-700 text-2xl font-bold mx-4 lg:text-4xl">價格表</span>
        <img src="../assets/image/title-deco-right-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-right-lg.png" alt="" class="hidden lg:block" />
      </h3>
      <ul class="priceList xl:flex xl:flex-wrap xl:-mx-3">
        <li class="w-[86%] mx-auto mb-6 xl:w-4/12 xl:px-3 xl:mb-0">
          <div class="bg-primary-100 flex justify-between items-center rounded-2xl py-6 px-8">
            <div class="flex items-center">
              <img src="../assets/image/price-item-visual.svg" alt="平面設計" class="icon mr-2" />
              <h4 class="text-xl font-bold text-primary-600 lg:text-2xxl">平面設計</h4>
            </div>
            <div class="divider bg-primary-400"></div>
            <p class="text-xl font-bold text-primary-800 lg:text-4xl">
              6,000 <span class="ml-1 font-normal text-primary-600 lg:text-base">起</span>
            </p>
          </div>
        </li>
        <li class="w-[86%] mx-auto mb-6 xl:w-4/12 xl:px-3 xl:mb-0">
          <div class="bg-primary-100 flex justify-between items-center rounded-2xl py-6 px-8">
            <div class="flex items-center">
              <img src="../assets/image/price-item-ui.svg" alt="平面設計" class="icon mr-2" />
              <h4 class="text-xl font-bold text-primary-600 lg:text-2xxl">平面設計</h4>
            </div>
            <div class="divider bg-primary-400"></div>
            <p class="text-xl font-bold text-primary-800 lg:text-4xl">
              15,000 <span class="ml-1 font-normal text-primary-600 lg:text-base">起</span>
            </p>
          </div>
        </li>
        <li class="w-[86%] mx-auto mb-6 xl:w-4/12 xl:px-3 xl:mb-0">
          <div class="bg-primary-100 flex justify-between items-center rounded-2xl py-6 px-8">
            <div class="flex items-center">
              <img
                src="../assets/image/price-item-front-end.svg"
                alt="前端開發"
                class="icon mr-2"
              />
              <h4 class="text-xl font-bold text-primary-600 lg:text-2xxl">前端開發</h4>
            </div>
            <div class="divider bg-primary-400"></div>
            <p class="text-xl font-bold text-primary-800 lg:text-4xl">
              22,000 <span class="ml-1 font-normal text-primary-600 lg:text-base">起</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!-- 客戶案例 -->
  <section class="bg-primary-100 py-20 lg:py-30">
    <div class="container">
      <h3 class="flex items-center justify-center mb-10 lg:mb-20">
        <img src="../assets/image/title-deco-left-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-left-lg.png" alt="" class="hidden lg:block" />
        <span class="text-primary-700 text-2xl font-bold mx-4 lg:text-4xl">客戶案例目</span>
        <img src="../assets/image/title-deco-right-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-right-lg.png" alt="" class="hidden lg:block" />
      </h3>
      <ul class="caseList lg:flex lg:flex-wrap lg:-mx-3">
        <li class="mx-auto mb-12 lg:w-1/2 lg:px-3 lg:mb-20">
          <img
            src="../assets/image/work-image4.png"
            alt=""
            class="w-full object-cover rounded-lg"
          />
          <div class="text-primary-700 px-4 pt-4">
            <h4 class="font-bold text-xl mb-2 lg:text-2xxl">美美美早餐店 POS 機 UI Design</h4>
            <p class="text-primary-500 mb-4 lg:mb-6">訂單送單一目瞭然，自動報表分析好輕鬆</p>
            <ul class="flex items-center">
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">UI 設計</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">前端開發</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl">Wix</li>
            </ul>
          </div>
        </li>
        <li class="mx-auto mb-12 lg:w-1/2 lg:px-3 lg:mb-20">
          <img
            src="../assets/image/work-image6.png"
            alt=""
            class="w-full object-cover rounded-lg"
          />
          <div class="text-primary-700 px-4 pt-4">
            <h4 class="font-bold text-xl mb-2 lg:text-2xxl">巧克巧克形象官網設計</h4>
            <p class="text-primary-500 mb-4 lg:mb-6">三步驟完成訂票，電腦手機都支援</p>
            <ul class="flex items-center">
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">UI 設計</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">設計系統</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl">網路電商</li>
            </ul>
          </div>
        </li>
        <li class="mx-auto mb-12 lg:w-1/2 lg:px-3 lg:mb-0">
          <img
            src="../assets/image/work-image5.png"
            alt=""
            class="w-full object-cover rounded-lg"
          />
          <div class="text-primary-700 px-4 pt-4">
            <h4 class="font-bold text-xl mb-2 lg:text-2xxl">電影院訂票系統</h4>
            <p class="text-primary-500 mb-4 lg:mb-6">三步驟完成訂票，電腦手機都支援</p>
            <ul class="flex items-center">
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">前端開發</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">後端支援</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl">Vue</li>
            </ul>
          </div>
        </li>
        <li class="mx-auto lg:w-1/2 lg:px-3 lg:mb-0">
          <img
            src="../assets/image/work-image7.png"
            alt=""
            class="w-full object-cover rounded-lg"
          />
          <div class="text-primary-700 px-4 pt-4">
            <h4 class="font-bold text-xl mb-2 lg:text-2xxl">2023 餉茶坊飲料旗艦店活動官網設計</h4>
            <p class="text-primary-500 mb-4 lg:mb-6">主打水果主題，冰鎮夏天暑氣</p>
            <ul class="flex items-center">
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">網頁設計</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl mr-2 lg:mr-4">切版服務</li>
              <li class="px-3 py-1 bg-primary-200 rounded-2xl">Javascript</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!-- 常見問題 -->
  <section class="bg-primary-50 pt-10 pb-20 lg:py-30">
    <div class="container">
      <h3 class="flex items-center justify-center mb-10 lg:mb-20">
        <img src="../assets/image/title-deco-left-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-left-lg.png" alt="" class="hidden lg:block" />
        <span class="text-primary-700 text-2xl font-bold mx-4 lg:text-4xl">常見問題</span>
        <img src="../assets/image/title-deco-right-sm.png" alt="" class="lg:hidden" />
        <img src="../assets/image/title-deco-right-lg.png" alt="" class="hidden lg:block" />
      </h3>
      <ul class="lg:flex lg:flex-wrap lg:w-[83%] lg:mx-auto lg:-mx-3">
        <li class="w-[89%] mx-auto mb-6 lg:w-1/2 lg:px-3">
          <div class="border border-primary-300 rounded-lg p-6 lg:pb-3 lg:h-full">
            <h4 class="font-bold text-xl mb-4 lg:text-2xl">時程很趕的話可以加快作業嗎？</h4>
            <p class="text-primary-600">
              每提早一天，只要支付總報價的 5%，我們即會視為急件為您趕工！
            </p>
          </div>
        </li>
        <li class="w-[89%] mx-auto mb-6 lg:w-1/2 lg:px-3">
          <div class="border border-primary-300 rounded-lg p-6 lg:pb-3 lg:h-full">
            <h4 class="font-bold text-xl mb-4 lg:text-2xl">白天可以開會討論嗎？</h4>
            <p class="text-primary-600">每週一三五的白天，可以約定開會時間！</p>
          </div>
        </li>
        <li class="w-[89%] mx-auto mb-6 lg:w-1/2 lg:px-3 lg:mb-0">
          <div class="border border-primary-300 rounded-lg p-6 lg:pb-3 lg:h-full">
            <h4 class="font-bold text-xl mb-4 lg:text-2xl">有實際開發的網站可以參考嗎？</h4>
            <p class="text-primary-600">
              請填寫表單或來信索取，部分合作有簽保密協定，無法於網路上公開喔。
            </p>
          </div>
        </li>
        <li class="w-[89%] mx-auto lg:w-1/2 lg:px-3 lg:mb-0">
          <div class="border border-primary-300 rounded-lg p-6 lg:pb-3 lg:h-full">
            <h4 class="font-bold text-xl mb-4 lg:text-2xl">提供比稿服務嗎？</h4>
            <p class="text-primary-600">
              只要支付費用，設計提供比稿服務，但切版與前端開發恕不提供該服務內容。
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bg-service-item {
  background: linear-gradient(315deg, #1e1e1e 0%, #1e1e1e 49.97%, #000000 50%);
}

.serviceList li > div {
  height: 306px;
}

.bg-service {
  background-image: url('../assets/image/service-item-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.processList li {
  position: relative;
  &::after {
    position: absolute;
    content: url('../assets/image/process.svg');
    top: calc(100% + 32px);
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:last-child:after {
    content: '';
  }
}

.priceList {
  li > div {
    box-shadow: 0px 4px 8px 0px #00000014;
  }
  .icon {
    width: 40px;
    @media (min-width: 1140px) {
      width: 56px;
    }
  }
  .divider {
    width: 28px;
    height: 1px;
  }
}

.caseList {
  img {
    height: 224px;
    @media (min-width: 1140px) {
      height: 400px;
    }
  }
}
</style>
