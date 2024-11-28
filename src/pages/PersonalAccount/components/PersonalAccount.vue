<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="container">
    <div class="personal-account">
      <div class="header-personal-account">
        <RouterLink to="/index.html"><button class="button-white">⬅Назад</button></RouterLink>
        <h1 class="big-text">ЛИЧНЫЙ КАБИНЕТ</h1>
        <div class="empty"></div>
      </div>
      <div class="personal-account-block">
        <div class="profile-info">
          <div class="icon-profile">
            <img class="profile-img" src="@//shared/assets/img/icon-profile.png" alt="" />
            <button class="change-button">Изменить</button>
          </div>
          <div class="user-data">
            <div class="user-part">
              <div class="inputs-field">
                <p class="inputs-field-text">Фамилия</p>
                <input type="text" />
              </div>
              <div class="inputs-field">
                <p class="inputs-field-text">Имя</p>
                <input type="text" />
              </div>
              <div class="inputs-field">
                <p class="inputs-field-text">Отчество</p>
                <input type="text" />
              </div>
            </div>
            <div class="user-part">
              <div class="inputs-field">
                <p class="inputs-field-text">Email</p>
                <input type="text" />
              </div>
              <div class="inputs-field">
                <p class="inputs-field-text">Телефон</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <img class="horizontal-line" src="@//shared/assets/img/horizontal-line.png" alt="" />
        <div class="orders">
          <h2 class="text color-text-black">Заказы</h2>
          <div class="line-orders"></div>
          <div class="order-card-block">
            <div class="order-card">
              <div class="order-card-img-background">
                <img class="order-card-img" src="@//shared/assets/img/medicine1.png" alt="" />
              </div>
              <p class="order-text color-text-black">Ожидается: 12.12</p>
            </div>
            <div class="order-card">
              <div class="order-card-img-background">
                <img class="order-card-img" src="@//shared/assets/img/medicine2.png" alt="" />
              </div>
              <p class="order-text color-text-black">Ожидается: 12.12</p>
            </div>
            <div class="order-card">
              <div class="order-card-img-background">
                <img class="order-card-img" src="@//shared/assets/img/medicine3.png" alt="" />
              </div>
              <p class="order-text color-text-black">Ожидается: 12.12</p>
            </div>
          </div>
          <div class="line-orders"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-personal-account {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.empty {
  width: 90px;
}

.personal-account {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.personal-account-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  min-height: 700px;
  border-radius: 80px;
  background: rgb(255, 255, 255);
  margin-bottom: 20px;

  border: 2px solid black;
}

.profile-info {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 300px;
  gap: 50px;
}

.icon-profile {
  display: flex;
  width: fit-content;
  height: fit-content;
  gap: 20px;
  flex-direction: column;
  align-items: center;
}

.profile-img {
  border-radius: 50%;
  height: 100%;
  max-height: 150px;
  border: 1px solid rgba(118, 118, 118, 0.87);
  user-select: none;
}

.change-button {
  font-family: 'Lora';
  font-size: 16px;
  width: 60%;
  height: 30px;
  border: 1px solid rgba(118, 118, 118, 0.87);
  border-radius: 25px;
  user-select: none;
  color: black;
  cursor: pointer;
}

.user-data {
  display: flex;
  width: 70%;
  height: 100%;
  min-height: 250px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid rgba(118, 118, 118, 0.87);
  background: rgb(214, 214, 214);
  border-radius: 25px;
}

.user-part {
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 55%;
  gap: 30px;
}

.inputs-field {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.inputs-field-text {
  font-family: 'Lora';
  font-size: 20px;
  font-weight: 400;
  color: black;
}

.inputs-field input {
  font-family: 'Lora';
  font-size: 18px;
  font-weight: 400;
  width: 70%;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  background: rgb(214, 214, 214);
}

.horizontal-line {
  width: 20%;
  margin-bottom: 20px;
  user-select: none;
}

.orders {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  gap: 10px;
  height: 100%;
  min-height: 300px;
  border-radius: 80px;
  background: rgba(192, 192, 192, 0.38);
  margin-bottom: 20px;
}

.line-orders {
  width: 80%;
  border: 1px solid rgba(73, 72, 72, 1);
  user-select: none;
}

.order-card-block {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
}

.order-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 130px;
  height: fit-content;
  border: 3px solid rgba(73, 72, 72, 1);
  border-radius: 30px;
}

.order-card-img-background {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(108, 87, 125, 0.6);
  border-radius: 25px;
}

.order-card-img {
  height: 100%;
  max-height: 100px;
  margin: 10px 0px 20px 0px;
  user-select: none;
}
</style>
