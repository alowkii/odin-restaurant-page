import "./styles.css";
import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayAbout} from "./about";
import { displayContact } from "./contact";
export { clearContent };

function clearContent() {
    document.querySelectorAll(".selected").forEach((item) => {
        item.classList.remove("selected");
        document.getElementById("content").textContent = "";
    });
}

window.displayHome = displayHome;
window.displayMenu = displayMenu;
window.displayAbout = displayAbout;
window.displayContact = displayContact;

if (document.getElementById("content").textContent == ""){
    displayHome();
}