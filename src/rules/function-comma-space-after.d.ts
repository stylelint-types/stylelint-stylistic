import type { RuleConfig } from 'stylelint-define-config'

export type FunctionCommaSpaceAfterOptions = RuleConfig<
  'always' | 'never' | 'always-single-line' | 'never-single-line'
>
