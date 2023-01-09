const StartEnd = (props) => {
  const { text, action } = props.handle;

  return (
    <div className="the-start">
      <div className="start-txt">
        <p>{text}</p>
        {action && (
          <button className="the-button" onClick={action}>
            START
          </button>
        )}
      </div>
    </div>
  );
};

export default StartEnd;
