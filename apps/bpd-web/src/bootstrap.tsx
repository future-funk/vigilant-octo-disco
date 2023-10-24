import * as ReactDOM from 'react-dom/client'
import App from './components/App'
import initializeDatadog from './datadog'

initializeDatadog()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
