import { useState } from "react";

const Survey = ({ answersObject, setStepsCompleted, setShowComponent }) => {
  const [music, setMusic] = useState(
    answersObject.questions.question1
      ? answersObject.questions.question1
      : "Metal"
  );
  const [pet, setPet] = useState(
    answersObject.questions.question2
      ? answersObject.questions.question2
      : "Dog Person"
  );
  const [food, setFood] = useState(
    answersObject.questions.question3
      ? answersObject.questions.question3
      : "Yes"
  );

  const onSubmit = (e) => {
    e.preventDefault();

    answersObject.action((prevState) => ({
      ...prevState,
      question1: music,
      question2: pet,
      question3: food,
    }));

    setStepsCompleted((prevState) => ({
      ...prevState,
      survey: true,
      summary: true,
    }));

    setShowComponent({
      personalDetailsForm: false,
      survey: false,
      summary: true,
    });
  };

  return (
    <div className="survey">
      <form onSubmit={onSubmit}>
        <div className="options-container">
          <div className="question-container">
            <div className="survey-txt">
              <label>What kind of music do you prefer?</label>
            </div>
            <div className="select">
              <select
                id="select"
                value={music}
                onChange={(e) => setMusic(e.target.value)}
              >
                <option value="Metal">Metal</option>
                <option value="Hip-Hop">Hip-Hop</option>
                <option value="Pop">Pop</option>
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
