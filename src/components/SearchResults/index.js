// Dependencies
import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import { useSelector } from "react-redux";

// Components
import Spinner from "components/Spinner";

// Styles
import classes from "./SearchResults.module.scss";

function SearchResults() {
    const results = useSelector((state) => state.searchResults.results);
    const isLoading = useSelector((state) => state.searchResults.isLoading);
    const error = useSelector((state) => state.searchResults.error);

    console.log(results);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <h2 className={classes.title}>No results</h2>;
    }

    return (
        <div className={classes.container}>
            {!!results.length && (
                <>
                    <h2 className={classes.title}>Search Results</h2>

                    <Accordion allowZeroExpanded allowMultipleExpanded>
                        {results.map((item) => (
                            <AccordionItem key={item.rtfId}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className={classes.accordionHeading}>{item.jobTitle}</div>
                                        <div className={classes.accordionDescription}>
                                            {item.getFormattedDesignationList.replace(/(<([^>]+)>)/gi, '\n')}
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className={classes.accordionRow}>
                                        <div className={classes.accordionCell}>Vacancy Number</div>
                                        <div className={classes.accordionCell}>{item.positionNumber}</div>
                                    </div>
                                    <div className={classes.accordionRow}>
                                        <div className={classes.accordionCell}>Agency</div>
                                        <div className={classes.accordionCell}>{item.agency}</div>
                                    </div>
                                    <div className={classes.accordionRow}>
                                        <div className={classes.accordionCell}>Number of Vacancies</div>
                                        <div className={classes.accordionCell}>{item.numberOfVacancies}</div>
                                    </div>
                                    <div className={classes.accordionRow}>
                                        <div className={classes.accordionCell}>Work Unit</div>
                                        <div className={classes.accordionCell}>{item.section}</div>
                                    </div>
                                    <div className={classes.accordionRow}>
                                        <div className={classes.accordionCell}>Location</div>
                                        <div className={classes.accordionCell}>{item.locations}</div>
                                    </div>
                                    <div className={classes.accordionRow}>
                                        <div className={classes.accordionCell}>Vacancy Types</div>
                                        <div className={classes.accordionCell}>{item.vacancyType}</div>
                                    </div>
                                    <div className={classes.accordionRow}>
                                        <div className={classes.accordionCell}>Primary Objective</div>
                                        <div className={classes.accordionCell}>{item.primaryObjective}</div>
                                    </div>
                                    {item.specialInstructions &&
                                        <div className={classes.accordionRow}>
                                            <div className={classes.accordionCell}>Special Instructions</div>
                                            <div className={classes.accordionCell}>{item.specialInstructions}</div>
                                        </div>
                                    }
                                    <div className={classes.accordionRow}>
                                        <div className={classes.accordionCell}>Contact</div>
                                        <div className={classes.accordionCell}>{item.contactPerson}</div>
                                    </div>
                                    {!!item.attachmentsList.length &&
                                        <div className={classes.accordionRow}>
                                            <div className={classes.accordionCell}>Attachments</div>
                                            <div className={classes.accordionCell}>
                                                <ul className={classes.accordionAttachments}>
                                                    {item.attachmentsList.map((attachment) => (
                                                        <li key={attachment.id}>
                                                            <a href={attachment.fileURL} target='_blank'>{attachment.fileName}</a> - {attachment.fileCategory} - {attachment.fileExtension.toUpperCase()} ({attachment.fileSize / 1000} KB)
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    }
                                    {item.RecruitmentProgramUrl &&
                                        <div className={classes.accordionRow}>
                                            <div className={classes.accordionCell}>Further Information</div>
                                            <div className={classes.accordionCell}>
                                                <a href={item.RecruitmentProgramUrl} target="_blank">{item.RecruitmentProgramUrl}</a>
                                            </div>
                                        </div>
                                    }
                                    <div className={classes.accordionRow}>
                                        <div className={classes.accordionCell}>Apply</div>
                                        <div className={classes.accordionCell}>
                                            <button className={classes.accordionButton}>Apply Online</button>
                                        </div>
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
