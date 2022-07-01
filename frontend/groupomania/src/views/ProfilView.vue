<template>
    <div class="logoSignin">
    <img alt="groupomania logo" src="../assets/icon-left-font.png" />
    <div class="logoSignin">
      <p class="acceuilSignin">
        Bienvenue {{ nomUtilisateur}}
      </p>
    </div>
    <div>
      <h1>Profil {{ nomUtilisateur}}</h1>
    </div>
    <div class="signinConnexion">
      <h2>Email</h2>

      <div>
        <input type="email" >
      </div>
    </div>
    <div class="signinConnexion">
      <h2>Password</h2>

      <div>
        <input type="password" >
      </div>
    </div>
    <div>
      <input class="Bouton" 
       type="button"
       value="Déconnexion">
    </div>
    <div>


    </div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>