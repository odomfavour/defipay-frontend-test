import { AuthModel } from './AuthModel'
import { UserAddressModel } from './UserAddressModel'
import { UserEmailSettingsModel } from './UserEmailSettingsModel'

export interface UserModel {
  id: number
  username: string
  password: string | undefined
  email: string
  firstname: string
  lastname: string
  fullname?: string
  occupation?: string
  companyName?: string
  phone?: string
  roles?: Array<number>
  pic?: string
  language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'
  timeZone?: string
  website?: 'https://keenthemes.com'
  emailSettings?: UserEmailSettingsModel
  auth?: AuthModel
  address?: UserAddressModel
}
