import axios from "axios";

export const fetchUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = username ? `user:${username}` : "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const endpoint = `${process.env.REACT_APP_GITHUB_API_KEY}?q=${query}&page=${page}`;

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
