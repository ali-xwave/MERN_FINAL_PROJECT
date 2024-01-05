import { useState } from "react";
import Cookies from "universal-cookie";
import { AuthContext } from "./context";

const AuthProvider = ({ children }) => {
    const cookies = new Cookies();
    const [user, setUser] = useState(cookies.get('user') || null);
  
    const login = (userData) => {
      // Assume userData contains necessary user information
      setUser(userData);
      cookies.set('user', userData, { path: '/' });
    };
  
    const logout = () => {
      setUser(null);
      cookies.remove('user', { path: '/' });
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export default AuthProvider;