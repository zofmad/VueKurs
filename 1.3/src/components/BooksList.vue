<template>
  <div>
<!-- books message -->
    <ul>
      <li v-bind:key="i" v-for="(book, i) in myBooks">
        {{book.title}}, {{book.price}}$
        <button @click="$emit('remove', i)">Remove Book</button>
      </li>
    </ul>


    <!-- no books message -->
    <p v-show="!myBooks.length">No books...</p>

    

  </div>
</template>
<script>


export default {
  name: 'BooksList',
  props: {
    myBooks:{
      type: Array,
      required: true
    }
    // ,
    // myRemoveBook:{
    //   type: Function,
    //   required: true
    // }
  
  }
}
</script>

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
