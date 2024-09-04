import { clearContent } from "./index.js";

function displayMenu() {
    clearContent();
    document.getElementById("menu").classList.add("selected");

    const content = document.getElementById("content");
  
    const menu = document.createElement("div");
    menu.id = "menu-content";

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);

    const menuItems = [
        {
            name: "Spring Rolls",
            description: "Crispy rolls filled with mixed vegetables and served with a sweet chili dipping sauce.",
            price: "$6.99"
        },
        {
            name: "Dumplings (Jiaozi)",
            description: "Steamed or fried dumplings filled with pork and cabbage, served with soy dipping sauce.",
            price: "$8.99"
        },
        {
            name: "Kung Pao Chicken",
            description: "Stir-fried chicken with peanuts, vegetables, and chili peppers in a savory sauce.",
            price: "$14.99"
        },
        {
            name: "Sweet and Sour Pork",
            description: "Crispy pork bites tossed in a sweet and tangy sauce with pineapple and bell peppers.",
            price: "$13.99"
        },
        {
            name: "Mapo Tofu",
            description: "Soft tofu in a spicy Sichuan peppercorn sauce with ground pork, served with steamed rice.",
            price: "$13.99"
        },
        {
            name: "Yangzhou Fried Rice",
            description: "Classic fried rice with shrimp, BBQ pork, peas, carrots, and scrambled eggs.",
            price: "$11.99"
        },
        {
            name: "Mango Pudding",
            description: "Creamy mango-flavored pudding with fresh mango slices.",
            price: "$5.99"
        },
        {
            name: "Bubble Milk Tea",
            description: "Popular Taiwanese tea with tapioca pearls.",
            price: "$5.99"
        }
    ];
    
    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const name = document.createElement("h3");
        name.textContent = item.name;
        menuItem.appendChild(name);

        const description = document.createElement("p");
        description.textContent = item.description;
        menuItem.appendChild(description);

        const price = document.createElement("p");
        price.textContent = item.price;
        menuItem.appendChild(price);

        menu.appendChild(menuItem);
    });

  
    content.appendChild(menu);
}

export { displayMenu };