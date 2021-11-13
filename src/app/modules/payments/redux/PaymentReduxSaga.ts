import { put, takeLatest } from 'redux-saga/effects'
import { paymentActionTypes } from './PaymentActionTypes'
import { actions } from './PaymentActions'
import { OneTimePaymentViewModel, PaymentPlanModel, readAllPaymentPlan, readOneTimePaymentPages } from '..'


export function* paymentSaga() {

    yield takeLatest(paymentActionTypes.PaymentPlan, function* allPlansRequested() {
        const { data } = yield readAllPaymentPlan()
        const paymentplans = data.data as PaymentPlanModel[];
        yield put(actions.fulfilpaymentplan(paymentplans))
    })

    yield takeLatest(paymentActionTypes.OnetimePaymentPage, function* requestOneTimePage() {
        const { data } = yield readOneTimePaymentPages()
        const otpayments = data.data as OneTimePaymentViewModel[];
        yield put(actions.fulfilonetimepaymentpages(otpayments))
    })
}
