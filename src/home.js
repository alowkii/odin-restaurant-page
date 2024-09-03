import { clearContent } from "./index.js";
import food1 from './images/food1.jpg';
import food2 from './images/food2.jpg';
import food3 from './images/food3.jpg';
import food4 from './images/food4.jpg';
import food5 from './images/food5.jpg';
import food6 from './images/food6.jpg';
import food7 from './images/food7.jpg';
import food8 from './images/food8.jpg';
import food9 from './images/food9.jpg';
import food10 from './images/food10.jpg';

function displayHome() {
    clearContent();
    document.getElementById("home").classList.add("selected");

    const content = document.getElementById("content");
  
    const home = document.createElement("div");
    home.id = "home-content";

    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Welcome to Sour&Spicy!";
    home.appendChild(homeTitle);

    const homeText = document.createElement("p");
    homeText.textContent = "We are a family-owned restaurant that serves authentic Chinese cuisine. Our dishes are made with fresh ingredients and are cooked to perfection. Come and try our delicious food today!";
    home.appendChild(homeText);

    const slider = document.createElement("div");
    slider.classList.add("slider");
    home.appendChild(slider);

    const list = document.createElement("div");
    list.classList.add("list");
    slider.appendChild(list);

    const images = [food1, food2, food3, food4, food5, food6, food7, food8, food9, food10];

    let i = 0;
    images.forEach((image) => {
        i++;
        const item = document.createElement("div");
        item.classList.add("item");
        item.style = "--position:" + i;
        list.appendChild(item);

        const img = document.createElement("img");
        img.src = image;  // Use the imported image path
        img.alt = `food${i}`;
        item.appendChild(img);
    });
  
    content.appendChild(home);
}

export { displayHome };