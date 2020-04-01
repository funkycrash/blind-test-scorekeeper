<template>
  <div class="home">
    <Board title="Blind Test" />
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'

export default {
  name: 'Home',
  components: {
    Board,
  },
  data: function() {
    return {
      title: '',
    }
  },
}
</script>
