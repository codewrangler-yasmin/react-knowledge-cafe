import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <h3 className="font-bold text-2xl mb-5">
        Bookmarked Blogs: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
export default Bookmarks;
