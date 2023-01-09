import { useState } from "react";

const Survey = ({ setAnswers, setShowComponent }) => {
  const [music, setMusic] = useState("Pop");
  const [pet, setPet] = useState("Cat person");
  const [food, setFood] = useState("Yes");

  const onSubmit = (e) => {
    e.preventDefault();

    setAnswers((prevState) => ({
      ...prevState,
      question1: music,
      question2: pet,
      question3: food,
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
