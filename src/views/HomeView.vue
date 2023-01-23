<template>
  <h1>home</h1>
  <button @click="goToAuth" class="btn btn-success">entra</button>
</template>

<script>
export default {
  methods: {
    goToAuth() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>

</style>