import Header from "./components/Header";
import VideosContainer from "./components/VideosContainer";
import VideoCategoriesContainer from "./components/VideoCategoriesContainer";

import "./index.css";

const App = () => {
  return (
    <div className="">
      <Header />
      <VideoCategoriesContainer />
      <VideosContainer />
    </div>
  );
};

export default App;
