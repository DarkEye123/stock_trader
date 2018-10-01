<template>
    <div>
        <h1>Trade or View Your Portfolio</h1>
        <p>You may load & save your data</p>
        <p>Click on 'Close Day' to begin a new trading day!</p>
        <hr>
        <p>Your funds: {{funds}}</p>
    </div>
</template>

<script>
export default {
  props: ["funds"]
};
</script>

