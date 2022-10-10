import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Kr$na");

  const handleSubmit = (e)  => {
    e.preventDefault();
    const blog= {title, body, author}
    console.log(blog);
  }

  return (
    <div className="create">
      <h2>Add A New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog Auther:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Kr$na">Kr$na</option>
          <option value="React-Bot">React-Bot</option>
          <option value="Wiki-Bot">Wiki-Bot</option>
        </select>
        <button>Add Blog</button>
      </form>
      {/* <p>{author}</p> */} 
    </div>
  );
};

export default Create;
