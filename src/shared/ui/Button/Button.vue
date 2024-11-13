<script setup lang="ts">
// import { ref } from 'vue'

interface Props {
  title: string
  clickFunc: () => void
}

const props = defineProps<Props>()
</script>

<template>
  <button @click="props.clickFunc" class="btn">{{ props.title }}</button>
</template>

<style scoped lang="scss">
.btn {
  // тут какие-то стили для кнопочки
}
</style>
