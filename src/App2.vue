<template>

  <NavbarComponent/>
  <main>
    <router-view>

    </router-view>
  </main>
  
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

<style>
        
  header{
      background-color: yellow;
      text-align: center;
      padding: 50px;
  }
  nav{
      display: flex;
      justify-content: flex-end;
      background-color: antiquewhite;
  }
  nav > div{
      padding: 5px;
      background-color: tomato;
      margin: 5px;
      color: white;
  }
  .wrap{
      background-color: darkolivegreen;
      display: flex;
      padding: 20px;
      flex-wrap: wrap;
  }
  aside{
      background-color: aliceblue;
      flex-grow: 2;
      padding: 20px;
  }
  main{
      background-color: bisque;
      flex-grow: 8;
      height: 400px;
      padding: 20px;
  }
  .derecha{
      flex-grow: 2;
      height: 400px;
      background-color: aliceblue;
  }
  footer{
      padding: 20px;
      background-color: darkseagreen;
      text-align: center;
      color: white;
  }
</style>