<template>
  <div class="header">
    <!-- <div>
      <router-link class="wrap_left" :to="{name:'home'}">Stock Trader</router-link>
    </div> -->
    <router-link class="wrap_left" :to="{name:'home'}">Stock Trader</router-link>
    <router-link class="wrap_left" :to="{name:'portfolio'}">Portfolio</router-link>
    <router-link class="wrap_left" :to="{name:'stocks'}">Stocks</router-link>
    <div class="filler"></div>
    <a class="wrap_right" @click="$emit('closeDayEvent')">Close Day</a>
    <!-- TODO dropdown menu-->
    <sui-dropdown class="teal wrap_right dropdown pointing" floating text="Save & Load">
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
  background-color: #55d6aa;
  height: 100%;
  position: absolute;
  top: 0;
}

.filler {
  margin-left: auto;
}

.wrap_left {
  margin-left: 20px;
  /* position: relative; */
}

.wrap_right {
  margin-right: 20px;
  /* position: relative; */
}

/* .header div {
  background-color: red;
} */

.header > a,
.header > div {
  text-transform: uppercase;
  color: #444;
  padding-top: 5px;
  position: relative;
}

.header > a::before,
.header > .dropdown::before {
  content: "";
  height: 5px;
  width: 0%;
  display: block;
  position: absolute;
  top: 0;
  background-color: #444;
  transition: all ease-in-out 250ms;
}

/* .header > div::before {
  content: "";
  height: 5px;
  width: 0%;
  display: block;
  position: absolute;
  top: 0;
  background-color: #444;
  transition: all ease-in-out 250ms;
} */

/* .header > div:hover::before {
  width: 100%;
} */

.header a:hover::before,
.header div:hover::before {
  width: 100%;
}
</style>

