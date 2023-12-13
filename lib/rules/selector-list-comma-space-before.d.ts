import type { RuleConfig } from 'stylelint-define-config'

export type SelectorListCommaSpaceBeforeOptions = RuleConfig<
  'always' | 'never' | 'always-single-line' | 'never-single-line'
>
