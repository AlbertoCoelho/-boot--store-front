import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { useContext } from "react";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import HomePage from "./pages/HomePage";

import GlobalStyle from "./styles/GlobalStyle";

import { AuthProvider, AuthContext } from './contexts/auth';

const App = () => {
  const Private = ( {children} ) => {
  const { authenticated } = useContext(AuthContext);

  if(!authenticated){
    //Por enquanto navega para /login mas depois navegaria para HomePage
    return <Navigate to="/login" />
  }

  return children;
  }


  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <GlobalStyle />
      </AuthProvider>
    </Router>
  );
}

export default App;