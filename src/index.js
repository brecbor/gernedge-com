import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import Info from './Info';
import Archive from './Archive';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import ProjectPage from './ProjectPage';
import theme from './custom_theme';
import Font from './custom_font';
import { ScrollToTop } from './ScrollToTop';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Font />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/info" element={<Info />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive/:id" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
