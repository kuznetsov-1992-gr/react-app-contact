import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/configStore';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Provider store={store}>
      <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
</BrowserRouter>
);


reportWebVitals();
