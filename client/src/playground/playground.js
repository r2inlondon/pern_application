import react, { useState } from "react";

const TestForm = () => {
  const [firstName, setFirsName] = useState("");
  const [error, setError] = useState("");

  const handleName = (e) => {
    let name = e.target.value;

    console.log(name);

    if (name.length < 5) {
      setError("Enter a valid name");
    } else {
      setFirsName(name);
      setError("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      {error && <p>{error}</p>}
      <label>First Name</label>
      <br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={handleName}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TestForm;
