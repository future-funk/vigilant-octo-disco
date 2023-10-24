import { Layout } from '@bpd/bpd-web/shared/core'

const irrEngineUrl = process.env['NX_REACT_APP_IRR_ENGINE_URL']

const Entry = () => {
  return (
    <Layout
      key={'irr-engine'}
      tabs={null}
      main={
        <iframe
          src={irrEngineUrl}
          title="IRR Engine"
          height="100%"
          width="100%"
          style={{
            border: 'none',
          }}
        />
      }
    />
  )
}

export default Entry
