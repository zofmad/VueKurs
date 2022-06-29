
<template>
  <div id="app">
    <div class="container p-p-4">

      <app-header />

      <main>
        <router-view />
      </main>

      <app-footer />

    </div>
  </div>
</template>
<script>
import AppFooter from '@/components/layout/theFooter'
import AppHeader from '@/components/layout/theHeader'

import './styles/global.scss'
import './styles/normalize.scss'

import mapActions from 'vuex'

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader
  },
  created () {
    return mapActions.fetchCategories
  }
}

</script>

<style lang="scss">

</style>
