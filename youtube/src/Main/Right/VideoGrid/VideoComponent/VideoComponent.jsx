import classes from "./VideoComponent.module.css";

export default function VideoComponent({
  pathToVidPic,
  pathToChPic,
  vidName,
  chName,
  views,
  date,
}) {
  return (
    <div className={classes.container}>
      <img className={classes.thumbnail} src={pathToVidPic} alt="Thumbnail" />
      <div className={classes.descr}>
        <img className={classes.channelPic} src={pathToChPic} alt="Channel" />
        <div className={classes.details}>
          <div className={classes.name}>{vidName}</div>
          <div className={classes.channel}>{chName}</div>
          <div className={classes.bottom}>
            <div className={classes.views}>{views}</div>
            <span className={classes.dotSeparator}>•</span>
            <div className={classes.date}>{date}</div>
          </div>
        </div>
        <div className={classes.dots}>⋮</div>
      </div>
    </div>
  );
}
