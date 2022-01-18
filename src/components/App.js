import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import SignUp from "./SignUp";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import ForgotPassword from "./ForgotPassword";
import NotFound from "./NotFound";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/update-profile" element={<UpdateProfile />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
