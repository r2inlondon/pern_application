import { useState } from "react";

const PersonalDetails = ({
  handleComponents,
  answersObject,
  setStepsCompleted,
}) => {
  const [firstName, setFirstName] = useState(answersObject.questions.firstName);
  const [lastName, setLastName] = useState(answersObject.questions.lastName);
  const [gender, setGender] = useState(answersObject.questions.gender);
  const [email, setEmail] = useState(answersObject.questions.email);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.lastChild);

    answersObject.action((prevState) => ({
      ...prevState,
      firstName,
      lastName,
      gender,
      email,
    }));

    setStepsCompleted((prevState) => ({
      ...prevState,
      personalDetails: true,
    }));

    handleComponents("survey");
  };

  return (
    <div className="personal-page">
      <div className="form-container">
        <form onSubmit={onSubmit} className="personal-form">
          <div className="inputs-container">
            <div className="two-inputs">
              <label>First Name</label>

              <input
                type="text"
                required
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="two-inputs">
              <label>Last Name</label>

              <input
                type="text"
                required
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="radio-box">
            <p>Gender</p>
            <div className="radio">
              <input
                id="radio"
                type="radio"
                checked={gender === "Male"}
                onChange={(e) => setGender("Male")}
              />
              <label htmlFor="radio" className="radio-label">
                Male
              </label>
            </div>
            <div className="radio">
              <input
                id="radio-2"
                type="radio"
                checked={gender === "Female"}
                onChange={(e) => setGender("Female")}
              />
              <label htmlFor="radio-2" className="radio-label">
                Female
              </label>
            </div>
          </div>

          <label>Email</label>
          <input
            type="email"
            required
            id="email"
            className="personal-email-input"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="next">
            <input className="the-button" value="Next" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
