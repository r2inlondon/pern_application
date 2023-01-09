import PersonalDetailsForm from "./PersonalDeatailsForm";
import { expandBackground } from "../js-functions/transparent-bg";
import { useEffect } from "react";

const ApplicationForm = () => {
  useEffect(() => {
    expandBackground();
  }, []);

  return <PersonalDetailsForm />;
};

export default ApplicationForm;
