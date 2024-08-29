import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  return <button type="submit">Delete Recipe</button>;
};

export default DeleteRecipeButton;
