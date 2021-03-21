import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './App'
import 'antd/dist/antd.css'
import { accountService } from './services'
import { Button, Result } from 'antd'
import { Provider } from 'react-redux'
import store from './redux/store'

accountService
  .refreshToken()
  .finally(() =>
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
      document.getElementById('root')
    )
  )
  .catch((err) => {
    if (err && err.name === 'TypeError') {
      ReactDOM.render(
        <Result
          status="500"
          title="Connection to server failed."
          subTitle="Please check your internet connection."
          extra={
            <Button
              type="primary"
              onClick={() => {
                document.location.reload()
              }}>
              Retry
            </Button>
          }
        />,
        document.getElementById('root')
      )
    } else {
      Promise.reject(err)
    }
  })

reportWebVitals()
