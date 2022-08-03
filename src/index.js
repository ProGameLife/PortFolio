import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import img_kiri_1 from './images/kiribot-1.png'
import img_alrim_1 from './images/alrimbot-1.png'
import img_croll_1 from './images/crollbot-1.png'
import img_trbot_1 from './images/trbot-1.png'
import img_frontend from './images/frontend.png'
import img_backend from './images/backend.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
