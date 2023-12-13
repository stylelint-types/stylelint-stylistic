import type { RuleConfig } from 'stylelint-define-config'

export type BlockOpeningBraceSpaceAfterOptions = RuleConfig<
  'always' | 'never' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line',
  {
    ignore?: ('at-rules')[]
  }
>
