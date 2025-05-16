import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ChangePasswordPage from "./pages/ChangePasswordPage.jsx";
import MatchMakingPage from "./pages/MatchMakingPage.jsx";
import LobbyPage from "./pages/LobbyPage.jsx";
import GamePage from "./pages/GamePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Layout from './components/Layout.jsx';
import ResetPasswordPage from './pages/ResetPasswordPage.jsx';
import PlayComputerPage from './pages/PlayComputerPage.jsx';
import PlayOnlinePage from './pages/PlayOnlinePage.jsx';
import { useEffect } from 'react';
import socket from './socket.js';

function App() {

  // Socket Connection
  useEffect(() => {
    socket.on("connect" , () => {
      console.log("Socket Connected ...");
      console.log(socket.id);
    })
  }, []);
  
  return (
    <Router>
      <Routes>
        {/* Routes using the Layout (with Navbar + Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/play/computer" element={<PlayComputerPage />} />
          <Route path="/play/online" element={<PlayOnlinePage />} />
          <Route path="/matchmaking" element={<MatchMakingPage />} />
          <Route path="/lobby/:roomCode" element={<LobbyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* GamePage renders without Navbar/Footer (full-screen board) */}
        <Route path="/game/:roomCode" element={<GamePage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App