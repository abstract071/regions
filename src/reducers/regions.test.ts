import {
  regionsReducer,
  INITIAL_STATE
} from './regions'
import {
  GET_REGIONS_SUCCESS
} from '../constants'

describe( 'regions reducer', () => {
  it( 'should update data', () => {
    const payload = [
      'Europe',
      'Americas'
    ]
    const action = {
      type: GET_REGIONS_SUCCESS,
      payload
    }
    const expected = {
      ...INITIAL_STATE,
      data: payload
    }
    expect( regionsReducer( undefined, action ) ).toEqual( expected )
  } )
} )
