import type { Extends, Plugins, RuleOptions } from './types'

declare module 'stylelint-define-config' {
  export interface CustomPlugins extends Plugins { }
  export interface CustomExtends extends Extends { }
  export interface CustomRuleOptions extends RuleOptions { }
}
