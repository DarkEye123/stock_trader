<template>
  <div id="app">
    <appHeader :appUser="appUser" @closeDayEvent="closeDay"></appHeader>

    <div class="container">
      <router-view class="body" :appUser="appUser"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import { fetchData } from "./actions/users";
import { simulate } from "./actions/stocks";
export default {
  data() {
    return {
      appUser: fetchData()
    };
  },
  components: {
    appHeader: Header
  },
  methods: {
    closeDay() {
      console.log("making it happen");
      simulate();
    }
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template: 1fr / repeat(12, 1fr);
}

.body {
  grid-column: 2/-2;
}
</style>


