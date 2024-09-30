import styles from './Tutors.module.css';
import Button from "../../../common/components/Button/Button";
import AddTutor from "./AddTutor/AddTutor";
import Icon from "../../../common/components/Icon/Icon";
import { useContext, useEffect, useRef, useState } from 'react';
import tutorsService from '../../../common/service/tutorsService'
import { ColorContext } from '../../../SharedLayout';

const TUTORS_KEY = 'tutors';

const Tutors = () => {

    const contextValue = useContext(ColorContext)

    const [isAddFormVisible, setIsAddFormVisible] = useState(false);
    const [list, setList] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsloading] = useState(false)

    const test = useRef(null)

    useEffect(() => {
        async function getTutors() {
            const response = await tutorsService.get()
            setList(response)
        }

        setIsloading(true)

        getTutors()
            .catch(() => {
                setError('A aparut o eroare la obtinerea listei de tutori')
            })
            .finally(() => setIsloading(false))
    }, [])

    useEffect(() => {
        localStorage.setItem(TUTORS_KEY, JSON.stringify(list))
    }, [list])

    // console.dir(test?.current)

    useEffect( () => {
        // console.dir(test?.current.scrollWidth)
    }, [])


   const renderList = (items) => {
        if(!items || !Array.isArray(items)) {
            return <>Loading...</>
        }

        if(items.length === 0) {
            return <div>There are no tutors.</div>
        }

        return items.map(el => {
            const name = `${el.firstName} ${el.lastName}`;

            return (
                <div key={el.id} className={styles.tutorsListItem}>
                    <div>{name}</div>
                    <div className={styles.address}>
                        <span>{el.email}</span>
                        <span>{el.telephone}</span>
                        <span>{el.city}</span>
                    </div>
                    <div>{el.role}</div>
                </div>
            )
        })
    }

   const handleTutor = (data) => {
        const newId = list.length > 0 ? list.length : 0;

        const tutorToAdd = {
            id: newId,
            firstName: data.name,
            lastName: data.surname,
            telephone: data.phone,
            email: data.email,
            city: data.city,
            role: 'Member',
        }

        /**
         * Pentru orice state care este un obiect sau array si avem nevoie de starea precedenta, folosim metoda de mai jos
         */

        setList( prevState => {
            return [...prevState, tutorToAdd]
        })
        setIsAddFormVisible(false)
    }


    return (
        <section ref={test} className="section">
            <code>Color: {contextValue}</code>
            <h1>
                <Icon variant='cat' label='cat' />
                <span>Tutors</span>
            </h1>
            <div className={`box ${styles.tutorsList}`}>
                {renderList(list)}
            </div>
            {isAddFormVisible && <AddTutor onFormSubmit={handleTutor} />}
            <Button action={() => setIsAddFormVisible(true)}>Add Tutor</Button>
        </section>
    )
}

export default Tutors;