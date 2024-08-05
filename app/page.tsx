'use client';

import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

function ThemeToggleButton() {
  var darkTheme = true;

  function toggleTheme() {
    if (darkTheme) {
      document.getElementById("themeToggleIcon").setAttribute("class", "btn btn-lg bi bi-sun");
      document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
      document.getElementById("themeToggleIcon").setAttribute("class", "btn btn-lg bi bi-moon");
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
    darkTheme = !darkTheme;
  }

  return (
    <button type="button" className="btn btn-lg bi bi-moon" id="themeToggleIcon" onClick={toggleTheme}/>
  );
}

function Socials() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="btn btn-lg bi bi-github" href="https://github.com/jordan-dennis"/>
      </li>
      <li className="nav-item">
        <a className="btn btn-lg bi bi-linkedin" href="https://www.linkedin.com/in/jordan-dennis-3238bb281/"/>
      </li>
    </ul>
  );
}

function TopBar() {
  return (
    <div className="d-flex justify-content-between">
      <Socials/>
      <div class="nav-item">
        <ThemeToggleButton/>
      </div>
    </div>
  );
}

function PageTitle({ children }) {
  return (
    <div className="row justify-content-center m-3">
      <div className="col-auto">
        <h1>
          { children }       
        </h1>
      </div>
    </div>
  );
}

function About({ children }) {
  return (
    <div className="m-3">
      <h2 className="ms-3">
        About
      </h2>
      <div className="p-3 border rounded">
        <p className="p-0 m-0">
          { children }
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <TopBar/>
      <PageTitle>
        Jordan Dennis
      </PageTitle>
      <About>
        Hi, thanks for visiting my site. It's currently under construction.
      </About>
    </main>
  );
}
