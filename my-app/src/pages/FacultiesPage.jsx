import { useEffect, useState } from "react";
import Error from "../components/common/Error/error";
import { Link } from "react-router-dom";

const FacultiesPage = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

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
    setList(response);
  }, []);

  if (error && error.length > 0) {
    return <Error messagge={error} />;
  }
  return (
    <div>
      <h2>Faculties</h2>
      <div>
        {list.map((item) => (
          <div key={item.id}>
            {item.name}
            <Link to={`/faculties/${item.id}/description`}>
              <span>Details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultiesPage;
