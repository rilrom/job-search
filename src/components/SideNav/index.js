// Dependencies
import React from "react";

// Components
import Filters from "components/Filters";

// Styles
import classes from "./SideNav.module.scss";

function SideNav() {
    return (
        <aside className={classes.aside}>
            <header className={classes.header}>
                <h1 className={classes.headerText}>Jobs Search</h1>
            </header>
            <div className={classes.filters}>
                <div className={classes.container}>
                    <Filters />
                </div>
            </div>
        </aside>
    );
}

export default SideNav;
