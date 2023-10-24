import { FC, useEffect } from 'react'
import { map, trim, every, get, head, split, join, chain } from 'lodash'
import {
  Widgets,
  BpdAutoCompleteProps,
  FieldProps,
  BpdSpinner,
  WithLoaderWidget,
} from '@bpd/bpd-web/shared/ui'
import {
  DawBlueprintApiQueries,
  RekiProjectSearch,
} from '@bpd/daw/shared/data-access'
import { useFormContext, useWatch } from 'react-hook-form'
import { Stack, StackProps } from '@gic/battlefield-ui-pack'
import { withTheme, WithThemeArgs } from '@bpd/bpd-web/shared/theme'

export interface MasterProjAutoCompleteProps {
  //impactFields [BP key, reki key][]
  projImpactFields?: [string, string][]
  nonProjImpactFields?: [string, string][]
}

interface MasterProjAutoCompleteWidgetProps
  extends MasterProjAutoCompleteProps,
    Omit<BpdAutoCompleteProps, 'onChange'>,
    FieldProps {
  onChange: (values: string | null) => void
}

const StyledLoaderContainer: FC<StackProps> = withTheme(Stack)(
  ({ theme }: StackProps & { theme: WithThemeArgs['theme'] }) => {
    return {
      backgroundColor: theme.palette.background.collapseContent,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      cursor: 'not-allowed',
    }
  }
)

const encodeLabel = (rekiProj: RekiProjectSearch) =>
  `${rekiProj.projId} - ${rekiProj.projName}`

const MasterProjAutoCompleteWidget: FC<MasterProjAutoCompleteWidgetProps> = ({
  uiField,
  input: { name, arrayIndices },
  value,
  projImpactFields,
  nonProjImpactFields,
  ...componentProps
}) => {
  const basePathString = head(split(name, '.masterProjectCode'))

  const masterProjName = useWatch({
    name: name.replace('masterProjectCode', 'masterProjectName'),
  })

  const {
    setValue,
    control: {
      _names: { array },
    },
  } = useFormContext()

  const [trigger, { data, isFetching, isLoading }] =
    DawBlueprintApiQueries.useLazyGetSearchRekiProjects()

  const [
    triggerToGetDetails,
    {
      data: details,
      isFetching: isDetailsFetching,
      isLoading: isDetailsLoading,
    },
  ] = DawBlueprintApiQueries.useLazyGetRekiProjectDetails()

  const onInternalSearch: BpdAutoCompleteProps['onSearch'] = (searchText) => {
    if (every([trim(searchText), trim(searchText).length >= 3])) {
      trigger({ searchText: trim(searchText) }, true)
    }
  }

  const onInternalSelect: BpdAutoCompleteProps['onSelect'] = (
    projCode: string
  ) => {
    triggerToGetDetails({ projCode }, true)
  }

  useEffect(() => {
    if (!details) return
    chain({
      proj: projImpactFields,
      nonProj: nonProjImpactFields,
    })
      .forEach((fields, group) => {
        ;(fields ?? []).forEach(([bpdKey, rekiKey]) => {
          const formKey =
            group === 'proj' ? join([basePathString, bpdKey], '.') : bpdKey
          const value = get(details, rekiKey, array.has(formKey) ? [] : null)
          setValue(formKey, value)
        })
      })
      .value()
  }, [details])

  return (
    <WithLoaderWidget isLoading={isDetailsFetching || isDetailsLoading}>
      <Widgets.BpdAutoCompleteWidget
        {...componentProps}
        {...{
          options:
            isLoading || isFetching
              ? [{ label: 'Loading...', value: '', disabled: true }]
              : map(
                  (data ||
                    (value
                      ? [{ projId: value, projName: masterProjName }]
                      : [])) as RekiProjectSearch[],
                  (rekiProj: RekiProjectSearch) => ({
                    label: encodeLabel(rekiProj),
                    value: rekiProj.projId,
                    key: rekiProj.projId,
                  })
                ),
          onSearch: onInternalSearch,
          onSelect: onInternalSelect,
          filterOption: () => true,
          value,
        }}
        disabled={isDetailsFetching}
        showSearch={!isDetailsFetching}
      />
    </WithLoaderWidget>
  )
}
export default MasterProjAutoCompleteWidget
