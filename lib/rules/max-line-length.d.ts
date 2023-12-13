import type { RegExpLike, RuleConfig } from 'stylelint-define-config'

export type MaxLineLengthOptions = RuleConfig<
  number,
  {
    ignore?: ('non-comments' | 'comments')[]
    ignorePattern?: RegExpLike[]
  }
>
