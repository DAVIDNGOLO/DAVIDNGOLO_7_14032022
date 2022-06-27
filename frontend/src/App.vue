<template>
  <div id="app">
    <nav>
      <router-link to="/">Inscription /</router-link> 
      <router-link to="/signin"> Connexion /</router-link>
      <router-link to="/profil"> Profil</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>

</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4E5166;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #4E5166;
}

nav a.router-link-exact-active {
  color: #FD2D01;
}
</style>
