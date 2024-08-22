import "./App.css";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <Alert variant="info" isOutlined="true">
        Aceasta este o alerta
      </Alert>
      <Alert variant="success" isOutlined="true">
        Aceasta este o alerta de success
      </Alert>
      <Alert variant="error">Aceasta este o alerta de eroare</Alert>
      <p className="alert">Acesta este un paragraf din App.jsx</p>
    </>
  );
}

export default App;
