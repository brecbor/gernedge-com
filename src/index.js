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
import ProjectPage from './ProjectPage';
import theme from './custom_theme';
import Font from './custom_font';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Font />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/info" element={<Info webTitle='Info'/>} />
          <Route path="/archive" element={<Archive webTitle='Archive'/>} />
          <Route path="/archive/:id" element={<ProjectPage/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
