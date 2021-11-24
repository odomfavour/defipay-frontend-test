import { BusinessTypeModel, CountryModel, IndustryModel } from ".."
import { IndustryCategoryModel } from "../models/industrycategory/IndustryCategoryModel"
import { StateOrRegionModel } from "../models/stateorregions/StateOrRegionModel"
import { merchantActionTypes } from "./MerchantActionTypes"
export const actions = {
    getcountry: () => ({ type: merchantActionTypes.Country }),
    fulfilcountry: (country: CountryModel[]) =>
        ({ type: merchantActionTypes.FulfilCountry, payload: { country } }),
    getstates: () => ({ type: merchantActionTypes.States }),
    fulfilstates: (states: StateOrRegionModel[]) =>
        ({ type: merchantActionTypes.FulfilStates, payload: { states } }),
    getbusinesstypes: () => ({ type: merchantActionTypes.Business }),
    fulfilbusinesstypes: (businesstype: BusinessTypeModel[]) =>
        ({ type: merchantActionTypes.FulfilBusiness, payload: { businesstype } }),
    getindustry: () => ({ type: merchantActionTypes.Industry }),
    fulfilindustry: (industry: IndustryModel[]) =>
        ({ type: merchantActionTypes.FufilIndustry, payload: { industry } }),
    getindustrycategory: () => ({ type: merchantActionTypes.IndustryCategory }),
    fulfilindustrycategory: (industrycategory: IndustryCategoryModel[]) =>
        ({ type: merchantActionTypes.FufilIndustryCategory, payload: { industrycategory } })
}