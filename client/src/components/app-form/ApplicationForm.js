import { useEffect, Fragment, useState } from "react";
import { expandBackground } from "../../utils/expandBackground";
import PersonalDetails from "./PersonalDetails";
import Survey from "./Survey";
import Summary from "./Summary";
import ProgressNav from "./ProgressNav";
import FormEnds from "./FormEnds";

const ApplicationForm = ({ componentsObject }) => {
  const [showComponent, setShowComponent] = useState({
    progressNav: true,
    personalDetails: true,
    survey: false,
    summary: false,
    formEds: true,
  });

  const [stepsCompleted, setStepsCompleted] = useState({
    personalDetails: false,
    survey: false,
    summary: false,
  });

  const [answers, setAnswers] = useState({
    firstName: "",
    lastName: "",
    gender: "Male",
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
    copyShowComponent.progressNav = true;
    setShowComponent(copyShowComponent);
  };

  const handleComponents = (nextComp) => {
    const copyShowComponent = { ...showComponent };
    const allShowCompoentKeys = Object.keys(copyShowComponent);
    allShowCompoentKeys.map((comp) => (copyShowComponent[comp] = false));

    copyShowComponent[nextComp] = true;
    copyShowComponent.progressNav = nextComp === "formEnds" ? false : true;

    setShowComponent(copyShowComponent);
  };

  useEffect(() => {
    expandBackground("bg-big");
  }, []);

  return (
    <Fragment>
      {showComponent.progressNav && (
        <ProgressNav
          showComponent={showComponent}
          stepsCompleted={stepsCompleted}
          jumpBack={jumpBack}
        />
      )}

      <div className="home-page">
        {showComponent.personalDetails && (
          <PersonalDetails
            answersObject={answersObject}
            setStepsCompleted={setStepsCompleted}
            handleComponents={handleComponents}
          />
        )}
        {showComponent.survey && (
          <Survey
            answersObject={answersObject}
            setStepsCompleted={setStepsCompleted}
            handleComponents={handleComponents}
          />
        )}
        {showComponent.summary && (
          <Summary handleComponents={handleComponents} answers={answers} />
        )}
        {showComponent.formEnds && (
          <FormEnds componentsObject={componentsObject} />
        )}
      </div>
    </Fragment>
  );
};

export default ApplicationForm;
