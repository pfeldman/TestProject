/* constants */
import * as types from '../constants/ActionsTypes'

/* Utils */
import { fetchData } from '../Utils'

function resolveExposureData (response) {
  console.log(response)
}

function fetchExposureData () {
  return fetchData('http://localhost:8080/surveyExposureData.json')
}

export function getExposureData () {
  return dispatch => {
    fetchExposureData().then(
      response => dispatch(resolveExposureData(response))
    )
  }
}
