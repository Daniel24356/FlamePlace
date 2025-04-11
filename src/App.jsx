import './App.css'
import Home from './Pages/Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Room from './Pages/Room/Room'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Account from './Pages/Account/Account'
import NotFound from './Pages/NotFound/NotFound'
import AdminDashboard from './Admin/Admin-Dashboard/AdminDashboard'
import GuestList from './Admin/A-Page/A-GuestList/A-GuestList'
import RoomList from './Admin/A-Page/A-RoomList/A-RoomList'
import Amiddle from './Admin/Middle/Amidddle'
import Booking from './Pages/Booking/Booking'
import Checkout from './Pages/Checkout/checkout'

function App() {
  return (
    <>
    {/* <SEOComponent/> */}
    <Router>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/room' element={<Room/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/admin' element={<AdminDashboard/>}>
        <Route index   element={<Amiddle/>}/>
        <Route path='guestlist' element={<GuestList/>}/>
        <Route path='roomlist' element={<RoomList/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes> 
      </Router>
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
