import { useContext } from "react";
import { FormContext } from "./ApplicationForm";
import "animate.css";

const Summary = (props) => {
  const details = useContext(FormContext);

  return (
    <div className="summary">
      <p className="summary-instructions animate__animated animate__shakeX animate__delay-1s">
        Click on the above progress bar to amend your info.
      </p>
      <p className="summary-title">{details.step1.section}</p>
      <div className="black-line"></div>
      <div className="personal-details">
        <div className="inputs-container">
          <div className="two-inputs">
            <p className="field-title">First name</p>
            <p>{details.step1.firstName}</p>
          </div>
          <div className="two-inputs">
            <p className="field-title">Last name</p>
            <p>{details.step1.lastName}</p>
          </div>
          <div className="">
            <p className="field-title">Gender</p>
            <p>{details.step1.gender}</p>
          </div>
        </div>
        <div className="inputs-container">
          <div className="two-inputs">
            <p className="field-title">Mobile</p>
            <p>{details.step1.mobile}</p>
          </div>
          <div className="">
            <p className="field-title">Email</p>
            <p>{details.step1.email}</p>
          </div>
        </div>
      </div>

      <h2 className="summary-title"> {details.step2.section}</h2>
      <div className="black-line"></div>
      <div className="address">
        <div className="inputs-container">
          <div className="two-inputs">
            <p>{details.step2.firstLine}</p>
          </div>
          {details.step2.firstLine && (
            <div>
              <div className="two-inputs">
                <p>{details.step2.secondLine}</p>
              </div>
            </div>
          )}
        </div>
        <div className="inputs-container">
          <div className="two-inputs">
            <p>{details.step2.postcode}</p>
          </div>
          <div className="two-inputs">
            <p>{details.step2.city}</p>
          </div>
          <div className="two-inputs">
            <p>{details.step2.country}</p>
          </div>
        </div>
      </div>
      <h2 className="summary-title"> {details.step3.section}</h2>
      <div className="black-line"></div>
      <div className="survey">
        <div className="inputs-container">
          <p className="field-title">Where did you hear about us?</p>
          <p>{details.step3.hear}</p>
        </div>
        <div className="inputs-container">
          <p className="field-title">Would you say that you are a </p>
          <p>{details.step3.pet}</p>
        </div>
        <div className="inputs-container">
          <p className="field-title">Are you vegetarian? </p>
          <p>{details.step3.food}</p>
        </div>
      </div>
      <div className="next">
        <button className="the-button" onClick={props.endForm}>
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default Summary;
