<template>
<div>
  <div class="hello">
    <table class="center">
      <tr>
        <th rowspan="2">
          <img class="type-img" width="350" v-if="type1 != ''" :src="`${type1Url}`" />
        </th>
        <th><img width="170" src="../assets/logo.jpg"></th>
        <th rowspan="2">
          <img class="type-img" width="350" v-if="type2 != ''" :src="`${type2Url}`" />
        </th>
      </tr>
      <tr>
        <td><img class="reload clickable" width="60" src="../assets/buttons/refresh.png" @click="goNext" /></td>
      </tr>
    </table>
    <h1 class="main-question">{{ msg }}</h1>
  <div>
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
                                  class="emoji clickable"
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
import { QuestionGenerator, QuestionReturnResult } from '@/type-logic/generator'
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
  handler = new Vue()
  type1 = ''
  type2 = ''

  get type1Url ():string {
    return `./img/types/${this.type1}.png`
  }

  get type2Url ():string {
    return `./img/types/${this.type2}.png`
  }

  insert (emoji: any) {
    this.input += emoji
  }

  mounted () {
    if (this.isRandomQuestion) {
      const result : QuestionReturnResult = this.questions.New()
      this.type1 = result.type1
      this.type2 = result.type2
      this.msg = result.questionText
    } else {
      this.msg = 'not supported'
    }
  }

  moreEmojis () {
    this.allEmojis = !this.allEmojis
  }

  goNext () {
    // we will implement db logic later
    // need to save IP with request
    location.reload()
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

.center {
  margin-left: auto;
  margin-right: auto;
}

.clickable {
  cursor: pointer;
}

.main-question {
  margin-top: 00px;
  font-size: xx-large;
  letter-spacing: 3px;
}

.reload {
  padding-top: 20px;
  padding-bottom: 40px;
}
</style>
