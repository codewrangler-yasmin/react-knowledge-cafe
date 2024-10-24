import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="rounded-xl bg-white p-5 mb-5">
      <h3 className="font-semibold text-xl">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
