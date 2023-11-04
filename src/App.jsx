import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { UserAuthProvider } from './context/UserAuthContext';
import Login from "./authenticartion/Login/Login";
import Signup from "./authenticartion/Signup/Signup";
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ExplorePage from './Pages/ExplorePage';
import Accomodation from './Pages/Accomodation';
import Guides from './Pages/Guides';

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
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/accomodations/:city" element={<Accomodation />} />
              <Route path="/guides/:city" element={<Guides />} />
              <Route path="/explore/:city" element={<ExplorePage />} />

            </Route>
            {/* Use the imported PrivateRoute component */}
          </Routes>

        </UserAuthProvider>
      </Router>
    </>
  )
}

export default App
