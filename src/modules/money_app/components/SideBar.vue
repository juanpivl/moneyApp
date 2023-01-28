<template>
  <aside>
    <div class="icons">
      <span class="material-icons" @click="Home">home</span>
      <span class="material-icons-outlined" @click="Otro">email</span>
      <span class="material-icons-outlined"> chat </span>
      <span class="material-icons-outlined"> admin_panel_settings </span>
      <span class="material-icons-outlined"> cloud_upload </span>
      <span class="material-icons-outlined"> settings </span>
    </div>
    <div class="ButtonContainer">
      <span class="material-icons-outlined" @click="LogOut"> logout </span>
    </div>
  </aside>
</template>


<script>
export default {
  methods: {
    LogOut() {
      return this.$router.push({
        name: "login",
      });
    },
    Home() {
      return this.$router.push({
        name: "inicio",
      });
    },
    Otro() {
      return this.$router.push({
        name: "otro",
      });
    },
  },
};
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  width: 100px;
  padding: 1rem;
  overflow: hidden;
  min-height: 90vh;
  background-color: var(--MainAppColor);
  color: var(--MainBgColor);
  border-radius: 20px;
  margin: 5px;
  color: white;
}

span + span {
  margin-bottom: 30px;
}

.icons {
  align-content: space-between;
  padding-top: 50px;
  padding-left: 7px;
}
.material-icons {
  font-size: 3rem;
  margin-bottom: 30px;
}

.material-icons-outlined {
  font-size: 3rem;
}
.ButtonContainer {
  position: absolute;
  bottom: 20px;
  margin-left: 7px;
}
</style>
