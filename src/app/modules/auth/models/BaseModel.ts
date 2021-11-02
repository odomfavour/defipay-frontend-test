import { UserModel } from "./UserModel";

export interface BaseModel {
    message: string
    code?: string
    success: boolean
    data: UserModel
}
