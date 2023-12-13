import type { RuleConfig } from 'stylelint-define-config'

export type DeclarationBlockTrailingSemicolonOptions = RuleConfig<
  'always' | 'never',
  {
    ignore?: ('single-declaration')[]
  }
>
