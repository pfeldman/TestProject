import * as types from '../constants/ActionsTypes'

export function expandSidebar (status) {
  return {
    type: types.EXTEND_SIDEBAR,
    status
  }
}

export function sidebarOpen (status, height) {
  return {
    type: types.SIDEBAR_OPEN,
    status,
    height
  }
}
