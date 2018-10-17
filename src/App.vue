<template>
  <div id="app" class="container">
    <div class="header">
      <appHeader :appUser="appUser" @closeDayEvent="closeDay"></appHeader>
    </div>

    <div class="body">
      <router-view :appUser="appUser"></router-view>
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
  grid-template: 40px 1fr / repeat(12, 1fr);
}

.header {
  grid-column: 1/-1;
}

.body {
  grid-column: 2/-2;
}
</style>


