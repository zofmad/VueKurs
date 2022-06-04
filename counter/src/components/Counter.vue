<template>
  <div id="app">
    <h1>Counter</h1>
    <button @click="decrement">-</button>
    <span>{{ counter }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    counter: 0
  }),
  methods: {
    increment () {
      this.counter++
    },
    decrement () {
      this.counter--
    }
  }
}
</script>
