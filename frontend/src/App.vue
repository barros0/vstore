<template>
  <button @click="increment">
    <h1> Count is: {{ count }} </h1>
  </button>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<style>
h1 {
  color: blue;
}
</style>

