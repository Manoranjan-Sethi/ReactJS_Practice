import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setPending(false);
        setError(null);
      })
      .catch((error) => {
        setPending(false);
        setError(error.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Wiki-Bot")}
        title="Wiki Blogs!"
      />  resusable component */}
    </div>
  );
};

export default Home;
