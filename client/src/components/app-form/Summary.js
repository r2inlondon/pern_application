import { useState, Fragment } from "react";
import "animate.css";
import { createCandidate } from "../../api/api-calls";
import Loader from "../loader/Loader";
import { expandBackground } from "../../utils/expandBackground";

const Summary = ({ handleComponents, answers }) => {
  const [loading, setLoading] = useState(false);

  const {
    firstName,
    lastName,
    gender,
    email,
    question1,
    question2,
    question3,
  } = answers;

  const onSubmit = async (e) => {
    e.preventDefault();

    const nextComp = e.target.getAttribute("data-next");
    handleComponents(nextComp);
    expandBackground("bg-big");
    setLoading(true);
    const result = await createCandidate(answers);
    setLoading(false);
    console.log(result.status);
  };

  return (
    <Fragment>
      {loading && (
        <div className="loader-style-summary">
          <Loader loaderTxt={"Submiting Form"} />
        </div>
      )}
      {!loading && (
        <div className="summary-page">
          <div className="summary-box">
            <p className="summary-instructions animate__animated animate__shakeX animate__delay-1s">
              Click on the above progress bar to amend your answers.
            </p>
            <p className="summary-title">Personal Details</p>
            <div className="black-line"></div>
            <div className="personal-details">
              <div className="inputs-container">
                <div className="two-inputs">
                  <p className="field-title">First name</p>
                  <p>{firstName}</p>
                </div>
                <div className="two-inputs">
                  <p className="field-title">Last name</p>
                  <p>{lastName}</p>
                </div>
                <div className="">
                  <p className="field-title">Gender</p>
                  <p>{gender}</p>
                </div>
              </div>
              <div className="inputs-container">
                <div className="">
                  <p className="field-title">Email</p>
                  <p>{email}</p>
                </div>
              </div>
            </div>

            <h2 className="summary-title"> Survey</h2>
            <div className="black-line"></div>
            <div className="survey-summary">
              <div className="inputs-container">
                <p className="field-title">What kind of music do you prefer?</p>
                <p>{question1}</p>
              </div>
              <div className="inputs-container">
                <p className="field-title">Would you say that you are a </p>
                <p>{question2}</p>
              </div>
              <div className="inputs-container">
                <p className="field-title">Are you vegetarian? </p>
                <p>{question3}</p>
              </div>
            </div>
            <div className="next">
              <button
                className="the-button"
                data-next="formEnds"
                onClick={onSubmit}
              >
                Submit Form
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Summary;
