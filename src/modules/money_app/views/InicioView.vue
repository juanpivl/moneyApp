<template>
  <div class="InicioContainer">
    <div class="LeftContainer">
      <div class="TopLeft">
        <div class="DashboardContainer">
          <h2 class="DashBoardTittle">Dashboard</h2>
         <AcountInfoContainer/>
        </div>
        <div class="UpcomingPaymentsContainer">
          <h2 class="PaymentTittle">Upcoming Payments</h2>
          <CardsPayment />
        </div>
      </div>

      <div class="BottomLeft">
        <h2>Recent Transaction</h2>
      </div>
    </div>
    <div class="RightContainer"></div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    CardsPayment: defineAsyncComponent(() =>
      import("../components/CardsPayments.vue")
    ),
    AcountInfoContainer: defineAsyncComponent(() =>
    import("../components/DashboardInfo.vue")
    ),
  },
};
</script>

<style scoped>
.InicioContainer {
  padding: 2rem;
  margin: 1rem;
  border-radius: 50px;
  background-color: white;
  color: var(--MainAppColor);
  min-height: 89vh;
  display: flex;
}

.LeftContainer {
  width: 55%;
  height: 83vh;
  display: flex;
  flex-direction: column;
}
.RightContainer {
  height: 83vh;
  width: 40%;
  padding: 2rem;
  justify-content: center;
  display: flex;
  align-items: center;
  background-image: url(@/assets/graficas.png);
  background-size: contain;
  margin: auto;
}
.TopLeft {
  display: flex;
  text-align: left;
  height: 40%;
  margin-bottom: 30px;
}

.PaymentTittle {
}

.DashBoardTittle {
  margin-bottom: 55px;
}

.DashboardContainer {
  width: 50%;
}

.UpcomingPaymentsContainer {
  width: 50%;
}

</style>