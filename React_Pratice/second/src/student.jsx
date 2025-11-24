import React, { useState, useRef } from "react";

function Student({ name, age, rollno, hobbies }) {
    
    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    };

    // Language state
    const [lang, setLang] = useState("en");

    // Translations
    const translations = {
        en: {
            studentName: "Student Name",
            studentAge: "Student Age",
            studentRoll: "Student Roll No",
            hobbies: "Hobbies",
            selectLang: "Select Language"
        },
        hi: {
            studentName: "छात्र का नाम",
            studentAge: "छात्र की उम्र",
            studentRoll: "छात्र का रोल नंबर",
            hobbies: "रुचियाँ",
            selectLang: "भाषा चुनें"
        },
        fr: {
            studentName: "Nom de l'étudiant",
            studentAge: "Âge de l'étudiant",
            studentRoll: "Numéro de l'étudiant",
            hobbies: "Passe-temps",
            selectLang: "Choisir la langue"
        }
    };

    const t = translations[lang];

    return (
        <>
            {/* Language Selector */}
            <div style={{ marginBottom: "20px" }}>
                <label>{t.selectLang}: </label>
                <select value={lang} onChange={(e) => setLang(e.target.value)}>
                    <option value="en">English</option>
                    <option value="hi">हिन्दी</option>
                    <option value="fr">Français</option>
                </select>
            </div>

            <div>
                <h1>{t.studentName}: {name}</h1>
                <h2>{t.studentAge}: {age}</h2>
                <h3>{t.studentRoll}: {rollno}</h3>
            </div>

            <div>
                <h1>{t.hobbies}:</h1>
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>

            {/* Input + Focus Button */}
            <div style={{ marginTop: "20px" }}>
                <input ref={inputRef} placeholder="Click button to focus" />
                <button onClick={handleFocus}>Focus Input</button>
            </div>
        </>
    );
}

export default Student;
