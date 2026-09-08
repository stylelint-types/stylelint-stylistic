import type { RegExpLike, RuleConfig } from 'stylelint-define-config'

export type FunctionCommaNewlineAfterOptions = RuleConfig<
  'always' | 'always-multi-line' | 'never-multi-line',
  [],
  {
    /**
     * Ignore the commas of specified functions, including the commas of any function nested within them.
     *
     * Function names are matched case-sensitively as written. Use a case-insensitive regex (e.g. `"/^translate$/i"`) to match other letter cases. This is important for custom functions like `--my-function()`, whose names are case-sensitive.
     */
    ignoreFunctions?: RegExpLike[]
  }
>
