import { useState } from "react";
import LoginPage from "./LoginPage";
import ApplicationForm from "./ApplicationForm";

const HomePage = () => {
  const [showComponent, setShowComponent] = useState({
    showLogin: true,
    showApplicationForm: false,
  });

  return (
    <div className="bg-small">
      <div className="home-page">
        {showComponent.showLogin && (
          <LoginPage setShowComponent={setShowComponent} />
        )}
        {showComponent.showApplicationForm && <ApplicationForm />}
      </div>
    </div>
  );
};

export default HomePage;
