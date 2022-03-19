import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <a href={snippet}>
      <li className={styles.card}>
        <img
          className={styles.thumbnails}
          src={snippet.thumbnails.medium.url}
          alt=""
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{snippet.title}</h1>
          <h2 className={styles.channel}>{snippet.channelTitle}</h2>
          <h3 className={styles.description}>
            {snippet.description.length > 100
              ? snippet.description.slice(1, 100) + "..."
              : snippet.description}
          </h3>
        </div>
      </li>
    </a>
  );
};

export default VideoItem;
