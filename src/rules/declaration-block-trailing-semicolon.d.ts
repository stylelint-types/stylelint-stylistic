import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type DeclarationBlockTrailingSemicolonOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    ignore?: LiteralUnion<'single-declaration'>[]
  }
>
