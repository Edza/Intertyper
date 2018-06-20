<template>
  <div class="home">
    <img width="200" src="../assets/logo.jpg">
    <Questions/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Questions from '@/components/Questions.vue' // @ is an alias to /src

@Component({
  components: {
  Questions
  }
  })
export default class Home extends Vue {}
</script>
