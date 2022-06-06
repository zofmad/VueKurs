<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>
        Title:
        <input v-model="newBook.title" type="text" name="title">
      </label>
      <label>
        price:
        <input v-model="newBook.price" type="number" name="price">
      </label>
      <button>Add book</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'BooksForm',
  data: () => ({
    newBook: { title: '', price: 0 }
  }),
  methods: {
    handleSubmit () {
      this.$emit('addBook', this.newBook)
      this.newBook = { title: '', price: 0 }
    }
  }
}
</script>
