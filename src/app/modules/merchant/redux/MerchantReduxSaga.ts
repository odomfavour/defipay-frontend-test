import { put, takeLatest } from 'redux-saga/effects'
import { merchantActionTypes } from './MerchantActionTypes'
import { actions } from './MerchantActions'
import { getcountries } from './MerchantCRUD'
import { CountryModel } from '../models/country/CountryModel'
import { BusinessTypeModel, getBusinessType, getIndustry, IndustryModel } from '..'

export function* merchantSaga() {
    yield takeLatest(merchantActionTypes.Country, function* getCountrySaga() {
        const { data } = yield getcountries()
        const country = data.data as CountryModel[];
        yield put(actions.fulfilcountry(country))
    })

    yield takeLatest(merchantActionTypes.Business, function* getBusinessTypeSaga() {
        const { data } = yield getBusinessType()
        const business = data.data as BusinessTypeModel[];
        yield put(actions.fulfilbusinesstypes(business))
    })

    yield takeLatest(merchantActionTypes.Industry, function* getIndustrySaga() {
        const { data } = yield getIndustry()
        const industry = data.data as IndustryModel[];
        yield put(actions.fulfilindustry(industry))
    })
}
