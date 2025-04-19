import type { RuleConfig } from 'stylelint-define-config'

export type MediaFeatureNameCaseOptions = RuleConfig<
  'lower' | 'upper',
  {
    message?: string | ((name: string, expectedName: string) => string)
  }
>
