// Dependencies
import React from "react";
import Link from "next/link";
import Media from "react-media";

// Styles
import classes from "./MainNav.module.scss";

function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.menu}>
          <Media query="(min-width: 1050px)">
            {(matches) =>
              matches ? (
                <>
                  <div className={classes.left}>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </div>
                </>
              ) : (
                <h1 className={classes.mobile_heading}>Jobs Search</h1>
              )
            }
          </Media>
        </div>
      </div>
    </header>
  );
}

export default MainNav;
