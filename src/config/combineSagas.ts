import { all } from 'redux-saga/effects'

import homeSagaWatchers from '../sagas'


export default function* rootSaga() {
  yield all( [
    ...homeSagaWatchers
  ] )
}
