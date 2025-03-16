import { render } from 'preact'

import { App } from './app.jsx'
import { Provider } from 'react-redux'
import {store} from './Store/storeIndex.js'
import { BrowserRouter } from 'react-router-dom'

render(
    <Provider  store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
, document.getElementById('app'))
