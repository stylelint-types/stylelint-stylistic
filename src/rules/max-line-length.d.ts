import type { LiteralUnion, RegExpLike, RuleConfig } from 'stylelint-define-config'

export type MaxLineLengthOptions = RuleConfig<
  number,
  [lineLength: number],
  {
    /**
     * Only enforce the line-length limit for lines that are not comments.
     */
    ignore?: LiteralUnion<'non-comments' | 'comments'>[]
    /**
     * gnore any line that matches the given regex pattern,
     * regardless of whether it is comment or not.
     * The regex may be passed as a string (for JSON configuration) by enclosing in
     * forward-slashes, or an ordinary JavaScript RegExp may be used.
     */
    ignorePattern?: RegExpLike[]
    /**
     * Measure a tab as reaching the next tab stop of the given width,
     * the way an editor with that tab size shows it, instead of as a single character.
     */
    tabSize?: number
  }
>
