// Dependencies
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Components
import Filters from "components/Filters";

// Styles
import classes from "./MobileSearch.module.scss";

function MobileSearch() {
  return (
    <div className={classes.container}>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Search Parameters</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Filters />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default MobileSearch;
