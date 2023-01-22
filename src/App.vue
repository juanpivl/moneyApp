<template>

  <div class="app">
    <SideBar/>
    <router-view/>
  </div>
</template>


<script setup>
import SideBar from "./modules/money_app/components/SideBar.vue"
</script>


<style >

:root{
  --MainBgColor:#f1f5f9;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

body{
  background: var(--MainBgColor) ;

}
#app{
  margin: 20px;
}
.app {
  display: flex;
  border-radius:25px;
  background-color: #d7d7d7;

}
</style>

