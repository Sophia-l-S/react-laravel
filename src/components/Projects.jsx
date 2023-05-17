import { useState, useEffect } from "react";

export default function Project() {
    const [projects, setProject] = useState([]);

    useEffect(() => {
        const getProject = async () => {
            let response = await fetch(
                "https://laravel.sophiascott.ca/api/projects");
            let data = await response.json();
            setProject(data);
        }
        getProject();
    }, []);

    return (
        <div>
            <hr></hr>
            <h2 id="title">
                Projects
            </h2>
            <hr></hr>
            <ul id="list">
                {projects.map((projects) => (
                    <li key={projects.id}>
                        <h3>{projects.title}</h3>
                        <p>{projects.url}</p>
                        <p>{projects.content}</p>
                        <img src={projects.image} id="projimg"></img>
                        <hr></hr>
                    </li>
                ))}
            </ul>

        </div>
    );
}
