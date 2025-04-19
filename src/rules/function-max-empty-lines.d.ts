import type { RuleConfig } from 'stylelint-define-config'

export type FunctionMaxEmptyLinesOptions = RuleConfig<number, {
  message?: string | ((primary: number) => string)
}>
