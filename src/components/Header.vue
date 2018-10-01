<template>
  <div class="header">
    <router-link class="wrap_left" :to="{name:'home'}">Stock Trader</router-link>
    <router-link class="wrap_left" :to="{name:'portfolio'}">Portfolio</router-link>
    <router-link class="wrap_left" :to="{name:'stocks'}">Stocks</router-link>
    <div class="filler"></div>
    <a class="wrap_right">Close Day</a>
    <!-- TODO dropdown menu-->
    <a class="wrap_right">Save & Load
      <!-- <ul>
                        <router-link tag=li to="load">Load</router-link>
                        <router-link tag=li to="save">Save</router-link>
                    </ul> -->
    </a>
    <a class="wrap_right">Funds: {{funds}}</a>
  </div>
</template>

<script>
export default {
  props: ["funds"]
};
</script>

<style scoped>
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

