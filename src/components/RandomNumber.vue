<template>
  <div id="app">
   <h1>Randomize</h1>
    <span>{{ number }}</span>
    <button @click="randomize">Randomize</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    number: 0
  }),
  methods: {
    randomize () {
    // funkcja Math.random() zwraca liczby od 0(włącznie) do 1(wyłącznie), zatem trzeba dodac 1, zeby otrzymać liczby od 1 do 100
      this.number = Math.round(Math.random() * 100, 0) + 1
    }
  }
}
</script>
