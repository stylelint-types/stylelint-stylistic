import type { RegExpLike, RuleConfig } from 'stylelint-define-config'

export type ValueSlashNewlineBeforeOptions = RuleConfig<
  'always' | 'always-multi-line' | 'never-multi-line',
  [],
  {
    /**
     * Ignore the solidi inside the specified functions, including those of any function nested within them.
     */
    ignoreFunctions?: RegExpLike[]
    /**
     * Ignore the solidi in the values of the specified properties.
     */
    ignoreProperties?: RegExpLike[]
  }
>
