import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import { Button } from "./ui/button";
import { useEffect } from "react";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations, addFavorite } =
    useRecipeStore((state) => ({
      recommendations: state.recommendations,
      generateRecommendations: state.generateRecommendations,
      addFavorite: state.addFavorite,
    }));

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  console.log(recommendations);
  return (
    <div className="w-1/2">
      <h2 className="text-2xl mb-2">My Recommendations</h2>
      <p>No recommendations yet</p>

      <Button
        className="bg-green-600 hover:bg-green-800"
        onClick={recommendations}
      >
        Get Recommendations
      </Button>

      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          <button onClick={() => addFavorite(recipe.id)}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
