import type { RuleConfig } from 'stylelint-define-config'

export type BlockClosingBraceSpaceBeforeOptions = RuleConfig<
  'always' | 'never' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line'
>
