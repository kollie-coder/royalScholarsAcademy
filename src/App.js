import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Students from "./pages/Students/Students";
import Promotion from "./pages/Promotion/Promotion";
import Classes from "./pages/Classes/Classes";
import Result from "./pages/Results/Results";
import Session from "./pages/Session/Session";
import List from "./pages/list/List";
import Single from "./pages/single/Single"
import StudentDashboardd from "./studentPage/pages/studentDashboard/StudentDashboardd";
import StudentTestimonials from "./studentPage/pages/studentTestimonial/StudentTestimonials";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/dashboard" index element={<Home />} />
            <Route path="/login" index element={<Login />} />
            <Route path="students-record" element={<Students/>} />
            <Route path="/promotion" index element={<Promotion />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/result" element={<Result />} />
              <Route path="/session" element={<Session />}
              />
             <Route path="users" index element={<List />} />
             <Route path="/products" element={<Single />} />

             <Route path="/studentDash" index element={<StudentDashboardd />} />
             <Route path="/studentTestimony" element={<StudentTestimonials />} />
             
            


            </Route>
           
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
