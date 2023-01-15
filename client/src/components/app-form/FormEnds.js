import { Fragment } from "react";
import { expandBackground } from "../../utils/expandBackground";

const FormEnds = ({ componentsObject }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    expandBackground("bg-big");

    componentsObject.action({
      login: true,
      applicationForm: false,
      dashboard: false,
    });
  };

  return (
    <Fragment>
      <h2>Form has been successfully submited! </h2>
      <button className="the-button" onClick={onSubmit}>
        Back Home
      </button>
    </Fragment>
  );
};

export default FormEnds;
