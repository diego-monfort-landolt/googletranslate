import { type AUTO_LANGUAGES, type SUPPORTED_LANGUAGES } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGES
export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  reult: string
  loading: boolean
}
export type Action =
| { type: 'SET_FROM_LANGUAGE', payload: FromLanguage } | { type: 'INTERCHANGE_LANGUAGE' }
| { type: 'SET_TO_LANGUAGE', payload: Language } | { type: 'SET_FROM_TEXT', payload: string }
| { type: 'SET_RESULT', payload: string }

export enum SectionType {
  From = 'from',
  To = 'to'
}
