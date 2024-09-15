import classes from "./Search.module.css";

export default function Search() {
  return (
    <div className={classes.container}>
      <div className={classes.searchBar}>
        <input
          type="text"
          placeholder="Введите запрос"
          className={classes.searchInput}
        />
        <button className={classes.searchIcon}>
          <img src="/search.svg" alt="Search Icon" />
        </button>
      </div>
      <button className={classes.microphoneIcon}>
        <img src="/micro.svg" alt="Microphone Icon" />
      </button>
    </div>
  );
}
