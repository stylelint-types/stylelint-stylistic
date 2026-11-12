import type { RuleConfig } from 'stylelint-define-config'

export type NamedGridAreasAlignmentOptions = RuleConfig<
  true,
  [],
  {
    /**
     * Specifies the number of spaces between cell tokens
     * @default 1
     */
    gap?: number
    /**
     * Whether to align an ending quotes
     * @default false
     */
    alignQuotes?: boolean
    /**
     * Whether the line names and the sizes beside the rows of a grid-template or grid shorthand
     * are laid out as columns of a table
     * @default false
     */
    alignColumns?: boolean
  }
>
