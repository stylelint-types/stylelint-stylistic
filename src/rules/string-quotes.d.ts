import type { RuleConfig } from 'stylelint-define-config'

export type StringQuotesOptions = RuleConfig<
  'single' | 'double',
  [quotes: string],
  {
    avoidEscape?: boolean
  }
>
