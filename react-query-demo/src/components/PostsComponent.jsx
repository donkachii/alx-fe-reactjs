import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const PostsComponent = () => {
  const { data, isError, isLoading } = useQuery("fetchPosts", fetchPosts, {
    cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
    staleTime: 1000 * 60, // Data is fresh for 1 minute
    refetchOnWindowFocus: true, // Refetch when window regains focus
    keepPreviousData: true, // Keep previous data while loading new data
  });

  if (isLoading) return <div>Loading...</div>;
  // Handle error state
  if (isError) return <div>Error loading data</div>;

  // Render the fetched data
  return (
    <div>
      <h1>My Posts</h1>
      <button onClick={fetchPosts}>Click here to get Posts</button>
      {data.map((item) => (
        <div
          style={{
            marginTop: "15px",
            border: "1px solid black",
            padding: "10px",
          }}
          key={item.id}
        >
          {item.body}
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
