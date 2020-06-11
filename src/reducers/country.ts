import * as types from '../constants'


type StateType = {
  error: null | string
  isLoading: boolean
  country: any
}

const INITIAL_STATE = {
  error: null,
  isLoading: true,
  country: null
}

type ActionType = {
  type: string
  payload: any
}

export const countryReducer = ( state: StateType = INITIAL_STATE, action: ActionType ): StateType => {
  switch ( action.type ) {
    case types.GET_COUNTRY_BY_NAME_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_COUNTRY_BY_NAME_SUCCESS:
      return {
        ...state,
        country: action.payload,
        error: null
      }
    case types.GET_COUNTRY_BY_NAME_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case types.GET_COUNTRY_BY_NAME_FULFILL:
      return {
        ...state,
        isLoading: false
      }
    case types.RESET_COUNTRY_BY_NAME:
      return {
        ...INITIAL_STATE
      }
    default:
      return state
  }
}
