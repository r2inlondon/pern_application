import { useState } from "react";
import LoginPage from "./app-form/LoginPage";
import ApplicationForm from "./app-form/ApplicationForm";

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
