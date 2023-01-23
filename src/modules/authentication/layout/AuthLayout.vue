<template>
  <v-app >
    <v-app-bar>
      <v-spacer></v-spacer>
      <h1
        
        
        >Lleva tu contabilidad</h1
      >
    </v-app-bar>

    <v-main class="containerMain">
      <div >
        <v-card loading title="Bienvenido!"  variant="tonal" class="containerCard">
         <router-view/>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>
  
<script>
//import { defineAsyncComponent } from "vue";
export default {
  components:{
    ///ContainerForm: defineAsyncComponent(() => import("../components/ContainerForm.vue")),
  }
};
</script>

<style scoped>
.containerMain{
  display: flex;
  align-items: center ;
  justify-content: center ;
}       
.containerCard{
  padding: 20px;
  height: auto;
  width: 500px;
  align-items: center ;
  justify-content: center ;
  align-content: center;
  border-radius: 10px;
}
</style> 




        