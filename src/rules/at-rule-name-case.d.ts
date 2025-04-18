import type { RuleConfig } from 'stylelint-define-config'

export type AtRuleNameCaseOptions = RuleConfig<
  'lower' | 'upper',
  {
    message?: string | ((name: string, expectedName: string) => string)
  }
>
