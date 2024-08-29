import RecipeDetails from "./RecipeDetails";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeDetails recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
