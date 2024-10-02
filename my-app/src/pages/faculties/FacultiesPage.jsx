import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import citiesService from "../common/service/citiesService"
import Error from "../common/components/Error/Error"

const FacultiesPage = () => {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        async function getCities() {
            const response = await citiesService.get()
            setList(response);

            return response;
        }

        setIsLoading(true)
        getCities()
        .catch( error => {
            console.error(error)
            setError('A aparut o eroare la obtinera listei de orase')

        })
        .finally(setIsLoading(false))
    }, [])

    if (isLoading) {
        return <div>Se incarca... </div>
    }

    if (error && error.length > 0) {
        return <Error message={error}/>
    }

    return (
        <div>
            <h2>Faculties</h2>
            <div>
                {list.map(item => (
                    <div key={item.id}>
                        {item.name}
                        <Link to={`/faculties/${item.id}/description`}>
                            <span>Details</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FacultiesPage