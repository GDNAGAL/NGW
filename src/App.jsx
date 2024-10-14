import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PrincipalMessage from './pages/PrincipalMessage'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import OurVision from './pages/OurVision'
import OurStaff from './pages/OurStaff'
import WhyChooseUS from './pages/WhyChooseUS'
import Fees from './pages/Fees'
import HowToApply from './pages/HowToApply'
import CurriculumOverview from './pages/CurriculumOverview'
import ClassroomFacilities from './pages/ClassroomFacilities'
import SpecialPrograms from './pages/SpecialPrograms'
import AssessmentEvaluation from './pages/AssessmentEvaluation'
import HostelFacilities from './pages/HostelFacilities'
import HealthAndWellness from './pages/HealthAndWellness'
import SafetyAndSecurity from './pages/SafetyAndSecurity'
import DailySchedule from './pages/DailySchedule'
import CounselingServices from './pages/CounselingServices'
import NewsEvents from './pages/NewsEvents'
import ContactUs from './pages/ContactUs'


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
          <Route path="/why-choose-us" element={<WhyChooseUS/>}/>
          <Route path="/fee" element={<Fees/>}/>
          <Route path="/how-to-apply" element={<HowToApply/>}/>
          <Route path="/curriculum-overview" element={<CurriculumOverview/>}/>
          <Route path="/classroom-facilities" element={<ClassroomFacilities/>}/>
          <Route path="/special-programs" element={<SpecialPrograms/>}/>
          <Route path="/assessment-evaluation" element={<AssessmentEvaluation/>}/>
          <Route path="/hostel-facilities" element={<HostelFacilities/>}/>
          <Route path="/health-welness" element={<HealthAndWellness/>}/>
          <Route path="/safety-security" element={<SafetyAndSecurity/>}/>
          <Route path="/daily-schedule" element={<DailySchedule/>}/>
          <Route path="/counsling-service" element={<CounselingServices/>}/>
          <Route path="/news-event" element={<NewsEvents/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App