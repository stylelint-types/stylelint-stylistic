import type { RuleConfig } from 'stylelint-define-config'

export type AtRuleNameCaseOptions = RuleConfig<
  'lower' | 'upper',
  [name: string, expectedName: string]
>
