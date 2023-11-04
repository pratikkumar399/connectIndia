import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserAuthProvider } from './context/UserAuthContext';
import Login from "./authenticartion/Login/Login";
import Signup from "./authenticartion/Signup/Signup";
import Home from './Pages/Home';

function App() {

  return (
    <>
      <Router>
        <UserAuthProvider>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Use the imported PrivateRoute component */}
          </Routes>

        </UserAuthProvider>
      </Router>
    </>
  )
}

export default App
