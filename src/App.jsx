import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PrincipalMessage from './pages/PrincipalMessage'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import OurVision from './pages/OurVision'
import OurStaff from './pages/OurStaff'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/principalMessage" element={<PrincipalMessage/>}/>
          <Route path="/our-vision" element={<OurVision/>}/>
          <Route path="/our-staff" element={<OurStaff/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App