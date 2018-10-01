<template>
  <div class="stocks-body">
    <stock-card v-for="(stock, index) in stocks" :key="index" :stock="stock" :actionCallback="buy" :buttonLabel="'buy'"></stock-card>
  </div>
</template>

<script>
import Card from "./common/Card.vue";
import { fetchStocks } from "../models/stock.js";
export default {
  props: ["appUser"],
  data() {
    return {
      stocks: fetchStocks()
    };
  },
  methods: {
    buy(stockToBuy, quantity) {
      quantity = Number(quantity);
      if (quantity < 0) {
        // TODO add alert
        return;
      }

      let stock = this.stocks.find(stock => stock.name === stockToBuy.name);
      this.price = Number(this.price);
      let finalPrice = quantity * stock.price;

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

