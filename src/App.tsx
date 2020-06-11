import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import StylesProvider from '@material-ui/styles/StylesProvider'
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles'

import lightBlue from '@material-ui/core/colors/lightBlue'

import { configureStore } from './config/configureStore'
import { runSaga } from './config/combineMiddlewares'

import Header from './common/components/Header'
import Home from './home'

import './styles/base.scss'


const darkTheme = createMuiTheme( {
  palette: {
    type: 'dark',
    primary: lightBlue
  }
} )

const store = configureStore()
runSaga()

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={ store }>
        <ThemeProvider theme={ darkTheme }>
          <StylesProvider injectFirst>
            <CssBaseline />
            <Header />
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </StylesProvider>
        </ThemeProvider>
      </Provider>
    </Router>
  )
}

export default App
