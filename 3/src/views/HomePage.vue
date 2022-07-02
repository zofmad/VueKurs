<template>
  <div class="home">
    <PageTitle>Photos</PageTitle>
    <PhotosCatalog />
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/layout/PageTitle'
import PhotosCatalog from '@/components/features/PhotosCatalog'

export default {
  name: 'HomePage',
  components: {
    PageTitle,
    PhotosCatalog
  }
}
</script>
