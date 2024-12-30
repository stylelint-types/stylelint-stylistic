import type { RuleConfig } from 'stylelint-define-config'

export type PropertyCaseOptions = RuleConfig<
  'lower' | 'upper',
  {
    message?: string | ((property: string, expectedProperty: string) => string)
  }
>
