import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import FilterBar from "./components/FilterBar";
import CandidateList from "./components/CandidateList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <Router>
      <div className="h-screen flex flex-col">
        {/* Header - Always visible */}
        <Header />

        {/* Routes */}
        <div className="flex-1 flex overflow-hidden relative">
          <Routes>
            {/* Default route redirects to Dashboard */}
            <Route path="/" element={<Dashboard />} />

            {/* Dashboard */}
            <Route
              path="/candidate"
              element={
                <div className="flex-1 flex overflow-hidden relative">
                  {/* Left Side - Filter & Candidate Section */}
                  <div
                    className={`transition-all duration-300 ${
                      isProfileOpen ? "w-1/2" : "w-full"
                    }`}
                  >
                    <div className="h-full overflow-auto custom-scroll">
                      <FilterBar />
                      <CandidateList toggleDrawer={toggleProfile} />
                      <CandidateList toggleDrawer={toggleProfile} />
                    </div>
                  </div>

                  {/* Vertical Line - Show only when profile is open */}
                  {isProfileOpen && (
                    <div className="w-[1px] bg-gray-300 h-full absolute left-1/2 top-0 transform -translate-x-1/2 z-10" />
                  )}

                  {/* Right Side - Profile Section */}
                  <div
                    className={`bg-white transition-all duration-300 overflow-auto custom-scroll ${
                      isProfileOpen ? "w-1/2 h-full" : "w-0 h-full"
                    }`}
                  >
                    {isProfileOpen && <Profile toggleProfile={toggleProfile} />}
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
