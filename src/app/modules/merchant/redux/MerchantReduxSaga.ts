import { put, takeLatest } from 'redux-saga/effects'
import { merchantActionTypes } from './MerchantActionTypes'
import { actions } from './MerchantActions'
import { getcountries } from './MerchantCRUD'

export function* merchantSaga() {
    yield takeLatest(merchantActionTypes.Country, function* getCountrySaga() {
        //const { data } = yield call(getcountries());
        const { data } = yield getcountries()
        console.log("I GOT HERE", data)
        yield put(actions.fulfilcountry(data))
    })
}
