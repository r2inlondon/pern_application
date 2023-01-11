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
        {showComponent.showLogin && (
          <LoginPage setShowComponent={setShowComponent} />
        )}
        {showComponent.showApplicationForm && <ApplicationForm />}      
    </div>
  );
};

export default HomePage;
