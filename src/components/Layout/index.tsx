// Dependencies
import React from "react";
import Media from "react-media";

// Components
import MainNav from "components/MainNav";
import SideNav from "components/SideNav";
import BurgerMenu from "components/BurgerMenu";
import MobileSearch from "components/MobileSearch";

// Styles
import classes from "./Layout.module.scss";

function Layout(props: any) {
  return (
    <>
      <Media query="(max-width: 1049.98px)" render={() => <BurgerMenu />} />
      <MainNav />
      <Media query="(min-width: 768px)">
        {(matches: string) => (matches ? <SideNav /> : <MobileSearch />)}
      </Media>
      <main className={classes.main}>
        <div className={classes.container}>
          <h1 className={classes.title}>{props.title}</h1>
          {props.children}
        </div>
      </main>
    </>
  );
}

export default Layout;
