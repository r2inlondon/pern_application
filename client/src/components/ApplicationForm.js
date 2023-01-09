import { useEffect, Fragment, useState } from "react";
import { expandBackground } from "../js-functions/transparent-bg";
import PersonalDetailsForm from "./PersonalDeatailsForm";
import Survey from "./Survey";

const ApplicationForm = () => {
  const [showComponent, setShowComponent] = useState({
    personalDetailsForm: true,
    survey: false,
  });

  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
  });

  const [questions, setQuestions] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  useEffect(() => {
    expandBackground();
  }, []);

  return (
    <Fragment>
      {showComponent.personalDetailsForm && (
        <PersonalDetailsForm
          setPersonalDetails={setPersonalDetails}
          setShowComponent={setShowComponent}
        />
      )}
      {showComponent.survey && (
        <Survey
          setQuestions={setQuestions}
          setShowComponent={setShowComponent}
        />
      )}
    </Fragment>
  );
};

export default ApplicationForm;
