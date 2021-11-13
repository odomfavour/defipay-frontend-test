import { all } from 'redux-saga/effects'
import { combineReducers } from 'redux'

import * as auth from '../../app/modules/auth'
import * as merchant from '../../app/modules/merchant'
import * as payment from '../../app/modules/payments'
import * as invoice from '../../app/modules/invoice'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  merchant: merchant.reducer,
  payment: payment.reducer,
  invoice: invoice.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.authSaga(), merchant.merchantSaga(),
  payment.paymentSaga(),
  invoice.invoiceSaga()])
}
