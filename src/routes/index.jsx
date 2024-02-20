import { BrowserRouter } from "react-router-dom";
import { useAuthContext } from "../hooks/authContext";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export default function Routes() {
  const { user } = useAuthContext();

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
