import { BpdSpinner, SfErrorWrapper } from '@bpd/bpd-web/shared/ui'
import { DawBlueprintApiQueries } from '@bpd/daw/shared/data-access'
import { Stack } from '@gic/battlefield-ui-pack'
import { Fragment, useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import DawSchemaForm from './DawSchemaForm'
import { dealPreDealChecklistSchema } from '../configs'
import { get, orderBy, size } from 'lodash'

export interface PredealChecklistProps {}

const PredealChecklist = () => {
  const { data, isFetching } = DawBlueprintApiQueries.useGetChecklist({
    dealId: 'dummyId',
  })

  const {
    formState: { errors },
    unregister,
  } = useFormContext()

  const { replace } = useFieldArray({
    name: 'checkList.preDeal',
    keyName: 'refId',
  })

  useEffect(() => {
    if (data) {
      const {
        checkList: { preDeal },
      } = data ?? {}
      replace(orderBy(preDeal, ['displayIndex'], ['asc']))
    }
  }, [data])

  useEffect(() => {
    return () => {
      unregister('checkList.preDeal')
    }
  }, [unregister])

  const meta =
    size(data ?? []) <= 0 && get(errors, 'checkList.preDeal[0].value', '')
      ? {
          error: {
            message: get(
              errors,
              'checkList.preDeal[0].value.message',
              ''
            ) as string,
            type: 'required',
          },
        }
      : { error: undefined }

  return (
    <Stack spacing={1}>
      <SfErrorWrapper
        input={{ name: 'checkList.preDeal[0].value' }}
        meta={meta}
      >
        <Fragment>{isFetching ? <BpdSpinner /> : null}</Fragment>
      </SfErrorWrapper>
      <DawSchemaForm uiSchema={dealPreDealChecklistSchema} />
    </Stack>
  )
}

export default PredealChecklist
