import React, { useState } from "react";
import "../styles.css";
import hedgehogImage from "../assets/hedgehog.png";
import ToggleSwitch from "./ToggleSwitch";
import About from "./About";

const WelcomePage: React.FC = () => {
    const [activePage, setActivePage] = useState("welcome"); // Tracks the active page

    const renderContent = () => {
        switch (activePage) {
            case "about":
                return (
                    <div>
                        <About theme="light" isFontBold={true} />
                        <button className="return-button" onClick={() => setActivePage("welcome")}>Return</button>
                    </div>
                );
            case "selectTopic":
                return (
                    <div>
                        <h2>Select a Topic</h2>
                        <p>Choose a topic to begin.</p>
                        <button className="return-button" onClick={() => setActivePage("welcome")}>Return</button>
                    </div>
                );
            case "startPracticing":
                return (
                    <div>
                        <h2>Start Practicing</h2>
                        <p>Let’s practice some challenges!</p>
                        <button className="return-button" onClick={() => setActivePage("welcome")}>Return</button>
                    </div>
                );
            case "statistics":
                return (
                    <div>
                        <h2>Statistics</h2>
                        <p>View your progress and achievements here.</p>
                        <button className="return-button" onClick={() => setActivePage("welcome")}>Return</button>
                    </div>
                );
            case "settings":
                return (
                    <div>
                        <h2>Settings</h2>
                        <p>Adjust your preferences here.</p>
                        <button className="return-button" onClick={() => setActivePage("welcome")}>Return</button>
                    </div>
                );
            default:
                return (
                    <div>
                        <img src={hedgehogImage} alt="Hedgehog" className="hedgehog-image" />
                        <h1>Welcome to Hedgehog</h1>
                        <p>What would you like to do?</p>
                        <div className="button-group">
                            <button className="menu-button" onClick={() => setActivePage("selectTopic")}>Select Topic</button>
                            <button className="menu-button" onClick={() => setActivePage("startPracticing")}>Start Practicing</button>
                            <button className="menu-button" onClick={() => setActivePage("statistics")}>Statistics</button>
                            <button className="menu-button" onClick={() => setActivePage("settings")}>Settings</button>
                            <button className="menu-button" onClick={() => setActivePage("about")}>About</button>
                        </div>
                        <div className="theme-toggle">
                            <label>Dark Theme</label>
                            <ToggleSwitch />
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="welcome-container">
            {renderContent()}
        </div>
    );
};

export default WelcomePage;
