import type { RuleConfig } from 'stylelint-define-config'

export type BlockOpeningBraceNewlineAfterOptions = RuleConfig<
  'always' | 'always-multi-line' | 'never-multi-line',
  {
    ignore?: ('rules')[]
  }
>
