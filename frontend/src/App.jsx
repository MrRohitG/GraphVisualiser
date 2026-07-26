// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Removed 'as Router' alias as it's not needed here
import GraphEditor from './components/GraphEditor'; // in case needed later
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { AuthProvider } from './context/AuthContext'; // NEW
import CourseSchedulerPage from './pages/CourseSchedulerPage'; // NEW
import HomePage from "./pages/HomePage"; // add this
import GraphEditorPage from './pages/GraphEditorPage';
import MstEditor from './pages/MstEditor'; // Main MST UI

function App() {
  return (

    <AuthProvider>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Add HomePage route */}
            <Route path="/dijkstra" element={<GraphEditorPage/>} />
            {/* <Route path="/" element={<GraphEditor />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/topo" element= {<CourseSchedulerPage />} />
            <Route path="/network-designer" element={<MstEditor />} />
            <Route path="/coming-soon" element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">Coming Soon</h1>
                  <p className="text-gray-600">This feature is under development.</p>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </AuthProvider>
  );
}

export default App;
