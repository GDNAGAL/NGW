import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App