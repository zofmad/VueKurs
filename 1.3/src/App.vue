<template>
  <div id="app">
    <!-- heading -->
    <header>
      <h1>Books<span>.app</span></h1>
    </header>
<books-list :myBooks="books" @remove="removeBook" />
    <!-- zadanie 1 -->
    <div>
      <p>{{booksAmount}}</p>
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
import BooksList from './components/BooksList'

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
    removeBook (i) { this.books.splice(i, 1) }
  },
  computed: {
    booksAmount () {
      if (this.books.length > 5) {
        return this.books.length + 'books'
      } else if (this.books.length > 1) {
        return 'Not too many of them…'
      } else if (this.books.length === 1) {
        return 'One single book!'
      } else {
        return 'Go get some books!'
      }
    }
  },
  components: {
    BooksList
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
