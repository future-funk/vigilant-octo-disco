import { ArrowLeftOutlined } from '@ant-design/icons'
import { useAppSelector } from '@bpd/bpd-web/shared/store'
import { useAppPalette, withTheme } from '@bpd/bpd-web/shared/theme'
import { DawUiSelectors } from '@bpd/daw/shared/data-access'
import { Box, Header } from '@gic/battlefield-ui-pack'
import { FC, ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface TopBarProps {
  headerExtraContent?: ReactElement
}

const StyledLink = withTheme(Link)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: theme.spacing(1),
  lineHeight: 1,
}))

const TopBar: FC<TopBarProps> = ({ headerExtraContent }) => {
  const palatte = useAppPalette()

  const breadcrumbs = useAppSelector(DawUiSelectors.getBreadcrumbs)

  const title = useAppSelector(DawUiSelectors.getPageTitle)

  const headerProps = {
    breadcrumbs,
    title,
    actions: headerExtraContent ?? <Box>Right Content</Box>,
    breadcrumbsProps: {
      sx: {
        '& li': { display: 'inherit' },
        '&&& .ant-breadcrumb-link a': { color: palatte.text.link },
      },
      linkComponent: ({
        children,
        href = '',
      }: {
        children: ReactNode
        href: string
      }) => (
        <StyledLink to={href}>
          <ArrowLeftOutlined />
          {children}
        </StyledLink>
      ),
    },
    sx: { maxHeight: '68px' },
  }
  return <Header {...headerProps} />
}

export default TopBar
