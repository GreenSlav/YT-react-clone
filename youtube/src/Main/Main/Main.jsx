import Left from "../Left/Left";
import Right from "../Right/Right";
import classes from "./Main.module.css";

export default function Main() {
  return (
    <div className={classes.container}>
      <Left></Left>
      <Right></Right>
    </div>
  );
}
