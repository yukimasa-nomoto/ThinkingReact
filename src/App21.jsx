import { useState } from "react";
import { useFormInput } from "./21/useFormInput";

export default function App() {
    console.log('App component rendered');
/*
    const [firstName, setFirstName] = useState('Mary');
    const [lastName, setLastName] = useState('Poppins');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }
*/
    const firstNameProps = useFormInput('Mary');
    const lastNameProps = useFormInput('Poppins');

    return (
        <div>
            <label>
                First name:
                <input {...firstNameProps} />
            </label>        
            <label>
                Last name:
                <input {...lastNameProps} />
            </label>
            <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>        </div>
    );
}