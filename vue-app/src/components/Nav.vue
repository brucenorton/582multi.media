<template>
  <h2>nav</h2>
  <nav>
    <a v-for="item in data" :key="item.id":href="'https://'+item.href" :target="item.target">{{ item.content }}</a>
  </nav>
</template>

<script>
import jsonData from '../data/nav.json'
  export default {
    data(){
      return{
        data: jsonData
      }
    }
  }
</script>

<style scoped>
 nav{
  display: grid;
  grid-auto-flow: column;
 }
 nav a{
  text-align: center;
 }
</style>