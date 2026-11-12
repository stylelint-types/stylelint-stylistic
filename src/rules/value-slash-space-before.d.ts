import type { RegExpLike, RuleConfig, Arrayable } from 'stylelint-define-config'

export type ValueSlashSpaceBeforeOptions = RuleConfig<
  'always' | 'never' | 'always-single-line' | 'never-single-line',
  [],
  {
    /**
     * Ignore the solidi inside the specified functions, including those of any function nested within them.
     */
    ignoreFunctions?: Arrayable<RegExpLike>
    /**
     * Ignore the solidi in the values of the specified properties.
     */
    ignoreProperties?: Arrayable<RegExpLike>
  }
>
