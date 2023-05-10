import { useState, useEffect } from "react";

export default function Education() {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const getEducation = async () => {
            let response = await fetch(
                "http://laravel.sophiascott.ca/api/education");
            let data = await response.json();
            setEducation(data);
        }
        getEducation();
    }, []);

    return (
        <div>
            
            <h2 id="title">
                Education
            </h2>
            
            <ul id="list">
                {education.map((education) =>(
                    <li key={education.id}>
                        <h3>{education.title}</h3>
                        <p>{education.content}</p>
                        <p>{education.learned_at}</p>
                        <hr></hr>
                    </li>
                ))}
            </ul>

        </div>
    );
}
