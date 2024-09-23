import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (recipe) => recipe.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container p-6 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="object-cover w-full mb-4 rounded-lg h-72"
      />
      <p className="mb-4 text-gray-600">{recipe.summary}</p>

      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="mb-2 text-2xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="mt-4 mb-2 text-2xl font-semibold">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
