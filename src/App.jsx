import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <div className="max-w-screen-xl mx-auto font-accent">
      <Header></Header>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        </div>
        <div className="col-span-4">
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
