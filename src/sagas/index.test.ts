import {
  call,
  put
} from 'redux-saga/effects'
import axios from 'axios'
import qs from 'qs'

import {
  getRegionsSaga,
  getCountriesByRegionSaga,
  getCountryByNameSaga
} from './index'

import { api } from '../config/api'

import * as types from '../constants'


describe( 'getting regions saga', () => {
  it( 'should get regions successfully', () => {
    const response = {
      data: [
        { region: 'Polar' },
        { region: 'Oceania' }
      ]
    }
    const iterator = getRegionsSaga()

    iterator.next()

    expect( JSON.stringify( iterator.next().value ) ).toEqual( JSON.stringify( call( axios.get, api.getAll(), {
      params: {
        fields: ['region']
      },
      paramsSerializer: ( params ) => qs.stringify( params, {
        arrayFormat: 'comma',
        delimiter: ';'
      } )
    } ) ) )
    expect( iterator.next( response ).value )
      .toEqual( put( {
        type: types.GET_REGIONS_SUCCESS,
        payload: ['Polar', 'Oceania']
      } ) )
    expect( iterator.next().value )
      .toEqual( put( { type: types.GET_REGIONS_FULFILL } ) )
  } )

  it( 'should get regions with an error', () => {
    const error = { response: { data: { message: 'Something went wrong' } } }
    const iterator = getRegionsSaga()

    iterator.next()

    expect( JSON.stringify( iterator.next().value ) ).toEqual( JSON.stringify( call( axios.get, api.getAll(), {
      params: {
        fields: ['region']
      },
      paramsSerializer: ( params ) => qs.stringify( params, {
        arrayFormat: 'comma',
        delimiter: ';'
      } )
    } ) ) )
    expect( iterator.throw( error ).value )
      .toEqual( put( { type: types.GET_REGIONS_FAILURE, payload: error.response.data } ) )
    expect( iterator.next().value )
      .toEqual( put( { type: types.GET_REGIONS_FULFILL } ) )
  } )
} )

describe( 'getting countries saga', () => {
  const action = { type: '', payload: { region: 'Asia' } }

  it( 'should get countries successfully', () => {
    const response = {
      data: [
        { name: 'China' },
        { name: 'India' }
      ]
    }
    const iterator = getCountriesByRegionSaga( action )

    iterator.next()

    expect( JSON.stringify( iterator.next().value ) ).toEqual( JSON.stringify( call( axios.get, api.getCountriesByRegion( action.payload.region ) ) ) )
    expect( iterator.next( response ).value )
      .toEqual( put( {
        type: types.GET_COUNTRIES_BY_REGION_SUCCESS,
        payload: response.data
      } ) )
    expect( iterator.next().value )
      .toEqual( put( { type: types.GET_COUNTRIES_BY_REGION_FULFILL } ) )
  } )

  it( 'should get countries with an error', () => {
    const error = { response: { data: { message: 'Something went wrong' } } }
    const iterator = getCountriesByRegionSaga( action )

    iterator.next()

    expect( JSON.stringify( iterator.next().value ) ).toEqual( JSON.stringify( call( axios.get, api.getCountriesByRegion( action.payload.region ) ) ) )
    expect( iterator.throw( error ).value )
      .toEqual( put( { type: types.GET_COUNTRIES_BY_REGION_FAILURE, payload: error.response.data } ) )
    expect( iterator.next().value )
      .toEqual( put( { type: types.GET_COUNTRIES_BY_REGION_FULFILL } ) )
  } )
} )

describe( 'getting country saga', () => {
  const action = { type: '', payload: { name: 'Asia' } }

  it( 'should get country successfully', () => {
    const response = {
      data: [
        { name: 'India' }
      ]
    }
    const iterator = getCountryByNameSaga( action )

    iterator.next()

    expect( JSON.stringify( iterator.next().value ) ).toEqual( JSON.stringify( call( axios.get, api.getCountryByName( action.payload.name ) ) ) )
    expect( iterator.next( response ).value )
      .toEqual( put( {
        type: types.GET_COUNTRY_BY_NAME_SUCCESS,
        payload: response.data[0]
      } ) )
    expect( iterator.next().value )
      .toEqual( put( { type: types.GET_COUNTRY_BY_NAME_FULFILL } ) )
  } )

  it( 'should get country with an error', () => {
    const error = { response: { data: { message: 'Something went wrong' } } }
    const iterator = getCountryByNameSaga( action )

    iterator.next()

    expect( JSON.stringify( iterator.next().value ) ).toEqual( JSON.stringify( call( axios.get, api.getCountryByName( action.payload.name ) ) ) )
    expect( iterator.throw( error ).value )
      .toEqual( put( { type: types.GET_COUNTRY_BY_NAME_FAILURE, payload: error.response.data } ) )
    expect( iterator.next().value )
      .toEqual( put( { type: types.GET_COUNTRY_BY_NAME_FULFILL } ) )
  } )
} )
