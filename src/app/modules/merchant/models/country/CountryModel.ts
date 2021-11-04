import { BaseModel } from "../BaseModel";

export interface CountryModel extends BaseModel {
    data: {
        countryid: number
        name: string
        code: string
    }
}
