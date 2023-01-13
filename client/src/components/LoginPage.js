const LoginPage = ({ componentsObject }) => {
  const manageComponents = (e) => {
    e.preventDefault();

    const componentButton = e.target.getAttribute("data-button-login");

    const copyComponents = { ...componentsObject.comp };

    const compKeys = Object.keys(copyComponents);

    compKeys.map((comp) => (copyComponents[comp] = false));

    copyComponents[componentButton] = true;

    componentsObject.action(copyComponents);
  };

  return (
    <div className="home-page">
      <div className="login">
        <p>Application Form Coded With React</p>
        <div className="login-buttons">
          <button
            className="the-button"
            data-button-login="applicationForm"
            onClick={manageComponents}
          >
            Apply
          </button>

          <button
            className="the-button"
            data-button-login="dashboard"
            onClick={manageComponents}
          >
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
