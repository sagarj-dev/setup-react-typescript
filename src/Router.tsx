import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        Component={Home}
      />
    </Routes>
  );
};

export default AppRouter;
