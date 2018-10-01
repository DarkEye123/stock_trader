<template>
  <div id="app" class="container">
    <div class="header">
      <appHeader :funds="appUser.funds"></appHeader>
    </div>

    <div class="body">
      <router-view :funds="appUser.funds"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import { fetch_data } from "./models/user";
export default {
  data() {
    return {
      appUser: fetch_data()
    };
  },
  components: {
    appHeader: Header
  }
};
</script>

<style>
.container {
  display: grid;
  /* grid-template: 40px minmax(200px, auto-fit) / repeat(12, 1fr); */
  grid-template: 40px 1fr / repeat(12, 1fr);
}

.header {
  grid-column: 1/-1;
}

.body {
  grid-column: 2/-2;
}
</style>


