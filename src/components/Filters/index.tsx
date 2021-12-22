// Dependencies
import React from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import Router from "next/router";

// Styles
import classes from "./Filters.module.scss";

// Actions
import { updateSearchParams, resetSearchParams } from "store/searchParams";
import { searchResultsAsync, resetSearchResults } from "store/searchResults";

function Filters() {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector((state) => state.searchParams);

  function handleChange(value: string, name: string) {
    dispatch(updateSearchParams({
      value,
      name,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    Router.push("/");
    dispatch(searchResultsAsync(searchParams));
  }

  function handleReset() {
    dispatch(resetSearchParams());
    dispatch(resetSearchResults());
  }

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Search Parameters</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={classes.group}>
          <label htmlFor="keyword" className={classes.label}>
            Keyword
          </label>
          <input
            className={classes.input}
            type="text"
            value={searchParams.keyword}
            onChange={(e) => handleChange(e.target.value, "keyword")}
          />
        </div>
        <div className={classes.btnGroup}>
          <input
            type="submit"
            value="Search"
            className={`${classes.btn} ${classes.btnSearch}`}
          />
          <input
            type="reset"
            value="Reset"
            className={`${classes.btn} ${classes.btnReset}`}
            onClick={() => handleReset()}
          />
        </div>
      </form>
    </div>
  );
}

export default Filters;
