import type { RuleConfig } from 'stylelint-define-config'

export type DeclarationBlockSemicolonSpaceBeforeOptions = RuleConfig<
  'always' | 'never' | 'always-single-line' | 'never-single-line'
>
