<template>
  <div class="header">
    <router-link class="wrap_left" :to="{name:'home'}">Stock Trader</router-link>
    <router-link class="wrap_left" :to="{name:'portfolio'}">Portfolio</router-link>
    <router-link class="wrap_left" :to="{name:'stocks'}">Stocks</router-link>
    <div class="filler"></div>
    <a class="wrap_right" @click="$emit('closeDayEvent')">Close Day</a>
    <!-- TODO dropdown menu-->
    <sui-dropdown class="teal wrap_right" floating text="Save & Load">
      <sui-dropdown-menu>
        <sui-dropdown-item @click="save">Save</sui-dropdown-item>
        <sui-dropdown-item @click="load">Load</sui-dropdown-item>
      </sui-dropdown-menu>
    </sui-dropdown>
    <a class="wrap_right">Funds: {{appUser.funds}}</a>
  </div>
</template>

<script>
export default {
  props: ["appUser"],
  methods: {
    save() {
      this.$http
        .put(`${this.appUser.id}.json`, {
          portfolio: this.appUser.portfolio.serialize(),
          funds: this.appUser.funds
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    load() {
      this.$http
        .get(`${this.appUser.id}.json`)
        // if function(response) is used 'this' keyword is undefined
        .then(response => {
          console.log(response.data);
          this.appUser.portfolio.deserialize(response.data["portfolio"]);
          this.appUser.funds = response.data["funds"];
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
a {
  cursor: pointer;
}

.header {
  display: flex;
}

.filler {
  margin-left: auto;
}

.wrap_left {
  margin-left: 20px;
}

.wrap_right {
  margin-right: 20px;
}
</style>

