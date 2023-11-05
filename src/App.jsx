import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { UserAuthProvider } from './context/UserAuthContext';
import Login from "./authenticartion/Login/Login";
import Signup from "./authenticartion/Signup/Signup";
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ExplorePage from './Pages/Explore';
import Accomodation from './Pages/Accomodation';
import Guides from './Pages/Guides';
import SpotPage from './Pages/SpotPage';
import AccomodationPage from './Pages/AccomodationPage';
import GuidePage from './Pages/GuidePage';
import Chatbox from './virtualAssistance/Chatbox';
import Interested from './Pages/Interested';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <div >
        <div >
          <Footer />
        </div>
      </div>
    </div>
  );
};


function App() {
  return (
    <>
      <Router>
        <UserAuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />

              <Route path="/accomodations/:city" element={<Accomodation />} />
              <Route path="/guides/:city" element={<Guides />} />
              <Route path="/explore/:city" element={<ExplorePage />} />

            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/explore/:city/:title" element={<SpotPage />} />
            <Route path="/accomodations/:city/:hotel" element={<AccomodationPage />} />
            <Route path="/guides/:city/:guide" element={<GuidePage />} />
            <Route path="/explore/:city/chatbox" element={<Chatbox />} />
            <Route path="/explore/:city/interested" element={<Interested />} />
            {/* Use the imported PrivateRoute component */}
          </Routes>

        </UserAuthProvider>
      </Router>
    </>
  )
}

export default App
