import type { RuleConfig } from 'stylelint-define-config'

export type ValueListCommaSpaceBeforeOptions = RuleConfig<
  'always' | 'never' | 'always-single-line' | 'never-single-line'
>
