<template>
  <div class="container">
    <header>
      <h1 class="title">
        {{title}}
      </h1>
    </header>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  computed:{
    ...mapGetters(["title"])
  }
}

</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.input{
  width: 100%;
  padding: 5px 10px;
  border: 2px solid #00b8d0;
  background-color: #fff;
  outline: none;
}

.title{
  margin: 66px 0 20px;
}

.container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
}
</style>
