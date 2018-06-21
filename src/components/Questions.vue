<template>
<div>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p>
      // needs pics from 16personalities<br/>
      [4 EMOJIS HERE - love, neutral, hate, no-idea]<br/>
      [TEXTBOX]
      // need to save IP with request
    </p> -->
    </div>
    <div>
    <div>
      <textarea v-model="input" id="inputbox"></textarea>
       <emoji-picker @emoji="insert" :isOpen="isOpen">
          <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
              <div>
                  <div>
                      <div v-for="(emojiGroup, category) in emojis" :key="category">
                          <div v-if="category === 'Frequently used' || (allEmojis && category === 'People')">
                              <span
                              v-if="index < 89"
                                  class="emoji"
                                  v-for="(emoji, emojiName, index) in emojiGroup"
                                  @click="insert(emoji)"
                                  :title="emojiName"
                                  :key="emojiName"
                              >{{ emoji }}
                                <button  v-if="category === 'Frequently used' && index === 9" ref="openEmojis" type="button" @click.stop="moreEmojis">More emojis</button>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </emoji-picker>
      </div>

    <!-- <p>
      What would happen? How do you see this working out?<br/> Is it a sweet pairing or one full of problems?
      <a href="https://www.16personalities.com/personality-types" target="_blank">Look at characters again if you can't figure it out.</a>
    </p> -->
  </div>
  </div>
</template>

<script lang="ts">
/* eslint space-infix-ops: "off" */
import { Component, Prop, Vue } from 'vue-property-decorator'
import { QuestionGenerator } from '@/type-logic/generator'
import EmojiPicker from 'vue-emoji-picker'

@Component({
  components: {
  EmojiPicker
  }
  })
export default class Questions extends Vue {
  msg = ''
  questions = new QuestionGenerator()
  input = ''
  search = ''
  allEmojis = false
  isOpen = true

  insert (emoji: any) {
    this.input += emoji
  }

  mounted () {
    this.msg = this.questions.New()
    const elem : any = this.$refs.openEmojis
    elem.click()
  }

  moreEmojis () {
    this.allEmojis = !this.allEmojis
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;
}

.emoji {
  font-size: 40pt;
}

#inputbox {
  font-size: 30pt;
  width: 80%;
  margin: 20px;
}

input {
  margin: 20px;
}

#openEmojis {
  margin: 10px;
}
</style>
