import type { RuleConfig } from 'stylelint-define-config'

export type SelectorPseudoElementCaseOptions = RuleConfig<
  'lower' | 'upper',
  {
    message?: string | ((pseudoElement: string, expectedPseudoElement: string) => string)
  }
>
