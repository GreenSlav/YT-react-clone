import classes from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={classes.container}>
      <div className={classes.add}>
        <img src="/add.svg" alt="" />
      </div>
      <div className={classes.notification}>
        <img src="/bell.svg" alt="" />
      </div>
      <div className={classes.user}>
        <img src="/user.jpg" alt="" />
      </div>
    </div>
  );
}
