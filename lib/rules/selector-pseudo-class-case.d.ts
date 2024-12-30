import type { RuleConfig } from 'stylelint-define-config'

export type SelectorPseudoClassCaseOptions = RuleConfig<
  'lower' | 'upper',
  {
    message?: string | ((pseudoClass: string, expectedPseudoClass: string) => string)
  }
>
