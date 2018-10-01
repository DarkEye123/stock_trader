<template>
  <div class="card">
    <div class="card-header">
      {{stock.name}} {{additionalInfo}}
    </div>
    <div class="card-body">
      <input type="number" v-model="quantity">
      <button @click="actionCallback(stock, quantity); quantity = 0">{{buttonLabel}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock", "actionCallback", "buttonLabel"],
  computed: {
    additionalInfo() {
      if (!this.stock.quantity) {
        return `(price: ${this.stock.price})`;
      }
      return `(price: ${this.stock.price} | quantity: ${this.stock.quantity})`;
    }
  },
  data() {
    return {
      quantity: 0
    };
  }
};
</script>

