import { SALES_TYPE } from '../constants'

const getIsPortfolioSales = (salesType: string): boolean => {
  return SALES_TYPE.PORTFOLIO_SALES === salesType
}

export default getIsPortfolioSales
