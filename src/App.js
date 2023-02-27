

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import BookingOnline from "./pages/BookingOnline";
import HomePage from "./pages/HomePage";
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout'



import ProtectedRoute from './component/ProtectedRoute';
function App(){
 
  return(
    <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<SharedLayout /> }>
       
        <Route exact path='/homePage'  index element={ 
        <ProtectedRoute> <HomePage /> </ProtectedRoute>} />
       
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/booking' element={<BookingOnline />} />
        <Route path='/*' element={<Error />} />
      </Route>  
     </Routes>
     
    </BrowserRouter>
  )
}
export default App;
