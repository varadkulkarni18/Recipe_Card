// Recipe data
const recipes = [
    {
        id: 1,
        title: "Chicken Biryani",
        description: "Aromatic basmati rice layered with spiced chicken, a classic Indian delicacy that's perfect for special occasions.",
        cuisine: "Indian",
        ingredients: [
            "2 cups basmati rice",
            "1 kg chicken, cut into pieces",
            "2 large onions, sliced",
            "1 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "1 tsp red chili powder",
            "1/2 tsp turmeric powder",
            "1 tsp garam masala",
            "Fresh mint leaves",
            "Fresh coriander leaves",
            "4 tbsp ghee",
            "Salt to taste",
            "Saffron soaked in warm milk"
        ],
        instructions: [
            "Soak basmati rice for 30 minutes, then boil with whole spices until 70% cooked.",
            "Marinate chicken with yogurt, ginger-garlic paste, and spices for 2 hours.",
            "Deep fry sliced onions until golden brown and crispy.",
            "Cook marinated chicken until tender and well-cooked.",
            "Layer the rice and chicken alternately in a heavy-bottomed pot.",
            "Sprinkle fried onions, mint, coriander, and saffron milk on top.",
            "Cover and cook on high heat for 3-4 minutes, then reduce to low heat for 45 minutes.",
            "Let it rest for 10 minutes before serving."
        ],
        image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
        prepTime: "2 hours",
        cookTime: "1.5 hours",
        servings: 6,
        difficulty: "Hard",
        rating: 4.8
    },
    {
        id: 2,
        title: "Creamy Carbonara Pasta",
        description: "Rich and creamy Italian pasta with crispy pancetta, eggs, and parmesan cheese - a Roman classic done right.",
        cuisine: "Italian",
        ingredients: [
            "400g spaghetti or linguine",
            "200g pancetta or guanciale, diced",
            "4 large egg yolks",
            "1 whole egg",
            "100g Pecorino Romano cheese, grated",
            "50g Parmesan cheese, grated",
            "Freshly cracked black pepper",
            "Salt for pasta water",
            "2 cloves garlic, minced",
            "Fresh parsley for garnish"
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook pasta according to package directions.",
            "While pasta cooks, crisp the pancetta in a large skillet over medium heat.",
            "In a bowl, whisk together egg yolks, whole egg, and grated cheeses.",
            "Add plenty of freshly cracked black pepper to the egg mixture.",
            "Reserve 1 cup of pasta cooking water before draining the pasta.",
            "Add hot pasta to the skillet with pancetta off the heat.",
            "Quickly toss with the egg mixture, adding pasta water gradually to create a creamy sauce.",
            "Serve immediately with extra cheese and black pepper."
        ],
        image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
        prepTime: "15 minutes",
        cookTime: "20 minutes",
        servings: 4,
        difficulty: "Medium",
        rating: 4.6
    },
    {
        id: 3,
        title: "Authentic Street Tacos",
        description: "Traditional Mexican tacos with perfectly seasoned carne asada, fresh toppings, and homemade salsa verde.",
        cuisine: "Mexican",
        ingredients: [
            "2 lbs flank steak or skirt steak",
            "24 small corn tortillas",
            "1 white onion, finely diced",
            "1 cup fresh cilantro, chopped",
            "4 limes, cut into wedges",
            "2 tsp cumin",
            "2 tsp chili powder",
            "1 tsp smoked paprika",
            "3 cloves garlic, minced",
            "Salt and pepper",
            "Salsa verde",
            "Crumbled queso fresco",
            "Radish slices for garnish"
        ],
        instructions: [
            "Season the steak with cumin, chili powder, paprika, garlic, salt, and pepper.",
            "Let the meat marinate for at least 1 hour, preferably overnight.",
            "Heat a grill or cast-iron skillet to high heat.",
            "Cook the steak for 3-4 minutes per side for medium-rare.",
            "Let the meat rest for 5 minutes, then slice against the grain.",
            "Warm the tortillas on a dry skillet or directly over a gas flame.",
            "Assemble tacos with meat, onions, cilantro, and a squeeze of lime.",
            "Serve with salsa verde, queso fresco, and radish slices."
        ],
        image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg",
        prepTime: "1 hour",
        cookTime: "15 minutes",
        servings: 8,
        difficulty: "Easy",
        rating: 4.7
    },
    {
        id: 4,
        title: "Thai Green Curry",
        description: "Fragrant and spicy Thai curry with coconut milk, fresh vegetables, and aromatic herbs that transport you to Thailand.",
        cuisine: "Thai",
        ingredients: [
            "2 tbsp green curry paste",
            "400ml coconut milk",
            "500g chicken thigh, sliced",
            "2 Thai eggplants, quartered",
            "100g green beans, trimmed",
            "2 kaffir lime leaves",
            "1 tbsp fish sauce",
            "1 tbsp palm sugar",
            "Thai basil leaves",
            "Red chilies, sliced",
            "1 red bell pepper, sliced",
            "Jasmine rice for serving"
        ],
        instructions: [
            "Heat 2 tbsp of thick coconut milk in a wok over medium heat.",
            "Add green curry paste and fry until fragrant, about 2 minutes.",
            "Add chicken pieces and cook until no longer pink.",
            "Pour in remaining coconut milk and bring to a gentle simmer.",
            "Add eggplant, green beans, and bell pepper.",
            "Season with fish sauce and palm sugar.",
            "Add kaffir lime leaves and simmer for 10-15 minutes.",
            "Garnish with Thai basil and sliced chilies. Serve with jasmine rice."
        ],
        image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg",
        prepTime: "20 minutes",
        cookTime: "25 minutes",
        servings: 4,
        difficulty: "Medium",
        rating: 4.5
    },
    {
        id: 5,
        title: "Japanese Ramen Bowl",
        description: "Rich, flavorful ramen with tender chashu pork, soft-boiled eggs, and fresh vegetables in a savory broth.",
        cuisine: "Japanese",
        ingredients: [
            "4 portions fresh ramen noodles",
            "1 liter chicken or pork bone broth",
            "4 soft-boiled eggs",
            "400g pork belly (chashu)",
            "2 green onions, sliced",
            "2 sheets nori seaweed",
            "1 cup bamboo shoots",
            "2 cloves garlic, minced",
            "2 tbsp miso paste",
            "1 tbsp soy sauce",
            "1 tsp sesame oil",
            "Bean sprouts",
            "Corn kernels"
        ],
        instructions: [
            "Prepare chashu pork by braising pork belly in soy sauce and mirin for 2 hours.",
            "Soft-boil eggs for 6.5 minutes, then marinate in soy sauce mixture.",
            "Heat the broth and whisk in miso paste until dissolved.",
            "Cook ramen noodles according to package instructions.",
            "Divide noodles among bowls and pour hot broth over them.",
            "Top with sliced chashu, halved eggs, and bamboo shoots.",
            "Garnish with green onions, nori, bean sprouts, and corn.",
            "Drizzle with sesame oil and serve immediately."
        ],
        image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg",
        prepTime: "30 minutes",
        cookTime: "2.5 hours",
        servings: 4,
        difficulty: "Hard",
        rating: 4.9
    },
    {
        id: 6,
        title: "French Coq au Vin",
        description: "Classic French braised chicken in red wine with pearl onions, mushrooms, and bacon - elegance on a plate.",
        cuisine: "French",
        ingredients: [
            "1 whole chicken, cut into pieces",
            "6 strips bacon, chopped",
            "12 pearl onions, peeled",
            "8 oz mushrooms, halved",
            "3 cups red wine",
            "2 cups chicken stock",
            "3 tbsp flour",
            "3 tbsp butter",
            "2 bay leaves",
            "Fresh thyme sprigs",
            "3 cloves garlic, minced",
            "Salt and pepper",
            "Fresh parsley for garnish"
        ],
        instructions: [
            "Season chicken pieces with salt and pepper, then dredge in flour.",
            "Cook bacon until crispy, remove and set aside.",
            "Brown chicken pieces in the bacon fat until golden on all sides.",
            "Add pearl onions and mushrooms, cook until lightly browned.",
            "Pour in red wine and chicken stock, add herbs and garlic.",
            "Bring to a boil, then reduce heat and simmer covered for 45 minutes.",
            "Return bacon to the pot and simmer uncovered for 15 minutes.",
            "Adjust seasoning and garnish with fresh parsley before serving."
        ],
        image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg",
        prepTime: "30 minutes",
        cookTime: "1.5 hours",
        servings: 6,
        difficulty: "Medium",
        rating: 4.4
    }
];

// Global variables
let filteredRecipes = [...recipes];
let selectedCuisine = 'All';

// Cursor functionality
let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

// DOM elements
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
const recipeGrid = document.getElementById('recipeGrid');
const filterButtons = document.getElementById('filterButtons');
const noResults = document.getElementById('noResults');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCursor();
    initializeFilters();
    renderRecipes();
});

// Cursor functionality
function initializeCursor() {
    // Only initialize cursor on desktop
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        
        // Start ring animation
        animateRing();
        
        // Add hover listeners to interactive elements
        addHoverListeners();
    }
}

function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (cursorDot) {
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    }
}

function handleMouseDown() {
    document.body.classList.add('cursor-click');
}

function handleMouseUp() {
    document.body.classList.remove('cursor-click');
}

function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    
    if (cursorRing) {
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
    }
    
    requestAnimationFrame(animateRing);
}

function addHoverListeners() {
    // Add listeners to existing elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

// Filter functionality
function initializeFilters() {
    const cuisines = [...new Set(recipes.map(recipe => recipe.cuisine))];
    
    // Clear existing buttons except "All"
    filterButtons.innerHTML = `
        <button class="filter-btn active" data-cuisine="All">
            <span class="filter-icon-small">🔍</span>
            All Recipes
        </button>
    `;
    
    // Add cuisine filter buttons
    cuisines.forEach(cuisine => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-cuisine', cuisine);
        button.innerHTML = `${getCuisineEmoji(cuisine)} ${cuisine}`;
        filterButtons.appendChild(button);
    });
    
    // Add event listeners to filter buttons
    filterButtons.addEventListener('click', handleFilterClick);
    
    // Add hover listeners to new buttons
    setTimeout(addHoverListeners, 100);
}

function handleFilterClick(e) {
    if (e.target.classList.contains('filter-btn')) {
        const cuisine = e.target.getAttribute('data-cuisine');
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Filter recipes
        selectedCuisine = cuisine;
        filterRecipes();
    }
}

function filterRecipes() {
    if (selectedCuisine === 'All') {
        filteredRecipes = [...recipes];
    } else {
        filteredRecipes = recipes.filter(recipe => recipe.cuisine === selectedCuisine);
    }
    
    renderRecipes();
}

// Recipe rendering
function renderRecipes() {
    if (filteredRecipes.length === 0) {
        recipeGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    recipeGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    recipeGrid.innerHTML = filteredRecipes.map(recipe => createRecipeCard(recipe)).join('');
    
    // Add event listeners to new elements
    addRecipeEventListeners();
    setTimeout(addHoverListeners, 100);
}

function createRecipeCard(recipe) {
    const ingredientsToShow = recipe.ingredients.slice(0, 5);
    const hasMoreIngredients = recipe.ingredients.length > 5;
    
    return `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy">
                <div class="recipe-badges">
                    <span class="cuisine-badge">${getCuisineEmoji(recipe.cuisine)} ${recipe.cuisine}</span>
                    <span class="difficulty-badge difficulty-${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
                </div>
                <div class="recipe-rating">
                    ${createStarRating(recipe.rating, true)}
                </div>
            </div>
            
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                
                <div class="recipe-meta">
                    <div class="meta-item">
                        <span class="meta-icon">⏱️</span>
                        <span>${recipe.prepTime}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">👥</span>
                        <span>${recipe.servings} servings</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">🔥</span>
                        <span>${recipe.cookTime}</span>
                    </div>
                </div>
                
                <div class="ingredients-section">
                    <h4 class="section-title">🥘 Ingredients</h4>
                    <div class="ingredients-list">
                        ${ingredientsToShow.map(ingredient => `
                            <div class="ingredient-item">
                                <span class="ingredient-bullet">●</span>
                                <span>${ingredient}</span>
                            </div>
                        `).join('')}
                        ${hasMoreIngredients ? `
                            <div class="ingredient-item more-ingredients">
                                +${recipe.ingredients.length - 5} more ingredients...
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <div class="instructions-section" style="display: none;">
                    <h4 class="section-title">👨‍🍳 Instructions</h4>
                    <div class="instructions-list">
                        ${recipe.instructions.map((instruction, index) => `
                            <div class="instruction-item">
                                <span class="instruction-number">${index + 1}</span>
                                <span>${instruction}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="card-actions">
                    <button class="show-more-btn" data-recipe-id="${recipe.id}">
                        <span class="btn-icon">👁️</span>
                        <span class="btn-text">Show More</span>
                    </button>
                    
                    <div class="star-rating" data-recipe-id="${recipe.id}">
                        ${createStarRating(recipe.userRating || 0, false)}
                        <span class="rating-value">${(recipe.userRating || 0).toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createStarRating(rating, readonly = false) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const filled = i <= rating ? 'filled' : '';
        const clickable = readonly ? '' : `data-rating="${i}"`;
        stars.push(`<span class="star ${filled}" ${clickable}>⭐</span>`);
    }
    
    if (readonly) {
        return `<div class="stars">${stars.join('')}</div><span class="rating-value">${rating.toFixed(1)}</span>`;
    }
    
    return `<div class="stars">${stars.join('')}</div>`;
}

function addRecipeEventListeners() {
    // Show more/less buttons
    document.querySelectorAll('.show-more-btn').forEach(btn => {
        btn.addEventListener('click', handleShowMoreClick);
    });
    
    // Star ratings
    document.querySelectorAll('.star-rating:not([data-readonly]) .star').forEach(star => {
        star.addEventListener('click', handleStarClick);
        star.addEventListener('mouseenter', handleStarHover);
    });
    
    document.querySelectorAll('.star-rating:not([data-readonly])').forEach(rating => {
        rating.addEventListener('mouseleave', handleStarLeave);
    });
}

function handleShowMoreClick(e) {
    const recipeId = e.target.closest('.show-more-btn').getAttribute('data-recipe-id');
    const card = document.querySelector(`[data-recipe-id="${recipeId}"]`);
    const instructionsSection = card.querySelector('.instructions-section');
    const btnText = e.target.closest('.show-more-btn').querySelector('.btn-text');
    const btnIcon = e.target.closest('.show-more-btn').querySelector('.btn-icon');
    
    if (instructionsSection.style.display === 'none') {
        instructionsSection.style.display = 'block';
        btnText.textContent = 'Show Less';
        btnIcon.textContent = '🙈';
    } else {
        instructionsSection.style.display = 'none';
        btnText.textContent = 'Show More';
        btnIcon.textContent = '👁️';
    }
}

function handleStarClick(e) {
    const rating = parseInt(e.target.getAttribute('data-rating'));
    const recipeId = e.target.closest('.star-rating').getAttribute('data-recipe-id');
    const ratingContainer = e.target.closest('.star-rating');
    
    // Update visual rating
    updateStarDisplay(ratingContainer, rating);
    
    // Update rating value
    const ratingValue = ratingContainer.querySelector('.rating-value');
    if (ratingValue) {
        ratingValue.textContent = rating.toFixed(1);
    }
    
    // Update recipe data (in a real app, this would be sent to a server)
    const recipe = recipes.find(r => r.id == recipeId);
    if (recipe) {
        recipe.userRating = rating;
    }
}

function handleStarHover(e) {
    const rating = parseInt(e.target.getAttribute('data-rating'));
    const ratingContainer = e.target.closest('.star-rating');
    updateStarDisplay(ratingContainer, rating);
}

function handleStarLeave(e) {
    const recipeId = e.target.getAttribute('data-recipe-id');
    const recipe = recipes.find(r => r.id == recipeId);
    const currentRating = recipe ? (recipe.userRating || 0) : 0;
    updateStarDisplay(e.target, currentRating);
}

function updateStarDisplay(container, rating) {
    const stars = container.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}

// Utility functions
function getCuisineEmoji(cuisine) {
    const emojiMap = {
        'Indian': '🇮🇳',
        'Italian': '🇮🇹',
        'Mexican': '🇲🇽',
        'Thai': '🇹🇭',
        'Japanese': '🇯🇵',
        'French': '🇫🇷'
    };
    return emojiMap[cuisine] || '🍽️';
}

// Handle window resize for cursor
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        document.body.classList.remove('cursor-hover', 'cursor-click');
    }
});