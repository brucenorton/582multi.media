<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import HeaderSection from './components/HeaderSection.vue'
import Promo from './components/Promo.vue'
import Vernissage from './components/Vernissage.vue'



</script>

<template>
  <Navigation />
  <HeaderSection />
  <hr>
  <Promo />
  <hr>
  <Vernissage />
  <RouterView />
</template>

<style scoped>

</style>
