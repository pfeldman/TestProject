import * as types from '../constants/ActionsTypes'

function Language (state = {}, action) {
  switch (action.type) {
    case types.CHANGE_LANGUAGE:
      let language = Object.assign({}, state, {
        language: action.language
      })

      return language
    default:
      state = Object.assign({}, state, {
        language: 'es'
      })

      return state
  }
}

export default Language
