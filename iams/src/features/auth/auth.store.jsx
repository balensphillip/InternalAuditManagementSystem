import { createContext, useContext, useState } from "react";

/**
 * 1. Create Context
 */
const AuthContext = createContext(null);

/**
 * 2. Provider
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // ---- actions ----

  const login = (userData) => {
    /**
     * userData example:
     * {
     *   id: 1,
     *   name: "Phillip",
     *   role: "AUDITOR",
     *   token: "jwt-token"
     * }
     */
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const hasRole = (role) => {
    return user?.role === role;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * 3. Custom Hook
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
