<script lang="ts" setup>
import { computed, h, onMounted, ref, useSlots, watchEffect } from 'vue'
import Odometer from './odometer.js'

const slots = useSlots()

const VOdometer = () => h('span')

const meter = ref<Odometer>()
const el = ref()

const props = withDefaults(defineProps<{
  theme?: "default" | "car" | "plaza" | "slot-machine" | "digital" | "minimal",
  format?: string
}>(), {
  theme: 'default',
  format: ''
})

onMounted(() => {
  meter.value = new Odometer({
    el: el.value,
    value: '',
    theme: props.theme,
    format: props.format
  })
})

const updateMeter = () => {
  if (meter.value) {
    meter.value.update(number.value)
  }
}

const number = computed(() => {
  if (!slots.default || !slots.default().length || !slots.default()[0] || !slots.default()[0].children) {
    return 0
  }

  return slots.default()[0].children as unknown as string
})

watchEffect(() => {
  updateMeter()
})

</script>

<template>
  <v-odometer ref="el"></v-odometer>
</template>

<style lang="scss">
</style>