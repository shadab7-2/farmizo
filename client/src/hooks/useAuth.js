import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // example auth check
    if (token) setUser({ token }); // simple user object
  }, []);

  return { user };
};

export default useAuth;
