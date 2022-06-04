<template>
  <div id="app">
    <!-- heading -->
    <header>
      <h1>Books<span>.app</span></h1>
    </header>

    <!-- no books message -->
    <p v-show="!books.length">No books...</p>
<!-- books message -->
    <ul>
      <li v-bind:key="i" v-for="(book, i) in books">
        {{book.title}}, {{book.price}}$
        <button @click="removeBook(i)">Remove Book</button>
      </li>
    </ul>
    <!-- zadanie 1 -->
    <div>
      <p v-if="booksAmount () > 5">{{booksAmount ()}} books</p>
      <p v-else-if="booksAmount () > 1">Not too many of them…</p>
      <p v-else-if="booksAmount () === 1">One single book!</p>
      <p v-else>Go get some books!</p>
    </div>
    <!-- add book form -->

    <form>
      <label>
        Title:
        <input v-model="newBook.title" type="text" name="title">
      </label>
      <label>
        price:
        <input v-model="newBook.price" type="number" name="price">
      </label>
      <button @click.prevent="addBook">Add book</button>
    </form>

  </div>
</template>
<script>

export default {
  name: 'App',
  data: () => ({
    books: [{
      title: 'a',
      price: 10
    },
    {
      title: 'b',
      price: 15
    }],
    newBook: { title: '', price: 0 }
  }),
  methods: {
    addBook () {
      this.books.push(this.newBook)
      // zadanie 2
      this.newBook = { title: '', price: 0 }
    },
    removeBook (i) { this.books.splice(i, 1) },
    booksAmount () {
      return this.books.length
    }
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
