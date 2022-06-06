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
    <books-length-msg :nbOfBooks="books.length"/>
    <books-form @addBook="addBook"/>
    <books-summary :nbOfBooks="books.length" :totalPrice="booksPrice"/>
  </div>
</template>
<script>
import BooksList from './components/BooksList'
import BooksLengthMsg from './components/BooksLengthMsg'
import BooksForm from './components/BooksForm'
import BooksSummary from './components/BooksSummary'

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
    }]
  }),
  methods: {
    addBook (newBook) {
      this.books.push(newBook)
    },
    removeBook (i) { this.books.splice(i, 1) }
  },
  components: {
    BooksList,
    BooksLengthMsg,
    BooksForm,
    BooksSummary
  },
  computed: {
    booksPrice () {
      let totalPrice = 0
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += parseInt(this.books[i].price)
      }
      return totalPrice
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
