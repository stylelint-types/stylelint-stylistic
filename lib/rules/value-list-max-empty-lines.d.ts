import type { RuleConfig } from 'stylelint-define-config'

export type ValueListMaxEmptyLinesOptions = RuleConfig<number, {
  message?: string | ((max: number) => string)
}>
