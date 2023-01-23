<template>

  <div class="app">
    <router-view/>
  </div>
</template>


<style scoped>

:root{
  --MainBgColor:#1f1d2c;
  --MainAppColor:#262837;
}

*{
  margin: 0;
  padding: 0;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

body{
  background: var(--MainBgColor) ;

}

</style>

