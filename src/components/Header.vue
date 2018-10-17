<template>
  <header>
    <div></div>
    <router-link :to="{name:'home'}">Stock Trader</router-link>
    <router-link :to="{name:'portfolio'}">Portfolio</router-link>
    <router-link :to="{name:'stocks'}">Stocks</router-link>
    <div></div>
    <a @click="$emit('closeDayEvent')">Close Day</a>
    <!-- TODO dropdown menu-->
    <sui-dropdown class="teal wrap_right dropdown pointing" floating text="Save & Load">
      <sui-dropdown-menu>
        <sui-dropdown-item @click="save">Save</sui-dropdown-item>
        <sui-dropdown-item @click="load">Load</sui-dropdown-item>
      </sui-dropdown-menu>
    </sui-dropdown>
    <a class="wrap_right">Funds: {{appUser.funds}}</a>
    <div></div>
  </header>
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
header {
  display: grid;
  grid-template: 1fr / 10px auto auto auto 1fr auto auto auto 10px;
  column-gap: 2rem;
  background-color: #55d6aa;
}

a {
  cursor: pointer;
}

header > a,
header > div {
  text-transform: uppercase;
  color: #444;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
}

header > a::before,
header > .dropdown::before {
  content: "";
  height: 5px;
  width: 0%;
  display: block;
  position: absolute;
  top: 0;
  background-color: #444;
  transition: all ease-in-out 250ms;
}

header a:hover::before,
header div:hover::before {
  width: 100%;
}
</style>

