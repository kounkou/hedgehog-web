import React from "react";
import "../styles.css"; // Import your CSS file for styling

const AboutPage: React.FC<{ theme: string; isFontBold: boolean }> = ({
    theme,
    isFontBold,
  }) => {
    const openExternalLink = (url: string) => {
      window.open(url, "_blank");
    };

  const themeObject = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    buttonColor: theme === "light" ? "#f5f5f5" : "#444444",
    buttonBorderColor: theme === "light" ? "#cccccc" : "#666666",
    textColor: theme === "light" ? "#000000" : "#ffffff",
    textAreaBackgroundColor: theme === "light" ? "#f9f9f9" : "#444444",
    textAreaBorderColor: theme === "light" ? "#dddddd" : "#666666",
  };

  return (
    <div className="about-page" style={{ backgroundColor: themeObject.backgroundColor }}>
      <div className="about-page-container">
        {/* Header */}
        <div className="about-header" style={{ backgroundColor: themeObject.buttonColor, borderColor: themeObject.buttonBorderColor }}>
          <div className="header-content">
            <span className="header-icon" role="img" aria-label="Hedgehog">
              🦔
            </span>
            <h1 className="header-title" style={{ color: themeObject.textColor, fontWeight: isFontBold ? "bold" : "normal" }}>
              About Hedgehog
            </h1>
          </div>
        </div>

        {/* Separator */}
        <hr className="separator" />

        {/* Buy Me a Coffee */}
        <div className="buy-me-coffee">
          <img
            src="buy-me-a-coffee.png"
            alt="Buy Me a Coffee"
            onClick={() => openExternalLink("https://buymeacoffee.com/kounkou")}
            className="clickable-image"
          />
        </div>

        {/* Separator */}
        <hr className="separator" />

        {/* Why Use Hedgehog Section */}
        <div className="about-section" style={{ backgroundColor: themeObject.buttonColor, borderColor: themeObject.buttonBorderColor }}>
          <h2 style={{ color: themeObject.textColor }}>Why you should use Hedgehog?</h2>
        </div>

        {/* Long Text Content */}
        <div className="about-text-area" style={{ backgroundColor: themeObject.buttonColor }}>
          <p dangerouslySetInnerHTML={{ __html: longTextContent }} style={{ color: themeObject.textColor, fontWeight: isFontBold ? "bold" : "normal" }} />
        </div>

        {/* Spaced Repetition Section */}
        <div className="about-section" style={{ backgroundColor: themeObject.buttonColor, borderColor: themeObject.buttonBorderColor }}>
          <h2 style={{ color: themeObject.textColor }}>What is spaced repetition?</h2>
        </div>

        {/* Spaced Repetition Content */}
        <div className="about-text-area" style={{ backgroundColor: themeObject.buttonColor }}>
          <p dangerouslySetInnerHTML={{ __html: spacedRepetitionContent }} style={{ color: themeObject.textColor, fontWeight: isFontBold ? "bold" : "normal" }} />
        </div>

        {/* Join Community Section */}
        <div className="about-section" style={{ backgroundColor: themeObject.buttonColor, borderColor: themeObject.buttonBorderColor }}>
          <h2 style={{ color: themeObject.textColor }}>Join the Hedgehog community!</h2>
        </div>

        {/* Placeholder for Community Image */}
        <div className="community-image-placeholder">
          <img src="join-community.png" alt="Join Community" />
        </div>
      </div>
    </div>
  );
};

// Replace long text content with the actual text
const longTextContent = `
<strong>1. Foundational Knowledge for Problem-Solving</strong><br>
<p>Algorithms and data structures form the foundation of computational problem-solving...</p>
`;

// Replace spaced repetition content with the actual text
const spacedRepetitionContent = `
<strong>1. What is Spaced Repetition?</strong><br>
<p>Spaced repetition is a learning technique that involves reviewing information...</p>
`;

export default AboutPage;
