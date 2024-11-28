<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div id="diseases-link" class="diseases">
    <div class="inner">
      <div class="diseases-block">
        <h2 class="diseases-text big-text">Болезни винограда</h2>
        <p class="diseases-text text">Самые распрастраненные на данный момент</p>
        <div class="leaves-block">
          <div class="leaves">
            <img class="leaves-img" src="@//shared/assets/img/1.jpg" alt="" />
            <p class="small-text">Милдью</p>
          </div>
          <div class="leaves">
            <img class="leaves-img" src="@//shared/assets/img/2.jpg" alt="" />
            <p class="small-text">Оидиум</p>
          </div>
          <div class="leaves">
            <img class="leaves-img" src="@//shared/assets/img/3.jpg" alt="" />
            <p class="small-text">Черная гниль</p>
          </div>
          <div class="leaves">
            <img class="leaves-img" src="@//shared/assets/img/4.jpg" alt="" />
            <p class="small-text">Антракноз</p>
          </div>
          <div class="leaves">
            <img class="leaves-img" src="@//shared/assets/img/5.jpg" alt="" />
            <p class="small-text">Краснуха</p>
          </div>
          <div class="leaves">
            <img class="leaves-img" src="@//shared/assets/img/6.jpg" alt="" />
            <p class="small-text">Виноградный <br />клещ</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.diseases {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgb(29, 54, 33);
}

.diseases-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0px 40px 0px;
}

.diseases-text {
  line-height: 50px;
}

.leaves-block {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}

.leaves {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13%;
  text-align: center;
}

.leaves-img {
  max-width: 120px;
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.5s;
  user-select: none;
}

.leaves-img:hover {
  transition: 0.5s;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
}
</style>
