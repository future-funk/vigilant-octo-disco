import { Company } from '@bpd/market-transactions/shared/data-access'
import { Modal } from '@gic/battlefield-ui-pack'
import { FC } from 'react'
import { DEFAULT_COMPANY_DECOMP } from '../../constants'
import { useRadioState } from '../../hooks'
import CompanyTxnGrid from './CompanyTxnGrid'
import DecomByDimension from './DecompByDimension'
import DecompTitle from './DecompTitle'
import ViewTypeSelector from './ViewTypeSelector'

export interface CompanyDecompositionProps {
  selectedRow: Company
  onCloseModal: () => void
}

const CompanyDecomposition: FC<CompanyDecompositionProps> = (props) => {
  const { onCloseModal, selectedRow } = props

  const { companyName, companyCountry } = selectedRow

  const { value: timeframe, onChange: onChangeTimeframe } = useRadioState(
    DEFAULT_COMPANY_DECOMP.timeframe
  )

  const { value: viewType, onChange: onChangeViewType } = useRadioState(
    DEFAULT_COMPANY_DECOMP.viewType
  )

  return (
    <Modal
      visible
      destroyOnClose
      disableFooter
      width={1024}
      bodyStyle={{ minHeight: 500 }}
      title={<DecompTitle {...{ selectedRow, timeframe, onChangeTimeframe }} />}
      onCancel={onCloseModal}
    >
      <ViewTypeSelector {...{ viewType, onChangeViewType }} />
      <DecomByDimension
        {...{
          viewType,
          dimension: 'Country',
          timeframe,
          companyName,
          companyCountry,
        }}
      />
      <DecomByDimension
        {...{
          viewType,
          dimension: 'Sector',
          timeframe,
          companyName,
          companyCountry,
        }}
      />
      <CompanyTxnGrid {...{ timeframe, companyName, companyCountry }} />
    </Modal>
  )
}

export default CompanyDecomposition
