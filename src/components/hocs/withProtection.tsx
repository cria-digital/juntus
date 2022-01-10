import { AuthContext } from "helpers/contexts/AuthContext";
import { IAuth } from "helpers/interfaces";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withProtection = (Component: any) => {
  return (props: any) => {
    const { auth } = useContext(AuthContext);

    const navigate = useNavigate();
    useEffect(() => {
      if (!auth.isAuthenticated) navigate("/login");
    }, [auth.isAuthenticated]);

    if (auth.isAuthenticated) return <Component {...props} />;

    return null;
  };
};

export default withProtection;
