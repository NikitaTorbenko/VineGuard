<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="brief-info">
    <div class="inner">
      <div class="brief-info-block">
        <img class="brief-info-img" src="@//shared/assets/img/field.png" alt="" />
        <div class="brief-info-text">
          <p class="text small-text">
            на нашем сайте вы с помощью <br />
            компьютерного зрения можете <br />
            узнать вид болезни
          </p>
          <img class="line-decoration" src="@//shared/assets/img/line.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.brief-info {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;
}

.brief-info-block {
  display: flex;
  align-items: center;
  gap: 80px;
  width: 100%;
}

.brief-info-img {
  max-width: 800px;
  width: 100%;
  height: fit-content;
  user-select: none;
}

.brief-info-text {
  display: flex;
  align-items: center;
  gap: 30px;
  width: 50%;
  height: fit-content;
}

.line-decoration {
  height: 100%;
  max-height: 200px;
  user-select: none;
}

.interblock {
  width: 100%;
  user-select: none;
  margin-bottom: 40px;
}
</style>
