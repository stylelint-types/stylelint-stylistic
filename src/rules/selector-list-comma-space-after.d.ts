import type { RuleConfig } from 'stylelint-define-config'

export type SelectorListCommaSpaceAfterOptions = RuleConfig<
  'always' | 'never' | 'always-single-line' | 'never-single-line'
>
