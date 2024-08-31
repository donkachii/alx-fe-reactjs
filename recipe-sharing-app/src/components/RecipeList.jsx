import RecipeDetails from "./RecipeDetails";
import { useRecipeStore } from "./recipeStore";
import { SearchBar } from "./SearchBar";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <SearchBar />
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeDetails recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
