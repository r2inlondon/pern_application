import { useEffect, Fragment, useState } from "react";
import { expandBackground } from "../../utils/expandBackground";
import PersonalDetails from "./PersonalDetails";
import Survey from "./Survey";
import Summary from "./Summary";
import ProgressNav from "./ProgresNav";

const ApplicationForm = () => {
  const [showComponent, setShowComponent] = useState({
    personalDetails: true,
    survey: false,
    summary: false,
  });

  const [stepsCompleted, setStepsCompleted] = useState({
    personalDetails: false,
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

  const answersObject = {
    questions: answers,
    action: setAnswers,
  };

  const jumpBack = (stepSelected) => {
    const copyShowComponent = { ...stepsCompleted };

    let allStepsKeysArray = Object.keys(copyShowComponent);

    allStepsKeysArray.map((step) => (copyShowComponent[step] = false));

    copyShowComponent[stepSelected] = true;

    setShowComponent(copyShowComponent);
  };

  useEffect(() => {
    expandBackground("bg-big");
  }, []);

  return (
    <Fragment>
      <ProgressNav
        showComponent={showComponent}
        stepsCompleted={stepsCompleted}
        jumpBack={jumpBack}
      />
      <div className="home-page">
        {showComponent.personalDetails && (
          <PersonalDetails
            answersObject={answersObject}
            setStepsCompleted={setStepsCompleted}
            setShowComponent={setShowComponent}
          />
        )}
        {showComponent.survey && (
          <Survey
            answersObject={answersObject}
            setStepsCompleted={setStepsCompleted}
            setShowComponent={setShowComponent}
          />
        )}
        {showComponent.summary && (
          <Summary setShowComponent={setShowComponent} answers={answers} />
        )}
      </div>
    </Fragment>
  );
};

export default ApplicationForm;
