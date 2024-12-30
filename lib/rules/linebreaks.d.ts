import type { RuleConfig } from 'stylelint-define-config'

export type LinebreaksOptions = RuleConfig<
  number,
  {
    message?: string | ((emptyLines: string) => string)
  }
>
