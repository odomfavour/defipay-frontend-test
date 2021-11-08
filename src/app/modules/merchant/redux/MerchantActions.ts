import { BusinessTypeModel, CountryModel, IndustryModel } from ".."
import { merchantActionTypes } from "./MerchantActionTypes"
export const actions = {
    getcountry: () => ({ type: merchantActionTypes.Country }),
    fulfilcountry: (country: CountryModel[]) =>
        ({ type: merchantActionTypes.FulfilCountry, payload: { country } }),
    getbusinesstypes: () => ({ type: merchantActionTypes.Business }),
    fulfilbusinesstypes: (businesstype: BusinessTypeModel[]) =>
        ({ type: merchantActionTypes.FulfilBusiness, payload: { businesstype } }),
    getindustry: () => ({ type: merchantActionTypes.Business }),
    fulfilindustry: (industry: IndustryModel[]) =>
        ({ type: merchantActionTypes.FufilIndustry, payload: { industry } })
}