
<template>
<h2>{{title}}</h2>
<MyCounter/>
<MyCounter/>
<MyCounter/>
<RandomNumber/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script>
import MyCounter from './components/Counter'
import RandomNumber from './components/RandomNumber'

export default {
  name: 'App',
  data: () => ({ title: 'Title' }),
  components: {
    MyCounter, RandomNumber
  }
}

</script>
