<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import HeaderSection from './components/HeaderSection.vue'
import Promo from './components/Promo.vue'
import Vernissage from './components/Vernissage.vue'
import FooterSection from './components/FooterSection.vue'


</script>

<template>
  
  <Navigation />
  <HeaderSection />
  <hr>
  <main>
    <Promo />
    <hr>
    <Vernissage />
  </main>
  <FooterSection />
  <RouterView />
</template>

<style scoped>
  main{
    padding: 0 1.44rem;
  }
</style>
