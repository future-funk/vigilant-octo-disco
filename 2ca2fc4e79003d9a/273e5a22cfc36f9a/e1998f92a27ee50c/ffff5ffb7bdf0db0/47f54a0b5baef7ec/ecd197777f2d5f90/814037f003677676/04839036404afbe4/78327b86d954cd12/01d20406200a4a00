import { withTheme } from '@bpd/bpd-web/shared/theme'
import {
  CaseStudyListItem,
  getCaseStudy,
} from '@bpd/esg-ade-portal/shared/data-access'
import { Stack } from '@gic/battlefield-ui-pack'
import { map } from 'lodash'
import { FC, useMemo } from 'react'
import CaseStudyCard from './CaseStudyCard'
import CaseStudyModal from './CaseStudyModal'

export interface CaseStudyProps {}

const StyledCaseStudyWrapper = withTheme(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: 16,
  '&&& .battlefield-card': {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
})

const StyledCaseStudyCardWrapper = withTheme(Stack)({
  flexDirection: 'column',
  flexGrow: 0,
  flexShrink: 0,
})

const CaseStudy: FC<CaseStudyProps> = () => {
  const caseStudyItems = useMemo(() => getCaseStudy(), [])

  return (
    <>
      <StyledCaseStudyWrapper>
        {map(caseStudyItems, (item: CaseStudyListItem) => {
          return (
            <StyledCaseStudyCardWrapper
              key={item.id}
              sx={{
                maxWidth: { xxl: '400px', xl: '300px', lg: '375px' },
                minWidth: { xxl: '400px', xl: '300px', lg: '375px' },
              }}
            >
              <CaseStudyCard key={`case-study-${item.id}`} value={item} />
            </StyledCaseStudyCardWrapper>
          )
        })}
      </StyledCaseStudyWrapper>
      <CaseStudyModal />
    </>
  )
}

export default CaseStudy
