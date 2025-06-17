<template>
  <nav>
    <a href="/"><img src="../assets/logo_582_bil_w.png" alt="" class="logo"></a>
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
  grid-auto-flow: row;
  gap: 1.2rem;
 }
 nav a{
  text-align: center;
 }
 .logo{
  max-height: 60px;
 }
 nav a:first-of-type{
  text-align: left;
  grid-column: 1/-1;
 }

 
  @media screen and (min-width: 675px) {
  nav{
    grid-template-columns: repeat(4, 1fr);
  }
  
 }
 @media screen and (min-width: 935px) {
  nav{
    grid-template-columns: repeat(5, 1fr);
  }

 nav a:first-of-type{
    grid-column: unset;
  }
  
 }
</style>