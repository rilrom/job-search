// Dependencies
import React from "react";
import Router from "next/router";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { formatISO, parseISO } from "date-fns";

// Styles
import classes from "./Filters.module.scss";

// Constants
import { DEPARTMENTS, CATEGORIES, LOCATIONS } from 'constants/filters';

// Actions
import { updateSearchParams, resetSearchParams } from "store/searchParams";
import { searchResultsAsync, resetSearchResults } from "store/searchResults";

function Filters() {
    const dispatch = useDispatch();
    const searchParams = useSelector((state) => state.searchParams);

    function handleChange(value, name) {
        dispatch(updateSearchParams({
            value,
            name,
        }));
    }

    function handleSubmit(e) {
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
                    <label htmlFor='keyword' className={classes.label}>
                        Keyword
                    </label>
                    <input
                        className={classes.input}
                        type='text'
                        value={searchParams.keyword}
                        onChange={(e) => handleChange(e.target.value, 'keyword')}
                    />
                </div>

                <div className={classes.group}>
                    <label htmlFor='vacancyNumber' className={classes.label}>
                        Vacancy Number
                    </label>
                    <input
                        className={classes.input}
                        type='number'
                        value={searchParams.vacancyNumber}
                        onChange={(e) => handleChange(e.target.value, 'vacancyNumber')}
                    />
                </div>

                <div className={classes.group}>
                    <label htmlFor='department' className={classes.label}>
                        Department
                    </label>
                    <Select
                        isMulti
                        instanceId='department'
                        id='department'
                        name='department'
                        options={DEPARTMENTS}
                        value={searchParams.department}
                        onChange={(selectedItems) => handleChange(selectedItems, 'department')}
                    />
                </div>

                <div className={classes.group}>
                    <label htmlFor='SelectedCategoryList' className={classes.label}>
                        Category
                    </label>
                    <Select
                        isMulti
                        instanceId='category'
                        id='category'
                        name='category'
                        options={CATEGORIES}
                        value={searchParams.category}
                        onChange={(selectedItems) => handleChange(selectedItems, 'category')}
                    />
                </div>

                <div className={classes.group}>
                    <label htmlFor='location' className={classes.label}>
                        Location
                    </label>
                    <Select
                        isMulti
                        instanceId='location'
                        id='location'
                        name='location'
                        options={LOCATIONS}
                        value={searchParams.location}
                        onChange={(selectedItems) => handleChange(selectedItems, 'location')}
                    />
                </div>

                <div className={classes.group}>
                    <label htmlFor='remunerationRange' className={classes.label}>
                        Renumeration Range
                    </label>
                    <div className={classes.inputGroup}>
                        <div className={classes.prepend} style={{ width: 65 }}>
                            <span className={classes.prependText}>From</span>
                        </div>
                        <input
                            className={classes.input}
                            type='number'
                            value={searchParams.renumerationFrom}
                            onChange={(e) => handleChange(e.target.value, 'renumerationFrom')}
                        />
                    </div>
                    <div className={classes.inputGroup}>
                        <div className={classes.prepend} style={{ width: 65 }}>
                            <span className={classes.prependText}>To</span>
                        </div>
                        <input
                            className={classes.input}
                            type='number'
                            value={searchParams.renumerationTo}
                            onChange={(e) => handleChange(e.target.value, 'renumerationTo')}
                        />
                    </div>
                </div>

                <div className={classes.group}>
                    <label htmlFor='SalaryRange' className={classes.label}>
                        Salary Range
                    </label>
                    <div className={classes.inputGroup}>
                        <div className={classes.prepend} style={{ width: 65 }}>
                            <span className={classes.prependText}>From</span>
                        </div>
                        <input
                            className={classes.input}
                            type='number'
                            value={searchParams.salaryFrom}
                            onChange={(e) => handleChange(e.target.value, 'salaryFrom')}
                        />
                    </div>
                    <div className={classes.inputGroup}>
                        <div className={classes.prepend} style={{ width: 65 }}>
                            <span className={classes.prependText}>To</span>
                        </div>
                        <input
                            className={classes.input}
                            type='number'
                            value={searchParams.salaryTo}
                            onChange={(e) => handleChange(e.target.value, 'salaryTo')}
                        />
                    </div>
                </div>

                <div className={classes.group}>
                    <label htmlFor='date' className={classes.label}>
                        Date Advertised After
                    </label>
                    <DatePicker
                        // formatISO and parseISO needed due to react-datepicker
                        // no longer accepting string values as valid dates
                        selected={searchParams.date ? parseISO(searchParams.date) : ''}
                        onChange={(date) => handleChange(date ? formatISO(date) : '', 'date')}
                        dateFormat="dd/MM/yyyy"
                        placeholderText='Select...'
                        className={classes.input}
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
