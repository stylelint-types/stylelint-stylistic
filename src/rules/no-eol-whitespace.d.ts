import type { RuleConfig } from 'stylelint-define-config'

export type NoEolWhitespaceOptions = RuleConfig<
  true,
  {
    ignore?: ('empty-lines')[]
  }
>
