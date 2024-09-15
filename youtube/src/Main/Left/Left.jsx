import classes from "./Left.module.css";

export default function Left() {
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <img src="/main.svg" alt="" />
        <span>Главная</span>
      </div>
      <div className={classes.shorts}>
        <img src="/shorts.svg" alt="" />
        <span>Shorts</span>
      </div>
      <div className={classes.subs}>
        <img src="/subs.svg" alt="" />
        <span>Подписки</span>
      </div>
      <div className={classes.me}>
        <img src="/me.svg" alt="" />
        <span>Вы</span>
      </div>
    </div>
  );
}
