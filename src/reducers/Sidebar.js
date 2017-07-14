import * as types from '../constants/ActionsTypes'

function Sidebar (state = {}, action) {
  switch (action.type) {
    case types.EXTEND_SIDEBAR:
      let sidebar = Object.assign({}, state, {
        expanded: action.status
      })

      return sidebar
    default:
      state = Object.assign({}, state, {
        expanded: true
      })

      return state
  }
}

export default Sidebar
