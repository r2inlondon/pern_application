const ProgressNav = ({stepsCompleted , showComponent, jumpBack}) => {
    
  const showStep = (e) => {
    e.preventDefault();

    const stepSelected = e.target.getAttribute("data-step-num");

    jumpBack(stepSelected)
            
  };

  return (
    <div>
      <div className="nav">
        <div className="progress">
          <div className="steps">
           {stepsCompleted.personalDetails && (
             <button
             key={1}
             data-step-num="personalDetails"
             className="button-completed"
             onClick={showStep}
           ></button>
           )}

            {/* <div className="active" /> */}
          </div>
          <div className="line"></div>
          <div className="steps">
            {stepsCompleted.survey && 
              <button
              key={2}
              data-step-num="survey"
              className="button-completed"
              onClick={showStep}
            ></button>
            }            
            {/* <div className="active" /> */}
          </div>
          <div className="line"></div>
          <div className="steps">
            {stepsCompleted.summary && (
              <button
              key={3}
              data-step-num="summary"
              className="button-completed"
              onClick={showStep}
            ></button>
            )}
            
            {/* <div className="active" /> */}
          </div>
          
        </div>
        <div className="progress-txt-container">
          <div className="progress-txt">
            <p>Personal Details</p>
          </div>
          <div className="progress-txt">
            <p>Survey</p>
          </div>
          <div className="progress-txt">
            <p>Summary</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ProgressNav;
