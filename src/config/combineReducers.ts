import { combineReducers } from 'redux'

import { regionsReducer } from '../reducers/regions'
import { countriesReducer } from '../reducers/countries'
import { countryReducer } from '../reducers/country'


export default combineReducers( {
  regions: regionsReducer,
  countries: countriesReducer,
  country: countryReducer
} )
