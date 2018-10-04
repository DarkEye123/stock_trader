<template>
  <div class="body">
    <portfolio-card v-for="(stock, index) in stocks" :key="index" :stock="stock" :actionCallback="sell" :buttonLabel="'sell'"></portfolio-card>
  </div>
</template>

<script>
import Card from "./common/Card";
import { syncUserStockData } from "../models/stock.js";
import { computeFinalPrice } from "../common.js";
export default {
  props: ["appUser"],
  components: {
    portfolioCard: Card
  },
  computed: {
    stocks() {
      return this.appUser.portfolio.stocks;
    }
  },
  methods: {
    sell(stockToSell, quantity) {
      let soldQuantity = this.appUser.portfolio.remove(stockToSell, quantity);
      let finalPrice = computeFinalPrice(stockToSell, soldQuantity);
      this.appUser.funds += finalPrice;
    }
  },
  created() {
    syncUserStockData(this.appUser);
  }
};
</script>

