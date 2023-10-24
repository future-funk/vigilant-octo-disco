import {
  Config,
  FilterBar,
  HOME_BREADCRUMB,
  InvtSoc,
  MARKET_TRANSACTIONS_BREADCRUMB,
  Overview,
  SourcesModalButton,
  TABS,
  TITLE,
  TopBuyersSellers,
  TopCompanies,
  TopSales,
  TxnVolSummary,
  createModules,
  defaultState,
} from '@bpd/market-transactions/shared/core'

const config: Partial<Config> = {
  dashboard: {
    breadcrumbs: [HOME_BREADCRUMB, MARKET_TRANSACTIONS_BREADCRUMB],
    title: TITLE,
    teamSelect: {},
  },
  page: {
    modules: createModules({
      id: 'market-transactions',
      defaultState: { ...defaultState },
    }),
    default: TABS.OVERVIEW,
    tabs: {
      items: [
        {
          ...TABS.OVERVIEW,
          children: <Overview />,
        },
        {
          ...TABS.TXN_VOL_SUMMARY,
          children: <TxnVolSummary />,
        },
        {
          ...TABS.INVT_SRC_CAPITAL,
          children: <InvtSoc />,
        },
        {
          ...TABS.TOP_BUYERS_SELLERS,
          children: <TopBuyersSellers />,
        },
        {
          ...TABS.COMPANIES,
          children: <TopCompanies />,
        },
        {
          ...TABS.TOP_SALES,
          children: <TopSales />,
        },
      ],
      tabBarExtraContent: {
        right: <SourcesModalButton />,
      },
    },
    slots: {
      menuBar: <FilterBar />,
    },
  },
}

export default config
