<template>
  <div class="CardsPayment">
    <div class="Payment">
      <div class="PaymentIcon">
        <span class="material-icons-outlined"> drafts </span>
      </div>
      <div class="DataPayment">
        <h3>Salary</h3>
      </div>
      <div class="DataPayment">
        <p class="DataPaymentDescription">Juan se la come</p>
      </div>
      <div class="DataPayment">
        <h3>+$5000</h3>
      </div>
    </div>
    <div class="Payment">
      <div class="PaymentIcon">
        <span class="material-icons-outlined"> account_balance </span>
      </div>
      <div class="DataPayment">
        <h3>Rent</h3>
      </div>
      <div class="DataPayment">
        <p class="DataPaymentDescription">EL juan es gay</p>
      </div>
      <div class="DataPayment">
        <h3>+$100000</h3>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.CardsPayment {
  display: flex;
  height: 100%;
}

.Payment {
  text-align: center;
  margin: auto;
  background: #f1f4fb;
  width: 40%;
  border-radius: 40px;
  height: 70%;
  padding: 30px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.PaymentIcon {
  background-color: black;
  width: 60%;
  border-radius: 30px;
  padding: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.material-icons-outlined {
  color: white;
  font-size: 3rem;
}

.DataPayment {
  margin-bottom: 3px;
}

@media (max-width: 1500px) {
  .DataPaymentDescription {
    display: none;
  }

  .PaymentIcon {
    width: 100%;
  }
}
</style>