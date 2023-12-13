import type { AtRules, RuleConfig } from 'stylelint-define-config'

export type BlockClosingBraceNewlineAfterOptions = RuleConfig<
  'always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line',
  {
    ignoreAtRules?: AtRules[]
  }
>
