import type { RuleConfig, LiteralUnion } from 'stylelint-define-config'

export type AspectRatioNotationOptions = RuleConfig<
  'ratio' | 'number-where-possible' | 'as-written',
  [],
  {
    /**
     * The two numbers of the ratio must be the smallest pair of whole numbers the same ratio can be written with.
     * @default false
     */
    smallestIntegers?: boolean

    /**
     * Leave the `<ratio>` of a media feature alone, and read the value of the property only.
     */
    ignore?: LiteralUnion<'at-rules'>[]
  }
>
