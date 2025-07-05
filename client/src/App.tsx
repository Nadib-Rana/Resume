import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminView from './components/Admin/AdminView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AdminView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;