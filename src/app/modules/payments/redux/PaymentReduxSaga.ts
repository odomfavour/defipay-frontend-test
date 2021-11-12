import { put, takeLatest } from 'redux-saga/effects'
import { paymentActionTypes } from './PaymentActionTypes'
import { actions } from './PaymentActions'
import { PaymentPlanModel, readAllPaymentPlan } from '..'


export function* paymentSaga() {

    yield takeLatest(paymentActionTypes.PaymentPlan, function* allPlansRequested() {
        const { data } = yield readAllPaymentPlan()
        const paymentplans = data.data as PaymentPlanModel[];
        yield put(actions.fulfilpaymentplan(paymentplans))
    })

    // yield takeLatest(paymentActionTypes.LinkPusher, function* getLink() {
    //     const { data: user } = yield logOutUser()
    //     yield put(actions.logout())
    // })
}
