import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from 'styled-components'
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';

import GlobalStyles from './styles/global';
import theme from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <BrowserRouter>
        <SignIn/>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
