import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IphoneContextProvider from './Components/Shared/IphoneContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IphoneContextProvider>
        <App />
    </IphoneContextProvider>
);

