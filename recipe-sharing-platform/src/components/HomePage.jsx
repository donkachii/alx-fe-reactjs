import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <div className="mb-4 text-center">
        <h1 className="mb-4 text-3xl md:text-5xl">Recipe Sharing Platform</h1>
        <p>Explore our collection of recipes:</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {recipes &&
          recipes?.map((recipe) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <div className="flex flex-col justify-between gap-3 p-4 m-4 duration-300 border border-gray-300 rounded-md cursor-pointer hover:scale-105 hover:shadow-md">
                <h2 className="text-xl md:text-2xl md:font-semibold">
                  {recipe.title}
                </h2>
                <p className="text-sm md:text-lg">{recipe.summary}</p>
                <img
                  className="w-full h-auto"
                  src={recipe.image}
                  alt={recipe.title}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
