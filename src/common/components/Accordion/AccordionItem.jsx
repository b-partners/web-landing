import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button} from "@mui/material";

export function AccordionItem({accordionTitle, accordionDetails}) {
    const [expanded, setExpanded] = useState(false);
    const accordionRef = useRef(null);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const scrollToAccordion = () => {
        accordionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        handleExpansion();
    };

    return (
        <Accordion ref={accordionRef} sx={{marginTop: '2rem'}} expanded={expanded} onChange={handleExpansion}>
            <AccordionSummary
                id="panel-header"
                aria-controls="panel-content"
                expandIcon={<i className="fa fa-chevron-down"/>}
            >
                <h2 className='logo-color usecase__item-title'>{accordionTitle}</h2>
            </AccordionSummary>
            <AccordionDetails>
                {accordionDetails}
            </AccordionDetails>
            <AccordionActions>
                <Button onClick={scrollToAccordion}>
                    <i className='fa fa-chevron-up' style={{textAlign: 'center'}}/>
                    <span>Fermer la section</span>
                </Button>
            </AccordionActions>
        </Accordion>
    );
}

AccordionItem.propTypes = {
    accordionTitle: PropTypes.string.isRequired,
    accordionDetails: PropTypes.node.isRequired,
};