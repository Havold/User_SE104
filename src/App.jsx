import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import NormalLayout from "layout/NormalLayout";
import Register from "pages/Register";
import Login from "pages/Login";
import StudentLayout from "layout/StudentLayout";
import AutoLogin from "components/AutoLogin";
import StudentInfo from "pages/Student/StudentInfo";
import AuthLayout from "layout/AuthLayout";
import StudentContactInfo from "pages/Student/StudentContactInfo";
import StudentPriorityInfo from "pages/Student/StudentPriorityInfo";
import RegisterContest from "pages/Student/RegisterContest";
import RegisterLayout from "layout/RegisterLayout";
import ExamInfo from "pages/Student/ExamInfo";
import PointInfo from "pages/Student/PointInfo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AutoLogin />
        <BrowserRouter>
          <Routes>
            <Route path="" element={<NormalLayout />}>
              <Route path="auth" element={<AuthLayout />}>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Navigate to="login" />} />
              </Route>
              <Route path="" element={<StudentLayout />}>
                <Route path="info" element={<StudentInfo />} />
                <Route path="contact" element={<StudentContactInfo />} />{" "}
                <Route path="priority" element={<StudentPriorityInfo />} />{" "}
                <Route index element={<Navigate to="info" />} />
                <Route path="*" element={<Navigate to="info" />} />
              </Route>{" "}
              <Route path="register_contest" element={<RegisterLayout />}>
                <Route path="exam_info" element={<ExamInfo />} />{" "}
                <Route path="point_info" element={<PointInfo />} />
                <Route path="" element={<RegisterContest />} />
              </Route>
              <Route path="*" element={<Navigate to="" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
