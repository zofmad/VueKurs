<template>
  <header class="header mt-2 mb-2 mx-2">
    <div class="flex align-items-center justify-content-between border-bottom-2 border-300 pb-2">
      <div>
        <router-link style="color: inherit" to="/"><MainTitle>PhotosApp |</MainTitle></router-link> <p>share your moments</p>
      </div>
      <Button class="p-button-rounded"><span class="pi pi-plus mr-2" />Submit</Button>
    </div>
    <div>
      <CategoriesList />
      </div>

  </header>

</template>

<script>
import MainTitle from './MainTitle'
import Button from 'primevue/button'
import CategoriesList from '@/components/features/CategoriesList'

// import SmallTitle from './SmallTitle'

export default {
  name: 'AppHeader',
  components: {
    MainTitle,
    Button,
    CategoriesList
    // SmallTitle
  }
}
</script>
<style lang="scss" scoped>
h1, p {
  display:inline-block;
}
span{
  font-size: 1.2rem;
}
</style>
