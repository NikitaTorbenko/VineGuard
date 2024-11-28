<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="info-diseases">
    <img class="leaves-big-img" src="@//shared/assets/img/1.jpg" alt="" />
    <div class="info-diseases-text">
      <h2 class="big-text">Милдью</h2>
      <div class="line"></div>
      <p class="small-text">
        Мильдью (оидиум) - грибковое заболевание винограда, характеризующееся белыми пятнами на
        верхней стороне листьев, желтоватыми участками вокруг них и черными струпьями на нижней
        стороне. Заражение происходит через споры гриба, предпочитающего влажные и прохладные
        условия. Симптомы включают скручивание и деформацию листьев, а также ухудшение качества и
        урожайности гроздей.
      </p>
      <div class="line"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-diseases {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 80px;
  margin-top: 60px;
}

.leaves-big-img {
  max-width: 500px;
  width: 100%;
  border-radius: 50%;
  user-select: none;
}

.info-diseases-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  gap: 20px;
}

.line {
  width: 100%;
  border: 1px solid white;
  border-radius: 5px;
}
</style>
