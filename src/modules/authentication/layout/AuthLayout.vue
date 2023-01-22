<template>
  <div>
    <ContainerCard/>
    
  </div>
</template>

<script >
import { defineAsyncComponent } from "vue";
export default{
  components:{
    ContainerCard: defineAsyncComponent(() => import("../components/ContainerCard.vue")),
  }
}


</script>