import { chain } from 'lodash'
import { SECTORS } from './SECTORS'

//pick only what u want from SECTORS to avoid making an entry here if someone adds a new SECTOR in SECTOR const.
export const DEAL_SECTORS = chain(SECTORS)
  .pick([
    'DATA_CENTER',
    'DIVERSIFIED_CANNOT_BE_BROKEN',
    'EDUCATION',
    'HEALTHCARE',
    'HOSPITALITY',
    'INDUSTRIAL',
    'LIFE_SCIENCE',
    'MANUFACTURED_HOUSING',
    'OFFICE',
    'RENTAL_APARTMENT',
    'RESIDENTIAL', // but label will be shown 'RESIDENTIAL_FOR_SALE'
    'RETAIL',
    'SENIOR_HOUSING',
    'SELF_STORAGE',
    'STUDENT_HOUSING',
    'UNALLOCATED_ACC',
    'OTHERS',
  ])
  .value()
