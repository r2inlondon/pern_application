
const ProgressNav = () => {

    const showStep = () => {}
  

  return (
    <div>
      
        <div className="nav">
          <div className="progress">
            <div className="steps">
              
                <button
                  key={1}
                  data-step-num={1}
                  className="button-step"
                  onClick={showStep}
                ></button>
              
           <div className="active" />
            </div>
            <div className="line"></div>
            <div className="steps">
          
                <button
                  key={2}
                  data-step-num={2}
                  className="button-step"
                  onClick={showStep}
                ></button>
          
              <div className="active" />
            </div>
            <div className="line"></div>
            <div className="steps">
              
                <button
                  key={3}
                  data-step-num={3}
                  className="button-step"
                  onClick={showStep}
                ></button>
              
              <div className="active" />
            </div>
            <div className="line"></div>
            <div className="steps">
              
                <button
                  key={4}
                  data-step-num={4}
                  className="button-step"
                  onClick={showStep}
                ></button>
              
              <div className="active" />
            </div>
          </div>
          <div className="progress-txt-container">
            <div className="progress-txt">
              <p>step 1</p>
            </div>
            <div className="progress-txt">
              <p>step 2</p>
            </div>
            <div className="progress-txt">
              <p>step 3</p>
            </div>
            <div className="progress-txt">
              <p>step 4</p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ProgressNav;
