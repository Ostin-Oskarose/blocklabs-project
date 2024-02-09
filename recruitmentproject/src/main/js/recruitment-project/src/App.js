import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/QuestionNavbar.js'
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.js';
import SignupPage from './pages/SignupPage.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
