<template>
  <div>
    <h1>Bienvenido a la aplicacion</h1>
    <div>
      <button @click="goToLogin"> login</button>
      <button @click="goToRegister">register</button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goToLogin(){
      this.$router.push({name: "login"});
    },
    goToRegister(){
      this.$router.push({name: "register"});
    }
  }
}
</script>

<style>

</style>