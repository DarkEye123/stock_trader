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
import { saveUser } from "../actions/users.js";
import { loadUser } from "../actions/users.js";
export default {
  props: ["appUser"],
  methods: {
    save() {
      saveUser(this.$http, this.appUser);
    },
    load() {
      loadUser(this.$http, this.appUser);
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

