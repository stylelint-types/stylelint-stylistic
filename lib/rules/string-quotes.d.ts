import type { RuleConfig } from 'stylelint-define-config'

export type StringQuotesOptions = RuleConfig<
  'single' | 'double',
  {
    avoidEscape?: boolean
    message: string | ((quotes: string) => string)
  }
>
