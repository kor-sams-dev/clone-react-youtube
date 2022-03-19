import { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./components/video_list/video_list";

const API_KEY = "AIzaSyA2Jcbw3HbA3HyrguMrKSDEe4jpnO9y404";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  return <VideoList videos={videos} />;
}

export default App;
