import './App.css'
import Home from './Pages/Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Room from './Pages/Room/Room'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room' element={<Room/>}/>
      </Routes> 
      </Router>
    </>
  )
}

export default App
