import React, { useState } from "react";
import "../css/Sidebar.css";
function Sidebar({ openStates, setOpenStates }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="menu-header">
        <span>Menu</span>
        <button onClick={toggleSidebar}>X</button>
      </div>
      <ul>
        <div
          className="menu-item"
          onMouseOver={(e) =>
            (e.currentTarget.style.textDecoration = "underline")
          }
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
          onClick={() => {
            setOpenStates((prev) => ({
              ...Object.keys(prev).reduce((acc, key) => {
                acc[key] = false;
                return acc;
              }, {}),
              aboutMe: true,
            }));
          }}
        >
          👟 ABOUT ME
        </div>
        <div
          className="menu-item"
          onMouseOver={(e) =>
            (e.currentTarget.style.textDecoration = "underline")
          }
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
          onClick={() => {
            setOpenStates((prev) => ({
              ...Object.keys(prev).reduce((acc, key) => {
                acc[key] = false;
                return acc;
              }, {}),
              photo: true,
            }));
          }}
        >
          📰 PHOTO
        </div>
        <div
          className="menu-item"
          onMouseOver={(e) =>
            (e.currentTarget.style.textDecoration = "underline")
          }
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          🎵 LIVE
        </div>
        <div
          className="menu-item"
          onMouseOver={(e) =>
            (e.currentTarget.style.textDecoration = "underline")
          }
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          🚀 RELEASE
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
