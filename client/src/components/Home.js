import { useState } from "react";
import LoginPage from "./LoginPage";
import ApplicationForm from "./app-form/ApplicationForm";
import Dashboard from "./dashboard/Dashboard";

const Home = () => {
  const [showComponent, setShowComponent] = useState({
    login: true,
    applicationForm: false,
    dashboard: false,
  });

  const componentsObject = {
    action: setShowComponent,
    comp: showComponent,
  };

  return (
    <div className="bg-small">
      {showComponent.login && <LoginPage componentsObject={componentsObject} />}
      {showComponent.applicationForm && <ApplicationForm />}
      {showComponent.dashboard && <Dashboard />}
    </div>
  );
};

export default Home;
