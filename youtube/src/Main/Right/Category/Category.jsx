import classes from "./Category.module.css";

export default function Category({ children }) {
  return (
    <div className={classes.container}>
      <span>{children}</span>
    </div>
  );
}
