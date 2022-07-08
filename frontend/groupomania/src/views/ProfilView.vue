<template>
    <div class="logoSignin">
    <img alt="groupomania logo" src="../assets/icon-left-font.png" />
    <div class="logoSignin">
      <p class="acceuilSignin">
        Bienvenue {{ }}
      </p>
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

export default {
  name: 'ProfilView',
  mounted: function () {
    console.log(this.$store.state.user);
     if (this.$store.state.user.id == -1) {
      this.$router.push('/'); 
      return;
     }
     
  }, 
}
</script>

<style scoped>
</style>