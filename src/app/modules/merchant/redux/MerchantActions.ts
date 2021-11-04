import { CountryModel } from "../models/country/CountryModel"
import { merchantActionTypes } from "./MerchantActionTypes"
export const actions = {
    getcountry: () => ({ type: merchantActionTypes.Country }),
    fulfilcountry: (country: CountryModel[]) => ({ type: merchantActionTypes.FulfilCountry, payload: country })
}