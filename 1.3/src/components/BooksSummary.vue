<template>
  <div>
  <p>Books amount: {{nbOfBooks}}</p>
  <p>Books price: {{totalPrice}}</p>
  </div>
</template>
<script>
export default {
  name: 'BooksSummary',
  props: {
    totalPrice: { type: Number, required: true },
    nbOfBooks: { type: Number, required: true }
  }
}
</script>
