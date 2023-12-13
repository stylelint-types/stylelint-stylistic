import type { RuleConfig } from 'stylelint-define-config'

export type FunctionCommaSpaceBeforeOptions = RuleConfig<
  'always' | 'never' | 'always-single-line' | 'never-single-line'
>
