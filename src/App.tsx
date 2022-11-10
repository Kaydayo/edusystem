
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
import Book from './components/Book';
import Article from './components/Article';
import ScrollToTop from './components/ScrollToTop';
import VerifyPassword from './pages/VerifyPassword';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeCourses from './layouts/EmployeeDashboard/EmployeeCourses';
import CoursePage from './layouts/EmployeeDashboard/CoursePage';
import EditAdminProfile from './layouts/Dashboard/EditAdminProfile';




function App() {
  const { userInfo, userToken, profileInfo } = useAppSelector((state: RootState) => state.user)
  const dispatch = useAppDispatch()
  



  // automatically authenticate user if token is found
  useEffect(() => {
    const handleTabClose = () => {
      localStorage.clear()
    };

    const storeToken = localStorage.getItem('userToken') ?
      localStorage.getItem('userToken') : null
    
    const storeDetails = localStorage.getItem('userDetails') ?
      localStorage.getItem('userDetails') : null
    
    

    if (userToken || storeToken) {

      dispatch(getUserDetails())
    }

    if (userToken === undefined || storeToken === undefined ) {
      localStorage.clear()
    }


    const onUnload = () => {
      localStorage.clear()
    };
    window.addEventListener('beforeunload', onUnload);
    return () => {
      window.removeEventListener('beforeunload', onUnload);
    };

    // window.addEventListener('beforeunload', handleTabClose);

    // return () => {
    //   window.removeEventListener('beforeunload', handleTabClose);
    // };

  }, [userToken])

  useEffect(() => {
    const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly"
    const initClient = () => {
      gapi.auth2.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: SCOPES
      });
    };
    gapi.load('client:auth2', initClient);
  });



  return <>
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
      <Router>
        <ScrollToTop>
          <Routes>
            {/* Home */}
            <Route path='/' element={<Home />} />

            <Route path='faq' element={<Faq />} />

            {/* TODO: move to protected route */}
           


            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='verify/:token' element={<VerifyPassword />} />
            <Route path='contact' element={<Contact />} />
            <Route path='book/:id' element={<Book />} />
            <Route path='article/:id' element={<Article />} />
            <Route path='/resource' element={<Resources />} >
              <Route path='articles' element={<Articles />} />
              <Route path='books' element={<Books />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path='company-onboarding' element={<CompanyOnBoarding />} />

              <Route path='/dashboard' element={<Dashboard />}>
                <Route path="bio" element={<Bio />}/>
                <Route path="courses" element={<Courses />} />
                <Route path="employees" element={<BoardEmployee/>} />
                <Route path="teams" element={<Team />} />
                <Route path="report" element={<Report />} />
                <Route path="subscription" element={<Payments />} />
              </Route>
              <Route path='editProfile' element={<EditAdminProfile />} />
              <Route path='/employeeDashboard' element={<EmployeeDashboard />}>
                <Route path="courses" element={<EmployeeCourses />} />
              </Route>

              <Route path='coursePage' element={<CoursePage />} />
            </Route>


          </Routes>
        </ScrollToTop>
      </Router>
    </GoogleOAuthProvider>
  </>
}

export default App;
