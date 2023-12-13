import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type SelectorMaxEmptyLinesOptions = RuleConfig<
  LiteralUnion<0 | 1, number>
>
