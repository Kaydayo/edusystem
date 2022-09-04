
import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Faq from './pages/Faq'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import Signup from './pages/Signup';
import CompanyOnBoarding from './pages/CompanyOnBoarding';
import Dashboard from './pages/Dashboard';
import Bio from './layouts/Dashboard/Bio';
import Courses from './layouts/Dashboard/Courses';
import BoardEmployee from './layouts/Dashboard/BoardEmployee';
import Team from './layouts/Dashboard/Team';
import Report from './layouts/Dashboard/Report';
import Subscription from './layouts/CompanyForms/Subscription';
import Payments from './layouts/Dashboard/Payments';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
import { RootState, useAppDispatch, useAppSelector } from './redux/store';
import { getUserDetails } from './redux/actions/usersAction';
import ProtectedRoute from './components/ProtectedRoute';
import { gapi } from 'gapi-script'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Articles from './layouts/Resources/Articles';
import Books from './layouts/Resources/Books';



console.log(process.env.REACT_APP_BACKEND)
function App() {
  const { userInfo, userToken } = useAppSelector((state: RootState) => state.user)
  const dispatch = useAppDispatch()


  // automatically authenticate user if token is found
  useEffect(() => {

    if (userToken) {
      dispatch(getUserDetails())

    }

  }, [userToken, dispatch])

  return <>
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
      <Router>
        <Routes>
          {/* Home */}
          <Route path='/' element={<Home />} />

          <Route path='faq' element={<Faq />} />


          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/resource' element={<Resources />} >
            <Route path='articles' element={<Articles />} />
            <Route path='books' element={<Books/>}/>
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path='company-onboarding' element={<CompanyOnBoarding />} />
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path="bio" element={<Bio />} />
              <Route path="courses" element={<Courses />} />
              <Route path="employees" element={<BoardEmployee />} />
              <Route path="teams" element={<Team />} />
              <Route path="report" element={<Report />} />
              <Route path="subscription" element={<Payments />} />
            </Route>
          </Route>


        </Routes>
      </Router>
    </GoogleOAuthProvider>
  </>
}

export default App;
