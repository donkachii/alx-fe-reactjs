import { useRecipeStore } from "./recipeStore";
import { Input } from "./ui/input";

export const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <Input
      className="w-1/3"
      type="text"
      value={searchTerm}
      placeholder="Search recipes..."
      onChange={handleSearch}
    />
  );
};
