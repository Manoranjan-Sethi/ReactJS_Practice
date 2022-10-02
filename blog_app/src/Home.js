import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {data && <BlogList blogs={data} title="All Blogs!" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Wiki-Bot")}
        title="Wiki Blogs!"
      />  resusable component */}
    </div>
  );
};

export default Home;
