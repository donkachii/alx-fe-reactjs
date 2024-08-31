import FavoritesList from "./FavoritesList";
import { useRecipeStore } from "./recipeStore";
import { SearchBar } from "./SearchBar";

import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import RecommendationsList from "./RecommendationsList";
import { toast } from "sonner";
// import { useState } from "react";

const RecipeList = () => {
  // const [inFavorite, setInFavorite] = useState(false);
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const add = useRecipeStore((state) => state.addFavorite);

  const recipesList = searchTerm.length === 0 ? recipes : filteredRecipes;

  const handleAddFavorite = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    toast("Added to favorite");
    add(id);
    // setInFavorite(true);
  };

  return (
    <div className="flex flex-col gap-4 items-center max-w-[1440px] m-auto my-8">
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {recipesList.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <Card className="hover:scale-105 duration-500">
              <CardHeader>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex gap-4">
                <Button
                  className="bg-green-600"
                  onClick={(e) => handleAddFavorite(e, recipe.id)}
                >
                  Add to favorites
                </Button>
                <Button
                  className="bg-red-500"
                  onClick={(e) => handleAddFavorite(e, recipe.id)}
                >
                  Remove from favorites
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {/* <FavoritesList /> */}
      <div className="flex gap-8 w-full px-4 mt-4">
        <FavoritesList />

        <RecommendationsList />
      </div>
    </div>
  );
};

export default RecipeList;
