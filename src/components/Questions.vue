<template>
<div>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p>
      // needs pics from 16personalities<br/>
      [4 EMOJIS HERE - love, neutral, hate, no-idea]<br/>
      [TEXTBOX]
      // need to save IP with request

      NEEDS commenting on answers

      recommend ip ban for this spammer xD
    </p> -->
    <input type="button" value="SAVE, RELOAD AND NEXT" @click="goNext" />
  <div>
<!--
flexbox
3 rows

profile pic

DONE

SKIP (smaller below)

profile pic

 -->

  </div>
    </div>
    <div>
    <div>
      <div class="justified">
          <vue-expand
                id="inputbox"
                v-model="input"
                :placeholder="'TELL IT LIKE IT REEEEAAALLY IS!'"
                :handler="handler"
                min-row="3"/>

        </div>
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
  </div>
  </div>
</template>

<script lang="ts">
/* eslint space-infix-ops: "off" */
import { Component, Prop, Vue } from 'vue-property-decorator'
import { QuestionGenerator } from '@/type-logic/generator'
import EmojiPicker from 'vue-emoji-picker-fork'
import VueExpand from 'vue-expand'

// We declare the props separately
// to make props types inferable.
const QuestionProps = Vue.extend({
  props: {
    isRandomQuestion: Boolean
  }
})

@Component({
  components: {
  EmojiPicker,
  VueExpand
  }
  })
export default class Questions extends QuestionProps {
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
    if (this.isRandomQuestion) {
      this.msg = this.questions.New()
    } else {
      this.msg = 'not supported'
    }
  }

  moreEmojis () {
    this.allEmojis = !this.allEmojis
  }

  goNext () {

  }
}
</script>

<style lang="scss">
a {
  color: #42b983;
}

.emoji {
  font-size: 40pt;
}

input {
  margin: 20px;
}

#openEmojis {
  margin: 10px;
}

textarea{
  padding: 10px;
  margin: 50px auto;
  border-radius: 6px;
  box-shadow: 2px 2px 8px rgba(black, .3);
  border: 0;
  font-size: 30pt;
  margin: 20px;
}

div.justified {
        display: flex;
        justify-content: center;
    }

 /* wrapper element */
  .vue-expand {
    width: 70%;
  }
</style>
