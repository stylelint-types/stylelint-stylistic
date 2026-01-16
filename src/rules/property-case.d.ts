import type { RuleConfig } from 'stylelint-define-config'

export type PropertyCaseOptions = RuleConfig<
  'lower' | 'upper',
  [property: string, expectedProperty: string]
>
