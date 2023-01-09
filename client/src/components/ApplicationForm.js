import { useEffect, Fragment, useState } from "react";
import { expandBackground } from "../js-functions/transparent-bg";
import PersonalDetailsForm from "./PersonalDeatailsForm";
import Survey from "./Survey";
import Summary from "./Summary";

const ApplicationForm = () => {
  const [showComponent, setShowComponent] = useState({
    personalDetailsForm: true,
    survey: false,
    summary: false,
  });

  const [answers, setAnswers] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
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
          // setPersonalDetails={setPersonalDetails}
          setAnswers={setAnswers}
          setShowComponent={setShowComponent}
        />
      )}
      {showComponent.survey && (
        <Survey
          // setQuestions={setQuestions}
          setAnswers={setAnswers}
          setShowComponent={setShowComponent}
        />
      )}
      {showComponent.summary && (
        <Summary setShowComponent={setShowComponent} answers={answers} />
      )}
    </Fragment>
  );
};

export default ApplicationForm;
