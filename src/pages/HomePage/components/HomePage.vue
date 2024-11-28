<script setup lang="ts">
import { Header, Footer } from '@/components'
import BriefInfo from './BriefInfo.vue'
import Diseases from './Diseases.vue'
import InfoDiseases from './InfoDiseases.vue'
</script>

<template>
  <div class="container">
    <Header />
    <BriefInfo />
    <img class="interblock" src="@//shared/assets/img/vine-back.png" alt="" />
    <Diseases />
    <InfoDiseases />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.interblock {
  width: 100%;
  user-select: none;
  margin-bottom: 40px;
}
</style>
