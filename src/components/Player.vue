<template>
  <div>
    <BaseIcon name="user" />
    <h1>{{ name }} {{ id }}</h1>
    <h2>{{ score }}</h2>
    <span class="button" v-on:click="increaseScore(id)">+</span>
    <span class="button" v-on:click="decreaseScore(id)">-</span>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    id: Number,
    name: String,
    score: Number,
  },
  methods: {
    increaseScore(id) {
      this.$emit('increase', id)
    },
    decreaseScore(id) {
      this.$emit('decrease', id)
    },
  },
}
</script>

<style scoped>
h1,
h2 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
h1 {
  font-size: 20px;
}
h2 {
  font-size: 16px;
}
.button {
  margin-right: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 2px 10px;
  border: 1px solid #333;
}
div {
  padding: 10px;
}
</style>
