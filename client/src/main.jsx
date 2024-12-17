import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// for react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// for the custom hook
import { WalletProvider } from './context/WalletContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WalletProvider>
      <ToastContainer />
      <App />
    </WalletProvider>
  </StrictMode>,
)