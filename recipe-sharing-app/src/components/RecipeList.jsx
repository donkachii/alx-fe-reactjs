import { useRecipeStore } from "./recipeStore";
import { SearchBar } from "./SearchBar";

import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <SearchBar />
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <div>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
