import { useState } from "react";

function Navigation() {
    const [actualText, setText] = useState(0);

    const Texts = [
        [
            "React is Extremely Popular", 
            "It makes building complex, interactive UIs a breeze",
            "It's powerful & flexible",
            "It has a very active and versatile ecosystem"
        ],
        [
            "Components, JSX & Props",
            "State",
            "Hooks (e.g., useEffect())",
            "Dynamic rendering"
        ],
        [
            "Official web page (react.dev)",
            "Next.js (Fullstack framework)",
            "React Native (build native mobile apps with React)"
        ],
        [
            "Vanilla JavaScript requires imperative programming",
            "Imperative Programming: You define all the steps needed to achieve a result",
            "React on the other hand embraces declarative programming",
            "With React, you define the goal and React figures out how to get there"
        ]
    ]


    return(
        <div>
            <h1>Navigations</h1>
            <div>
                <div>
                    <button onClick={() =>setText(0)}>Why React?</button>
                    <button onClick={() =>setText(1)}>Core Features</button>
                    <button onClick={() =>setText(2)}>Related Resources</button>
                    <button onClick={() =>setText(3)}>React vs JS</button>
                </div>
                <div>
                    <ul>
                       {Texts[actualText].map((text, index) => (
                        <li key={index}>
                            <span>{text}</span>
                        </li>
                       ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation