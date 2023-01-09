const LoginPage = ({ setShowComponent }) => {
  return (
    <div className="login">
      <p>Application Form Coded With React</p>
      <div className="login-buttons">
        <button
          className="the-button"
          onClick={() =>
            setShowComponent({
              showLogin: false,
              showApplicationForm: true,
            })
          }
        >
          Candidate
        </button>
        <button className="the-button">Dashboard</button>
      </div>
    </div>
  );
};

export default LoginPage;
