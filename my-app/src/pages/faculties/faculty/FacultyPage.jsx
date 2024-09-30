import { createContext, useEffect, useState } from "react"
import { NavLink, Outlet, useParams } from "react-router-dom"
import Error from "../../common/components/Error/Error"
import citiesService from "../../common/service/citiesService"
import styles from './FacultyPage.module.css'

const FacultyContext = createContext()

const FacultyPage = () => {
    const [faculty, setFaculty] = useState({
        id: 0,
        name: '',
        description: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const { id } = useParams()

    useEffect(() => {
        async function getCities() {
            const response = await citiesService.get()
            setFaculty(response);

            return response;
        }

        setIsLoading(true)
        getCities()
            .catch(error => {
                console.error(error)
                setError('A aparut o eroare la obtinera listei de orase')

            })
            .finally(setIsLoading(false))
    }, [])

    if (isLoading) {
        return <div>Se incarca... </div>
    }

    if (error && error.length > 0) {
        return <Error message={error} />
    }

    return (
        <div>
            <div className={styles.linksWrapper}>
                <NavLink to={`/faculties/${id}/description`}>Description</NavLink>
                <NavLink to={`/faculties/${id}/history`}>History</NavLink>
            </div>
            <FacultyContext.Provider value={faculty}>
                <Outlet />
            </FacultyContext.Provider>
        </div>
    )
}

export default FacultyPage