import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Students from "./pages/Students/Students";
import Promotion from "./pages/Promotion/Promotion";
import Classes from "./pages/Classes/Classes";
import Result from "./pages/Results/Results";
import Session from "./pages/Session/Session";
import List from "./pages/list/List";
import Single from "./pages/single/Single"
import Test from "./components/test/test";
import StudentDashboardd from "./studentPage/pages/studentDashboard/StudentDashboardd";
import StudentTestimonials from "./studentPage/pages/studentTestimonial/StudentTestimonials";
import PrivateRoutes from "./PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
        
            <Route element={<PrivateRoutes/>}>
            <Route element={<Home/>} path="/dashboard" />
            <Route element={<Students/>} path="/students-record" />
            <Route element={<Promotion /> } path="/promotion" />
            <Route element={<Classes />} path="/classes" />
            <Route element={<Result />} path="/result" />
            <Route element={<Session />} path="/session"/>
            <Route element={<List />} path="/users"/> 
            <Route element={<StudentDashboardd />} path="/studentDash"/>
            <Route element={<StudentTestimonials />} path="/studentTestimony"/>
            </Route>
            
            <Route index element={<Login />} path="/login"  />
             <Route element={<Test />} path="/tests" />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
