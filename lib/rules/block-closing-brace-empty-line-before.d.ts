import type { RuleConfig } from 'stylelint-define-config'

export type BlockClosingBraceEmptyLineBeforeOptions = RuleConfig<
  'always-multi-line' | 'never',
  {
    except?: ('after-closing-brace')[]
  }
>
