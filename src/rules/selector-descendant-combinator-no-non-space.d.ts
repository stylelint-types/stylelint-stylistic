import type { RuleConfig } from 'stylelint-define-config'

export type SelectorDescendantCombinatorNoNonSpaceOptions = RuleConfig<true, {
  message?: string | ((value: string) => string)
}>
