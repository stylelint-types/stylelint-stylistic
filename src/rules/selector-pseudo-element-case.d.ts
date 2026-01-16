import type { RuleConfig } from 'stylelint-define-config'

export type SelectorPseudoElementCaseOptions = RuleConfig<
  'lower' | 'upper',
  [pseudoElement: string, expectedPseudoElement: string]
>
