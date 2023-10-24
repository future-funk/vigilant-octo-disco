import { ROUTES, TEAMS } from '@bpd/bpd-web/shared/config'
import { BpdSecondaryMenuItemProps } from '@bpd/bpd-web/shared/ui'
import { Tag } from '@gic/battlefield-ui-pack'
import { kebabCase, upperCase } from 'lodash'
import { SECONDARY_MENU } from './SECONDARY_MENU'

export const DASHBOARD_MENU_ITEMS: BpdSecondaryMenuItemProps[] = [
  {
    key: kebabCase(SECONDARY_MENU.PORTFOLIO_ANALYTICS.BASE),
    title: upperCase(SECONDARY_MENU.PORTFOLIO_ANALYTICS.BASE),
    items: [
      {
        key: kebabCase(SECONDARY_MENU.PORTFOLIO_ANALYTICS.INVESTMENT_PACE),
        title: SECONDARY_MENU.PORTFOLIO_ANALYTICS.INVESTMENT_PACE,
        disabled: true,
        url: ROUTES.DASHBOARDS.PORTFOLIO_ANALYTICS.INVESTMENT_PACE,
      },
      {
        key: kebabCase(SECONDARY_MENU.PORTFOLIO_ANALYTICS.EXPOSURE),
        title: SECONDARY_MENU.PORTFOLIO_ANALYTICS.EXPOSURE,
        disabled: true,
        url: ROUTES.DASHBOARDS.PORTFOLIO_ANALYTICS.EXPOSURE,
      },
      {
        key: kebabCase(SECONDARY_MENU.PORTFOLIO_ANALYTICS.PERFORMANCE),
        title: SECONDARY_MENU.PORTFOLIO_ANALYTICS.PERFORMANCE,
        disabled: true,
        url: ROUTES.DASHBOARDS.PORTFOLIO_ANALYTICS.PERFORMANCE,
      },
      {
        key: kebabCase(SECONDARY_MENU.PORTFOLIO_ANALYTICS.CASHFLOW),
        title: SECONDARY_MENU.PORTFOLIO_ANALYTICS.CASHFLOW,
        disabled: true,
        url: ROUTES.DASHBOARDS.PORTFOLIO_ANALYTICS.CASHFLOW,
      },
    ],
  },
  {
    key: kebabCase(SECONDARY_MENU.TEAM_ANALYTICS.BASE),
    title: upperCase(SECONDARY_MENU.TEAM_ANALYTICS.BASE),
    items: [
      {
        key: TEAMS.US,
        title: SECONDARY_MENU.TEAM_ANALYTICS.AMERICAS,
        url: ROUTES.DASHBOARDS.TEAM_ANALYTICS.AMERICAS.BASE,
      },
      {
        key: TEAMS.EU,
        title: SECONDARY_MENU.TEAM_ANALYTICS.EUROPE,
        url: ROUTES.DASHBOARDS.TEAM_ANALYTICS.EUROPE.BASE,
      },
      {
        key: TEAMS.CN,
        title: SECONDARY_MENU.TEAM_ANALYTICS.CHINA,
        url: ROUTES.DASHBOARDS.TEAM_ANALYTICS.CHINA.BASE,
      },
      {
        key: TEAMS.ASIG,
        title: SECONDARY_MENU.TEAM_ANALYTICS.ASIG,
        url: ROUTES.DASHBOARDS.TEAM_ANALYTICS.ASIG.BASE,
      },
      {
        key: TEAMS.KR,
        title: SECONDARY_MENU.TEAM_ANALYTICS.KOREA,
        url: ROUTES.DASHBOARDS.TEAM_ANALYTICS.KOREA.BASE,
      },
      {
        key: TEAMS.JP,
        title: SECONDARY_MENU.TEAM_ANALYTICS.JAPAN,
        url: ROUTES.DASHBOARDS.TEAM_ANALYTICS.JAPAN.BASE,
      },
      {
        key: TEAMS.IN,
        title: SECONDARY_MENU.TEAM_ANALYTICS.INDIA,
        url: ROUTES.DASHBOARDS.TEAM_ANALYTICS.INDIA.BASE,
      },
      {
        key: TEAMS.ANZ,
        title: SECONDARY_MENU.TEAM_ANALYTICS.ANZ,
        url: ROUTES.DASHBOARDS.TEAM_ANALYTICS.ANZ.BASE,
      },
    ],
  },
  {
    key: kebabCase(SECONDARY_MENU.CREDIT_PORTAL),
    title: upperCase(SECONDARY_MENU.CREDIT_PORTAL),
    tag: <Tag color="purple">Coming Soon</Tag>,
    url: ROUTES.DASHBOARDS.CREDIT_PORTAL.OVERVIEW.CREDIT_METRICS,
  },
  {
    key: kebabCase(SECONDARY_MENU.FUND_PORTAL),
    title: upperCase(SECONDARY_MENU.FUND_PORTAL),
    tag: <Tag color="purple">Coming Soon</Tag>,
    url: ROUTES.DASHBOARDS.FUND_PORTAL.BASE,
  },
  {
    key: kebabCase(SECONDARY_MENU.MARKET.BASE),
    title: upperCase(SECONDARY_MENU.MARKET.BASE),
    items: [
      {
        key: kebabCase(SECONDARY_MENU.MARKET.MARKET_TRANSACTIONS),
        title: SECONDARY_MENU.MARKET.MARKET_TRANSACTIONS,
        url: ROUTES.DASHBOARDS.MARKET.MARKET_TRANSACTIONS.OVERVIEW,
      },
    ],
  },
]
