import { Fragment } from "react";

const FormEnds = ({ componentsObject }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    componentsObject.action({
      login: true,
      applicationForm: false,
      dashboard: false,
    });
  };

  return (
    <div className="formEnd-page">
      <div className="backhome-box">
        <h2>Form has been successfully submited! </h2>
        <button className="the-button" onClick={onSubmit}>
          Back Home
        </button>
      </div>
    </div>
  );
};

export default FormEnds;
