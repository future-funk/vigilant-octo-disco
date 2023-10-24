import { withTheme } from '@bpd/bpd-web/shared/theme'
import { orderByConfig } from '@bpd/bpd-web/shared/ui'
import { Research, getResearch } from '@bpd/esg-ade-portal/shared/data-access'
import { Stack } from '@gic/battlefield-ui-pack'
import { map } from 'lodash'
import { FC, useMemo } from 'react'
import ResearchCard from './ResearchCard'
import ResearchModal from './ResearchModal'

export interface ResearchDrawerProps {}

const StyledResearchWrapper = withTheme(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: 16,
  '&&& .battlefield-card': {
    display: 'flex',
    height: '100%',
  },
})

const StyledResearchCardWrapper = withTheme(Stack)({
  flexDirection: 'column',
  flexGrow: 0,
  flexShrink: 0,
})

const ResearchDrawer: FC<ResearchDrawerProps> = () => {
  const researches = useMemo(
    () =>
      orderByConfig(getResearch(), {
        field: 'published_dt',
        order: 'desc',
      }),
    []
  )

  return (
    <>
      <StyledResearchWrapper>
        {map(researches, (value: Research) => {
          return (
            <StyledResearchCardWrapper
              key={value.id}
              sx={{ maxWidth: { xxl: '400px', xl: '300px', lg: '375px' } }}
            >
              <ResearchCard key={`research-${value.id}`} value={value} />
            </StyledResearchCardWrapper>
          )
        })}
      </StyledResearchWrapper>
      <ResearchModal />
    </>
  )
}

export default ResearchDrawer
