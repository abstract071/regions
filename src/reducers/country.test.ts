import {
  countryReducer,
  INITIAL_STATE
} from './country'
import {
  GET_COUNTRY_BY_NAME_SUCCESS
} from '../constants'


describe( 'country reducer', () => {
  it( 'should update data', () => {
    const payload = { name: 'Spain' }
    const action = {
      type: GET_COUNTRY_BY_NAME_SUCCESS,
      payload
    }
    const expected = {
      ...INITIAL_STATE,
      country: payload
    }
    expect( countryReducer( undefined, action ) ).toEqual( expected )
  } )
} )
