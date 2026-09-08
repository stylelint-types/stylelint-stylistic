import type { RuleConfig } from 'stylelint-define-config'

export type ColorHexCaseOptions = RuleConfig<'lower' | 'upper', [value: string, expected: string]>
