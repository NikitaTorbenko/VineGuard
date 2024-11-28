<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="header">
    <div class="inner">
      <div class="background">
        <div class="block-recognition-and-navbar">
          <div class="recognition-block">
            <h1 class="big-text recognition-header not-copying">РАСПОЗНАНИЕ БОЛЕЗНИ</h1>
            <div class="paste-photo">
              <div class="paste-border">
                <RouterLink class="" to="/component/image-scanning/image-scanning.html"
                  ><p class="text paste not-copying">Вставить фото</p></RouterLink
                >
              </div>
            </div>
          </div>
          <div class="navbar-and-name-site">
            <div class="navbar">
              <RouterLink class="navbar-text" to="/component/shop/shop.html">МАГАЗИН</RouterLink>
              <RouterLink class="navbar-text" to="#diseases-link">БОЛЕЗНИ</RouterLink>
              <RouterLink class="navbar-text" to="/component/personal-account/personal-account.html"
                >ЛИЧНЫЙ КАБИНЕТ</RouterLink
              >
            </div>
            <div class="name-sait">
              <h2 class="name-text not-copying">
                VINE <br />
                GUARD
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  margin-bottom: 60px;
}

.background {
  width: 100%;
  height: 700px;
  background: url(@//shared/assets/img/main-background.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.block-recognition-and-navbar {
  display: flex;
  justify-content: right;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: fit-content;
}

.recognition-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 45%;
  height: 100%;
}

.paste-photo {
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
}

.paste-border {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  height: 500px;
  background-image: url(@//shared/assets/img/paste-photo.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  cursor: pointer;
}

.navbar-and-name-site {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;
  width: 50%;
  height: 700px;
  max-height: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%);
  backdrop-filter: blur(10px);
  background: rgba(118, 118, 118, 0.3);
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 20px;
}

.name-sait {
  width: fit-content;
}

.name-text {
  font-family: 'Lora';
  font-size: 130px;
  line-height: 110px;
  font-weight: bold;
  color: transparent;
  background: url(@//shared/assets/img/texture-text.jpg) no-repeat center center / cover;
  background-clip: text;
}
</style>
