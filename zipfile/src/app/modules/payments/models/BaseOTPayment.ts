import { OtPaymentModel } from "./OtPaymentModel";

export interface BaseModel {
    message: string
    code?: string
    success: boolean
    data: OtPaymentModel
}
