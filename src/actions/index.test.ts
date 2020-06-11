import {
  getRegions,
  resetRegions,
  getCountriesByRegion,
  resetCountriesByRegion,
  getCountryByName,
  resetCountryByName
} from './index'

import * as types from '../constants'


describe( 'actions', () => {
  it( 'should return proper action for getting regions', () => {
    const expected = { type: types.GET_REGIONS_TRIGGER }
    expect( getRegions() ).toEqual( expected )
  } )

  it( 'should return proper action for resetting regions', () => {
    const expected = { type: types.RESET_REGIONS }
    expect( resetRegions() ).toEqual( expected )
  } )

  it( 'should return proper action for getting countries by region', () => {
    const payload = { region: 'Europe' }
    const expected = { type: types.GET_COUNTRIES_BY_REGION_TRIGGER, payload: payload }
    expect( getCountriesByRegion( payload ) ).toEqual( expected )
  } )

  it( 'should return proper action for resetting countries by region', () => {
    const expected = { type: types.RESET_COUNTRIES_BY_REGION }
    expect( resetCountriesByRegion() ).toEqual( expected )
  } )

  it( 'should return proper action for getting country', () => {
    const payload = { name: 'Hungary' }
    const expected = { type: types.GET_COUNTRY_BY_NAME_TRIGGER, payload }
    expect( getCountryByName( payload ) ).toEqual( expected )
  } )

  it( 'should return proper action for resetting country', () => {
    const expected = { type: types.RESET_COUNTRY_BY_NAME }
    expect( resetCountryByName() ).toEqual( expected )
  } )
} )
