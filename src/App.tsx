import "./App.css";
import { useAppSelector } from "./store/hooks/redux-hooks";
import AppRouter from "./Router";
import Login from "./Pages/Login";

function App() {
  const isAuthenticated = useAppSelector((state) => state.auth.token);

  if (!isAuthenticated) return <Login />;
  return <AppRouter />;
}

export default App;
