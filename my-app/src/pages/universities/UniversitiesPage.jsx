import University from "./components/University/University";
import Tutors from "./components/Tutors/Tutors"
import Cities from "./components/Cities/Cities";
import Faculties from "./components/Faculties/Faculties";
import { useState } from "react";

function UniversitiesPage() {
    const [, setColor] = useState('verde')

    return (
        <>
            <University />
            <Tutors />
            <Cities />
            <Faculties/>
        </>
    )
}

export default UniversitiesPage;