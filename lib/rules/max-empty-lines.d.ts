import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type MaxEmptyLinesOptions = RuleConfig<
  LiteralUnion<1 | 2, number>,
  {
    ignore?: ('comments')[]
  }
>
