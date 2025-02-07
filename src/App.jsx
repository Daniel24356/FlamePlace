import './App.css'
import Home from './Pages/Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Room from './Pages/Room/Room'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Account from './Pages/Account/Account'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room' element={<Room/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes> 
      </Router>
    </>
  )
}

export default App
