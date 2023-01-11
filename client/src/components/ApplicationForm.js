import { useEffect, Fragment, useState } from "react";
import { expandBackground } from "../js-functions/transparent-bg";
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

  const [stepsCompleted, setStepsCompleted ] = useState({
    personalDetails: false,
    survey: false,
    summary: false,
  })

  const [answers, setAnswers] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    question1: "",
    question2: "",
    question3: "",
  });

  const jumpBack = (stepSelected) => {

    const copyOfStepsState = {...stepsCompleted}

    let allStepsKeysArray = Object.keys(copyOfStepsState);

    allStepsKeysArray.map(step => copyOfStepsState[step] = false )

    copyOfStepsState[stepSelected] = true;
    
    console.log(copyOfStepsState)
  } 

  useEffect(() => {
    expandBackground();
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
          setAnswers={setAnswers}
          setStepsCompleted={setStepsCompleted}
          setShowComponent={setShowComponent}
        />
      )}
      {showComponent.survey && (
        <Survey          
          setAnswers={setAnswers}
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
