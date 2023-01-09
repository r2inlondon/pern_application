import { useState, useContext } from "react";
import { FormContext } from "./ApplicationForm";

const Survey = (props) => {
  const details = useContext(FormContext);
  const [hear, setHear] = useState(
    details.step3.hear ? details.step3.hear : "Gumtree"
  );
  const [pet, setPet] = useState(
    details.step3.pet ? details.step3.pet : "Dog person"
  );

  const [food, setFood] = useState(
    details.step3.food ? details.step3.food : "No"
  );

  const onSubmit = (e) => {
    e.preventDefault();
    props.setAboutUs({ hear, pet, food });
  };

  return (
    <div className="survey">
      <form onSubmit={onSubmit}>
        <div className="options-container">
          <div className="question-container">
            <div className="survey-txt">
              <label>How did you hear about us?</label>
            </div>
            <div className="select">
              <select
                id="select"
                value={hear}
                onChange={(e) => setHear(e.target.value)}
              >
                <option value="Linkedin">Linkedin</option>
                <option value="Gumtree">Gumtree</option>
                <option value="Newspaper">Newspaper</option>
              </select>
            </div>
          </div>

          <div className="question-container">
            <div className="survey-txt">
              <label className="survey-txt">
                Would you say that you are a:
              </label>
            </div>

            <div className="select">
              <select
                id="select"
                value={pet}
                onChange={(e) => setPet(e.target.value)}
              >
                <option value="Dog person">Dog Person</option>
                <option value="Cat person">Cat Person</option>
              </select>
            </div>
          </div>
          <div className="question-container">
            <div className="survey-txt">
              <label className="survey-txt">Are you a vegetarian ? </label>
            </div>

            <div className="select">
              <select
                id="select"
                value={food}
                onChange={(e) => setFood(e.target.value)}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="next">
          <input className="the-button" type="submit" value="SAVE"></input>
        </div>
      </form>
    </div>
  );
};

export default Survey;
