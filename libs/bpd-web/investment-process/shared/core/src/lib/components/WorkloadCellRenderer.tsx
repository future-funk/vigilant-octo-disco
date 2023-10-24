import {
  DealDto,
  queries,
} from '@bpd/bpd-web/investment-process/shared/data-access'
import {
  BpdSpinner,
  BpdStaffingWorkloadCellRenderer,
  BpdStaffingWorkloadCellRendererProps,
  BpdStaffingWorkloadStaffProps,
} from '@bpd/bpd-web/shared/ui'
import { withToast } from '@bpd/vendors/react-hot-toast'
import { map } from 'lodash'
import { FC } from 'react'
import { useUpdateDeals } from '../hooks'

export interface WorkloadCellRendererProps
  extends BpdStaffingWorkloadCellRendererProps {
  data: DealDto
}

export const WorkloadCellRenderer: FC<WorkloadCellRendererProps> = (props) => {
  const { data } = props
  const { id, totalCommitment, staffs } = data

  const [putDeal, { isLoading, isSuccess }] = queries.usePutDeal()
  const { updateDeals, isLoading: isLoadingUpdateDeals } = useUpdateDeals()

  const onEdit = (staffs: BpdStaffingWorkloadStaffProps[]) => {
    withToast({
      action: async () => {
        await putDeal({
          url: { id },
          body: {
            staffs: map(staffs, (staff) => {
              return {
                id: staff.id,
                commitment: staff.commitment ?? 0,
              }
            }),
          },
        })
        await updateDeals()
      },

      loading: 'Updating staff information',
      success: 'Staff information has been successfully updated',
    })
  }
  return isLoadingUpdateDeals ? (
    <BpdSpinner />
  ) : (
    <BpdStaffingWorkloadCellRenderer
      onEdit={onEdit}
      isLoading={isLoading}
      isSuccess={isSuccess}
      team="eu"
      totalCommitment={totalCommitment}
      staffs={staffs}
    />
  )
}

export default WorkloadCellRenderer
