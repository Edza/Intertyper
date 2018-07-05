import { types, relations } from '@/type-logic/common'
import { getRandomInt } from '@/utility/js-helpers'

interface QuestionReturnResult {
  questionText: string;
  type1: string;
  type2: string;
}

class QuestionGenerator {
  public New (): QuestionReturnResult {
    const typesCount = types.length
    const relationsCount = relations.length

    const chosenRelation = relations[getRandomInt(0, relationsCount - 1)]
    const chosenType1 = types[getRandomInt(0, typesCount - 1)]
    const chosenType2 = types[getRandomInt(0, typesCount - 1)]

    return {
      questionText: `${chosenType1} ${chosenRelation} ${chosenType2} ?`,
      type1: chosenType1,
      type2: chosenType2
    }
  }
}

export { QuestionGenerator, QuestionReturnResult }
