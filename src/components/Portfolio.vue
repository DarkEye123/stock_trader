<template>
    <div class="body">
        <portfolio-card v-for="(stock, index) in appUser.portfolio.stocks" :key="index" :stock="stock" :buttonLabel="'sell'"></portfolio-card>
    </div>
</template>

<script>
import Card from "./common/Card";
import { syncUserStockData } from "../models/stock.js";
export default {
  props: ["appUser"],
  components: {
    portfolioCard: Card
  },
  created() {
    syncUserStockData(this.appUser);
  }
};
</script>

