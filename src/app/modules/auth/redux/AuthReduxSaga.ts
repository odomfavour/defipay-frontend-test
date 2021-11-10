import { put, takeLatest } from 'redux-saga/effects'
import { actionTypes } from './AuthActionTypes'
import { actions } from './AuthActions'
import { getUserByToken } from './AuthCRUD'

export function* authSaga() {
    yield takeLatest(actionTypes.Login, function* loginSaga() {
        yield put(actions.requestUser())
    })

    yield takeLatest(actionTypes.Register, function* registerSaga() {
        yield put(actions.requestUser())
    })

    yield takeLatest(actionTypes.ConfirmEmail, function* confirmEmailSaga() {
        // const { data: user } = yield confirmemail()
        yield put(actions.confirmemail())
    })
    yield takeLatest(actionTypes.UserRequested, function* userRequested() {
        const { data: user } = yield getUserByToken()
        yield put(actions.fulfillUser(user))
    })

    // yield takeLatest(actionTypes.Logout, function* userLogOut() {
    //     const { data: user } = yield logOutUser()
    //     yield put(actions.logout())
    // })
}
