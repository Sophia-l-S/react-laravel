import { useState, useEffect } from "react";

export default function Social() {
    const [socials, setSocial] = useState([]);

    useEffect(() => {
        const getSocial = async () => {
            let response = await fetch(
                "https://laravel.sophiascott.ca/api/socials");
            let data = await response.json();
            setSocial(data);
        }
        getSocial();
    }, []);

    return (
        <div>
            <hr></hr>
            <h2 id="title">
                Socials
            </h2>
            <hr></hr>
            <ul id="list">
                {socials.map((socials) => (
                    <li key={socials.id}>
                        <h3>{socials.title}</h3>
                        <p>{socials.url}</p>
                        <img src={socials.image}></img>
                        <hr></hr>
                    </li>
                ))}
            </ul>

        </div>
    );
}
