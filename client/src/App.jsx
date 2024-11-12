import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserArchive from './pages/UserArchive'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <Router>
        <div className='bg-zinc-900 h-screen w-screen'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/archive' element={<UserArchive />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
