import { AuthModel } from './AuthModel'
import { UserAddressModel } from './UserAddressModel'
import { UserEmailSettingsModel } from './UserEmailSettingsModel'

export interface UserModel {
  userId: string
  businessname?: string
  accountmodel?: boolean
  password: string | undefined
  email: string
  phone?: string
  roles?: Array<number>
  pic?: string
  language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'
  timeZone?: string
  website?: 'https://defipay.com'
  emailSettings?: UserEmailSettingsModel
  auth?: AuthModel
  address?: UserAddressModel
}
