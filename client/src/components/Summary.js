import "animate.css";

const Summary = ({ setShowComponent, answers, expandBackground }) => {
  const {
    firstName,
    lastName,
    gender,
    email,
    question1,
    question2,
    question3,
  } = answers;

  const endForm = async (e) => {
    e.preventDefault();

    try {
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="summary">
      <p className="summary-instructions animate__animated animate__shakeX animate__delay-1s">
        Click on the above progress bar to amend your info.
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
      <div className="survey">
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
        <button className="the-button" onClick={endForm}>
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default Summary;
