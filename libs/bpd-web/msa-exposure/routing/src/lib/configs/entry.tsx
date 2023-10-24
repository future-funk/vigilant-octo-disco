import loadable from '@loadable/component'

const entry = loadable.lib(
  () =>
    import(
      /* webpackChunkName: "MsaExposureEntry" */ '@bpd/msa-exposure/feature-shell'
    )
)

export default entry
