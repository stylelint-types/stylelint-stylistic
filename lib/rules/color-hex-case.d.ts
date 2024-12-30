import type { RuleConfig } from 'stylelint-define-config'

export type ColorHexCaseOptions = RuleConfig<
  'lower' | 'upper',
  {
    message?: string | ((value: string, expected: string) => string)
  }
>
