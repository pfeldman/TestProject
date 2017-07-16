import * as types from '../constants/ActionsTypes'

export function expandSidebar (status) {
  return {
    type: types.EXTEND_SIDEBAR,
    status
  }
}

export function sidebarOpen (status) {
  return {
    type: types.SIDEBAR_OPEN,
    status
  }
}
