import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const navigate = useNavigate();

  const removeRecipe = () => {
    deleteRecipe(recipeId);
    navigate(-1);
  };

  return <button onClick={removeRecipe}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
