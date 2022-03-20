import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import styles from "./header.module.css";

const Header = (props) => {
  const inputRef = useRef();
  const handleSearch = (ev) => {
    ev.preventDefault();
    const searchText = inputRef.current.value;
    inputRef.current.value = "";
    props.onSearch(searchText);
  };

  return (
    <div className={styles.header}>
      <img className={styles.icon} src="/images/logo.png" alt="youtube icon" />
      <p className={styles.title}>YOUTUBE</p>
      <form className={styles.search_container} onSubmit={handleSearch}>
        <input
          className={styles.search_text}
          ref={inputRef}
          placeholder="search text"
        ></input>
        <button className={styles.search_btn}>
          <img
            className={styles.search_icon}
            src="/images/search.png"
            alt="youtube icon"
          />
        </button>
      </form>
    </div>
  );
};

export default Header;
