import type { RuleConfig } from 'stylelint-define-config'

export type UnitCaseOptions = RuleConfig<
  'lower' | 'upper',
  {
    message?: string | ((unit: string, expectedUnit: string) => string)
  }
>
