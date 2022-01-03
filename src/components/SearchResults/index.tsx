// Dependencies
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useAppSelector } from "hooks";

// Components
import Spinner from "../../components/Spinner";

// Styles
import classes from "./SearchResults.module.scss";

function SearchResults() {
  const results = useAppSelector((state) => state.searchResults.payload?.docs);
  const isLoading = useAppSelector((state) => state.searchResults.isLoading);
  const error = useAppSelector((state) => state.searchResults.error);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h2 className={classes.title}>No results</h2>;
  }

  return (
    <div className={classes.container}>
      {!!results?.length && (
        <>
          <h2 className={classes.title}>Search Results</h2>

          <Accordion allowZeroExpanded allowMultipleExpanded>
            {results.map((item) => (
              <AccordionItem key={item.title}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className={classes.accordionHeading}>{item.title}</div>
                    <div className={classes.accordionDescription}>
                      lorem ipsum dolor
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={classes.accordionRow}>
                    <div className={classes.accordionCell}>Title</div>
                    <div className={classes.accordionCell}>{item.title}</div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      )}
    </div>
  );
}

export default SearchResults;
