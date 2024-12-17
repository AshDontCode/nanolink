import { createContext, useContext, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { getCurrentUser } from "./db/apiAuth";

const UrlContext = createContext({
  user: null,
  loading: true,
  fetchUser: () => {},
  isAuthenticated: false,
});

const UrlProvider = ({ children }) => {
  const { data: user, loading, fn: fetchUser } = useFetch(getCurrentUser);

  const isAuthenticated = user?.role === "authenticated";

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UrlContext.Provider value={{ user, fetchUser, loading, isAuthenticated }}>
      {children}
    </UrlContext.Provider>
  );
};

export const UrlState = () => {
  const context = useContext(UrlContext);
  if (!context) {
    throw new Error("UrlState must be used within a UrlProvider");
  }
  return context;
};

export default UrlProvider;
