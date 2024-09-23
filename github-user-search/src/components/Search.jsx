import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchUserData = async (query, page) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_GITHUB_API_KEY}?q=${query}&page=${page}`
      );
      setUsersData((prevUsers) => [...prevUsers, ...response.data.items]);
      setError(null);
    } catch (error) {
      setUsersData([]);
      setError("Looks like we cant find the user");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = buildQuery();
    fetchUserData(query, page);
  };

  const buildQuery = () => {
    let query = username ? `user:${username}` : "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;
    return query;
  };

  const loadMore = () => {
    setPage(page + 1);
    const query = buildQuery();
    fetchUserData(query, page + 1);
  };

  return (
    <div className="container p-4 mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              GitHub Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="minRepos"
              className="block text-sm font-medium text-gray-700"
            >
              Minimum Repositories
            </label>
            <input
              type="number"
              id="minRepos"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {isLoading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {usersData.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow-md">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full"
            />
            <h2 className="mt-2 text-xl font-semibold">{user.login}</h2>
            <p className="text-gray-600">
              {user.location || "Location not available"}
            </p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>

      {usersData.length > 0 && (
        <button
          onClick={loadMore}
          className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
