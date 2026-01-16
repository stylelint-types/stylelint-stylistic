import type { AtRules, RegExpLike, RuleConfig } from 'stylelint-define-config'

export type BlockOpeningBraceSpaceBeforeOptions = RuleConfig<
  'always' | 'never' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line',
  [],
  {
    ignoreAtRules?: (AtRules | RegExp)[]
    ignoreSelectors?: RegExpLike[]
  }
>
