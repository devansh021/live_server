import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
const Main = () => {
  useEffect(() => {
    // Ensure the page scrolls to the top on every route change
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means it will run once on mount

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
