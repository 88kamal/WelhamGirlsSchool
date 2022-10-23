import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import Administrative from './pages/About/AdministrativeStaffFacultyMembers';
import History from './pages/About/History';
import MissionVision from './pages/About/MissionVision';
import PrincipalsMessage from './pages/About/PrincipalsMessage';
import ResourcesFacilities from './pages/About/ResourcesFacilities';
import WhoWeAre from './pages/About/WhoWeAre';
import AcademicDepartments from './pages/Academic/AcademicDepartments';
import AcademicInformation from './pages/Academic/AcademicInformation';
import AdmissionNotices from './pages/Academic/AdmissionNotices';
import EventDetails from './pages/Events/EventDetails';
import Events from './pages/Events/Events';
import BlogDetails from './pages/Blog/BlogDetails';
import OurBlog from './pages/Blog/OurBlog';
import Contact from './pages/Contact';
import AboutWelham from './pages/About/AboutWelham';
import OriginAndHistory from './pages/About/OriginAndHistory';
import FeeStructure from './pages/Addmission/FeeStructure';
import HowToRegister from './pages/Addmission/HowToRegister';
import Scholarship from './pages/Addmission/Scholarship';
import News from './pages/News';
function App() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <div>
       {/* {loading &&  <div class="preloader"></div> } */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* About */}
          <Route exact path="/addninistative-staff-and-faculty-member'} " element={<Administrative />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/mission-vission-objectives" element={<MissionVision />} />
          <Route exact path="/principles-message" element={<PrincipalsMessage />} />
          <Route exact path="/resource-and-facilities" element={<ResourcesFacilities />} />
          <Route exact path="/who-we-are" element={<WhoWeAre />} />
          <Route exact path="/about-welham" element={<AboutWelham />} />
          <Route exact path="/origin-and-history" element={<OriginAndHistory/>} />
          {/* <Route exact path="/who-we-are" element={<AboutWelham />} /> */}

          {/* Addmision  */}
          <Route exact path="/fee-structure" element={<FeeStructure />} />
          <Route exact path="/how-to-register" element={<HowToRegister />} />
          <Route exact path="/scholarship" element={<Scholarship />} />

          {/* Academic  */}
          <Route exact path="/academic-departments" element={<AcademicDepartments />} />
          <Route exact path="/academic-information" element={<AcademicInformation />} />
          <Route exact path="/admission-notices" element={<AdmissionNotices />} />
          {/* News  */}
          <Route exact path="/news" element={<News />} />
          {/* Events  */}
          <Route exact path="/event-details" element={<EventDetails />} />
          <Route exact path="/events" element={<Events />} />
          {/* Blog  */}
          <Route exact path="/blog-details" element={<BlogDetails />} />
          <Route exact path="/our-blog" element={<OurBlog />} />
          {/* Contact  */}
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/news" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Home />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
