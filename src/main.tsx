import * as React from "react";
import * as ReactDOM from 'react-dom/client'
import { App } from './views/App'

import './views/styles/reset.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
