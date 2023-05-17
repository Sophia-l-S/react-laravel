import { useState, useEffect } from "react";

export default function Entry() {
    const [entries, setEntry] = useState([]);

    useEffect(() => {
        const getEntry = async () => {
            let response = await fetch(
                "https://laravel.sophiascott.ca/api/entries");
            let data = await response.json();
            setEntry(data);
        }
        getEntry();
    }, []);

    return (
        <div>
            <hr></hr>
            <h2 id="title">
                Journal Entries
            </h2>
            <hr></hr>
            <ul id="list">
                {entries.map((entries) => (
                    <li key={entries.id}>
                        <h3>{entries.title}</h3>
                        <p>{entries.content}</p>
                        <p>{entries.created_at}</p>
                        <hr></hr>
                    </li>
                ))}
            </ul>

        </div>
    );
}
