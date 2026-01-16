import type { LiteralUnion, RegExpLike, RuleConfig } from 'stylelint-define-config'

export type MaxLineLengthOptions = RuleConfig<
  number,
  [lineLength: number],
  {
    ignore?: LiteralUnion<'non-comments' | 'comments'>[]
    ignorePattern?: RegExpLike[]
  }
>
