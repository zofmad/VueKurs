<template>
  <div class="mt-4">
    {{photos}}
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'PhotosCatalog',
  computed: {
    ...mapState.photos
  },
  created () {
    if (!this.category) this.fetchPhotos(1)
    else this.fetchCategoryPhotos({ category: this.category, page: 1 })
  },
  methods: {
    ...mapActions(['fetchPhotos', 'fetchCategoryPhotos'])
  },
  props: {
    category: {
      type: String
    }
  }

}
</script>
