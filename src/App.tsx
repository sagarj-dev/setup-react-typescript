import './App.css';
import Login from './Pages/Login';
import AppRouter from './Router';
import { useAppSelector } from './store/hooks/redux-hooks';

function App() {
  const isAuthenticated = useAppSelector((state) => state.auth.token);

  if (!isAuthenticated) return <Login />;
  return <AppRouter />;
}

export default App;
