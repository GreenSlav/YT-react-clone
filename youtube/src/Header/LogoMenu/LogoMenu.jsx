import classes from "./LogoMenu.module.css";

export default function LogoMenu() {
  return (
    <div className={classes.container}>
      <div className={classes.lines}>
        <img src="/3_lines.svg" alt="" />
      </div>
      <div className={classes.logo}>
        <img src="/yt.svg" alt="" />
      </div>
    </div>
  );
}
