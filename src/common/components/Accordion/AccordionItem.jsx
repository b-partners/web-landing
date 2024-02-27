import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button} from "@mui/material";

export function AccordionItem({accordionTitle, accordionDetails}) {
    const [expanded, setExpanded] = useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <Accordion sx={{marginTop: '2rem'}} expanded={expanded} onChange={handleExpansion}>
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
                <Button onClick={handleExpansion}>
                    <a href="#panel-header">
                        Fermer la section
                    </a>
                </Button>
            </AccordionActions>
        </Accordion>
    );
}

AccordionItem.propTypes = {
    accordionTitle: PropTypes.string.isRequired,
    accordionDetails: PropTypes.node.isRequired,
};