import { createContext, useEffect, useState } from "react";
import Error from "../components/common/Error/error";
import { Link, Outlet, useParams } from "react-router-dom";

const FacultyContext = createContext();

const FacultyPage = () => {
  const [faculty, setFaculty] = useState({ id: 0, name: "", description: "" });
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    // tragem niste date dintr-un serviciu ( endpoint ) si le folosim in componenta noastra

    const response = [
      {
        id: 1,
        name: "Facultatea Automatica si Calculatoare",
        description: "Ifvgbnahsmd asdhnajmsda sdahjsdkalsdanm asd jm",
      },
      {
        id: 2,
        name: "Facultatea de Electronica",
        description: "Ifvgbnahsmd asdhnajmsda sdahjsdkalsdanm asd jm",
      },
      {
        id: 3,
        name: "Facultatea de Drept",
        description: "Ifvgbnahsmd asdhnajmsda sdahjsdkalsdanm asd jm",
      },
    ];
    setFaculty(response);
  }, []);

  if (error && error.length > 0) {
    return <Error messagge={error} />;
  }

  return (
    <div>
      <div>
        <Link to={`/faculties/${id}/description`}> Description </Link>
        <Link to={`/faculties/${id}/history`}> History </Link>
      </div>
      <FacultyContext.Provider value={faculty}>
        <Outlet />
      </FacultyContext.Provider>
    </div>
  );
};

export default FacultyPage;
