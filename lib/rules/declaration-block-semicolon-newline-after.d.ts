import type { RuleConfig } from 'stylelint-define-config'

export type DeclarationBlockSemicolonNewlineAfterOptions = RuleConfig<
  'always' | 'always-multi-line' | 'never-multi-line'
>
