import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";

import GlobalStyle from "./styles/GlobalStyle";

import { AuthProvider, AuthContext } from "./contexts/auth";

const App = () => {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
      //Por enquanto navega para /login mas depois navegaria para HomePage
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/produtos/:id" element={<ProductPage />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/carrinho" element={<Cart />} />
          {/* <Route path="cash-income" element={<Private> <HomePage /> </Private>} /> */}
        </Routes>
        <GlobalStyle />
      </AuthProvider>
    </Router>
  );
};

export default App;
