<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}">
      <span>Home</span>
    </router-link>&nbsp;|&nbsp;
    <router-link :to="{name: 'Score'}">
      <span>Score</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>