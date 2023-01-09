import { useRef, useState } from "react";

const PersonalDetailsForm = (props) => {
  const [gender, setGender] = useState("");
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();
  const emailRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("firstName:", firstNameRef.current.value);
    console.log("is Male", maleRef.current.checked);
    console.log("is female", femaleRef.current.checked);
    console.log("email", emailRef.current.value);
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
              ref={firstNameRef}
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
              ref={lastNameRef}
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
              ref={maleRef}
            />
            Male
          </label>
          <label>
            <input
              className="radio-b"
              type="radio"
              checked={gender === "female"}
              onChange={(e) => setGender("female")}
              ref={femaleRef}
            />
            Female
          </label>
        </div>
        <label>Email</label>
        <br />
        <input type="email" required id="email" name="email" ref={emailRef} />
        <br />
        <div className="next">
          <input type="submit" value="SAVE" className="the-button" />
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
