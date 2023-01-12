import { useState } from "react";

const Survey = ({ answersObject, setStepsCompleted, setShowComponent }) => {
  const [music, setMusic] = useState(answersObject.questions.question1);
  const [pet, setPet] = useState(answersObject.questions.question2);
  const [food, setFood] = useState(answersObject.questions.question3);

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
                <option value="Linkedin">Metal</option>
                <option value="Gumtree">Hip-Hop</option>
                <option value="Newspaper">Pop</option>
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
