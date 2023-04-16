<script lang="ts" setup>
import { ref } from 'vue';
import odometer from '../packages/components/odometer'

const value = ref(213)

setTimeout(() => {
    value.value = 1000
}, 4000)
</script>

<template>
  <div>
    <odometer>{{ value }}</odometer>
  </div>
</template>

<style lang="scss">
</style>