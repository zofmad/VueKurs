<template>
  <footer class="footer m-2 flex justify-content-between">
    <span>2020 All rights reserved</span>
    <span>We have {{categoriesAmount}} categories!</span>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppFooter',
  computed: {
    ...mapGetters(['categoriesAmount'])
  }
}
</script>
