<template>
  <div class="container">
    <stock-card v-for="(stock, index) in stocks" :key="index" :stock="stock" :actionCallback="buy" :buttonLabel="'buy'"></stock-card>
  </div>
</template>

<script>
import Card from "./common/Card.vue";
import { fetchStocks, getStock } from "../actions/stocks.js";
import { computeFinalPrice } from "../common.js";
export default {
  props: ["appUser"],
  data() {
    return {
      stocks: fetchStocks()
    };
  },
  methods: {
    buy(stockToBuy, quantity) {
      let stock = getStock(this.stocks, stockToBuy);
      let finalPrice = computeFinalPrice(stock, quantity);

      if (finalPrice <= this.appUser.funds) {
        this.appUser.funds -= finalPrice;
        this.appUser.portfolio.add(stock, quantity);
      } else {
        // TODO alert insufficient funds
      }
    }
  },
  components: {
    stockCard: Card
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template: repeat(2, 100px) / repeat(2, 1fr);
}
@media only screen and (max-width: 440px) {
  .container {
    grid-auto-rows: 100px;
    grid-template: repeat(2, 100px) / repeat(1, 1fr);
  }
}
</style>


