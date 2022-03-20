import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const handleSearch = (searchText) => {
    youtube
      .searchVideos(searchText) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.main}>
      <Header onSearch={handleSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
