import { OneTimeCheckOutDtoModel } from ".."
import { checkoutActionTypes } from "./OneTimeCheckOutActionTypes"
export const actions = {
    createonetimecheckout: () => ({ type: checkoutActionTypes.CreateOneTimeCheckOut }),
    getonetimecheckouts: () => ({ type: checkoutActionTypes.OneTimeCheckOuts }),
    fulfilonetimecheckouts: (checkouts: OneTimeCheckOutDtoModel[]) =>
        ({ type: checkoutActionTypes.FufilOneTimeCheckOuts, payload: { checkouts } }),
    getonetimecheckout: () => ({ type: checkoutActionTypes.OneTimeCheckOut }),
    fulfilonetimecheckout: (checkout: OneTimeCheckOutDtoModel) =>
        ({ type: checkoutActionTypes.FufilOneTimeCheckOuts, payload: { checkout } }),
}