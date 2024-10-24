import { FaBookmark, FaRegBookmark } from "react-icons/fa";

import PropTypes from "prop-types";
import { useState } from "react";

const Blog = ({ blog, handleAddToBookmark }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarked = () => {
    setIsBookmarked(!isBookmarked);
  };

  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="flex flex-col gap-4 mb-6 pb-5 border-b border-gray-200">
      <img className="rounded-lg" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src={author_img}
            alt=""
          />
          <div className="flex flex-col">
            <h4 className="font-bold text-xl">{author}</h4>
            <p className="text-stone-500 font-semibold">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <p className="text-stone-500 font-medium text-xl">
            {reading_time} min read
          </p>
          <button
            onClick={() => {
              handleAddToBookmark(blog);
              handleBookmarked();
            }}
            disabled={isBookmarked}
            className={`${
              isBookmarked ? "cursor-not-allowed" : "cursor-pointer"
            } text-xl`}
          >
            <span>
              {isBookmarked ? (
                <FaBookmark className="text-green-600"></FaBookmark>
              ) : (
                <FaRegBookmark className="text-gray-500"></FaRegBookmark>
              )}
            </span>
          </button>
        </div>
      </div>
      <h1 className="font-extrabold text-3xl">{title}</h1>
      <div className="flex gap-4">
        {hashtags.map((hashtag, idx) => (
          <span key={idx} className="text-stone-500 font-medium text-lg">
            #{hashtag}
          </span>
        ))}
      </div>
      <div>
        <button className="text-indigo-600 font-semibold text-xl border-b-2 border-indigo-600">
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
