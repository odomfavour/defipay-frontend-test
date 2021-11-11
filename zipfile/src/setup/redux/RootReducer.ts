import { all } from 'redux-saga/effects'
import { combineReducers } from 'redux'

import * as auth from '../../app/modules/auth'
import * as merchant from '../../app/modules/merchant'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  merchant: merchant.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.authSaga(), merchant.merchantSaga()])
}
