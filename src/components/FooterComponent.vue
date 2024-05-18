<template>
  <footer class="bg-footer">
    <div class="container py-10 lg:py-20">
      <div class="lg:flex lg:justify-between lg:items-center">
        <div class="text-center mb-10 lg:text-left lg:mb-0">
          <img src="../assets/image/logo.svg" class="mx-auto mb-6 lg:mx-0" alt="noel" />
          <p class="text-primary-700 mb-1 lg:text-xl">若有數位產品設計和開發相關問題</p>
          <p class="text-primary-700 mb-6 lg:text-xl">歡迎填寫表單，或直接與我聯絡！</p>
          <p class="text-primary-500 font-normal lg:text-xl">service@hexschool.com</p>
        </div>
        <ul class="list-unstyled">
          <li class="mb-6">
            <a href="#" class="flex items-center bg-primary-900 rounded-lg py-1 px-6">
              <img src="../assets/image/list.svg" alt="list" class="me-2" />
              <span class="text-primary-50 lg:text-xl">填寫表單</span>
            </a>
          </li>
          <li class="mb-6">
            <a href="#" class="flex items-center border border-primary-700 rounded-lg py-1 px-6">
              <img src="../assets/image/instagram.svg" alt="hexschool_demo" class="me-2" />
              <span class="text-primary-700 lg:text-xl">hexschool_demo</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center border border-primary-700 rounded-lg py-1 px-6">
              <img src="../assets/image/facebook.svg" alt="hexschoolTW" class="me-2" />
              <span class="text-primary-700 lg:text-xl">hexschoolTW</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style>
.list-unstyled {
  list-style-type: none;
}

.bg-footer {
  background-image: url('../assets/image/footer-bg-sm.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (min-width: 960px) {
  .bg-footer {
    background-image: url('../assets/image/footer-bg-lg.png');
  }
}
</style>
