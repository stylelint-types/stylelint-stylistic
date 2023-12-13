import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type IndentationOptions = RuleConfig<
  LiteralUnion<2 | 4, number> | 'tab',
  {
    baseIndentLevel?: number | 'auto'
    indentInsideParens?: 'twice' | 'once-at-root-twice-in-block'
    indentClosingBrace?: boolean
    except?: ('block' | 'param' | 'value')[]
    ignore?: ('inside-parens' | 'param' | 'value')[]
  }
>
