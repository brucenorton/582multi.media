<template>
  <div>
    <h2>nav data</h2>
  </div>
  <div v-for="item in data" :key="item.id">
    <a :href="'https://'+item.href" :target="item.target">{{ item.content }}</a>
  </div>
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

</style>