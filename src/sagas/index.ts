import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects'
import axios from 'axios'
import qs from 'qs'

import { api } from '../config/api'

import * as types from '../constants'

import uniqWith from 'lodash/uniqWith'


export function* getRegionsSaga(): any {
  try {
    yield put( { type: types.GET_REGIONS_REQUEST } )

    const response = yield call( axios.get, api.getAll(), {
      params: {
        fields: ['region']
      },
      paramsSerializer: ( params ) => qs.stringify( params, {
        arrayFormat: 'comma',
        delimiter: ';'
      } )
    } )

    const regionsDuplicateFree = uniqWith(
      response.data, ( one: { region: string }, another: { region: string } ) => ( !one.region || one.region === another.region )
    ).map( ( region: { region: string } ) => region.region )

    yield put( {
      type: types.GET_REGIONS_SUCCESS,
      payload: regionsDuplicateFree
    } )
  } catch ( error ) {
    yield put( { type: types.GET_REGIONS_FAILURE, payload: error.response.data } )
  } finally {
    yield put( { type: types.GET_REGIONS_FULFILL } )
  }
}

function* watchGettingRegionsSaga() {
  yield takeLatest( types.GET_REGIONS_TRIGGER, getRegionsSaga )
}

interface IGetCountriesByRegionSagaAction {
  type: string
  payload: {
    region: string
  }
}

export function* getCountriesByRegionSaga( { payload }: IGetCountriesByRegionSagaAction ): any {
  try {
    yield put( { type: types.GET_COUNTRIES_BY_REGION_REQUEST } )

    const response = yield call( axios.get, api.getCountriesByRegion( payload.region ) )

    yield put( {
      type: types.GET_COUNTRIES_BY_REGION_SUCCESS,
      payload: response.data
    } )
  } catch ( error ) {
    yield put( { type: types.GET_COUNTRIES_BY_REGION_FAILURE, payload: error.response.data } )
  } finally {
    yield put( { type: types.GET_COUNTRIES_BY_REGION_FULFILL } )
  }
}

function* watchGettingCountriesByRegionSaga() {
  yield takeLatest( types.GET_COUNTRIES_BY_REGION_TRIGGER, getCountriesByRegionSaga )
}

interface IGetCountryByNameSagaAction {
  type: string
  payload: {
    name: string
  }
}

export function* getCountryByNameSaga( { payload }: IGetCountryByNameSagaAction ): any {
  try {
    yield put( { type: types.GET_COUNTRY_BY_NAME_REQUEST } )

    const response = yield call( axios.get, api.getCountryByName( payload.name ) )

    yield put( {
      type: types.GET_COUNTRY_BY_NAME_SUCCESS,
      payload: response.data[0]
    } )
  } catch ( error ) {
    yield put( { type: types.GET_COUNTRY_BY_NAME_FAILURE, payload: error.response.data } )
  } finally {
    yield put( { type: types.GET_COUNTRY_BY_NAME_FULFILL } )
  }
}

function* watchGettingCountryByNameSaga() {
  yield takeLatest( types.GET_COUNTRY_BY_NAME_TRIGGER, getCountryByNameSaga )
}

export default [
  watchGettingRegionsSaga(),
  watchGettingCountriesByRegionSaga(),
  watchGettingCountryByNameSaga()
]
