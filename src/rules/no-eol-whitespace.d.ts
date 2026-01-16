import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type NoEolWhitespaceOptions = RuleConfig<
  true,
  [],
  {
    ignore?: LiteralUnion<'empty-lines'>[]
  }
>
