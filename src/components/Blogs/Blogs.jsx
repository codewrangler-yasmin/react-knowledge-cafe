import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "blogs.json";
      try {
        const res = await fetch(url);
        const data = await res.json();

        setBlogs(data);
        console.log(data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blogs;
