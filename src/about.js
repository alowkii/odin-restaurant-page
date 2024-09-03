import { clearContent } from "./index.js";

function displayAbout() {
    clearContent();
    document.getElementById("about").classList.add("selected");

    const content = document.getElementById("content");
  
    const about = document.createElement("div");
    about.id = "about-content";
    about.textContent = "About";
  
    content.appendChild(about);
}

export { displayAbout };