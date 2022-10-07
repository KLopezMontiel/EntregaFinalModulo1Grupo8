<template>
  <div>
  
    <NavbarComponent/>
  
 
  
  <div class="bg-danger bg-opacity-10">
  <div class="container">
    
    <div class="p-1">
    <div class="bg-white m-2 p-4 rounded-3">
  
      <router-view></router-view>
  
  
    </div>
    </div> 
  
  </div>
  </div>
  
  
  
  
  
  </div>
  </template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'


export default {
  name: 'App',
  components: {
    
    NavbarComponent,
    


  }
}
</script>
<!--
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
-->

