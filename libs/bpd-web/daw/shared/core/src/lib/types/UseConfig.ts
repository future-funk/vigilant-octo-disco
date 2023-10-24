import { Config, PageConfig } from '@bpd/bpd-web/shared/core'
import { z } from 'zod'
import { LayoutBodyProps } from '../layouts'

export type UseConfig<T = PageConfig> = () => Partial<Config<T>>

export interface RequestTypePageConfig<T = LayoutBodyProps>
  extends PageConfig<T> {}
