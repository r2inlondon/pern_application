import { useState, useContext } from "react";
import { FormContext } from "./ApplicationFormOLD";

const PersonalDetailsOld = (props) => {
  const details = useContext(FormContext);

  const [firstName, setFirstName] = useState(
    details.step1.firstName ? details.step1.firstName : ""
  );
  const [lastName, setLastName] = useState(
    details.step1.lastName ? details.step1.lastName : ""
  );

  const [gender, setGender] = useState(
    details.step1.gender ? details.step1.gender : ""
  );

  const [mobile, setMobile] = useState(
    details.step1.mobile ? details.step1.mobile : ""
  );

  const [email, setEmail] = useState(
    details.step1.email ? details.step1.email : ""
  );

  const onSubmit = (e) => {
    e.preventDefault();
    props.setDetails({ firstName, lastName, gender, mobile, email });
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

        <label>Mobile</label>
        <br />
        <input
          type="text"
          required
          min="10"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
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

export default PersonalDetailsOld;
