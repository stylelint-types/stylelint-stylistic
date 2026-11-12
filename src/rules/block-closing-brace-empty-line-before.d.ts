import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type BlockClosingBraceEmptyLineBeforeOptions = RuleConfig<
  'always-multi-line' | 'never',
  [],
  {
    except?: LiteralUnion<'after-closing-brace' | 'last-nested'>[]
  }
>
