const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php";
const MAX_COCKTAILS = 3;

async function fetchCocktail(category) {
    try {
        
        const response = await fetch(`${API_URL}?c=${category}`);
        console.log(`API_URL:${API_URL}?c=${category} - response:${response}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.drinks[0]; // Retorna el primer cóctel en la respuesta
    } catch (error) {
        console.error("Error fetching cocktail data:", error);
        return null;
    }
}

function fetchMultipleCocktails() {
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");
    const container3 = document.getElementById("container3");
    const category1 = "Ordinary_Drink";
    const category2 = "Soft Drink";
    const category3 = "Cocktail";
 
    MultipleCocktailsByCategory(container1, category1);

    MultipleCocktailsByCategory(container2, category2);

    MultipleCocktailsByCategory(container3, category3);
}

async function MultipleCocktailsByCategory(container, category) {
    try {
        const response = await fetch(`${API_URL}?c=${category}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const cocktails = data.drinks.slice(0, 3);

        cocktails.forEach(cocktail => {
            const card = document.createElement("div");
            card.classList.add("card");
            let price = Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000;    

            card.innerHTML = `
                <figure class="box_image"> 
                    <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" class="image_product">
                </figure>
                <div class="contenido"> 
                    <h3 class="titulo">${cocktail.strDrink}</h3>
                    <p>$${price}</p>
                </div>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching cocktails:", error);
    }
}

fetchMultipleCocktails();
