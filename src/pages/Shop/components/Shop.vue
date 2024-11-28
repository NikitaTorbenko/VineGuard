<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="container">
    <div class="shop">
      <div class="header-shop">
        <RouterLink to="/index.html"><button class="button-white">⬅Назад</button></RouterLink>
        <div class="header-text">
          <h1 class="text-shop">МАГАЗИН</h1>
        </div>
        <button class="button-white">Заказы</button>
      </div>
      <div class="shop-card-title"><h2 class="big-text">ЛЕКАРСТВА</h2></div>
      <div class="shop-card-block">
        <div class="shop-card">
          <div class="shop-card-img-background">
            <img class="shop-card-img" src="@//shared/assets/img/medicine1.png" alt="" />
          </div>
          <p class="small-text color-text-black">Ридомил Голд, 5 кг</p>
          <button class="price-button">12000 ₽</button>
        </div>
        <div class="shop-card">
          <div class="shop-card-img-background">
            <img class="shop-card-img" src="@//shared/assets/img/medicine1.png" alt="" />
          </div>
          <p class="small-text color-text-black">Ридомил Голд, 5 кг</p>
          <button class="price-button">12000 ₽</button>
        </div>
        <div class="shop-card">
          <div class="shop-card-img-background">
            <img class="shop-card-img" src="@//shared/assets/img/medicine1.png" alt="" />
          </div>
          <p class="small-text color-text-black">Ридомил Голд, 5 кг</p>
          <button class="price-button">12000 ₽</button>
        </div>
        <div class="shop-card">
          <div class="shop-card-img-background">
            <img class="shop-card-img" src="@//shared/assets/img/medicine1.png" alt="" />
          </div>
          <p class="small-text color-text-black">Ридомил Голд, 5 кг</p>
          <button class="price-button">12000 ₽</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shop {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 1000px;
  flex-direction: column;
}

.header-shop {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 200px;
  background-image: url(@//shared/assets/img/vine-back.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.text-shop {
  color: white;
  font-family: 'Lora';
  font-size: 64px;
  font-weight: 700;
}

.header-text {
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 200px;
}

.shop-card-title {
  display: flex;
  justify-content: center;
  width: 100%;
}

.shop-card {
  display: flex;
  width: 100%;
  height: fit-content;

  border: 2px solid red;
}

.shop-card-block {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.shop-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: fit-content;
  border: 3px solid rgba(73, 72, 72, 1);
  border-radius: 25px;
  background: rgb(255, 255, 255);
}

.shop-card-img-background {
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: rgba(108, 87, 125, 0.6);
  border-radius: 35px;
  margin-top: 10px;
}

.shop-card-img {
  height: 100%;
  max-height: 280px;
  margin: 10px 0px 20px 0px;
  user-select: none;
}

.price-button {
  background: rgb(39, 84, 46);
  border-radius: 20px;
  font-family: 'Lora';
  font-size: 20px;
  line-height: 31px;
  width: 130px;
  height: 40px;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
