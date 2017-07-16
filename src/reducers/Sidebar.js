import * as types from '../constants/ActionsTypes'

function Sidebar (state = {}, action) {
  switch (action.type) {
    case types.EXTEND_SIDEBAR:
      let sidebar = Object.assign({}, state, {
        expanded: action.status
      })

      return sidebar
    case types.SIDEBAR_OPEN:
      let sidebarOpen = Object.assign({}, state, {
        opened: action.status
      })

      return sidebarOpen
    default:
      state = Object.assign({}, state, {
        expanded: true,
        opened: true
      })

      return state
  }
}

export default Sidebar
