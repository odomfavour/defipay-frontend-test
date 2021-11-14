import { put, takeLatest } from 'redux-saga/effects'
import { customerActionTypes } from './CustomerActionTypes'
import { actions } from './CustomerActions'
import { readAllCustomers, readOneCustomer } from './CustomerCrud'
import { CustomerViewModel } from '..'


export function* customerSaga() {

    yield takeLatest(customerActionTypes.Customers, function* allCustomerRequested() {
        const { data } = yield readAllCustomers()
        const customers = data.data as CustomerViewModel[];
        yield put(actions.fulfilcustomers(customers))
    })

    yield takeLatest(customerActionTypes.Customer, function* singleCustomerRequested(id: any) {
        const { data } = yield readOneCustomer(id)
        const customer = data.data as CustomerViewModel;
        yield put(actions.fulfilcustomer(customer))
    })
}
