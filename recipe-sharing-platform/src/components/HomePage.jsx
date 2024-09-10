import { useState, useEffect } from "react";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState("");

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="">Recipe Sharing Platform</h1>
        <p>Explore our collection of recipes:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {recipes &&
          recipes?.map((recipe) => (
            <div
              className="flex flex-col justify-between p-4 m-4 duration-300 border border-gray-300 rounded-md cursor-pointer hover:scale-105"
              key={recipe.id}
            >
              <h2>{recipe.title}</h2>
              <p>{recipe.summary}</p>
              <img
                className="w-full h-auto"
                src={recipe.image}
                alt={recipe.title}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
