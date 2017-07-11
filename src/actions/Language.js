import * as types from '../constants/ActionsTypes'

export function changeLanguage (language) {
  return {
    type: types.CHANGE_LANGUAGE,
    language
  }
}
