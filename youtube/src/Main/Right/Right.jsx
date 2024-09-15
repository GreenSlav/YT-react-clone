import classes from "./Right.module.css";
import Categories from "./Categories/Categories";
import VideoGrid from "./VideoGrid/VideoGrid";

export default function Right() {
  return (
    <div className={classes.container}>
      <Categories></Categories>
      <VideoGrid></VideoGrid>
    </div>
  );
}
