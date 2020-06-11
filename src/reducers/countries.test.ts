import {
  countriesReducer,
  INITIAL_STATE
} from './countries'
import {
  GET_COUNTRIES_BY_REGION_SUCCESS
} from '../constants'


describe( 'countries reducer', () => {
  it( 'should update data', () => {
    const payload = [
      { name: 'Spain' },
      { name: 'Switzerland' }
    ]
    const action = {
      type: GET_COUNTRIES_BY_REGION_SUCCESS,
      payload
    }
    const expected = {
      ...INITIAL_STATE,
      data: payload
    }
    expect( countriesReducer( undefined, action ) ).toEqual( expected )
  } )
} )
