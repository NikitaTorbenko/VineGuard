<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="footer">
    <div class="inner">
      <div class="footer-block">
        <img class="footer-img" src="@//shared/assets/img/footer-back.jpg" alt="" />
        <div class="contacts-block">
          <p class="small-text text">Контакты: +7-999-999-99-99</p>
          <p class="small-text">E-mail: vineguard@gmail.com</p>
        </div>
        <div class="footer-line-block">
          <div class="footer-line"></div>
        </div>
        <div class="navbar-footer">
          <RouterLink class="navbar-text" to="/component/shop/shop.html">Магазин</RouterLink>
          <RouterLink class="navbar-text" to="#diseases-link">Болезни</RouterLink>
          <RouterLink class="navbar-text" to="/component/personal-account/personal-account.html"
            >Личный кабинет</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  background: rgb(29, 54, 33);
  margin-top: 150px;
}

.footer-block {
  display: flex;
  width: 100%;
  gap: 50px;
}

.footer-img {
  height: 100%;
  max-height: 300px;
  user-select: none;
}

.contacts-block {
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 30px;
  justify-content: center;
}

.footer-line-block {
  display: flex;
  align-items: center;
  height: 100%;
}

.footer-line {
  border: 2px solid white;
  border-radius: 20px;
  height: 70%;
}

.navbar-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  user-select: none;
}
</style>
