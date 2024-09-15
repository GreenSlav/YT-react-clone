import classes from "./Header.module.css"
import LogoMenu from "../LogoMenu/LogoMenu";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";

export default function Header() {
  return (
    <header>
      <LogoMenu></LogoMenu>
      <Search></Search>
      <Profile></Profile>
    </header>
  );
}
