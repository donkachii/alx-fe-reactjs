import { useRecipeStore } from "./recipeStore";
import { Button } from "./ui/button";

const RecommendationsList = () => {
  const recommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

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
    </div>
  );
};

export default RecommendationsList;
