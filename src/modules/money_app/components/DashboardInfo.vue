<template>
  <div class="AcountInfoContainer">
    <div class="IconsDashboardInfo">
      <span class="material-icons"> developer_board </span>
      <span class="material-icons-outlined"> rss_feed </span>
    </div>
    <div class="CountNumber">
      <h2>4611 2971 8104 0505</h2>
    </div>

    <div class="AcountName">
      <h2>Kerim Cisneros</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.AcountInfoContainer {
  display: flex;
  height: 65%;
  width: 90%;
  background-color: #282424;
  border-radius: 30px;
  bottom: 0px;
  padding: 1rem;
  flex-direction: column;
}

.IconsDashboardInfo {
  margin-bottom: 5px;
}

.IconsDashboardInfo > .material-icons {
  color: rgb(130, 130, 5);
  font-size: 2.5rem;
  margin-right: 0.5rem;
}

.IconsDashboardInfo > .material-icons-outlined {
  font-size: 2.5rem;
  color: white;
}

.CountNumber {
  color: white;
  font-size: 0.9rem;
}

.AcountName {
}
</style>