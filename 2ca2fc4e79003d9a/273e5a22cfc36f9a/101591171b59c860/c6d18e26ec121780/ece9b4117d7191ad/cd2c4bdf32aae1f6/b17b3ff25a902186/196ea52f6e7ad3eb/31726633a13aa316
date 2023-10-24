import { FC, useMemo } from 'react'
import { chain } from 'lodash'
import { useWatch } from 'react-hook-form'
import { BpdSteps, BpdStepsProps } from '@bpd/bpd-web/shared/ui'
import { DEAL_STATUS } from '@bpd/ui/constants'
import { CREATE_DEAL_STEPS } from '../configs'

import PredealChecklist from './PredealChecklist'
import PreDealChecklistHeader from './PreDealChecklistHeader'
export interface DealContentProps {
  steps?: BpdStepsProps['steps']
}

export const PRE_DEAL_CHECKLIST = {
  key: 'predeal-checklist',
  title: <PreDealChecklistHeader />,
  content: <PredealChecklist />,
}

const DealContent: FC<DealContentProps> = ({ steps = CREATE_DEAL_STEPS }) => {
  const status = useWatch({ name: 'status' })

  const modifedSteps = useMemo(() => {
    if (status === DEAL_STATUS.UNDER_CONSIDERATION) {
      const news = chain([...steps])
        .flatMap((step) => {
          if (step.key === 'preliminary') {
            return [step, PRE_DEAL_CHECKLIST]
          }
          return step
        })
        .value()
      return news
    }
    return steps
  }, [status])

  return <BpdSteps steps={modifedSteps} />
}

export default DealContent
