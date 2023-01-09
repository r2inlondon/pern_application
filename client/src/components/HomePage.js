import ApplicationForm from "./ApplicationForm";

const HomePage = () => {
  const apply = () => {
    console.log("apply");
  };

  return (
    <div className="bg-small">
      <div className="home-page">
        <div className="login">
          <p>Application Form Coded With React</p>
          <div className="login-buttons">
            <button className="the-button" onClick={apply}>
              Candidate
            </button>
            <button className="the-button" onClick={apply}>
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
