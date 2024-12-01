import "./introduction.css";
import Typewriter from "react-typewriter-effect";
import { useEffect, useState } from "react";

export default function Introduction() {
  const [firstDone, setFirstDone] = useState(false);
  const headerText = "Welcome to my website!";
  const contentText = `My name is Bingshen Yang. I have a master's degree in Data
  Science from UBC Kelowna and a strong passion for software development.
  I'm always eager to learn new technologies and improve my skills.`;
  const typeSpeed = 120;

  useEffect(() => {
    setTimeout(() => setFirstDone(true), headerText.length * typeSpeed + 200);
  }, []);
  return (
    <div className="introduction-container">
      <div className="introduction-header">
        <Typewriter text={headerText} typeSpeed={typeSpeed} cursor="█" />
      </div>
      {firstDone && (
        <div id="introduction-content">
          <Typewriter text={contentText} typeSpeed={50} cursor="█" />
        </div>
      )}
    </div>
  );
}
