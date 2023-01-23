<template>
  <div class="MainContainer">
    <SideBar />
    <div class="SecondContainer">
      <h1 class="UserName">Usuario</h1>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    SideBar: defineAsyncComponent(() => import("../components/SideBar.vue")),
  },
};
</script>

<style scoped>
.MainContainer {
  display: flex;
  background-color: var(--MainBgColor);
}
.SecondContainer {
  width: 100%;
  margin-top:20px ;
  }
.UserName{
text-align: center;}
.UserName {
  color: white;
}
</style>

