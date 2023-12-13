import type { RuleConfig } from 'stylelint-define-config'

export type BlockOpeningBraceNewlineBeforeOptions = RuleConfig<
  'always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line'
>
