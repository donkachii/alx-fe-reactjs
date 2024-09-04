import { useQuery } from "react-query";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const PostsComponent = () => {
  const { data, error, isLoading } = useQuery("getPosts", getPosts);

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  // Handle error state
  if (error) return <div>Error loading data</div>;

  // Render the fetched data
  return (
    <div>
      <h1>My Posts</h1>
      <button onClick={getPosts}>Click here to get Posts</button>
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
