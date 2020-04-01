<template>
  <main>
    <h1>{{ title }}</h1>
    <div class="board">
      <div class="player" v-for="player in players" v-bind:key="player.id">
        <Player
          :name="player.name"
          :score="player.score"
          :id="player.id"
          @increaseScore="increaseScore(index)"
          @decreaseScore="decreaseScore(index)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Player from '@/components/Player.vue'

export default {
  props: {
    title: String,
  },
  components: {
    Player,
  },
  computed: {
    // a computed getter
    indexedPlayerList: function() {
      return this.players.reduce(
        (acc, item) => ((acc[item.id] = item), acc),
        {},
      )
    },
  },
  data: function() {
    return {
      players: [
        { id: 1, name: 'Player', score: 0 },
        { id: 2, name: 'player', score: 0 },
        { id: 3, name: 'player', score: 0 },
        { id: 4, name: 'player', score: 0 },
        { id: 5, name: 'player', score: 0 },
      ],
    }
  },
  methods: {
    increaseScore(index) {
      console.log(index)
    },
    decreaseScore(index) {
      console.log(index)
    },
  },
}
</script>

<style>
.board {
  display: flex;
  justify-content: space-between;
}
.player {
  width: 32%;
  border-radius: 2px;
}
/* Color Theme Swatches in Hex */
.player:nth-child(n + 1) {
  background-color: #1e3e59;
  color: #fff;
}
.player:nth-child(n + 2) {
  background-color: #2b678c;
  color: #fff;
}
.player:nth-child(n + 3) {
  background-color: #f2e8d5;
  color: #1e3e59;
}
.player:nth-child(n + 4) {
  background-color: #f2e0bd;
  color: #1e3e59;
}
.player:nth-child(n + 5) {
  background-color: #f2b29b;
  color: #1e3e59;
}
</style>
