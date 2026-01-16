import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type IndentationOptions = RuleConfig<
  LiteralUnion<2 | 4, number> | 'tab',
  [expectation: string],
  {
    baseIndentLevel?: number | 'auto'
    indentInsideParens?: LiteralUnion<'twice' | 'once-at-root-twice-in-block'>
    indentClosingBrace?: boolean
    except?: LiteralUnion<'block' | 'param' | 'value'>[]
    ignore?: LiteralUnion<'inside-parens' | 'param' | 'value'>[]
  }
>
