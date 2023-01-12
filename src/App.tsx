import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import CompanyOnBoarding from "./pages/CompanyOnBoarding";
import CompanyPage from "./pages/AdminDashboard/company/CompanyPage";
import Bio from "./pages/AdminDashboard/company/bio/Bio";
import Courses from "./layouts/Dashboard/Courses";
import BoardEmployee from "./pages/AdminDashboard/company/employees/BoardEmployee";
import Team from "./pages/AdminDashboard/company/teams/Team";
import Report from "./layouts/Dashboard/Report";
import Subscription from "./layouts/CompanyForms/Subscription";
import Payments from "./pages/AdminDashboard/company/subscription/Payments";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "./redux/store";
import { getUserDetails } from "./redux/actions/usersAction";
import ProtectedRoute from "./components/ProtectedRoute";
import { gapi } from "gapi-script";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Articles from "./layouts/Resources/Articles";
import Books from "./layouts/Resources/Books";
import Book from "./components/Book";
import Article from "./components/Article";
import ScrollToTop from "./components/ScrollToTop";
import VerifyPassword from "./pages/VerifyPassword";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployeeCourses from "./layouts/EmployeeDashboard/EmployeeCourses";
import CoursePage from "./layouts/EmployeeDashboard/CoursePage";
import EditAdminProfile from "./layouts/Dashboard/EditAdminProfile";
import axios from "axios";
import Templates from "./pages/Templates";
import TemplateCategory from "./layouts/Templates/templateCategory";
import TemplateFeature from "./layouts/Templates/templateFeature";
import FeaturedProgram from "./layouts/Home/FeaturedProgram";
import EditEmployeeProfile from "./layouts/EmployeeDashboard/EditEmployeeProfile";
import CompanyForm from "./layouts/CompanyForms/CompanyForm";
import DashboardLayout from "./layouts/Dashboard/DashboardPageLayout";
import Learning from "./pages/AdminDashboard/learning/learning";
import Overview from "./pages/AdminDashboard/overview/overview";
import DashboardTemplates from "./pages/AdminDashboard/templates/templates";
import Profile from "./pages/AdminDashboard/company/profile/Profile";
import Pricing from "./pages/Pricing";

import CourseListPage from "./pages/AdminDashboard/learning/courselist-page/courselist-page";
import CourseDetail from "./pages/AdminDashboard/learning/course-detail/course-detail";

function App() {
  const { userInfo, userToken, profileInfo } = useAppSelector(
    (state: RootState) => state.user
  );
  const dispatch = useAppDispatch();

  const storeToken = localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : null;
    console.log(storeToken)
  // automatically authenticate user if token is found
  useEffect(() => {
    const handleTabClose = () => {
      localStorage.clear();
    };

    const storeDetails = localStorage.getItem("userDetails")
      ? localStorage.getItem("userDetails")
      : null;

    if (userToken || storeToken) {
      dispatch(getUserDetails());
    }

    if (userToken === undefined || storeToken === undefined) {
      localStorage.clear();
    }

    // const onUnload = () => {
    //   localStorage.clear()
    // };
    // window.addEventListener('beforeunload', onUnload);
    // return () => {
    //   window.removeEventListener('beforeunload', onUnload);
    // };

    // window.addEventListener('beforeunload', handleTabClose);

    // return () => {
    //   window.removeEventListener('beforeunload', handleTabClose);
    // };
  }, [userToken]);

  // useEffect(() => {
  //   const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly"
  //   const initClient = () => {
  //     gapi.auth2.init({
  //       clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  //       scope: SCOPES
  //     });
  //   };
  //   gapi.load('client:auth2', initClient);
  // });

  return (
    <>
      <GoogleOAuthProvider
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      >
        <Router>
          <ScrollToTop>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home userToken={storeToken} />} />

              <Route path="faq" element={<Faq />} />

              {/* TODO: move to protected route */}
              {/* <Route path='test' element={<CompanyOnBoarding />} /> */}

              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="verify/:token" element={<VerifyPassword />} />
              <Route path="contact" element={<Contact />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="book/:id" element={<Book />} />
              <Route path="article/:id" element={<Article />} />
              <Route path="templates" element={<Templates />} />
              <Route path="templates/:id" element={<TemplateFeature />} />
              <Route
                path="templates/category/:id"
                element={<TemplateCategory />}
              />
              <Route path="programs/:id" element={<FeaturedProgram />} />
              <Route path="/resource" element={<Resources />}>
                <Route path="articles" element={<Articles />} />
                <Route path="books" element={<Books />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route
                  path="company-onboarding"
                  element={<CompanyOnBoarding />}
                />
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route path="company" element={<CompanyPage />}>
                    <Route path="profile" element={<Profile />}>
                      <Route path="bio" element={<Bio />} />
                      <Route path="courses" element={<Courses />} />
                      <Route path="employees" element={<BoardEmployee />} />
                      <Route path="teams" element={<Team />} />
                      <Route path="report" element={<Report />} />
                      <Route path="subscription" element={<Payments />} />
                    </Route>
                    <Route path="editProfile" element={<EditAdminProfile />} />
                  </Route>
                  <Route path="learning" element={<Learning />}>
                    <Route path="" element={<CourseListPage />} />
                    <Route path=":id" element={<CourseDetail />} />
                  </Route>
                  <Route path="overview" element={<Overview />} />
                  <Route path="templates" element={<DashboardTemplates />} />
                </Route>

                <Route
                  path="/employeeDashboard"
                  element={<EmployeeDashboard />}
                >
                  <Route path="courses" element={<EmployeeCourses />} />
                </Route>
                <Route
                  path="edit-employeeProfile"
                  element={<EditEmployeeProfile />}
                />

                <Route path="coursePage" element={<CoursePage />} />
              </Route>
            </Routes>
          </ScrollToTop>
        </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
