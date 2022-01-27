import React from "react";
import {
    Accordion,
    Typography,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqAccordionItem = ({ expanded, handleChange, info, panelNo }) => {
    return (
        <Accordion
            expanded={expanded === `panel${panelNo}`}
            onChange={handleChange(`panel${panelNo}`)}
            className="homepage__faq__accordionitem--root"
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${panelNo}bh-content`}
                id={`panel${panelNo}bh-header`}
                className="homepage__faq__accordionitem"
            >
                <Typography className="homepage__faq__accordionitem--title">
                    {info.title}
                </Typography>
                <Typography className="homepage__faq__accordionitem--firstdetail">
                    {info.firstDetail}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className="homepage__faq__accordionitem--fulldetail">
                    {info.fullDetail}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default FaqAccordionItem;
