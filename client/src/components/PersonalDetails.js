import { useRef, useState } from "react";

const PersonalDetails = ({
  setShowComponent,
  answersObject,
  setStepsCompleted,
}) => {
  const [firstName, setFirstName] = useState(answersObject.questions.firstName);
  const [lastName, setLastName] = useState(answersObject.questions.lastName);
  const [gender, setGender] = useState(answersObject.questions.gender);
  const [email, setEmail] = useState(answersObject.questions.email);

  console.log(answersObject.questions.firstName);

  const onSubmit = (e) => {
    e.preventDefault();

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

    setShowComponent({
      personalDetails: false,
      survey: true,
      summary: false,
    });
  };

  return (
    <div className="personal-d">
      <form onSubmit={onSubmit}>
        <div className="inputs-container">
          <div className="two-inputs">
            <label>First Name</label>
            <br />
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
            <br />
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
        <div className="radio">
          <p>Gender</p>
          <label>
            <input
              className="radio-b"
              type="radio"
              checked={gender === "male"}
              onChange={(e) => setGender("male")}
            />
            Male
          </label>
          <label>
            <input
              className="radio-b"
              type="radio"
              checked={gender === "female"}
              onChange={(e) => setGender("female")}
            />
            Female
          </label>
        </div>
        <label>Email</label>
        <br />
        <input
          type="email"
          required
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <div className="next">
          <input type="submit" value="SAVE" className="the-button" />
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
