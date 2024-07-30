'use client';

import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

function ThemeToggleButton() {
  var darkTheme = true;

  function toggleTheme() {
    if (darkTheme) {
      document.getElementById("themeToggleIcon").setAttribute("class", "bi bi-sun");
      document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
      document.getElementById("themeToggleIcon").setAttribute("class", "bi bi-moon");
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
    darkTheme = !darkTheme;
  }

  return (
    <button type="button" className="btn" onClick={toggleTheme}>
      <i className="bi bi-moon" id="themeToggleIcon"/>
    </button>
  );
}

function LinkedInProfile() {
  return (
    <a className="btn" href="https://www.linkedin.com/in/jordan-dennis-3238bb281/">
      <i className="bi bi-linkedin"/>
    </a>
  );
}

function GithubProfile() {
  return (
    <a className="btn" href="https://github.com/jordan-dennis">
      <i className="bi bi-github"/>
    </a>
  );
}

function Socials() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <div className="nav-link active">
          <i className="bi bi-house"/>
        </div>
      </li>
      <li className="nav-item">
        <GithubProfile/>
      </li>
      <li className="nav-item">
        <LinkedInProfile/>
      </li>
    </ul>
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
      <Socials/>
      <ThemeToggleButton/>
      <PageTitle>
        Jordan Dennis
      </PageTitle>
      <About>
        Hi, thanks for visiting my site. It's currently under construction.
      </About>
    </main>
  );
}
