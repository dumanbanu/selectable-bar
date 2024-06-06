import Layout from './components/layout/Index';
import React from 'react';
import ContextProvider from './context/Context';
import './import.js';

export function App() {
  return (
    <div>
      <ContextProvider>
        <Layout />
      </ContextProvider>
    </div>
  );
}
