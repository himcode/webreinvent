// App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import ProtectedRoute from './ProtectedRoute';
import SignUp from './SignUp';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/tailwind.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>

    <Router>
      <Routes>
      <Route element={<ProtectedRoute/>}>
        <Route path="/" element={<DashboardPage/>} />
        </Route>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
