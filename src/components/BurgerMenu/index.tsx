// Dependencies
import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

// Styles
import classes from "./BurgerMenu.module.scss";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "24px",
    height: "24px",
    right: "24px",
    top: "24px",
  },
  bmBurgerBars: {
    background: "#FFF",
    height: "3px",
  },
  bmBurgerBarsHover: {
    background: "#FFF",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    right: "24px",
    top: "24px",
  },
  bmCross: {
    background: "#FFF",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#1f1f5f",
    padding: "2.5em 24px",
    fontSize: "18px",
    overflow: "hidden",
  },
  bmMorphShape: {
    fill: "#1f1f5f",
  },
  bmItemList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

function BurgerMenu() {
  return (
    <Menu styles={styles}>
      <Link href="/">
        <a className={classes.menu_item}>Home</a>
      </Link>
      <Link href="https://github.com/rilrom/job-search">
        <a className={classes.menu_item} target="_blank" title="Opens in a new window">Github</a>
      </Link>
    </Menu>
  );
}

export default BurgerMenu;
