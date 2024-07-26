'use client';

import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

function ThemeToggleButton() {
  var themeName = "dark";

  function toggleTheme() {
    if (themeName === "dark") {
      themeName = "light";
      document.getElementById("themeToggleButton").innerHTML = "<i class=\"bi bi-sun\"/>";
      document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
      themeName = "dark";
      document.getElementById("themeToggleButton").innerHTML = "<i class=\"bi bi-moon\"/>";
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  }

  return (
    <div class="row justify-content-end">
      <div class="col-auto m-3">
        <button type="button" class="btn" id="themeToggleButton" onClick={toggleTheme}>
          <i className="bi bi-moon"/>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <ThemeToggleButton/>
      <div className="row justify-content-center m-3">
        <div className="col-auto">
          <h1>
            Jordan Dennis        
          </h1>
        </div>
      </div>
      <div className="container">

      </div>
    </main>
  );
}
