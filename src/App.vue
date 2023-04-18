<script lang="ts" setup>
import { ref } from 'vue';
import Odometer from '../packages/components/index';
const value = ref(213)
const stringVal = ref('0')
setTimeout(() => {
    value.value = 12000.88
    stringVal.value = 'CODE'
}, 4000)
</script>

<template>
  <div>
    <odometer format="(,ddd).dd">{{ value }}</odometer>
  </div>
</template>

<style lang="scss">
</style>