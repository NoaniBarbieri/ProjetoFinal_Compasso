import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { GlobalStyles } from './index.style';
import { AuthProvider } from './providers/authUser'
import { PassProvider } from './providers/authPassword'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider >
    <PassProvider>
      <GlobalStyles/>  
      <App />
    </PassProvider>
  </AuthProvider >
);