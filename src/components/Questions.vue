<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      // needs pics from 16personalities<br/>
      [4 EMOJIS HERE - love, neutral, hate, no-idea]<br/>
      [TEXTBOX]
    </p>
    <p>
      What would happen? How do you see this working out?<br/> Is it a sweet pairing or one full of problems?
      <a href="https://www.16personalities.com/personality-types" target="_blank">Look at characters again if you can't figure it out.</a>
    </p>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { QuestionGenerator } from '@/type-logic/generator'

@Component
export default class Questions extends Vue {
  msg = ''
  questions = new QuestionGenerator()

  mounted () {
    this.msg = this.questions.New()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
