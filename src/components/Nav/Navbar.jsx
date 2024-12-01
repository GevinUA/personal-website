import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="#about">ABOUT ME</a>
      <a href="#experience">WORKING EXPERIENCE</a>
      <a href="#project">PROJECT</a>
      <a href="#education">EDUCATION</a>
    </div>
  );
}
