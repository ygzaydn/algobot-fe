import React, { useState } from "react";

import { Grid } from "@mui/material";

import FaqAccordionItem from "./faqAccordionItem";

const FaqAccordion = ({ info }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Grid container className="homepage__faq__accordion">
            {info.map((el, ind) => (
                <FaqAccordionItem
                    info={el}
                    expanded={expanded}
                    handleChange={handleChange}
                    key={el.title}
                    panelNo={el.title.split("-")[1]}
                />
            ))}
        </Grid>
    );
};

export default FaqAccordion;
