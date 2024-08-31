import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: "Classic Margherita Pizza",
      description:
        "A simple yet delicious pizza featuring fresh mozzarella, tomatoes, and basil on a crispy thin crust.",
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      description:
        "Tender chunks of chicken in a creamy, spiced tomato-based sauce, perfect with basmati rice and naan bread.",
    },
    {
      id: 3,
      title: "Vegetarian Quinoa Bowl",
      description:
        "A nutrient-packed bowl with quinoa, roasted vegetables, avocado, and a zesty lemon tahini dressing.",
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      description:
        "Classic homemade cookies with a perfect balance of chewy centers and crispy edges, loaded with chocolate chips.",
    },
    {
      id: 5,
      title: "Grilled Salmon with Lemon-Dill Sauce",
      description:
        "Flaky grilled salmon fillet topped with a refreshing lemon-dill sauce, served with asparagus and roasted potatoes.",
    },
  ],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  // Search and filtering

  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Favorites

  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Mock implementation based on favorites
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
