import * as types from '../constants'


type StateType = {
  error: null | string
  isLoading: boolean
  data: any
}

const INITIAL_STATE = {
  error: null,
  isLoading: true,
  data: null
}

type ActionType = {
  type: string
  payload: any
}

export const regionsReducer = ( state: StateType = INITIAL_STATE, action: ActionType ): StateType => {
  switch ( action.type ) {
    case types.GET_REGIONS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_REGIONS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null
      }
    case types.GET_REGIONS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case types.GET_REGIONS_FULFILL:
      return {
        ...state,
        isLoading: false
      }
    case types.RESET_REGIONS:
      return {
        ...INITIAL_STATE
      }
    default:
      return state
  }
}
