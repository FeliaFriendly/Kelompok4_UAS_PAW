<template>
  <div id="app">
    <Navbar/>
    <div class="container pt-4">
      <router-view/>
    </div>
  </div>
</template>
<script> 
  import Navbar from './Navbar.vue'
  
  export default { 
    components: {
      Navbar
    }
  }
</script>
<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2c3e50;
  } 
  #app .navbar-nav a{ 
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  }
  #app .navbar-nav a.router-link-exact-active {
  color: rgb(243, 213, 137);
  }
</style>