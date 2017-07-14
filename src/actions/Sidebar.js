import * as types from '../constants/ActionsTypes'

export function expandSidebar (status) {
  return {
    type: types.EXTEND_SIDEBAR,
    status
  }
}
