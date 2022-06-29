<template>
  <div class="mt-4">
    <Button v-for="(category, index) in $store.state.categories" :key="index" :label="category" class="p-button-rounded p-button-outlined mr-2" />
  </div>
</template>

<script>

import Button from 'primevue/button'
export default {
  name: 'CategoriesList',
  components: {
    Button
  }
}
</script>
