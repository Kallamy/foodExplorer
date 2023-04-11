import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components'
import { SignUp } from './pages/SignUp';

import GlobalStyles from './styles/global';
import theme from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
        <SignUp/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
