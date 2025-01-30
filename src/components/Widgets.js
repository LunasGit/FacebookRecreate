import React from "react";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__section">
                <h3>Friends Online</h3>
                <ul>
                    <li>John Doe</li>
                    <li>Jane Smith</li>
                    <li>Mike Johnson</li>
                </ul>
            </div>
            <div className="widgets__section">
                <h3>Sponsored Ads</h3>
                <p>Ad content goes here...</p>
            </div>
            <div className="widgets__section">
                <h3>Trending Topics</h3>
                <ul>
                    <li>#TechNews</li>
                    <li>#Travel</li>
                    <li>#Music</li>
                </ul>
            </div>
        </div>
    );
}

export default Widgets;