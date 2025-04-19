import type { RuleConfig } from 'stylelint-define-config'

export type NamedGridAreasAlignmentOptions = RuleConfig<true, {
  gap?: number
  alignQuotes?: boolean
  message?: string | (() => string)
}>
