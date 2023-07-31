/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/swell/src
  Changes: None
*/
import * as Core from '@vercel/commerce/types/login'
import { LoginBody, LoginTypes } from '@vercel/commerce/types/login'

export * from '@vercel/commerce/types/login'

export type LoginHook<T extends LoginTypes = LoginTypes> = {
  data: null
  actionInput: LoginBody
  fetcherInput: LoginBody
  body: T['body']
}
