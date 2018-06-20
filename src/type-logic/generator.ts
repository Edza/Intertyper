import { types, relations } from './common'
import { getRandomInt } from '@/utility/js-helpers'

class QuestionGenerator {
  public New (): string {
    const typesCount = types.length
    const relationsCount = relations.length

    const chosenRelation = relations[getRandomInt(0, relationsCount - 1)]
    const chosenType1 = types[getRandomInt(0, typesCount - 1)]
    const chosenType2 = types[getRandomInt(0, typesCount - 1)]

    return `${chosenType1} ${chosenRelation} ${chosenType2} ?`
  }
}

export { QuestionGenerator }
