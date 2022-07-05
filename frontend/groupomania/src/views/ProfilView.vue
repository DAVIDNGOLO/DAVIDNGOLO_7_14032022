<template>
    <div class="logoSignin">
    <img alt="groupomania logo" src="../assets/icon-left-font.png" />
    <div class="logoSignin">
      <p class="acceuilSignin">
        Bienvenue "nomUtilisateur"
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
import { mapState } from 'vuex'
export default {
  name: 'ProfilView',
  mounted: function () {
    console.log(this.$store.state.user);
    if (this.$store.state.user.userId == -1) {
      this.$router.push('/');
      return ;
    }
    this.$store.dispatch('getUserInfos');
  },
  computed: {
    ...mapState({
      user: 'userInfos',
    })
  },
  methods: {
    logout: function () {
      this.$store.commit('logout');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
</style>