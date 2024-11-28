<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="container">
    <div class="image-scanning">
      <div class="image-scanning-header">
        <div class="button-block">
          <RouterLink to="/index.html"><button class="button-white">⬅Назад</button></RouterLink>
        </div>
        <div class="image-scanning-header-title">
          <h1 class="big-text">СКАНИРОВАНИЕ ИЗОБРАЖЕНИЯ</h1>
        </div>
        <div class="berry-block">
          <img class="berry" src="@//shared/assets/img/berry.png" alt="" />
        </div>
      </div>
      <div class="uploaded-photo-block">
        <p class="text uploaded-photo-text">Загруженное изображение:</p>
        <div class="uploaded-photo">
          <img class="uploaded-photo-img" src="@//shared/assets/img/mildew-up.png" alt="" />
        </div>
      </div>
      <div class="scan-result-header">
        <h2 class="uploaded-photo-text text">РЕЗУЛЬТАТ СКАНИРОВАНИЯ</h2>
      </div>
      <div class="scan-result">
        <div class="scan-result-text">
          <div class="scan-result-text-title">
            <p class="line-height text">БОЛЕЗНЬ :</p>
            <p class="line-height text">МИЛДЬЮ</p>
          </div>
          <p class="small-text">
            Мильдью (оидиум) - грибковое заболевание винограда, характеризующееся белыми пятнами на
            верхней стороне листьев, желтоватыми участками вокруг них и черными струпьями на нижней
            стороне. Заражение происходит через споры гриба, предпочитающего влажные и прохладные
            условия. Симптомы включают скручивание и деформацию листьев, а также ухудшение качества
            и урожайности гроздей.
          </p>
        </div>
        <div class="scan-result-image">
          <img class="mildew-img" src="@//shared/assets/img/mildew2.png" alt="" />
        </div>
      </div>
      <div class="reatment-disease-header">
        <h2 class="uploaded-photo-text text">Лечение винограда от милдью</h2>
      </div>
      <div class="reatment-disease"></div>
      <div class="medications-treatment">
        <p class="uploaded-photo-text text">Рекомендуем приобрести лекарства от милдью:</p>
        <div class="medications-shop-card-block">
          <div class="medications-shop-card">
            <div class="medications-shop-card-img-background">
              <img
                class="medications-shop-card-img"
                src="@//shared/assets/img/medicine1.png"
                alt=""
              />
            </div>
            <p class="small-text color-text-black">Ридомил Голд, 5 кг</p>
            <button class="price-button">12000 ₽</button>
          </div>
          <div class="medications-shop-card">
            <div class="medications-shop-card-img-background">
              <img
                class="medications-shop-card-img"
                src="@//shared/assets/img/medicine1.png"
                alt=""
              />
            </div>
            <p class="small-text color-text-black">Ридомил Голд, 5 кг</p>
            <button class="price-button">12000 ₽</button>
          </div>
          <div class="medications-shop-card">
            <div class="medications-shop-card-img-background">
              <img
                class="medications-shop-card-img"
                src="@//shared/assets/img/medicine1.png"
                alt=""
              />
            </div>
            <p class="small-text color-text-black">Ридомил Голд, 5 кг</p>
            <button class="price-button">12000 ₽</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-scanning {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
}

.image-scanning-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 150px;
  background: rgb(29, 54, 33);
}

.image-scanning-header-title {
  display: flex;
  align-items: center;
  width: fit-content;
}

.button-block {
  width: 10%;
}

.berry-block {
  display: flex;
  align-items: end;
  width: 10%;
}

.berry {
  width: 100%;
  margin-bottom: 15px;
  user-select: none;
}

.uploaded-photo-block {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 100%;
  height: fit-content;
}

.uploaded-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: fit-content;
  border-radius: 60px;
  border: 4px solid rgba(217, 217, 217, 1);
  margin: 20px 0px 20px 0px;
}

.uploaded-photo-img {
  width: 95%;
  margin: 15px;
  user-select: none;
  border-radius: 60px;
}

.uploaded-photo-text {
  font-size: 35px;
}

.scan-result-header {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100px;
  background: rgb(29, 54, 33);
  border-radius: 20px;
}

.scan-result {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
  margin: 40px 0px 40px 0px;
}

.scan-result-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  gap: 30px;
}

.scan-result-text-title {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: fit-content;
  border-bottom: 2px solid white;
}

.scan-result-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 30px;
  border: 5px solid white;
}

.mildew-img {
  width: 100%;
  border-radius: 30px;
  user-select: none;
}

.reatment-disease-header {
  display: flex;
  justify-content: center;
  width: 45%;
  border-radius: 20px;
  background: rgb(29, 54, 33);
}

.reatment-disease {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  border: 2px solid red;
}

.medications-treatment {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}

.medications-shop-card-block {
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
}

.medications-shop-card {
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

.medications-shop-card-img-background {
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: rgba(108, 87, 125, 0.6);
  border-radius: 35px;
  margin-top: 10px;
}

.medications-shop-card-img {
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
