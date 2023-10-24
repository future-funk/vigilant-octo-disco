import { datadogLogs } from '@datadog/browser-logs'
import { RumInitConfiguration, datadogRum } from '@datadog/browser-rum'
const APP_ENV = process.env.NX_REACT_APP_ENV

const initializeDatadog = () => {
  if (APP_ENV === 'dev') {
    return
  }

  // Initialize Datadog RUM
  datadogRum.init({
    // Fixed Parameters
    site: 'datadoghq.eu',
    defaultPrivacyLevel: 'mask',

    // If possible, please insert these parameter values dynamically
    applicationId: 'b252383d-68f3-400b-a6c0-a94a49353748',
    clientToken: 'pub434dc13e488e8a33c8f3705b306f7b64',
    env: APP_ENV,
    version: '2', // This is your application's release version

    // Other parameters
    service: 'bpd-web-ui',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackFrustrations: true,
    trackResources: true,
    trackLongTasks: true,
    silentMultipleInit: true,
    enableExperimentalFeatures: ['clickmap'], // Enabling heatmap feature
  })

  const rumConfig: RumInitConfiguration = datadogRum.getInitConfiguration()
  let privacyLevel = rumConfig.defaultPrivacyLevel
  if (privacyLevel === undefined) {
    privacyLevel = 'mask-user-input'
  }
  datadogRum.setGlobalContextProperty('rumConfig', {
    defaultPrivacyLevel: privacyLevel,
    sessionReplaySampleRate: rumConfig.sessionReplaySampleRate,
  })

  // This method call starts the session replay recording.
  datadogRum.startSessionReplayRecording()

  // The code below is to intialize browser logs monitoring
  datadogLogs.init({
    site: 'datadoghq.eu',

    clientToken: 'pub434dc13e488e8a33c8f3705b306f7b64',
    env: APP_ENV,
    version: '2',

    service: 'bpd-web-ui',
    forwardErrorsToLogs: true,
    sessionSampleRate: 100,
    forwardConsoleLogs: [],
    forwardReports: 'all',
    silentMultipleInit: true,
  })
}

export default initializeDatadog
