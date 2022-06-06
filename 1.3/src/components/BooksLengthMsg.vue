<template>
    <div>
      <p>{{booksAmount}}</p>
    </div>
</template>

<script>
export default {
  name: 'BooksLengthMsg',
  props: {
    nbOfBooks: {
      type: Number,
      required: true
    }
  },
  computed: {
    booksAmount () {
      if (this.nbOfBooks > 5) {
        return this.nbOfBooks + 'books'
      } else if (this.nbOfBooks > 1) {
        return 'Not too many of them…'
      } else if (this.nbOfBooks === 1) {
        return 'One single book!'
      } else {
        return 'Go get some books!'
      }
    }
  }
}
</script>
