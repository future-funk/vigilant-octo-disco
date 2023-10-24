import loadable from '@loadable/component'

const entry = loadable.lib(
  () => import(/* webpackChunkName: "MvIrrEntry" */ '@bpd/mv-irr/feature-shell')
)

export default entry
